// HHM Term II Schedule Data
// Section A

// Course Catalog: code -> {name, professor}
const courseCatalog = {
    AIH: { name: "AI in Healthcare", professor: "Prof. Arijit Maji" },
    ASSESS: { name: "ASSESSMENTS (QUIZZES, PRESENTATIONS)", professor: "" },
    ENDTERM: { name: "END TERM EXAMINATIONS", professor: "" },
    ESG: { name: "Sustainability & ESG for Healthcare", professor: "Prof. Palakshi Sarmah" },
    EVENTNETRITVA: { name: "NETRITVA", professor: "" },
    EVENTTEDX: { name: "TEDx", professor: "" },
    FM: { name: "Financial Management", professor: "Prof. Molla Ramizur Rahman (S1-10), Prof. Sabyasachi Mohapatra (S11-20)" },
    HE: { name: "Health Economics", professor: "Prof. Muhammed Ashiq V" },
    HMIS: { name: "Healthcare Management Information System", professor: "Prof. Manali Chatterjee" },
    HOLCHHATH: { name: "CHHATH HOLIDAY", professor: "" },
    HOLDIWALI: { name: "DIWALI HOLIDAY", professor: "" },
    HOLDUSSEHRA: { name: "DUSSEHRA HOLIDAYS", professor: "" },
    HOLGURUNANAK: { name: "GURU NANAK JAYANTI", professor: "" },
    HRM: { name: "Human Resource Management", professor: "Prof. Prachi Thakur" },
    MIDTERM: { name: "MID TERM EXAMINATIONS", professor: "" },
    OM: { name: "Operations Management", professor: "Prof. Bishal Dey Sarkar" },
    PCHSD: { name: "Patient-Centric Healthcare Service Delivery", professor: "Prof. Sumit Saxena" },
    QM: { name: "Quality Management", professor: "Prof. Ajith Tom James" },
    REG: { name: "TERM REGISTRATION", professor: "" },
};


