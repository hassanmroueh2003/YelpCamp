const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');

const Campground = require('../models/campground');
mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp')

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDb = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 50; i++) {
        const random1000 = Math.floor(Math.random() * 1000);

        // Generate multiple random image URLs
        const images = Array.from({ length: 3 }, () => `https://picsum.photos/400?random=${Math.random()}`);

        const camp = new Campground({
            author: '66b3bd8c5dbf46148eb5d236',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: sample(descriptors) + ' ' + sample(places),
            images: images, // Assign the array of images
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quas.',
            price: Math.floor(Math.random() * 20) + 10
        });

        await camp.save();
    }
}

seedDb().then(() => {
    mongoose.connection.close();
});
