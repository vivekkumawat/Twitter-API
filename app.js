const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
const statusCode = require("./src/helpers/statusCode");
// Import Routes
const indexRouter = require("./src/routes/index");

// Connect to MongoDB ATLAS
mongoose.connect(
  process.env.DB_STRING,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (error) => {
    if (error) {
      console.log("Unable to connect to DB " + error);
    }
    console.log("Connected to DB Successfully");
  }
);

// Parse JSON req/res
app.use(express.json());

// Enable CORS
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.get("/", (req, res) => {
  return res
    .status(statusCode.success.code)
    .json({ error: false, message: "Hello from Twitter." });
});

// Console Log The Requested Endpoint URL
app.use("/", (req, res, next) => {
  console.log(`API Call from: ${req.originalUrl}`);
  next();
});

// Routes Middlewares
app.use("/api", indexRouter);

app.listen(port, () => {
  console.log(`Server up and running on port ${port}`);
});
