const express = require("express");
const router = express.Router();

const ProductController = require("../controller/ProductController");

router.post("/", ProductController.create);
router.get("/", ProductController.getAll);
router.put("/id/:id", ProductController.update);
router.delete("/id/:id", ProductController.delete);

router.get("/id/:id", ProductController.getById);
router.get("/name/:name", ProductController.getByName);

module.exports = router;
