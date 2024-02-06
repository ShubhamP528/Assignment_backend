const express = require("express");
const router = express.Router();
const requireAuth = require("../middlerware/requireAuth");

const {
  addProduct,
  getProduct,
  getProductById,
  updateProduct,
  deleteProduct,
  featuredProduct,
  lessThanPrice,
  ratingGreaterThan,
} = require("../Controller/product");

router.get("/hii", (req, res) => {
  console.log("done");
});

router.get("/products", requireAuth, getProduct);

router.post("/product", requireAuth, addProduct);

router.get("/product/:productId", requireAuth, getProductById);

router.patch("/product/:productId", requireAuth, updateProduct);

router.delete("/product/:productId", requireAuth, deleteProduct);

router.get("/featuredProduct", requireAuth, featuredProduct);

router.get("/lessThanPrice/:price", requireAuth, lessThanPrice);

router.get("/ratingGreaterThan/:rating", requireAuth, ratingGreaterThan);

module.exports = router;
