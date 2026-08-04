// HHM Term I Schedule Data
// Classroom: Charak

// Course Catalog: code -> {name, professor}
const courseCatalog = {
    BC: { name: "Business Communication", professor: "Prof. Urjani Chakravarty" },
    BS: { name: "Business Statistics", professor: "Prof. Prabhat Ranjan" },
    ENDTERM: { name: "END TERM EXAMINATIONS", professor: "" },
    EVENTCONV: { name: "CONVERGENCE", professor: "" },
    HOLIND: { name: "INDEPENDENCE DAY", professor: "" },
    HOLMILAD: { name: "ID-E-MILAD", professor: "" },
    MA: { name: "Management Accounting", professor: "Prof. Archana Patro" },
    ME: { name: "Managerial Economics", professor: "Prof. Adviti Devaguptapu" },
    MEMS: { name: "Medical Ethics & Medicolegal Systems", professor: "Prof. Soumya Prakash Patra" },
    MHP: { name: "The Inner Edge: Mental Fitness for High Performers", professor: "Ms. Kanupriya Sekhri" },
    MIDTERM: { name: "MID TERM EXAMINATIONS", professor: "" },
    MM: { name: "Marketing Management", professor: "Prof. Swapnarag Swain" },
    OB: { name: "Organizational Behaviour", professor: "Prof. Teena Bharti" },
    QUIZ: { name: "QUIZ SLOT (COURSE TBD)", professor: "" },
    SM: { name: "Spreadsheet Modelling", professor: "Prof. Boudhayan Ganguly" },
};


