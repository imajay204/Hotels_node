const mongoose = require("mongoose");
require("dotenv").config();

// const mongoURL = "mongodb://127.0.0.1:27017/hotels";
// const mongoURL = "mongodb+srv://imajay204:ajay@cluster0.heohtq6.mongodb.net/hoteldb";
const local_url=process.env.LOCAL_URL
mongoURL=process.env.DB_URL||local_url;
mongoose.connect(mongoURL, {
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