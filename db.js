
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const mongoURI = process.env.MONGO_URI;

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    // Retrieve the "food_items" collection
    let collection = mongoose.connection.db.collection("food_items");

    // Find all documents in the collection
    const data = await collection.find({}).toArray();
    global.food_items = data;

    // Retrieve the "foodCategory" collection
    collection = mongoose.connection.db.collection("foodCategory");
    const dataCat = await collection.find({}).toArray();
    global.foodCategory = dataCat;
    console.log('====================================');
    // console.log(global.food_items);
    console.log('====================================');

  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    // Handle the connection error here
    throw error; // You may choose to throw the error or handle it as appropriate for your application
  }
};

module.exports = mongoDB;