// Daily Schedule: date -> {day, slots: [{time, code}]}
const scheduleData = {
    "2026-07-14": {
        day: "Tuesday",
        slots: [
            { time: "09:15-10:45", code: "MA" },
            { time: "11:00-12:30", code: "MEMS" },
            { time: "13:30-15:00", code: "ME" },
            { time: "17:00-18:30", code: "MHP" },
        ]
    },
    "2026-07-15": {
        day: "Wednesday",
        slots: [
            { time: "09:15-10:45", code: "BS" },
            { time: "11:00-12:30", code: "MM" },
            { time: "13:30-15:00", code: "OB" },
            { time: "15:15-16:45", code: "BC" },
        ]
    },
    "2026-07-16": {
        day: "Thursday",
        slots: [
            { time: "09:15-10:45", code: "SM" },
            { time: "11:00-12:30", code: "BC" },
            { time: "13:30-15:00", code: "MA" },
        ]
    },
    "2026-07-17": {
        day: "Friday",
        slots: [
            { time: "09:15-10:45", code: "ME" },
            { time: "11:00-12:30", code: "BS" },
            { time: "13:30-15:00", code: "MM" },
        ]
    },
    "2026-07-18": {
        day: "Saturday",
        slots: [
        ]
    },
    "2026-07-19": {
        day: "Sunday",
        slots: [
        ]
    },
    "2026-07-20": {
        day: "Monday",
        slots: [
            { time: "09:15-10:45", code: "BS" },
            { time: "11:00-12:30", code: "MEMS" },
            { time: "13:30-15:00", code: "SM" },
        ]
    },
    "2026-07-21": {
        day: "Tuesday",
        slots: [
            { time: "09:15-10:45", code: "ME" },
            { time: "11:00-12:30", code: "MA" },
            { time: "13:30-15:00", code: "MM" },
        ]
    },
    "2026-07-22": {
        day: "Wednesday",
        slots: [
            { time: "09:15-10:45", code: "MEMS" },
            { time: "11:00-12:30", code: "OB" },
            { time: "13:30-15:00", code: "BS" },
            { time: "15:15-16:45", code: "SM" },
        ]
    },
    "2026-07-23": {
        day: "Thursday",
        slots: [
            { time: "09:15-10:45", code: "MM" },
            { time: "11:00-12:30", code: "BC" },
            { time: "13:30-15:00", code: "MA" },
        ]
    },
    "2026-07-24": {
        day: "Friday",
        slots: [
            { time: "09:15-10:45", code: "OB" },
            { time: "11:00-12:30", code: "SM" },
            { time: "13:30-15:00", code: "MEMS" },
        ]
    },
    "2026-07-25": {
        day: "Saturday",
        slots: [
        ]
    },
    "2026-07-26": {
        day: "Sunday",
        slots: [
        ]
    },
    "2026-07-27": {
        day: "Monday",
        slots: [
            { time: "09:15-10:45", code: "SM" },
            { time: "11:00-12:30", code: "ME" },
            { time: "13:30-15:00", code: "BS" },
            { time: "15:15-16:45", code: "BC" },
        ]
    },
    "2026-07-28": {
        day: "Tuesday",
        slots: [
            { time: "09:15-10:45", code: "MM" },
            { time: "11:00-12:30", code: "OB" },
            { time: "13:30-15:00", code: "MEMS" },
        ]
    },
    "2026-07-29": {
        day: "Wednesday",
        slots: [
            { time: "09:15-10:45", code: "BC" },
            { time: "11:00-12:30", code: "ME" },
            { time: "13:30-15:00", code: "MA" },
        ]
    },
    "2026-07-30": {
        day: "Thursday",
        slots: [
            { time: "09:15-10:45", code: "OB" },
            { time: "11:00-12:30", code: "SM" },
            { time: "13:30-15:00", code: "BS" },
        ]
    },
    "2026-07-31": {
        day: "Friday",
        slots: [
            { time: "09:15-10:45", code: "ME" },
            { time: "11:00-12:30", code: "MA" },
            { time: "13:30-15:00", code: "BC" },
        ]
    },
    "2026-08-01": {
        day: "Saturday",
        slots: [
        ]
    },
    "2026-08-02": {
        day: "Sunday",
        slots: [
        ]
    },
    "2026-08-03": {
        day: "Monday",
        slots: [
            { time: "09:15-10:45", code: "SM" },
            { time: "11:00-12:30", code: "MM" },
            { time: "13:30-15:00", code: "ME" },
        ]
    },
    "2026-08-04": {
        day: "Tuesday",
        slots: [
            { time: "09:15-10:45", code: "MA" },
            { time: "11:00-12:30", code: "MEMS" },
            { time: "13:30-15:00", code: "BC" },
            { time: "15:15-16:45", code: "BS" },
        ]
    },
    "2026-08-05": {
        day: "Wednesday",
        slots: [
            { time: "09:15-10:45", code: "ME" },
            { time: "11:00-12:30", code: "OB" },
            { time: "13:30-15:00", code: "MM" },
            { time: "15:15-16:45", code: "OB" },
        ]
    },
    "2026-08-06": {
        day: "Thursday",
        slots: [
            { time: "09:15-10:45", code: "MEMS" },
            { time: "11:00-12:30", code: "SM" },
            { time: "13:30-15:00", code: "BS" },
            { time: "15:15-16:45", code: "MA" },
        ]
    },
    "2026-08-07": {
        day: "Friday",
        slots: [
            { time: "09:15-10:45", code: "BC" },
            { time: "11:00-12:30", code: "ME" },
            { time: "13:30-15:00", code: "OB" },
        ]
    },
    "2026-08-08": {
        day: "Saturday",
        slots: [
            { time: "09:15-10:45", code: "OB" },
        ]
    },
    "2026-08-09": {
        day: "Sunday",
        slots: [
        ]
    },
    "2026-08-10": {
        day: "Monday",
        slots: [
            { time: "09:15-10:45", code: "MEMS" },
            { time: "11:00-12:30", code: "MA" },
            { time: "13:30-15:00", code: "MM" },
            { time: "15:15-16:45", code: "QUIZ" },
            { time: "17:00-18:30", code: "QUIZ" },
        ]
    },
    "2026-08-11": {
        day: "Tuesday",
        slots: [
            { time: "09:15-10:45", code: "BS" },
            { time: "11:00-12:30", code: "SM" },
            { time: "13:30-15:00", code: "BC" },
            { time: "15:15-16:45", code: "QUIZ" },
            { time: "17:00-18:30", code: "QUIZ" },
        ]
    },
    "2026-08-12": {
        day: "Wednesday",
        slots: [
            { time: "09:15-10:45", code: "MM" },
            { time: "11:00-12:30", code: "OB" },
            { time: "13:30-15:00", code: "MEMS" },
            { time: "15:15-16:45", code: "ME" },
            { time: "17:00-18:30", code: "QUIZ" },
        ]
    },
    "2026-08-13": {
        day: "Thursday",
        slots: [
            { time: "09:15-10:45", code: "BS" },
            { time: "11:00-12:30", code: "MA" },
            { time: "13:30-15:00", code: "SM" },
            { time: "15:15-16:45", code: "QUIZ" },
            { time: "17:00-18:30", code: "QUIZ" },
        ]
    },
    "2026-08-14": {
        day: "Friday",
        slots: [
            { time: "09:15-10:45", code: "BC" },
            { time: "11:00-12:30", code: "MM" },
            { time: "13:30-15:00", code: "MEMS" },
            { time: "15:15-16:45", code: "QUIZ" },
        ]
    },
    "2026-08-15": {
        day: "Saturday",
        slots: [
            { time: "09:15-10:45", code: "HOLIND" },
            { time: "11:00-12:30", code: "HOLIND" },
            { time: "13:30-15:00", code: "HOLIND" },
            { time: "15:15-16:45", code: "HOLIND" },
            { time: "17:00-18:30", code: "HOLIND" },
        ]
    },
    "2026-08-16": {
        day: "Sunday",
        slots: [
        ]
    },
    "2026-08-17": {
        day: "Monday",
        slots: [
            { time: "09:15-10:45", code: "MIDTERM" },
            { time: "13:30-15:00", code: "MIDTERM" },
            { time: "15:15-16:45", code: "MIDTERM" },
            { time: "11:00-12:30", code: "MIDTERM" },
            { time: "17:00-18:30", code: "MIDTERM" },
        ]
    },
    "2026-08-18": {
        day: "Tuesday",
        slots: [
            { time: "09:15-10:45", code: "MIDTERM" },
            { time: "11:00-12:30", code: "MIDTERM" },
            { time: "13:30-15:00", code: "MIDTERM" },
            { time: "15:15-16:45", code: "MIDTERM" },
            { time: "17:00-18:30", code: "MIDTERM" },
        ]
    },
    "2026-08-19": {
        day: "Wednesday",
        slots: [
            { time: "09:15-10:45", code: "MIDTERM" },
            { time: "11:00-12:30", code: "MIDTERM" },
            { time: "13:30-15:00", code: "MIDTERM" },
            { time: "15:15-16:45", code: "MIDTERM" },
            { time: "17:00-18:30", code: "MIDTERM" },
        ]
    },
    "2026-08-20": {
        day: "Thursday",
        slots: [
            { time: "09:15-10:45", code: "MIDTERM" },
            { time: "11:00-12:30", code: "MIDTERM" },
            { time: "13:30-15:00", code: "MIDTERM" },
            { time: "15:15-16:45", code: "MIDTERM" },
            { time: "17:00-18:30", code: "MIDTERM" },
        ]
    },
    "2026-08-21": {
        day: "Friday",
        slots: [
            { time: "09:15-10:45", code: "MIDTERM" },
            { time: "11:00-12:30", code: "MIDTERM" },
            { time: "13:30-15:00", code: "MIDTERM" },
            { time: "15:15-16:45", code: "MIDTERM" },
            { time: "17:00-18:30", code: "MIDTERM" },
        ]
    },
    "2026-08-22": {
        day: "Saturday",
        slots: [
            { time: "11:00-12:30", code: "MM" },
            { time: "13:30-15:00", code: "MA" },
            { time: "15:15-16:45", code: "OB" },
            { time: "17:00-18:30", code: "ME" },
        ]
    },
    "2026-08-23": {
        day: "Sunday",
        slots: [
        ]
    },
    "2026-08-24": {
        day: "Monday",
        slots: [
            { time: "09:15-10:45", code: "OB" },
            { time: "11:00-12:30", code: "MM" },
        ]
    },
    "2026-08-25": {
        day: "Tuesday",
        slots: [
            { time: "09:15-10:45", code: "BS" },
            { time: "11:00-12:30", code: "MA" },
        ]
    },
    "2026-08-26": {
        day: "Wednesday",
        slots: [
            { time: "09:15-10:45", code: "HOLMILAD" },
            { time: "11:00-12:30", code: "HOLMILAD" },
            { time: "13:30-15:00", code: "HOLMILAD" },
            { time: "15:15-16:45", code: "HOLMILAD" },
            { time: "17:00-18:30", code: "HOL-MILAD" },
        ]
    },
    "2026-08-27": {
        day: "Thursday",
        slots: [
            { time: "09:15-10:45", code: "MA" },
            { time: "11:00-12:30", code: "BS" },
        ]
    },
    "2026-08-28": {
        day: "Friday",
        slots: [
            { time: "09:15-10:45", code: "ME" },
            { time: "11:00-12:30", code: "OB" },
        ]
    },
    "2026-08-29": {
        day: "Saturday",
        slots: [
        ]
    },
    "2026-08-30": {
        day: "Sunday",
        slots: [
        ]
    },
    "2026-08-31": {
        day: "Monday",
        slots: [
            { time: "09:15-10:45", code: "MA" },
        ]
    },
    "2026-09-01": {
        day: "Tuesday",
        slots: [
            { time: "09:15-10:45", code: "MM" },
            { time: "11:00-12:30", code: "BS" },
        ]
    },
    "2026-09-02": {
        day: "Wednesday",
        slots: [
            { time: "09:15-10:45", code: "MA" },
            { time: "11:00-12:30", code: "ME" },
        ]
    },
    "2026-09-03": {
        day: "Thursday",
        slots: [
            { time: "09:15-10:45", code: "OB" },
            { time: "11:00-12:30", code: "BS" },
        ]
    },
    "2026-09-04": {
        day: "Friday",
        slots: [
            { time: "09:15-10:45", code: "ME" },
            { time: "11:00-12:30", code: "MA" },
        ]
    },
    "2026-09-05": {
        day: "Saturday",
        slots: [
        ]
    },
    "2026-09-06": {
        day: "Sunday",
        slots: [
        ]
    },
    "2026-09-07": {
        day: "Monday",
        slots: [
            { time: "09:15-10:45", code: "BS" },
            { time: "11:00-12:30", code: "MM" },
        ]
    },
    "2026-09-08": {
        day: "Tuesday",
        slots: [
            { time: "09:15-10:45", code: "MA" },
            { time: "11:00-12:30", code: "OB" },
        ]
    },
    "2026-09-09": {
        day: "Wednesday",
        slots: [
            { time: "09:15-10:45", code: "ME" },
            { time: "11:00-12:30", code: "BS" },
        ]
    },
    "2026-09-10": {
        day: "Thursday",
        slots: [
            { time: "09:15-10:45", code: "MM" },
            { time: "11:00-12:30", code: "MA" },
        ]
    },
    "2026-09-11": {
        day: "Friday",
        slots: [
            { time: "09:15-10:45", code: "ME" },
            { time: "11:00-12:30", code: "BS" },
        ]
    },
    "2026-09-12": {
        day: "Saturday",
        slots: [
            { time: "09:15-10:45", code: "EVENTCONV" },
            { time: "11:00-12:30", code: "EVENTCONV" },
            { time: "13:30-15:00", code: "EVENTCONV" },
            { time: "15:15-16:45", code: "EVENTCONV" },
            { time: "17:00-18:30", code: "EVENTCONV" },
        ]
    },
    "2026-09-13": {
        day: "Sunday",
        slots: [
            { time: "09:15-10:45", code: "EVENTCONV" },
            { time: "11:00-12:30", code: "EVENTCONV" },
            { time: "13:30-15:00", code: "EVENTCONV" },
            { time: "15:15-16:45", code: "EVENTCONV" },
            { time: "17:00-18:30", code: "EVENT-CONV" },
        ]
    },
    "2026-09-14": {
        day: "Monday",
        slots: [
            { time: "09:15-10:45", code: "ME" },
            { time: "11:00-12:30", code: "MM" },
        ]
    },
    "2026-09-15": {
        day: "Tuesday",
        slots: [
            { time: "09:15-10:45", code: "OB" },
            { time: "11:00-12:30", code: "BS" },
        ]
    },
    "2026-09-16": {
        day: "Wednesday",
        slots: [
            { time: "09:15-10:45", code: "ME" },
            { time: "11:00-12:30", code: "MM" },
        ]
    },
    "2026-09-17": {
        day: "Thursday",
        slots: [
            { time: "09:15-10:45", code: "BS" },
            { time: "11:00-12:30", code: "MA" },
        ]
    },
    "2026-09-18": {
        day: "Friday",
        slots: [
            { time: "09:15-10:45", code: "MM" },
            { time: "11:00-12:30", code: "ME" },
        ]
    },
    "2026-09-19": {
        day: "Saturday",
        slots: [
        ]
    },
    "2026-09-20": {
        day: "Sunday",
        slots: [
        ]
    },
    "2026-09-21": {
        day: "Monday",
        slots: [
            { time: "09:15-10:45", code: "MM" },
            { time: "11:00-12:30", code: "ME" },
            { time: "13:30-15:00", code: "QUIZ" },
            { time: "15:15-16:45", code: "QUIZ" },
        ]
    },
    "2026-09-22": {
        day: "Tuesday",
        slots: [
            { time: "09:15-10:45", code: "BS" },
            { time: "11:00-12:30", code: "OB" },
            { time: "13:30-15:00", code: "QUIZ" },
            { time: "15:15-16:45", code: "QUIZ" },
        ]
    },
    "2026-09-23": {
        day: "Wednesday",
        slots: [
            { time: "09:15-10:45", code: "MA" },
            { time: "11:00-12:30", code: "MM" },
            { time: "13:30-15:00", code: "QUIZ" },
            { time: "15:15-16:45", code: "QUIZ" },
        ]
    },
    "2026-09-24": {
        day: "Thursday",
        slots: [
            { time: "09:15-10:45", code: "ENDTERM" },
            { time: "11:00-12:30", code: "ENDTERM" },
            { time: "13:30-15:00", code: "ENDTERM" },
            { time: "15:15-16:45", code: "ENDTERM" },
            { time: "17:00-18:30", code: "ENDTERM" },
        ]
    },
    "2026-09-25": {
        day: "Friday",
        slots: [
            { time: "09:15-10:45", code: "ENDTERM" },
            { time: "11:00-12:30", code: "ENDTERM" },
            { time: "13:30-15:00", code: "ENDTERM" },
            { time: "15:15-16:45", code: "ENDTERM" },
            { time: "17:00-18:30", code: "ENDTERM" },
        ]
    },
    "2026-09-26": {
        day: "Saturday",
        slots: [
            { time: "09:15-10:45", code: "ENDTERM" },
            { time: "11:00-12:30", code: "ENDTERM" },
            { time: "13:30-15:00", code: "ENDTERM" },
            { time: "15:15-16:45", code: "ENDTERM" },
            { time: "17:00-18:30", code: "ENDTERM" },
        ]
    },
    "2026-09-27": {
        day: "Sunday",
        slots: [
            { time: "09:15-10:45", code: "ENDTERM" },
            { time: "11:00-12:30", code: "ENDTERM" },
            { time: "13:30-15:00", code: "ENDTERM" },
            { time: "15:15-16:45", code: "ENDTERM" },
            { time: "17:00-18:30", code: "ENDTERM" },
        ]
    },
    "2026-09-28": {
        day: "Monday",
        slots: [
            { time: "09:15-10:45", code: "ENDTERM" },
            { time: "11:00-12:30", code: "ENDTERM" },
            { time: "13:30-15:00", code: "ENDTERM" },
            { time: "15:15-16:45", code: "ENDTERM" },
            { time: "17:00-18:30", code: "ENDTERM" },
        ]
    },
    "2026-09-29": {
        day: "Tuesday",
        slots: [
            { time: "09:15-10:45", code: "ENDTERM" },
            { time: "11:00-12:30", code: "ENDTERM" },
            { time: "13:30-15:00", code: "ENDTERM" },
            { time: "15:15-16:45", code: "ENDTERM" },
            { time: "17:00-18:30", code: "ENDTERM" },
        ]
    },
};


// Exam & Event Information
const examInfo = {
    mid_term: ['2026-08-17', '2026-08-18', '2026-08-19', '2026-08-20', '2026-08-21'],
    end_term: ['2026-09-24', '2026-09-25', '2026-09-26', '2026-09-27', '2026-09-28', '2026-09-29'],
    quiz: ['2026-08-10', '2026-08-11', '2026-08-12', '2026-08-13', '2026-08-14', '2026-09-21', '2026-09-22', '2026-09-23'],
    holidays: [
        { date: "2026-08-15", name: "INDEPENDENCE DAY" },
        { date: "2026-08-26", name: "ID-E-MILAD" },
    ],
    special: [
        { date: "2026-09-12", name: "CONVERGENCE" },
        { date: "2026-09-13", name: "CONVERGENCE" },
    ],
};


// Trimester date range
const trimesterStart = "2026-07-14";
const trimesterEnd = "2026-09-29";
