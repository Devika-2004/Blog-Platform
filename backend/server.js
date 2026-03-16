const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const testRoutes = require("./routes/testRoutes");
const blogRoutes = require("./routes/blogRoutes");

const app = express();

// ✅ Middleware FIRST
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/blogPlatform")
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

// ✅ Routes AFTER middleware
app.use("/api/auth", authRoutes);
app.use("/api/test", testRoutes);
app.use("/api/blogs", blogRoutes);

// Test Route
app.get("/", (req, res) => {
    res.send("Blog Platform API Running...");
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
