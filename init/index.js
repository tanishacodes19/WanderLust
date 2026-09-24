const mongoose = require("mongoose");
const initdata = require("./data.js");
const Listing = require("../models/listing.js");

async function main() {
    await mongoose.connect(
        "mongodb+srv://tanishaagarwal0109_db_user:KVEB2K80Jjxw4wwj@cluster0.ic3m34x.mongodb.net/wanderlust"
    );
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