const mongoose = require("mongoose");
require("dotenv").config();

// const mongoURL = "mongodb://127.0.0.1:27017/hotels";
// const mongoURL = "mongodb+srv://imajay204:ajay@cluster0.heohtq6.mongodb.net/hoteldb";
const local_url=process.env.LOCAL_URL
MONGO_URL=process.env.MONGO_URL
mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("connected", () => {
  console.log("connected to mongoDB");
});db.on("error", (err) =>{
    console.log("Mongodb connection error",err);
})
db.on("disconnected", () => {
  console.log("disconnected to mongoDB");
});

module.exports = db;