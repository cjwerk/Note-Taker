const path = require("path");
const express = require("express");
const routes = require("./routes");
const bodyParser = require("body-parser");
const layout = require('express-layout');
const app = express();


const middlewares = [express.static(path.join(__dirname, "public"))];
app.use(middlewares);
