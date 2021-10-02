const cities = require("./cities");
const { places, descriptors } = require("./seedHelpers")

const { connectDB, closeConnection } = require('../db/mongoose');

connectDB();

const Campground = require("../models/campgroundSchema");

function sample(array) {
    return array[Math.floor(Math.random() * array.length)]
}

const seedDB = async () => {
    await Campground.deleteMany({})

    for (let i = 0; i < 50; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;

        const camp = new Campground({
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            image: "https://picsum.photos/200/300?random=" + random1000,
            description: "Camping, forest, campfire, food over fire, coffee, mist, woods, sunsets, lakes, leaves and trees.",
            price: price
        })
        console.log(camp);
        await camp.save()
    }
}

seedDB().then(() => {
    closeConnection()
})