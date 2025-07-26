const express = require("express");

module.exports = (req, res, next) => {
  // Example middleware: log request method and URL
  console.log(`${req.method} ${req.url}`);
  next();
};
