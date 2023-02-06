const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const mongoose = require("mongoose");
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json');


require("dotenv").config();

const app = express();
const formatsLogger = app.get("env") === "development" ? "dev" : "short";
const { HOST } = process.env;


const authRouter = require("./routes/api/auth");

// const sellRouter = require("./routes/api/sell");
// const goodHandsRouter = require("./routes/api/goodHands");
// const lostFoundRouter = require("./routes/api/lostFound");
const userRouter = require("./routes/api/userProfile");
const newsRouter = require("./routes/api/news");
const noticesRouter = require("./routes/api/notices");


const friendsRouter = require("./routes/api/friends");



app.use(cors());
app.use(logger(formatsLogger));
app.use(express.json());
app.use(express.static("public"))

// ROUTES:
app.use("/api/auth", authRouter);

// app.use("/sell", sellRouter);
// app.use("/goodHands", goodHandsRouter);
// app.use("/lostFound", lostFoundRouter);

app.use("/api/userprofile", userRouter);
app.use("/api/news", newsRouter);
app.use('/api/notices', noticesRouter);


app.use("/api/friends", friendsRouter);

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))


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