// Daily Schedule: date -> {day, slots: [{time, code}]}
const scheduleData = {
    "2026-10-05": {
        day: "Monday",
        slots: [
            { time: "09:00-10:30", code: "PCHSD" },
            { time: "10:45-12:15", code: "ESG" },
            { time: "13:15-14:45", code: "HRM" },
            { time: "15:00-16:30", code: "REG" },
        ]
    },
    "2026-10-06": {
        day: "Tuesday",
        slots: [
            { time: "10:45-12:15", code: "OM" },
            { time: "13:15-14:45", code: "AIH" },
            { time: "15:00-16:30", code: "HMIS" },
        ]
    },
    "2026-10-07": {
        day: "Wednesday",
        slots: [
            { time: "09:00-10:30", code: "OM" },
            { time: "10:45-12:15", code: "ESG" },
            { time: "13:15-14:45", code: "AIH" },
            { time: "16:45-18:15", code: "FM" },
        ]
    },
    "2026-10-08": {
        day: "Thursday",
        slots: [
            { time: "10:45-12:15", code: "HMIS" },
            { time: "13:15-14:45", code: "PCHSD" },
            { time: "15:00-16:30", code: "HRM" },
            { time: "16:45-18:15", code: "FM" },
        ]
    },
    "2026-10-09": {
        day: "Friday",
        slots: [
            { time: "09:00-10:30", code: "AIH" },
            { time: "13:15-14:45", code: "ESG" },
            { time: "15:00-16:30", code: "OM" },
        ]
    },
    "2026-10-10": {
        day: "Saturday",
        slots: [
        ]
    },
    "2026-10-11": {
        day: "Sunday",
        slots: [
        ]
    },
    "2026-10-12": {
        day: "Monday",
        slots: [
            { time: "09:00-10:30", code: "AIH" },
            { time: "10:45-12:15", code: "HRM" },
            { time: "13:15-14:45", code: "OM" },
        ]
    },
    "2026-10-13": {
        day: "Tuesday",
        slots: [
            { time: "09:00-10:30", code: "ESG" },
            { time: "10:45-12:15", code: "FM" },
            { time: "13:15-14:45", code: "PCHSD" },
        ]
    },
    "2026-10-14": {
        day: "Wednesday",
        slots: [
            { time: "09:00-10:30", code: "OM" },
            { time: "13:15-14:45", code: "HMIS" },
        ]
    },
    "2026-10-15": {
        day: "Thursday",
        slots: [
            { time: "09:00-10:30", code: "ESG" },
            { time: "10:45-12:15", code: "FM" },
            { time: "13:15-14:45", code: "HRM" },
        ]
    },
    "2026-10-16": {
        day: "Friday",
        slots: [
            { time: "09:00-10:30", code: "PCHSD" },
            { time: "13:15-14:45", code: "OM" },
        ]
    },
    "2026-10-17": {
        day: "Saturday",
        slots: [
            { time: "09:00-10:30", code: "HOLDUSSEHRA" },
            { time: "10:45-12:15", code: "HOLDUSSEHRA" },
            { time: "13:15-14:45", code: "HOLDUSSEHRA" },
            { time: "15:00-16:30", code: "HOLDUSSEHRA" },
            { time: "16:45-18:15", code: "HOLDUSSEHRA" },
        ]
    },
    "2026-10-18": {
        day: "Sunday",
        slots: [
            { time: "09:00-10:30", code: "HOLDUSSEHRA" },
            { time: "10:45-12:15", code: "HOLDUSSEHRA" },
            { time: "13:15-14:45", code: "HOLDUSSEHRA" },
            { time: "15:00-16:30", code: "HOLDUSSEHRA" },
            { time: "16:45-18:15", code: "HOLDUSSEHRA" },
        ]
    },
    "2026-10-19": {
        day: "Monday",
        slots: [
            { time: "09:00-10:30", code: "HOLDUSSEHRA" },
            { time: "10:45-12:15", code: "HOLDUSSEHRA" },
            { time: "13:15-14:45", code: "HOLDUSSEHRA" },
            { time: "15:00-16:30", code: "HOLDUSSEHRA" },
            { time: "16:45-18:15", code: "HOLDUSSEHRA" },
        ]
    },
    "2026-10-20": {
        day: "Tuesday",
        slots: [
            { time: "09:00-10:30", code: "HOLDUSSEHRA" },
            { time: "10:45-12:15", code: "HOLDUSSEHRA" },
            { time: "13:15-14:45", code: "HOLDUSSEHRA" },
            { time: "15:00-16:30", code: "HOLDUSSEHRA" },
            { time: "16:45-18:15", code: "HOLDUSSEHRA" },
        ]
    },
    "2026-10-21": {
        day: "Wednesday",
        slots: [
            { time: "09:00-10:30", code: "PCHSD" },
            { time: "13:15-14:45", code: "AIH" },
        ]
    },
    "2026-10-22": {
        day: "Thursday",
        slots: [
            { time: "09:00-10:30", code: "FM" },
        ]
    },
    "2026-10-23": {
        day: "Friday",
        slots: [
            { time: "09:00-10:30", code: "HMIS" },
            { time: "10:45-12:15", code: "PCHSD" },
            { time: "13:15-14:45", code: "AIH" },
        ]
    },
    "2026-10-24": {
        day: "Saturday",
        slots: [
        ]
    },
    "2026-10-25": {
        day: "Sunday",
        slots: [
        ]
    },
    "2026-10-26": {
        day: "Monday",
        slots: [
            { time: "09:00-10:30", code: "ESG" },
            { time: "10:45-12:15", code: "HMIS" },
            { time: "13:15-14:45", code: "AIH" },
            { time: "15:00-16:30", code: "FM" },
        ]
    },
    "2026-10-27": {
        day: "Tuesday",
        slots: [
            { time: "09:00-10:30", code: "OM" },
            { time: "13:15-14:45", code: "HRM" },
            { time: "15:00-16:30", code: "FM" },
        ]
    },
    "2026-10-28": {
        day: "Wednesday",
        slots: [
            { time: "09:00-10:30", code: "HMIS" },
            { time: "10:45-12:15", code: "ESG" },
            { time: "13:15-14:45", code: "PCHSD" },
            { time: "15:00-16:30", code: "AIH" },
        ]
    },
    "2026-10-29": {
        day: "Thursday",
        slots: [
            { time: "09:00-10:30", code: "OM" },
            { time: "10:45-12:15", code: "HRM" },
            { time: "13:15-14:45", code: "FM" },
        ]
    },
    "2026-10-30": {
        day: "Friday",
        slots: [
            { time: "10:45-12:15", code: "HMIS" },
            { time: "13:15-14:45", code: "ESG" },
            { time: "15:00-16:30", code: "PCHSD" },
        ]
    },
    "2026-10-31": {
        day: "Saturday",
        slots: [
        ]
    },
    "2026-11-01": {
        day: "Sunday",
        slots: [
        ]
    },
    "2026-11-02": {
        day: "Monday",
        slots: [
            { time: "09:00-10:30", code: "PCHSD" },
            { time: "10:45-12:15", code: "OM" },
            { time: "13:15-14:45", code: "FM" },
            { time: "15:00-16:30", code: "ESG" },
        ]
    },
    "2026-11-03": {
        day: "Tuesday",
        slots: [
            { time: "09:00-10:30", code: "HMIS" },
            { time: "10:45-12:15", code: "HRM" },
            { time: "13:15-14:45", code: "AIH" },
        ]
    },
    "2026-11-04": {
        day: "Wednesday",
        slots: [
            { time: "09:00-10:30", code: "PCHSD" },
            { time: "15:00-16:30", code: "FM" },
        ]
    },
    "2026-11-05": {
        day: "Thursday",
        slots: [
            { time: "09:00-10:30", code: "OM" },
            { time: "10:45-12:15", code: "ESG" },
            { time: "13:15-14:45", code: "HRM" },
            { time: "15:00-16:30", code: "AIH" },
        ]
    },
    "2026-11-06": {
        day: "Friday",
        slots: [
            { time: "09:00-10:30", code: "ASSESS" },
            { time: "10:45-12:15", code: "ASSESS" },
            { time: "13:15-14:45", code: "ASSESS" },
            { time: "15:00-16:30", code: "ASSESS" },
            { time: "16:45-18:15", code: "ASSESS" },
        ]
    },
    "2026-11-07": {
        day: "Saturday",
        slots: [
            { time: "09:00-10:30", code: "ASSESS" },
            { time: "10:45-12:15", code: "ASSESS" },
            { time: "13:15-14:45", code: "ASSESS" },
            { time: "15:00-16:30", code: "ASSESS" },
            { time: "16:45-18:15", code: "ASSESS" },
        ]
    },
    "2026-11-08": {
        day: "Sunday",
        slots: [
            { time: "09:00-10:30", code: "HOLDIWALI" },
            { time: "10:45-12:15", code: "HOLDIWALI" },
            { time: "13:15-14:45", code: "HOLDIWALI" },
            { time: "15:00-16:30", code: "HOLDIWALI" },
            { time: "16:45-18:15", code: "HOLDIWALI" },
        ]
    },
    "2026-11-09": {
        day: "Monday",
        slots: [
            { time: "09:00-10:30", code: "ASSESS" },
            { time: "10:45-12:15", code: "ASSESS" },
            { time: "13:15-14:45", code: "ASSESS" },
            { time: "15:00-16:30", code: "ASSESS" },
            { time: "16:45-18:15", code: "ASSESS" },
        ]
    },
    "2026-11-10": {
        day: "Tuesday",
        slots: [
            { time: "09:00-10:30", code: "MIDTERM" },
            { time: "10:45-12:15", code: "MIDTERM" },
            { time: "13:15-14:45", code: "MIDTERM" },
            { time: "15:00-16:30", code: "MIDTERM" },
            { time: "16:45-18:15", code: "MIDTERM" },
        ]
    },
    "2026-11-11": {
        day: "Wednesday",
        slots: [
            { time: "09:00-10:30", code: "MIDTERM" },
            { time: "10:45-12:15", code: "MIDTERM" },
            { time: "13:15-14:45", code: "MIDTERM" },
            { time: "15:00-16:30", code: "MIDTERM" },
            { time: "16:45-18:15", code: "MIDTERM" },
        ]
    },
    "2026-11-12": {
        day: "Thursday",
        slots: [
            { time: "09:00-10:30", code: "MIDTERM" },
            { time: "10:45-12:15", code: "MIDTERM" },
            { time: "13:15-14:45", code: "MIDTERM" },
            { time: "15:00-16:30", code: "MIDTERM" },
            { time: "16:45-18:15", code: "MIDTERM" },
        ]
    },
    "2026-11-13": {
        day: "Friday",
        slots: [
            { time: "09:00-10:30", code: "MIDTERM" },
            { time: "10:45-12:15", code: "MIDTERM" },
            { time: "13:15-14:45", code: "MIDTERM" },
            { time: "15:00-16:30", code: "MIDTERM" },
            { time: "16:45-18:15", code: "MIDTERM" },
        ]
    },
    "2026-11-14": {
        day: "Saturday",
        slots: [
            { time: "09:00-10:30", code: "MIDTERM" },
            { time: "10:45-12:15", code: "MIDTERM" },
            { time: "13:15-14:45", code: "MIDTERM" },
            { time: "15:00-16:30", code: "MIDTERM" },
            { time: "16:45-18:15", code: "MIDTERM" },
        ]
    },
    "2026-11-15": {
        day: "Sunday",
        slots: [
        ]
    },
    "2026-11-16": {
        day: "Monday",
        slots: [
            { time: "09:00-10:30", code: "HOLCHHATH" },
            { time: "10:45-12:15", code: "HOLCHHATH" },
            { time: "13:15-14:45", code: "HOLCHHATH" },
            { time: "15:00-16:30", code: "HOLCHHATH" },
            { time: "16:45-18:15", code: "HOLCHHATH" },
        ]
    },
    "2026-11-17": {
        day: "Tuesday",
        slots: [
            { time: "09:00-10:30", code: "HMIS" },
            { time: "10:45-12:15", code: "HE" },
            { time: "13:15-14:45", code: "QM" },
        ]
    },
    "2026-11-18": {
        day: "Wednesday",
        slots: [
            { time: "09:00-10:30", code: "FM" },
            { time: "10:45-12:15", code: "OM" },
        ]
    },
    "2026-11-19": {
        day: "Thursday",
        slots: [
            { time: "09:00-10:30", code: "HMIS" },
            { time: "10:45-12:15", code: "HRM" },
            { time: "13:15-14:45", code: "QM" },
        ]
    },
    "2026-11-20": {
        day: "Friday",
        slots: [
            { time: "09:00-10:30", code: "FM" },
            { time: "10:45-12:15", code: "HE" },
            { time: "13:15-14:45", code: "OM" },
        ]
    },
    "2026-11-21": {
        day: "Saturday",
        slots: [
        ]
    },
    "2026-11-22": {
        day: "Sunday",
        slots: [
        ]
    },
    "2026-11-23": {
        day: "Monday",
        slots: [
            { time: "09:00-10:30", code: "HRM" },
            { time: "10:45-12:15", code: "OM" },
            { time: "13:15-14:45", code: "HE" },
        ]
    },
    "2026-11-24": {
        day: "Tuesday",
        slots: [
            { time: "09:00-10:30", code: "HOLGURUNANAK" },
            { time: "10:45-12:15", code: "HOLGURUNANAK" },
            { time: "13:15-14:45", code: "HOLGURUNANAK" },
            { time: "15:00-16:30", code: "HOLGURUNANAK" },
            { time: "16:45-18:15", code: "HOLGURUNANAK" },
        ]
    },
    "2026-11-25": {
        day: "Wednesday",
        slots: [
            { time: "10:45-12:15", code: "OM" },
            { time: "13:15-14:45", code: "HE" },
            { time: "15:00-16:30", code: "FM" },
        ]
    },
    "2026-11-26": {
        day: "Thursday",
        slots: [
            { time: "09:00-10:30", code: "HRM" },
            { time: "10:45-12:15", code: "HMIS" },
            { time: "13:15-14:45", code: "QM" },
        ]
    },
    "2026-11-27": {
        day: "Friday",
        slots: [
            { time: "09:00-10:30", code: "HE" },
            { time: "15:00-16:30", code: "FM" },
        ]
    },
    "2026-11-28": {
        day: "Saturday",
        slots: [
            { time: "09:00-10:30", code: "EVENTNETRITVA" },
            { time: "10:45-12:15", code: "EVENTNETRITVA" },
            { time: "13:15-14:45", code: "EVENTNETRITVA" },
            { time: "15:00-16:30", code: "EVENTNETRITVA" },
            { time: "16:45-18:15", code: "EVENTNETRITVA" },
        ]
    },
    "2026-11-29": {
        day: "Sunday",
        slots: [
        ]
    },
    "2026-11-30": {
        day: "Monday",
        slots: [
            { time: "09:00-10:30", code: "FM" },
            { time: "10:45-12:15", code: "OM" },
            { time: "15:00-16:30", code: "QM" },
        ]
    },
    "2026-12-01": {
        day: "Tuesday",
        slots: [
            { time: "09:00-10:30", code: "HE" },
            { time: "10:45-12:15", code: "HRM" },
        ]
    },
    "2026-12-02": {
        day: "Wednesday",
        slots: [
            { time: "09:00-10:30", code: "HMIS" },
            { time: "15:00-16:30", code: "FM" },
        ]
    },
    "2026-12-03": {
        day: "Thursday",
        slots: [
            { time: "09:00-10:30", code: "HRM" },
            { time: "10:45-12:15", code: "OM" },
            { time: "15:00-16:30", code: "QM" },
        ]
    },
    "2026-12-04": {
        day: "Friday",
        slots: [
            { time: "09:00-10:30", code: "EVENTTEDX" },
            { time: "10:45-12:15", code: "EVENTTEDX" },
            { time: "13:15-14:45", code: "EVENTTEDX" },
            { time: "15:00-16:30", code: "EVENTTEDX" },
            { time: "16:45-18:15", code: "EVENTTEDX" },
        ]
    },
    "2026-12-05": {
        day: "Saturday",
        slots: [
        ]
    },
    "2026-12-06": {
        day: "Sunday",
        slots: [
        ]
    },
    "2026-12-07": {
        day: "Monday",
        slots: [
            { time: "09:00-10:30", code: "OM" },
            { time: "10:45-12:15", code: "HE" },
            { time: "15:00-16:30", code: "QM" },
        ]
    },
    "2026-12-08": {
        day: "Tuesday",
        slots: [
            { time: "09:00-10:30", code: "HMIS" },
            { time: "15:00-16:30", code: "FM" },
        ]
    },
    "2026-12-09": {
        day: "Wednesday",
        slots: [
            { time: "09:00-10:30", code: "HE" },
            { time: "10:45-12:15", code: "HRM" },
            { time: "15:00-16:30", code: "QM" },
        ]
    },
    "2026-12-10": {
        day: "Thursday",
        slots: [
            { time: "10:45-12:15", code: "HMIS" },
            { time: "15:00-16:30", code: "FM" },
        ]
    },
    "2026-12-11": {
        day: "Friday",
        slots: [
            { time: "09:00-10:30", code: "OM" },
            { time: "10:45-12:15", code: "HE" },
            { time: "15:00-16:30", code: "QM" },
        ]
    },
    "2026-12-12": {
        day: "Saturday",
        slots: [
        ]
    },
    "2026-12-13": {
        day: "Sunday",
        slots: [
        ]
    },
    "2026-12-14": {
        day: "Monday",
        slots: [
            { time: "09:00-10:30", code: "FM" },
            { time: "10:45-12:15", code: "OM" },
            { time: "15:00-16:30", code: "QM" },
        ]
    },
    "2026-12-15": {
        day: "Tuesday",
        slots: [
            { time: "09:00-10:30", code: "HE" },
            { time: "10:45-12:15", code: "HRM" },
        ]
    },
    "2026-12-16": {
        day: "Wednesday",
        slots: [
            { time: "09:00-10:30", code: "OM" },
            { time: "10:45-12:15", code: "HMIS" },
            { time: "13:15-14:45", code: "FM" },
            { time: "15:00-16:30", code: "QM" },
        ]
    },
    "2026-12-17": {
        day: "Thursday",
        slots: [
            { time: "09:00-10:30", code: "ASSESS" },
            { time: "10:45-12:15", code: "ASSESS" },
            { time: "13:15-14:45", code: "ASSESS" },
            { time: "15:00-16:30", code: "ASSESS" },
            { time: "16:45-18:15", code: "ASSESS" },
        ]
    },
    "2026-12-18": {
        day: "Friday",
        slots: [
            { time: "09:00-10:30", code: "ASSESS" },
            { time: "10:45-12:15", code: "ASSESS" },
            { time: "13:15-14:45", code: "ASSESS" },
            { time: "15:00-16:30", code: "ASSESS" },
            { time: "16:45-18:15", code: "ASSESS" },
        ]
    },
    "2026-12-19": {
        day: "Saturday",
        slots: [
            { time: "09:00-10:30", code: "ASSESS" },
            { time: "10:45-12:15", code: "ASSESS" },
            { time: "13:15-14:45", code: "ASSESS" },
            { time: "15:00-16:30", code: "ASSESS" },
            { time: "16:45-18:15", code: "ASSESS" },
        ]
    },
    "2026-12-20": {
        day: "Sunday",
        slots: [
            { time: "09:00-10:30", code: "ASSESS" },
            { time: "10:45-12:15", code: "ASSESS" },
            { time: "13:15-14:45", code: "ASSESS" },
            { time: "15:00-16:30", code: "ASSESS" },
            { time: "16:45-18:15", code: "ASSESS" },
        ]
    },
    "2026-12-21": {
        day: "Monday",
        slots: [
            { time: "09:00-10:30", code: "ENDTERM" },
            { time: "10:45-12:15", code: "ENDTERM" },
            { time: "13:15-14:45", code: "ENDTERM" },
            { time: "15:00-16:30", code: "ENDTERM" },
            { time: "16:45-18:15", code: "ENDTERM" },
        ]
    },
    "2026-12-22": {
        day: "Tuesday",
        slots: [
            { time: "09:00-10:30", code: "ENDTERM" },
            { time: "10:45-12:15", code: "ENDTERM" },
            { time: "13:15-14:45", code: "ENDTERM" },
            { time: "15:00-16:30", code: "ENDTERM" },
            { time: "16:45-18:15", code: "ENDTERM" },
        ]
    },
    "2026-12-23": {
        day: "Wednesday",
        slots: [
            { time: "09:00-10:30", code: "ENDTERM" },
            { time: "10:45-12:15", code: "ENDTERM" },
            { time: "13:15-14:45", code: "ENDTERM" },
            { time: "15:00-16:30", code: "ENDTERM" },
            { time: "16:45-18:15", code: "ENDTERM" },
        ]
    },
    "2026-12-24": {
        day: "Thursday",
        slots: [
            { time: "09:00-10:30", code: "ENDTERM" },
            { time: "10:45-12:15", code: "ENDTERM" },
            { time: "13:15-14:45", code: "ENDTERM" },
            { time: "15:00-16:30", code: "ENDTERM" },
            { time: "16:45-18:15", code: "ENDTERM" },
        ]
    },
};


