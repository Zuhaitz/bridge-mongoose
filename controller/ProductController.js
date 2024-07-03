const Product = require("../models/Product");

const ProductController = {
  async create(req, res) {
    try {
      const product = await Product.create(req.body);
      res.status(201).send(product);
    } catch (error) {
      console.error(error);
      res.status(400).send(error);
    }
  },

  async getAll(req, res) {
    try {
      const products = await Product.find();
      res.send(products);
    } catch (error) {
      console.error(error);
      res.status(400).send(error);
    }
  },

  async update(req, res) {
    try {
      const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.send(product);
    } catch (error) {
      console.error(error);
      res.status(400).send(error);
    }
  },

  async delete(req, res) {
    try {
      const product = await Product.findByIdAndDelete(req.params.id);
      if (!product) res.status(400).send({ message: "Product does not exist" });
      res.send({ message: "Product deleted successfully", product });
    } catch (error) {
      console.error(error);
      res.status(400).send(error);
    }
  },

  async getById(req, res) {
    try {
      const products = await Product.findById(req.params.id);
      res.send(products);
    } catch (error) {
      console.error(error);
      res.status(400).send(error);
    }
  },

  async getByName(req, res) {
    try {
      const products = await Product.findOne({ name: req.params.name });
      res.send(products);
    } catch (error) {
      console.error(error);
      res.status(400).send(error);
    }
  },
};

module.exports = ProductController;
