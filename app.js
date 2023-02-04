const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const formatsLogger = app.get("env") === "development" ? "dev" : "short";
const { HOST } = process.env;

const authRouter = require("./routes/api/auth");

const friendsRouter = require("./routes/api/friends");

app.use(cors());
app.use(logger(formatsLogger));
app.use(express.json());

// ROUTES:
app.use("/api/auth", authRouter);


app.use("/api/friends", friendsRouter);

mongoose.set("strictQuery", true);
mongoose.connect(HOST, () => console.log("DB is connect"));

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});
module.exports = app;
