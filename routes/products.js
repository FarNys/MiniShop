const express = require("express");
const router = express.Router();
const Product = require("../models/products");
router.get("/", async (req, res) => {
  try {
    const getProducts = await Product.find({});
    if (getProducts.length > 0) {
      res.status(200).json(getProducts);
    }
  } catch (error) {
    console.log(error);
  }
});
router.post("/", async (req, res) => {
  const { name, description, image, category, features, price } = req.body;
  console.log(req.body, 36);
  const product = new Product({
    name,
    description,
    image,
    category,
    features,
    price,
    mytimestamp: Date.now(),
  });
  try {
    const saveProduct = await product.save();
    res.status(200).json({ saveProduct });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json(`Product with id:${id} deleted`);
  } catch (error) {
    res.status(500).json("Something Went WronG");
  }
});
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const product = await Product.findById(id);
    if (!product) {
      res.status(404).json("no product found");
    } else {
      res.status(200).json(product);
    }
  } catch (error) {
    res.status(500).json("Something Went WronG");
  }
});
module.exports = router;
