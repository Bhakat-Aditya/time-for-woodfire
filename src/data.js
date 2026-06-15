// src/data.js

export const galleryImages = [
    // You can easily add more image URLs here
    { id: 1, src: "https://images.pexels.com/photos/18126737/pexels-photo-18126737.jpeg", alt: "Woodfire Oven" },
    { id: 2, src: "https://images.pexels.com/photos/1028434/pexels-photo-1028434.jpeg", alt: "Chef tossing dough" },
    { id: 3, src: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqXRPPzhQuSa7rd5pUn2A-WVtSxZOGeGSpoz-N0j9kwQXq0m2_PcksCx-mlqIr0D_VB5y58ecqwKtV_6U0npwUCPsyiQ6fAHmEUq4LCo7YneIeAgwcvtoxyrOLfNAde0JIgNMLL4tEZT1pT=s1360-w1360-h1020-rw", alt: "Cafe Ambience" },
    { id: 4, src: "https://images.pexels.com/photos/35800156/pexels-photo-35800156.jpeg", alt: "Cheese Pull" },
    { id: 5, src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&auto=format&fit=crop", alt: "Paneer Tikka Pizza" },
    { id: 6, src: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop", alt: "Cheesy Veg Pizza" },
    { id: 7, src: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=800&auto=format&fit=crop", alt: "Spicy Indian Pizza" },
    { id: 8, src: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&auto=format&fit=crop", alt: "Woodfired Crust" },
    { id: 9, src: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=800&auto=format&fit=crop", alt: "Delicious Slices" },
    { id: 10, src: "https://images.unsplash.com/photo-1571407970349-bc10c62a4b41?w=800&auto=format&fit=crop", alt: "Chef Preparing Dough" },
    { id: 11, src: "https://images.unsplash.com/photo-1579751626657-72bc17010498?w=800&auto=format&fit=crop", alt: "Fresh Ingredients" },
    { id: 12, src: "https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?w=800&auto=format&fit=crop", alt: "Hot Pizza from Oven" },
    { id: 13, src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop", alt: "Restaurant Ambience" },
    { id: 14, src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&auto=format&fit=crop", alt: "Indian Restaurant Interior" },
];

export const menuData = [
    {
        category: "Classic Pizza Veg",
        priceRegular: 130,
        priceMedium: 340,
        items: [
            { name: "Margherita", desc: "Mozzarella Cheese" },
            { name: "Cheese Tomato", desc: "Cheese & Tomato" },
            { name: "Cheese Corn", desc: "Cheese & Corn" },
            { name: "Cheese Mushroom", desc: "Cheese & Mushroom" },
            { name: "Onion Twist", desc: "Onion & Cheese" },
        ],
    },
    {
        category: "Simply Pizza Veg",
        priceRegular: 165,
        priceMedium: 420,
        items: [
            { name: "Makhani Do Pyaza", desc: "Makhani Gravy, Onion & Cheese" },
            { name: "Garden Delight Pizza", desc: "Onions, Tomatoes and Capsicum" },
            { name: "Country Delight", desc: "Onion, Capsicum & Tomato" },
            { name: "Farm Fresh", desc: "Onion, Capsicum, Tomato & Mushroom" },
            { name: "Veg Mexican", desc: "Onion, Capsicum, Tomato & Jalapeno" },
            { name: "Lovers Bite Pizza", desc: "Mushrooms, Olives and juicy sweet corn" },
            { name: "Country Side Pizza", desc: "Capsicum, Jalapeno & Olives" },
        ],
    },
    {
        category: "Exotic Pizza Veg",
        priceRegular: 210,
        priceMedium: 530,
        items: [
            { name: "Spicy Paneer", desc: "Capsicum, Red Paprika & Paneer" },
            { name: "Italian Pizza", desc: "Black Olive, Sweet Corn & Jalapeno" },
            { name: "Makhani Paneer", desc: "Onion, Capsicum, White Paneer & Makhani Sauce" },
            { name: "Hot 2 Shot", desc: "Capsicum, Mushroom, Jalapeno, Red Paprika & Tandoori Sauce" },
            { name: "Tandoori Pizza", desc: "Onion, Paneer, Tomato, Capsicum & Tandoori Sauce" },
            { name: "Burn to Hell Pizza", desc: "Jalapenos, mushrooms, olives and capsicum" },
            { name: "Paneer Tikka Butter Masala", desc: "Paneer Tikka, Onion, Capsicum & Red Paprika" },
        ],
    },
    {
        category: "Specially Pizza Veg",
        priceRegular: 230,
        priceMedium: 580,
        items: [
            { name: "Veg Supreme", desc: "Onion, Capsicum, Tomato, Mushroom, Jalapenos, Sweet Corn & Extra Cheese" },
            { name: "Veggie Deluxe", desc: "Onion, Capsicum, Sweet Corn, Mushroom, Paneer & Extra Cheese" },
            { name: "Veg Wonder", desc: "Mushroom, Corn, Red Paprika, Paneer & Extra Cheese" },
            { name: "English Retreat Pizza", desc: "Olives, Red Paprika, Tomatoes, Paneer, Capsicum, Cheese, Jalapeno, Dip" },
            { name: "Peri Peri Veg Pizza", desc: "Onion, Capsicum, Mushroom, Paneer, Olives with Peri Peri Dip" },
        ],
    },
    {
        category: "Non Veg Pizza",
        priceRegular: 150,
        priceMedium: 410,
        items: [
            { name: "BBQ Chicken", desc: "Onion & BBQ" },
            { name: "Spicy Chicken", desc: "Red Paprika & Spicy Chicken" },
            { name: "Texas BBQ'ed Pizza", desc: "Onion, Capsicum & BBQ Chicken" },
        ],
    },
    {
        category: "Spicy Pizza Non-Veg",
        priceRegular: 210,
        priceMedium: 510,
        items: [
            { name: "Golden Chicken", desc: "Sweet Corn, Extra BBQ Chicken & Extra Cheese" },
            { name: "Mexican Chicken", desc: "Onion, Capsicum, Jalapeno & Spicy Chicken" },
            { name: "Keema Do Pyaza", desc: "Chicken Keema, Onion, Jalapeno" },
            { name: "Tandoori Chicken Pizza", desc: "Onion, Capsicum, Chicken Tikka & Extra Cheese" },
        ],
    },
    {
        category: "Exotic Pizza Non-Veg",
        priceRegular: 240,
        priceMedium: 510,
        items: [
            { name: "Non Veg Chicken", desc: "Onion, Capsicum, Mushroom, Black Olive, BBQ Chicken, Spicy Chicken & Extra Cheese" },
            { name: "Meataza", desc: "Onion, BBQ Spicy, Chicken & Chicken Sausage & Extra Cheese" },
            { name: "Chicken Fiesta", desc: "Peri Peri, Barbecue, Chicken, Chicken, Capsicum" },
            { name: "Chicken Tikka", desc: "The Wholesome flavour chicken tikka Onion red paprika" },
        ],
    },
    {
        category: "Speciality Pizza Non-Veg",
        priceRegular: 260,
        priceMedium: 610,
        items: [
            { name: "Non Veg Supreme", desc: "Black Olive, Onion, Capsicum, Mushroom, Peper, Peri Peri, Barbecue Chicken" },
            { name: "Non-veg Dominator", desc: "Pepper, Barbecue, Peri Peri Tikka, Chicken Reshers" },
            { name: "California Chicken Pizza", desc: "Smoked Chicken, Chicken Sheekh, Chicken BBQ, Chicken Salami with Extra Cheese" },
            { name: "Chicken Tikka Lababdar", desc: "Chicken Tikka and BBQ Chicken" },
            { name: "Peri Peri Chicken Pizza", desc: "BBQ Chicken, Chicken Sausages, Onion, Red Paprika, Smoked Chicken, Chicken Salami & Peri Peri" },
        ],
    },
    // Fixed Price Categories (No R/M split)
    {
        category: "Sides & Breads",
        isFixedPrice: true,
        items: [
            { name: "Paneer Tikka Garlic Bread", price: 130 },
            { name: "Plain Garlic Bread", price: 120 },
            { name: "Supreme Garlic Bread", price: 99 },
            { name: "Chicken Tikka Garlic Bread", price: 110 },
            { name: "Paneer Tikka Stuffed Garlic Bread", price: 130 },
            { name: "Sweet Corn Stuffed Garlic Bread", price: 120 },
            { name: "Garlic Bread Sticks", price: 99 },
        ],
    },
    {
        category: "Tacos & Quesadillas",
        isFixedPrice: true,
        items: [
            { name: "Mushrooms, Corns & Onion Taco's", price: 99 },
            { name: "Paneer Tikka Butter Masala Taco's", price: 120 },
            { name: "Paneer & Corn Taco's", price: 120 },
            { name: "Chicken Tikka & Chicken Salami Taco's", price: 130 },
            { name: "Paneer, Sweet Corn & Cheese Quesadilla", price: 99 },
            { name: "Chicken Tikka, Jalapenos & Cheese Quesadilla", price: 130 },
        ],
    },
];