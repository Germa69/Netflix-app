const express = require("express");
const router = express.Router();
const authToken = require("../verifyToken");

const userController = require("../app/controllers/UserController");

router.get("/", authToken, userController.all);
router.get("/stats", userController.stats);
router.get("/find/:id", userController.find);
router.put("/:id", authToken, userController.update);
router.delete("/:id", authToken, userController.delete);

module.exports = router;
