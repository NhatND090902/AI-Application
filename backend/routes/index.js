const express = require("express");
const controller = require("../controllers/homeController");
const router = express.Router();

router.get("/", controller.home);
router.get("/status", controller.status);

module.exports = router;
