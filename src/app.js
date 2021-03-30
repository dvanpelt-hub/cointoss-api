require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const coinsRouter = require("./coins/coins-router");
// const errorHandler = require("./errorHandler");
const { NODE_ENV } = require("./config");
const { CLIENT_ORIGIN } = require("../cors/cors.js");

const app = express();
const morganOption = NODE_ENV === "production" ? "tiny" : "common";

app.use(cors(CLIENT_ORIGIN));

app.use(express.json());
app.use(morgan(morganOption));
app.use(helmet());
// app.use(errorHandler);

app.use("/api/v1", coinsRouter);

module.exports = app;
