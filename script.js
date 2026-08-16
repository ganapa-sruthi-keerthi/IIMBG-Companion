// ===== UTILITIES =====
function formatDate(date) {
    const options = { weekday: 'short', day: 'numeric', month: 'short' };
    return date.toLocaleDateString('en-IN', options);
}

function formatFullDate(date) {
    const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString('en-IN', options);
}

function getISTDate() {
    const now = new Date();
    const istOffset = 5.5 * 60 * 60 * 1000;
    const utc = now.getTime() + (now.getTimezoneOffset() * 60 * 1000);
    return new Date(utc + istOffset);
}

function dateToString(date) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
}

function parseTime(timeStr) {
    const [h, m] = timeStr.split(':').map(Number);
    return h * 60 + m;
}

function getCurrentMinutes() {
    const now = getISTDate();
    return now.getHours() * 60 + now.getMinutes();
}

function getClassStatus(timeSlot) {
    const [startStr, endStr] = timeSlot.split('-').map(s => s.trim());
    const current = getCurrentMinutes();
    const start = parseTime(startStr);
    const end = parseTime(endStr);
    
    if (current < start) return 'upcoming';
    if (current >= start && current <= end) return 'ongoing';
    return 'done';
}

function isAllClassesDone(slots) {
    if (!slots || slots.length === 0) return true;
    return slots.every(s => getClassStatus(s.time) === 'done');
}

function daysBetween(date1, date2) {
    const oneDay = 24 * 60 * 60 * 1000;
    return Math.round((date2 - date1) / oneDay);
}

// ===== TAB SWITCHING =====
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const targetTab = btn.dataset.tab;
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
        document.getElementById(targetTab).classList.add('active');
    });
});

// ===== HOME TAB =====
function renderHome() {
    const today = getISTDate();
    const todayStr = dateToString(today);
    const todayData = scheduleData[todayStr];

    document.getElementById('todayDate').textContent = formatDate(today);

    const container = document.getElementById('todayClasses');
    const caughtUpEl = document.getElementById('allCaughtUp');
    const tomorrowPreview = document.getElementById('tomorrowPreview');
    const mondayPreview = document.getElementById('mondayPreview');
    const showMondayBtn = document.getElementById('showMondayBtn');
    const caughtUpMsg = document.getElementById('caughtUpMsg');

    container.innerHTML = '';

    if (!todayData || todayData.slots.length === 0) {
        container.innerHTML = `
            <div class="no-classes">
                <div class="no-classes-icon">&#127881;</div>
                <h3>No classes today!</h3>
                <p>Enjoy your day off.</p>
            </div>
        `;
        showTomorrowPreview();
        caughtUpEl.classList.add('hidden');
        showMondayBtn.classList.add('hidden');
        mondayPreview.classList.add('hidden');
        return;
    }

    let allDone = true;
    todayData.slots.forEach(slot => {
        const status = getClassStatus(slot.time);
        if (status !== 'done') allDone = false;

        const course = courseCatalog[slot.code];
        const card = document.createElement('div');
        card.className = `class-card ${status}`;
        
        let statusHtml = '';
        if (status === 'ongoing') {
            statusHtml = `<span class="status-badge ongoing">● LIVE</span>`;
        } else if (status === 'done') {
            statusHtml = `<span class="status-badge done">Done</span>`;
        } else {
            statusHtml = `<span class="status-badge upcoming">Upcoming</span>`;
        }
        
        card.innerHTML = `
            <div class="class-time">
                <span class="status-dot ${status}"></span>
                ${slot.time}
                ${statusHtml}
            </div>
            <div class="class-name">
                <span class="class-code">${slot.code}</span>
                ${course.name}
            </div>
            <div class="class-prof">${course.professor || 'TBD'}</div>
        `;
        container.appendChild(card);
    });

    if (allDone) {
        caughtUpEl.classList.remove('hidden');
        const dayName = today.toLocaleDateString('en-IN', { weekday: 'long' });

        if (dayName === 'Friday') {
            caughtUpMsg.textContent = 'Happy Weekend! 🎉';
            tomorrowPreview.classList.add('hidden');
            showMondayBtn.classList.remove('hidden');
            mondayPreview.classList.add('hidden');

            showMondayBtn.onclick = () => {
                showMondayBtn.classList.add('hidden');
                showMondayPreview();
            };
        } else {
            caughtUpMsg.textContent = 'Great job today!';
            showTomorrowPreview();
            showMondayBtn.classList.add('hidden');
            mondayPreview.classList.add('hidden');
        }
    } else {
        caughtUpEl.classList.add('hidden');
        tomorrowPreview.classList.add('hidden');
        showMondayBtn.classList.add('hidden');
        mondayPreview.classList.add('hidden');
    }
}

