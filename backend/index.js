const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/users");
const pinRoute = require("./routes/pins");

dotenv.config();

app.use(express.json());



mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true }, function (err) {
    if (err) {
        console.log("connection error:", err);
    } else {
        console.log("MongoDB connection successful");
    }
});


app.use("/api/users", userRoute);
app.use("/api/pins", pinRoute);


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Backend server is running!");
});