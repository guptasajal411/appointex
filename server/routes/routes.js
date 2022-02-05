const express = require('express');
const app = express();
const cors = require('cors');
const pageController = require("../controllers/pageController");
app.use(cors());
app.use(express.json());

app
    .route("/")
    .get(pageController.getHome);

module.exports = app;