// Exam & Event Information
const examInfo = {
    mid_term: {
        "dates": ["2026-11-10",  "2026-11-11",  "2026-11-12",  "2026-11-13",  "2026-11-14"],
        "schedule": null  // TBD - will be updated when announced
    },
    end_term: {
        "dates": ["2026-12-21",  "2026-12-22",  "2026-12-23",  "2026-12-24"],
        "schedule": null  // TBD - will be updated when announced
    },
    quiz: ['2026-11-06',  '2026-11-07',  '2026-11-09',  '2026-12-17',  '2026-12-18',  '2026-12-19',  '2026-12-20'],
    holidays: [
        { date: "2026-10-17", name: "DUSSEHRA HOLIDAYS" },
        { date: "2026-10-18", name: "DUSSEHRA HOLIDAYS" },
        { date: "2026-10-19", name: "DUSSEHRA HOLIDAYS" },
        { date: "2026-10-20", name: "DUSSEHRA HOLIDAYS" },
        { date: "2026-11-08", name: "DIWALI HOLIDAY" },
        { date: "2026-11-16", name: "CHHATH HOLIDAY" },
        { date: "2026-11-24", name: "GURU NANAK JAYANTI" },
    ],
    special: [
        { date: "2026-11-28", name: "NETRITVA" },
        { date: "2026-12-04", name: "TEDx" },
    ],
};


// Trimester date range
const trimesterStart = "2026-10-05";
const trimesterEnd = "2026-12-24";