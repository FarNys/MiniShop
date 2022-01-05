const express = require("express");
const router = express.Router();
const Product = require("../models/products");
router.get("/", async (req, res) => {
  try {
    const getProducts = await Product.find({});
    if (getProducts.length < 1) {
      res.status(200).json("no Product");
    } else {
      res.status(200).json(getProducts);
    }
  } catch (error) {
    console.log(error);
  }
});
router.post("/", async (req, res) => {
  const { name, description, image, category, features, price } = req.body;
  const product = new Product({
    name,
    description,
    image,
    category,
    features,
    price,
  });
  try {
    const saveProduct = await product.save();
    res.status(200).json(saveProduct);
  } catch (error) {
    res.json(error);
  }
});
router.delete("/", async (req, res) => {
  try {
    await Product.deleteMany({});
    res.status(200).json("All Product Deleted");
  } catch (error) {
    res.status(500).json("Something Went WronG");
  }
});

module.exports = router;
