const Product = require('../models/Product');

const products = [
  {
    name: 'Product 1',
    price: 19.99,
    quantity: 10,
  },
  {
    name: 'Product 2',
    price: 29.99,
    quantity: 5,
  },
];

const seedProducts = async () => {
  try {
    await Product.create(products);
    console.log('Seed: Initial data seeded successfully');
  } catch (error) {
    console.error('Seed: Error seeding initial data:', error);
  }
};

module.exports = seedProducts;
