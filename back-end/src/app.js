//server application

const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "..", ".env") });
const express = require("express");
const app = express();
const cors = require("cors");
const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");
const rootcontrolRouter = require("./rootcontrol/rootcontrol.router")



app.use(cors());
app.use(express.json());

app.use("/", rootcontrolRouter)

app.use(notFound);
app.use(errorHandler);

module.exports = app;