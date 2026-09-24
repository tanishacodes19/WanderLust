const mongoose = require("mongoose");
const initdata = require("./data.js");
const Listing = require("../models/listing.js");
require("dotenv").config();

async function main() {
    await mongoose.connect(process.env.ATLASDB_URL);
}

main()
    .then(() => {
        console.log("Connection successful");
    })
    .catch((err) => {
        console.log(err);
    });

const initDB = async () => {
    await Listing.deleteMany({});
    await Listing.insertMany(initdata.data);
    console.log("data was initialized");
};

initDB();