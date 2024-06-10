const mongoose = require("mongoose");
const mongoURL = "mongodb://127.0.0.1:27017/hotels";

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("connected", () => {
  console.log("connected to mongoDB");
});
db.on("error", (err) =>{
    console.log("Mongodb connection error",err);
})
db.on("disconnected", () => {
  console.log("disconnected to mongoDB");
});

module.exports = db;