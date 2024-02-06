const Product = require("./Models/product");

const mockData = [
  {
    productId: 1,
    name: "mobile",
    price: 1000,
    feature: true,
    rating: 3.5,
    createdAt: new Date(),
    company: "Amazon",
  },
  {
    productId: 2,
    name: "laptop",
    price: 2000,
    feature: false,
    rating: 4,
    createdAt: new Date(),
    company: "Amazon",
  },
  {
    productId: 3,
    name: "desktop",
    price: 3000,
    feature: true,
    rating: 5,
    createdAt: new Date(),
    company: "Amazon",
  },
  {
    productId: 4,
    name: "tv",
    price: 4000,
    feature: false,
    rating: 2,
    createdAt: new Date(),
    company: "Amazon",
  },
  {
    productId: 5,
    name: "laptop",
    price: 5000,
    feature: true,
    rating: 2.5,
    createdAt: new Date(),
    company: "Amazon",
  },
  {
    productId: 6,
    name: "desktop",
    price: 6000,
    feature: true,
    rating: 5,
    createdAt: new Date(),
    company: "Amazon",
  },
];

const seeddb = async () => {
  await Product.insertMany(mockData);
  console.log("Data seeded!");
};

module.exports = seeddb;
