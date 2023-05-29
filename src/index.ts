// console.log("Hello Ylobyte 🥚!");
import bodyParser from "body-parser";
import compression from "compression";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import http from "http";
import mongoose from "mongoose";

const dotenv = require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;

const app = express();

app.use(
  cors({
    credentials: true,
  })
);

app.use(bodyParser.json());
app.use(compression());
app.use(cookieParser());

const server = http.createServer(app);

server.listen(8100, () => {
  console.log("Server running on http://localhost:8080");
});

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI);
mongoose.connection.on("error", (err) => {
  console.error(err);
});
