const express = require("express");
const homeRoutes = require("./index");
const router = express.Router();

router.use("/", homeRoutes);

module.exports = router;
