import { client } from "./db.js";

export const products = [
  {
    img: "https://sdcdn.io/mac/in/mac_sku_M0N904_1x1_0.png?width=1080&height=1080",
    name: "MAC Matte Lipstick, Ruby Woo",
    price: 1999,
    category: "beauty-products",
  },
  {
    img: "https://m.media-amazon.com/images/I/61fqwozv1BL.jpg",
    name: "Lakme Absolute Perfect Radiance Day Cream, 50g",
    price: 799,
    category: "beauty-products",
  },
  {
    img: "https://m.media-amazon.com/images/I/71d9rPW5DIL.jpg",
    name: "Maybelline SuperStay Foundation, Warm Nude",
    price: 1199,
    category: "beauty-products",
  },
  {
    img: "https://images-cdn.ubuy.co.in/63591d451a3851465c0e7e13-anastasia-beverly-hills-brow-wiz.jpg",
    name: "Anastasia Beverly Hills Brow Wiz, Dark Brown",
    price: 2499,
    category: "beauty-products",
  },
  {
    img: "https://niram.in/cdn/shop/products/02-nivea-nourishing-body-milk-200ml-pixies_1_1024x.jpg?v=1624660418",
    name: "Nivea Nourishing Body Milk, 400ml",
    price: 499,
    category: "beauty-products",
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/O94291/neutrogena-ultra-sheer-dry-touch-sunblock-spf-50-88ml-2-1720504399.jpg",
    name: "Neutrogena UltraSheer Dry Touch Sunscreen SPF 50, 88ml",
    price: 699,
    category: "beauty-products",
  },
  {
    img: "https://m.media-amazon.com/images/I/61pRkRs9OQL.jpg",
    name: "Biotique Bio Honey Gel Face Wash, 150ml",
    price: 179,
    category: "beauty-products",
  },
  {
    img: "https://m.media-amazon.com/images/I/51tTh9fvanL._AC_UF1000,1000_QL80_.jpg",
    name: "L'Oreal Paris Total Repair 5 Shampoo, 1L",
    price: 599,
    category: "beauty-products",
  },
  {
    img: "https://m.media-amazon.com/images/I/51Y+0PmYblL.jpg",
    name: "Himalaya Purifying Neem Face Wash, 200ml",
    price: 199,
    category: "beauty-products",
  },
  {
    img: "https://img.tatacliq.com/images/i16//1348Wx2000H/MP000000017134157_1348Wx2000H_202403131803101.jpeg",
    name: "The Body Shop Tea Tree Oil, 10ml",
    price: 895,
    category: "beauty-products",
  },
];

export const insertProducts = async (collectionName) => {
  try {
    const db = client.db("ecom"); // Select the database
    const collection = db.collection(collectionName); // Select the collection

    // Insert many documents
    const result = await collection.insertMany(products);
    console.log(`${result.insertedCount} documents were inserted`);
  } catch (error) {
    console.error(`Error inserting documents: ${error.message}`);
  }
};
