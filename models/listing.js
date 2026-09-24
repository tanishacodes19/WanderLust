const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        type: String,
        set: (v) => 
            v === "" 
                ? "https://unsplash.com/photos/dramatic-sunset-over-a-dark-mountain-valley-j3f1lwXBuAI"
                : v.url,
    },
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;