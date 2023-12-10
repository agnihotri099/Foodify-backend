// const mongoose = require("mongoose");
// const mongoURI =
//   "mongodb+srv://agnihotri099:PRKOS9LRzqKHA1aE@cluster0.p9jx2ng.mongodb.net/gofoodmern?retryWrites=true&w=majority";
// const mongoDB = async () => {
//   await mongoose
//     .connect(mongoURI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     })
//     .then(async () => {
//       console.log("Connected to MongoDB");
//       // Your code logic after successful connection
//       const fetched_data = await mongoose.connection.db.collection(
//         "food_items"
//       );

//       fetched_data.find({}).toArray(function (err, data) {
//         if (err) console.log(err);
//         else console.log(data);
//       });
//     })
//     .catch((error) => {
//       console.error("Error connecting to MongoDB:", error);
//       // Handle the connection error
//     });
// };

// module.exports = mongoDB;

// const mongoose = require("mongoose");
// const mongoURI =
//   "mongodb+srv://agnihotri099:PRKOS9LRzqKHA1aE@cluster0.p9jx2ng.mongodb.net/gofoodmern?retryWrites=true&w=majority";
// // "mongodb://agnihotri099:PRKOS9LRzqKHA1aE@ac-iip5qef-shard-00-00.p9jx2ng.mongodb.net:27017,ac-iip5qef-shard-00-01.p9jx2ng.mongodb.net:27017,ac-iip5qef-shard-00-02.p9jx2ng.mongodb.net:27017/gofoodmern?ssl=true&replicaSet=atlas-7du0w7-shard-0&authSource=admin&retryWrites=true&w=majority";

// const mongoDB = async () => {
//   try {
//     await mongoose.connect(mongoURI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("Connected to MongoDB");

//     // Your code logic after successful connection
//     const fetched_data = await mongoose.connection.db.collection("food_items");
//     // console.log(fetched_data);
//     fetched_data.find({}).toArray(function (err, data) {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(data);
//       }
//     });
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//     // Handle the connection error
//   }
// };

// module.exports = mongoDB;

// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// dotenv.config();

// const mongoURI =process.env.MONGO_URI;

// const mongoDB = async () => {
//   try {
//     await mongoose.connect(mongoURI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("Connected to MongoDB");

//     // Retrieve the "food_items" collection
//     let collection = mongoose.connection.db.collection("food_items");

//     // Find all documents in the collection
//     const data = await collection.find({}).toArray();
//     global.food_items = data;
//     // console.log(data);
//     collection = mongoose.connection.db.collection("foodCategory");
//     const dataCat = await collection.find({}).toArray();

//     global.foodCategory = dataCat;

//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//     // Handle the connection error
//   }
// };

// module.exports = mongoDB;


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
