require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/connectDB");
const taskRoute = require("./routes/taskRoute");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// route action
app.use("/api/tasks", taskRoute);

// Route
app.get("/", (req, res) => {
  res.send("OK");
});

const startServer = async () => {
  const PORT = process.env.PORT || 5000;
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server On Port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