function showTomorrowPreview() {
    const today = getISTDate();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowStr = dateToString(tomorrow);
    const tomorrowData = scheduleData[tomorrowStr];

    const preview = document.getElementById('tomorrowPreview');
    const container = document.getElementById('tomorrowClasses');
    const dateEl = document.getElementById('tomorrowDate');

    dateEl.textContent = formatDate(tomorrow);
    container.innerHTML = '';

    if (!tomorrowData || tomorrowData.slots.length === 0) {
        container.innerHTML = `
            <div class="no-classes" style="padding: 24px;">
                <p style="color: #888; font-size: 14px;">No classes tomorrow</p>
            </div>
        `;
    } else {
        tomorrowData.slots.forEach(slot => {
            const course = courseCatalog[slot.code];
            const card = document.createElement('div');
            card.className = 'class-card';
            card.style.opacity = '0.7';
            card.innerHTML = `
                <div class="class-time">${slot.time}</div>
                <div class="class-name">
                    <span class="class-code">${slot.code}</span>
                    ${course.name}
                </div>
                <div class="class-prof">${course.professor || 'TBD'}</div>
            `;
            container.appendChild(card);
        });
    }

    preview.classList.remove('hidden');
}

function showMondayPreview() {
    const today = getISTDate();
    const dayOfWeek = today.getDay();
    const daysUntilMonday = (8 - dayOfWeek) % 7 || 7;
    const nextMonday = new Date(today);
    nextMonday.setDate(today.getDate() + daysUntilMonday);
    const mondayStr = dateToString(nextMonday);
    const mondayData = scheduleData[mondayStr];

    const preview = document.getElementById('mondayPreview');
    const container = document.getElementById('mondayClasses');
    const dateEl = document.getElementById('mondayDate');

    dateEl.textContent = formatDate(nextMonday);
    container.innerHTML = '';

    if (!mondayData || mondayData.slots.length === 0) {
        container.innerHTML = `
            <div class="no-classes" style="padding: 24px;">
                <p style="color: #888; font-size: 14px;">No classes on Monday</p>
            </div>
        `;
    } else {
        mondayData.slots.forEach(slot => {
            const course = courseCatalog[slot.code];
            const card = document.createElement('div');
            card.className = 'class-card';
            card.style.opacity = '0.7';
            card.innerHTML = `
                <div class="class-time">${slot.time}</div>
                <div class="class-name">
                    <span class="class-code">${slot.code}</span>
                    ${course.name}
                </div>
                <div class="class-prof">${course.professor || 'TBD'}</div>
            `;
            container.appendChild(card);
        });
    }

    preview.classList.remove('hidden');
}

