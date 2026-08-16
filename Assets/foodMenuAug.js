const foodData = {
    "Monday": {
        "breakfast_time": "8:00 AM - 10:00 AM",
        "breakfast": "Idli, Vada, Sambar, Peanut Chutney, Bread, Boiled Egg, Butter & Jam, Chocos, Fruit, Sprouts, Tea, Milk & Coffee",
        "lunch_time": "12:00 PM - 2:15 PM",
        "lunch": "Punjabi Chole Bhature, Aloo Masala, Rice, Fryums, Boondi Raita, Salad and Pickle",
        "snacks_time": "5:00 PM - 6:30 PM",
        "snacks": "Pav Bhaji, Chopped Onion, Chutney, Tea, Coffee & Milk",
        "dinner_time": "7:45 PM - 10:00 PM",
        "dinner": "Fried Rice, Roti, Dal Tadka, Paneer Masala, Salad, Gulab Jamun, Papad",
        "special": "Chicken Masala",
        "notes": "Salad: Cucumber, Onion, Carrot"
    },
    "Tuesday": {
        "breakfast_time": "8:00 AM - 10:00 AM",
        "breakfast": "Methi Puri, Kale Chane Curry, Pickle, Bread, Peanut Butter & Jam, Cornflakes, Fruits, Tea, Milk & Coffee",
        "lunch_time": "12:00 PM - 2:15 PM",
        "lunch": "Rice, Roti, Chana Dal, Rajma Masala, Mix Veg, Fryums, Salad, Pickle & Sweet Lassi",
        "snacks_time": "5:00 PM - 6:30 PM",
        "snacks": "Fried Idli, Peanut chutney, Tea, Coffee & Milk",
        "dinner_time": "7:45 PM - 10:00 PM",
        "dinner": "Rice, Roti, Yellow Dal, Aloo Bhindi Fry, Soyabean Curry, Salad, Jalebi",
        "special": "",
        "notes": "Salad: Cucumber, Onion, Carrot"
    },
    "Wednesday": {
        "breakfast_time": "8:00 AM - 10:00 AM",
        "breakfast": "Aloo Paratha, Tomato Onion Chutney, Boiled Egg, Butter, Bread, Jam, Cornflakes, Fruits, Tea, Milk & Coffee",
        "lunch_time": "12:00 PM - 2:15 PM",
        "lunch": "Rice, Roti, Moong Dal, Aloo Bhujia, Kala Chana Masala, Fryums, Boondi Raita, Salad and Pickle",
        "snacks_time": "5:00 PM - 6:30 PM",
        "snacks": "Aloo Sandwich, Sauce, Tea, Coffee & Milk",
        "dinner_time": "7:45 PM - 10:00 PM",
        "dinner": "Schezwan Fried Rice, Paratha, Dal Fry, Panner Hyderabadi, Salad, Ice Cream",
        "special": "Chicken Chilli",
        "notes": "Salad: Cucumber, Onion, Carrot"
    },
    "Thursday": {
        "breakfast_time": "8:00 AM - 10:00 AM",
        "breakfast": "Sewaiyan Upma, Peanut chutney, Bread, Omelette, Peanut Butter & Jam, Chocos, Sprouts, Fruit, Tea, Milk & Coffee",
        "lunch_time": "12:00 PM - 2:15 PM",
        "lunch": "Rice, Roti, Dal Fry, Kashmiri Aloo Dum, Salad",
        "snacks_time": "5:00 PM - 6:30 PM",
        "snacks": "Papdi Chat, Chole, Green Chutney, Red Chutney, Tea, Coffee & Milk",
        "dinner_time": "7:45 PM - 10:00 PM",
        "dinner": "Rice, Butter Roti, Yellow Dal, Mix Veg Kofta, Mix Cabbage Bhujia, Fruit Custard, Salad, Papad",
        "special": "Egg Curry",
        "notes": "Salad: Cucumber, Onion, Carrot"
    },
    "Friday": {
        "breakfast_time": "8:00 AM - 10:00 AM",
        "breakfast": "Methi Paratha, Aloo Masala, Boiled Egg, Pickle, Bread, Butter & Jam, Cornflakes, Fruits, Tea, Milk & Coffee",
        "lunch_time": "12:00 PM - 2:15 PM",
        "lunch": "Lemon Rice (Add Peanuts), Roti, Sambar, Aloo Parwal Fry, Fryums, Salad, Pickle, Beetroot Raita",
        "snacks_time": "5:00 PM - 6:30 PM",
        "snacks": "Vada Pav, Chopped Onions, Green Chutney, Tea, Coffee & Milk",
        "dinner_time": "7:45 PM - 10:00 PM",
        "dinner": "Roti, Rice, Paneer Do Pyaza, Masoor Dal, Salad, Sewaiyan",
        "special": "Chicken Do Pyaza",
        "notes": "Salad: Cucumber, Onion, Carrot"
    },
    "Saturday": {
        "breakfast_time": "8:00 AM - 10:00 AM",
        "breakfast": "Onion Uttapam, Sambar, Peanut Chutney, Boiled Egg, Bread, Butter & Jam, Cornflakes, Fruits, Tea, Milk & Coffee",
        "lunch_time": "12:00 PM - 2:15 PM",
        "lunch": "Fried Rice, Roti, Chana Dal Tadka, Matar Paneer, Fryums, Salad, Pickle, Boondi Raita",
        "snacks_time": "5:00 PM - 6:30 PM",
        "snacks": "Pani Puri, Green Chutney, Red Chutney, Tea, Coffee & Milk",
        "dinner_time": "7:45 PM - 10:00 PM",
        "dinner": "Khichdi, Aloo Baigan Choka, Roti, Aloo Tamatar, Toor Dal, Rasgulla, Salad, Pickle",
        "special": "",
        "notes": "Salad: Cucumber, Onion, Carrot"
    },
    "Sunday": {
        "breakfast_time": "8:00 AM - 10:00 AM",
        "breakfast": "Masala Dosa, Sambar, Peanut Chutney, Boiled egg, Bread, Peanut Butter & Jam, Cornflakes, Fruits, Tea, Milk & Coffee",
        "lunch_time": "12:00 PM - 2:15 PM",
        "lunch": "Roti, Veg Biryani (Soyabean), Paneer Kadai, Koshimbir, Salad",
        "snacks_time": "5:00 PM - 6:30 PM",
        "snacks": "Veg Poha, Sev, Chopped Onion, Tea, Coffee & Milk",
        "dinner_time": "7:45 PM - 10:00 PM",
        "dinner": "Rice, Poori, Veg Kolhapuri, Rajma Masala, Masoor Dal, Salad, Suji Halwa",
        "special": "Chicken Biryani, Salan",
        "notes": "Salad: Cucumber, Onion, Carrot"
    },
};
const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
