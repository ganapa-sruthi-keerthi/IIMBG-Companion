const foodData = {
    Monday: {
        breakfast_time: "8:00 AM - 10:00 AM",
        breakfast: "Idli, Vada, Sambar, Peanut Chutney, Bread, Boiled Egg, Butter & Jam, Chocos, Fruit, Sprouts, Tea, Milk & Coffee",
        lunch_time: "12:00 PM - 2:15 PM",
        lunch: "Punjabi Chole Bhature, Aloo Masala, Rice, Fryums, Boondi Raita, Salad and Pickle",
        snacks_time: "5:00 PM - 6:30 PM",
        snacks: "Pav Bhaji, Chopped Onion, Chutney, Tea, Coffee & Milk",
        dinner_time: "7:45 PM - 10:00 PM",
        dinner: "Jeera Rice, Roti, Dal Makhani, Punjabi Paneer Masala, Salad, Ice Cream, Papad",
        special: "Non-Veg: Butter Chicken",
        notes: "Salad: Cucumber, Onion, Carrot"
    },
    Tuesday: {
        breakfast_time: "8:00 AM - 10:00 AM",
        breakfast: "Aloo Paratha, Tomato Onion Chutney, Peanut Butter, Bread, Jam, Cornflakes, Fruits, Tea, Milk & Coffee",
        lunch_time: "12:00 PM - 2:15 PM",
        lunch: "Rice, Roti, Chana Dal, Bhindi Masala, Mix Veg, Fryums, Salad, Pickle & Sweet Lassi",
        snacks_time: "5:00 PM - 6:30 PM",
        snacks: "Veg Pakoda, Green Chutney, Tea, Coffee & Milk",
        dinner_time: "7:45 PM - 10:00 PM",
        dinner: "Rice, Roti, Yellow Dal, Aloo Gazar Fry, Soyabean Curry, Salad, Jalebi",
        special: "Veg Special",
        notes: "Salad: Cucumber, Onion, Carrot"
    },
    Wednesday: {
        breakfast_time: "8:00 AM - 10:00 AM",
        breakfast: "Sewaiyan Upma, Peanut Chutney, Bread, Omelette, Butter & Jam, Cornflakes, Sprouts, Fruit, Tea, Milk & Coffee",
        lunch_time: "12:00 PM - 2:15 PM",
        lunch: "Rice, Roti, Toor Dal, Rajma, Lauki Chana, Fryums, Boondi Raita, Salad and Pickle",
        snacks_time: "5:00 PM - 6:30 PM",
        snacks: "Samosa, Chole, Green Chutney, Tea, Coffee & Milk",
        dinner_time: "7:45 PM - 10:00 PM",
        dinner: "Rice, Paratha, Dal Fry, Paneer Butter Masala, Salad, Gulab Jamun",
        special: "Non-Veg: Chicken Do Pyaza",
        notes: "Salad: Cucumber, Onion, Carrot"
    },
    Thursday: {
        breakfast_time: "8:00 AM - 10:00 AM",
        breakfast: "Methi Puri, Kale Chane Curry, Pickle, Bread, Peanut Butter & Jam, Chocos, Fruits, Tea, Milk & Coffee",
        lunch_time: "12:00 PM - 2:15 PM",
        lunch: "Jeera Rice, Roti, Dal Fry, Chole Masala, Salad",
        snacks_time: "5:00 PM - 6:30 PM",
        snacks: "Aloo Sandwich, Sauce, Tea, Coffee & Milk",
        dinner_time: "7:45 PM - 10:00 PM",
        dinner: "Rice, Butter Roti, Dal Tadka, Mix Veg Kofta, Aloo Bhindi Bhujiya, Besan Laddoo, Salad, Papad",
        special: "Egg: Egg Curry (Lunch)",
        notes: "Salad: Cucumber, Onion, Carrot"
    },
    Friday: {
        breakfast_time: "8:00 AM - 10:00 AM",
        breakfast: "Paratha, Aloo Masala, Boiled Egg, Pickle, Bread, Butter & Jam, Cornflakes, Fruits, Tea, Milk & Coffee",
        lunch_time: "12:00 PM - 2:15 PM",
        lunch: "Lemon Rice (Add Peanuts), Roti, Sambar, Soyabean Curry, Parwal Fry, Fryums, Salad, Pickle, Beetroot Raita",
        snacks_time: "5:00 PM - 6:30 PM",
        snacks: "Fried Idli, Peanut Chutney, Tea, Coffee & Milk",
        dinner_time: "7:45 PM - 10:00 PM",
        dinner: "Roti, Rice, Paneer Do Pyaza, Masoor Dal, Salad, Sewaiyan",
        special: "Non-Veg: Chicken Kolhapuri",
        notes: "Salad: Cucumber, Onion, Carrot"
    },
    Saturday: {
        breakfast_time: "8:00 AM - 10:00 AM",
        breakfast: "Tari Poha, Sev, Chopped Onion, Bread, Butter & Jam, Cornflakes, Fruit, Tea, Milk & Coffee",
        lunch_time: "12:00 PM - 2:15 PM",
        lunch: "Rice, Roti, Chana Dal Tadka, Matar Paneer, Fryums, Salad, Pickle",
        snacks_time: "5:00 PM - 6:30 PM",
        snacks: "Pani Puri, Green Chutney, Red Chutney, Tea, Coffee & Milk",
        dinner_time: "7:45 PM - 10:00 PM",
        dinner: "Khichdi, Aloo Baigan Choka, Roti, Veg Kolhapuri, Toor Dal, Rasmalai, Salad, Pickle",
        special: "Egg: Egg Curry (Lunch)",
        notes: "Salad: Cucumber, Onion, Carrot"
    },
    Sunday: {
        breakfast_time: "8:00 AM - 10:00 AM",
        breakfast: "Masala Dosa, Sambar, Peanut Chutney, Boiled Egg, Bread, Butter & Jam, Chocos, Fruits, Tea, Milk & Coffee",
        lunch_time: "12:00 PM - 2:15 PM",
        lunch: "Roti, Veg Biryani (Soyabean), Paneer Butter Masala, Koshimbir, Salad",
        snacks_time: "5:00 PM - 6:30 PM",
        snacks: "Punugulu, Peanut Chutney, Green Chutney, Tea, Coffee & Milk",
        dinner_time: "7:45 PM - 10:00 PM",
        dinner: "Rice, Poori, Kala Chana, Lauki Chana, Masoor Dal, Salad, Suji Halwa",
        special: "Non-Veg Special: Chicken Biryani, Salan (Lunch)",
        notes: "Salad: Cucumber, Onion, Carrot"
    },
};

// Days in order for the week selector
const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
