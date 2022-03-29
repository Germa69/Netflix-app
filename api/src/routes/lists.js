const express = require("express");
const router = express.Router();
const authToken = require("../verifyToken");

const listController = require("../app/controllers/ListController");

router.get("/", authToken, listController.all);
router.post("/", authToken, listController.create);
router.put("/:id", authToken, listController.update);
router.delete("/:id", authToken, listController.delete);

module.exports = router;
