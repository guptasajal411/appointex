const User = require("../models/userModel");

exports.getHome = (req, res) => {
    res.status(200).send({ status: "ok", message: "server is up and running" });
}