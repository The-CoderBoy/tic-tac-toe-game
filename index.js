"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var port = 80;
var path = require("path");
app.use(express.static('views'));
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "./views/index.html"));
});
app.listen(port, function () {
    console.log("Server started on port ".concat(port));
});
