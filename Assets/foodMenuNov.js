const foodData = {
    Monday: {
        breakfast_time: "8:00 AM - 10:00 AM",
        breakfast: "Idli, Vada, Sambar, Peanut Chutney, Bread, Boiled Egg, Cornflakes, Butter & Jam, Fruits, Tea, Milk & Coffee",
        lunch_time: "12:00 PM - 2:15 PM",
        lunch: "Gobhi Matar Sabji, Poriyal, Sambar, Lemon Rice (Peanuts), Roti, Papad, Salad, Pickle and Buttermilk",
        snacks_time: "5:00 PM - 6:30 PM",
        snacks: "Pasta, Tea, Coffee & Milk",
        dinner_time: "7:45 PM - 10:00 PM",
        dinner: "Kadhai Paneer, Veg Pulao, Yellow Dal, Roti, Dry Boondiya, Salad",
        special: "Non-Veg: Chicken Kadhai",
        notes: "Salad: Cucumber, Onion, Carrot"
    },
    Tuesday: {
        breakfast_time: "8:00 AM - 10:00 AM",
        breakfast: "Aloo Paratha, Curd, Pickle, Peanut Butter, Bread, Jam, Cornflakes, Fruits, Sprouts, Tea, Milk & Coffee",
        lunch_time: "12:00 PM - 2:15 PM",
        lunch: "Lauki Chana, Rajma, Palak Chana Dal, Rice, Fryums, Salad and Pickle",
        snacks_time: "5:00 PM - 6:30 PM",
        snacks: "Aloo Tikki Chaat, Chole, Green Chutney, Meethi Chutney, Tea, Coffee & Milk",
        dinner_time: "7:45 PM - 10:00 PM",
        dinner: "Matar Ki Sabji, Cabbage Bhujiya, Rice, Roti, Masoor Dal, Papad, Rasmalai, Pickle, Salad",
        special: "Veg Special",
        notes: "Salad: Cucumber, Onion, Carrot"
    },
    Wednesday: {
        breakfast_time: "8:00 AM - 10:00 AM",
        breakfast: "Sattu Paratha, Aloo Chana, Boiled Egg, Bread, Butter & Jam, Chocos, Fruits, Tea, Milk & Coffee",
        lunch_time: "12:00 PM - 2:15 PM",
        lunch: "Punjabi Chole Bhature, Aloo Masala, Rice, Boondi Raita, Salad and Pickle",
        snacks_time: "5:00 PM - 6:30 PM",
        snacks: "Pani Puri, Green Chutney, Red Chutney, Tea, Coffee & Milk",
        dinner_time: "7:45 PM - 10:00 PM",
        dinner: "Paneer Do Pyaza, Dal Fry, Rice, Paratha, Gulab Jamun, Salad",
        special: "Non-Veg: Chicken Lababdar",
        notes: "Salad: Cucumber, Onion, Carrot"
    },
    Thursday: {
        breakfast_time: "8:00 AM - 10:00 AM",
        breakfast: "Puri, Aloo Sabzi, Bread, Peanut Butter & Jam, Cornflakes, Sprouts, Fruits, Tea, Milk & Coffee",
        lunch_time: "12:00 PM - 2:15 PM",
        lunch: "Matar Paneer, Rice, Roti, Toor Dal, Fryums, Salad and Pickle",
        snacks_time: "5:00 PM - 6:30 PM",
        snacks: "Aloo Sandwich, Green Chutney, Red Chutney, Tea, Coffee & Milk",
        dinner_time: "7:45 PM - 10:00 PM",
        dinner: "Mix Veg, Parwal Sabji, Rice, Roti, Dal Makhani, Balushahi, Salad",
        special: "Egg: Egg Curry (Lunch)",
        notes: "Salad: Cucumber, Onion, Carrot"
    },
    Friday: {
        breakfast_time: "8:00 AM - 10:00 AM",
        breakfast: "Indori Tari Poha, Sev, Bread, Omelette, Butter & Jam, Chocos, Fruits, Tea, Milk & Coffee",
        lunch_time: "12:00 PM - 2:15 PM",
        lunch: "Chana Masala, Jeera Aloo, Rehar Dal, Rice, Roti, Fryums, Salad, Pickle, Beetroot Raita",
        snacks_time: "5:00 PM - 6:30 PM",
        snacks: "Veg Pakoda, Green Chutney, Ketchup, Tea, Coffee & Milk",
        dinner_time: "7:45 PM - 10:00 PM",
        dinner: "Paneer Butter Masala, Schezwan Rice, Roti, Custard, Salad",
        special: "Non-Veg: Chilli Chicken",
        notes: "Salad: Cucumber, Onion, Carrot"
    },
    Saturday: {
        breakfast_time: "8:00 AM - 10:00 AM",
        breakfast: "Sewaiyan Upma, Peanut Chutney, Bread, Omelette, Peanut Butter, Jam, Cornflakes, Fruits, Tea, Milk & Coffee",
        lunch_time: "12:00 PM - 2:15 PM",
        lunch: "Soyabean Masala, Aloo Bhujiya, Toor Dal, Rice, Roti, Salad, Lassi, Papad and Pickle",
        snacks_time: "5:00 PM - 6:30 PM",
        snacks: "Samosa, Chole, Green Chutney, Red Chutney, Tea, Coffee & Milk",
        dinner_time: "7:45 PM - 10:00 PM",
        dinner: "Bhindi Masala, Baigan Bharta, Rehar Dal, Rice, Paratha, Fryums, Payasam, Pickle, Salad",
        special: "Veg Special",
        notes: "Salad: Cucumber, Onion, Carrot"
    },
    Sunday: {
        breakfast_time: "8:00 AM - 10:00 AM",
        breakfast: "Masala Dosa, Sambar, Boiled Egg, Bread, Butter & Jam, Chocos, Fruits, Tea, Milk & Coffee",
        lunch_time: "12:00 PM - 2:15 PM",
        lunch: "Veg Biryani, Paneer Butter Masala, Koshimbir, Salad",
        snacks_time: "5:00 PM - 6:30 PM",
        snacks: "Fried Idli, Peanut Chutney, Tea, Coffee & Milk",
        dinner_time: "7:45 PM - 10:00 PM",
        dinner: "Kala Chana, Jeera Aloo, Chana Dal, Rice, Poori, Suji Halwa, Salad",
        special: "Non-Veg Special: Chicken Biryani, Salan (Lunch)",
        notes: "Salad: Cucumber, Onion, Carrot"
    },
};

// Days in order for the week selector
const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