// ===== FOOD TAB =====
function renderFood() {
    const today = getISTDate();
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const todayDayName = dayNames[today.getDay()];

    const selector = document.getElementById('daySelector');
    selector.innerHTML = '';

    for (let i = 0; i < 7; i++) {
        const d = new Date(today);
        d.setDate(today.getDate() + i);
        const dayName = dayNames[d.getDay()];
        const isToday = i === 0;

        const btn = document.createElement('button');
        btn.className = `day-btn ${isToday ? 'active' : ''}`;
        btn.textContent = dayName.slice(0, 3);
        btn.dataset.day = dayName;

        btn.addEventListener('click', () => {
            document.querySelectorAll('.day-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            showFoodMenu(dayName);
        });

        selector.appendChild(btn);
    }

    showFoodMenu(todayDayName);
}

function showFoodMenu(dayName) {
    const data = foodData[dayName];
    const container = document.getElementById('foodContent');

    if (!data) {
        container.innerHTML = '<p style="text-align:center; color:#888;">Menu not available</p>';
        return;
    }

    const meals = [
        { key: 'breakfast', label: 'Breakfast', icon: '☕' },
        { key: 'lunch', label: 'Lunch', icon: '🍛' },
        { key: 'snacks', label: 'Snacks', icon: '🍪' },
        { key: 'dinner', label: 'Dinner', icon: '🍽️' }
    ];

    let html = '';

    meals.forEach(meal => {
        const timeKey = meal.key + '_time';
        const items = data[meal.key];
        const time = data[timeKey];

        html += `
            <div class="food-card">
                <div class="food-header">
                    <div class="food-meal">
                        <span class="food-meal-icon">${meal.icon}</span>
                        ${meal.label}
                    </div>
                    <div class="food-time">${time}</div>
                </div>
                <div class="food-items">${items}</div>
            </div>
        `;
    });

    if (data.special) {
        html += `
            <div class="food-card" style="border-left: 4px solid #e94560;">
                <div class="food-header">
                    <div class="food-meal">
                        <span class="food-meal-icon">⭐</span>
                        Special
                    </div>
                </div>
                <div class="food-items" style="color: #e94560; font-weight: 600;">${data.special}</div>
            </div>
        `;
    }

    if (data.notes) {
        html += `<div class="food-notes">${data.notes}</div>`;
    }

    container.innerHTML = html;
}

// ===== EXAMS TAB =====
function renderExams() {
    // Mid Term
    const midTermEl = document.getElementById('midTermDates');
    const midTermCountdown = document.getElementById('midTermCountdown');
    if (examInfo.mid_term.dates.length > 0) {
        const start = examInfo.mid_term.dates[0];
        const end = examInfo.mid_term.dates[examInfo.mid_term.dates.length - 1];
        const startDate = new Date(start);
        const endDate = new Date(end);

        midTermEl.textContent = `${formatFullDate(startDate)} — ${formatFullDate(endDate)}`;

        const today = getISTDate();
        const daysLeft = daysBetween(today, startDate);
        if (daysLeft > 0) {
            midTermCountdown.textContent = `${daysLeft} day${daysLeft !== 1 ? 's' : ''} left`;
        } else if (daysLeft === 0) {
            midTermCountdown.textContent = 'Starts today!';
        } else {
            midTermCountdown.textContent = 'Completed';
        }
    } else {
        midTermEl.textContent = 'Dates not announced';
        midTermCountdown.textContent = '';
    }

    // End Term
    const endTermEl = document.getElementById('endTermDates');
    const endTermCountdown = document.getElementById('endTermCountdown');
    if (examInfo.end_term.dates.length > 0) {
        const start = examInfo.end_term.dates[0];
        const end = examInfo.end_term.dates[examInfo.end_term.dates.length - 1];
        const startDate = new Date(start);
        const endDate = new Date(end);

        endTermEl.textContent = `${formatFullDate(startDate)} — ${formatFullDate(endDate)}`;

        const today = getISTDate();
        const daysLeft = daysBetween(today, startDate);
        if (daysLeft > 0) {
            endTermCountdown.textContent = `${daysLeft} day${daysLeft !== 1 ? 's' : ''} left`;
        } else if (daysLeft === 0) {
            endTermCountdown.textContent = 'Starts today!';
        } else {
            endTermCountdown.textContent = 'Completed';
        }
    } else {
        endTermEl.textContent = 'Dates not announced';
        endTermCountdown.textContent = '';
    }

    // Quiz
    const quizEl = document.getElementById('quizDates');
    if (examInfo.quiz.length > 0) {
        const quizDates = examInfo.quiz.map(d => {
            const date = new Date(d);
            return formatDate(date);
        }).join(', ');
        quizEl.textContent = quizDates;
    } else {
        quizEl.textContent = 'Dates not announced';
    }

    // Holidays
    const holidayEl = document.getElementById('holidayList');
    if (examInfo.holidays.length > 0) {
        holidayEl.innerHTML = examInfo.holidays.map(h => `
            <div class="holiday-item">
                <span class="holiday-name">${h.name}</span>
                <span class="holiday-date">${formatDate(new Date(h.date))}</span>
            </div>
        `).join('');
    } else {
        holidayEl.innerHTML = '<p style="color:#888; font-size:14px;">No holidays scheduled</p>';
    }

    // Special Events
    const specialEl = document.getElementById('specialList');
    if (examInfo.special.length > 0) {
        specialEl.innerHTML = examInfo.special.map(s => `
            <div class="special-item">
                <span class="special-name">${s.name}</span>
                <span class="special-date">${formatDate(new Date(s.date))}</span>
            </div>
        `).join('');
    } else {
        specialEl.innerHTML = '<p style="color:#888; font-size:14px;">No special events scheduled</p>';
    }
}

// ===== INIT =====
function init() {
    renderHome();
    renderFood();
    renderExams();
}

init();
