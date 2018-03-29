var http = require("http");
var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world');
});
app.listen(3000, "localhost", function () {
  console.log("开始监听");
});