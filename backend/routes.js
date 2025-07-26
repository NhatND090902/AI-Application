const express = require("express");
const homeRoutes = require("./routes/index");
const router = express.Router();

router.use("/", homeRoutes);

module.exports = router;
