const Product = require("../Models/product");

// Add a new product
const addProduct = async (req, res) => {
  try {
    const { name, price, feature, rating, company } = req.body.product;

    const response = await Product.create({
      name,
      price,
      feature,
      rating,
      company,
    });

    const productId = response._id.toHexString();

    const resp = await Product.findByIdAndUpdate(response._id, {
      productId,
      name,
      price,
      feature,
      rating,
      company,
    });

    // console.log(resp);

    res.status(200).json({ resonse: "Product created successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

// geting all product

const getProduct = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ response: products });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

// get a product

const getProductById = async (req, res) => {
  try {
    const productId = req.params.productId;
    const product = await Product.findOne({ productId });
    res.status(200).json({ response: product });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

// update a product

const updateProduct = async (req, res) => {
  try {
    const productId = req.params.productId;
    const { name, price, feature, rating, company } = req.body;
    await Product.findOneAndUpdate(
      { productId },
      { name, price, feature, rating, company },
      { new: true }
    );
    res.status(200).json({ res: "Product updated successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

// delete a product

const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.productId;
    await Product.findOneAndDelete({ productId });
    res.status(200).json({ res: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

// fatching featured product

const featuredProduct = async (req, res) => {
  try {
    const products = await Product.find({ feature: true });
    res.status(200).json({ response: products });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

// product with less than certain price

const lessThanPrice = async (req, res) => {
  try {
    const price = req.params.price;
    const products = await Product.find({ price: { $lt: price } });
    res.status(200).json({ response: products });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

// product rating higher then certain value

const ratingGreaterThan = async (req, res) => {
  try {
    const rating = req.params.rating;
    const products = await Product.find({ rating: { $gt: rating } });
    res.status(200).json({ response: products });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  addProduct,
  getProduct,
  getProductById,
  updateProduct,
  deleteProduct,
  featuredProduct,
  lessThanPrice,
  ratingGreaterThan,
};
