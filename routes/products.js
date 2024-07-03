const express = require("express");
const router = express.Router();

const ProductController = require("../controller/ProductController");

router.post("/", ProductController.create);
router.get("/", ProductController.getAll);
router.put("/id/:id", ProductController.update);

module.exports = router;
