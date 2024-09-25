import { client } from "../db.js";

export const getElectronics = async (req, res, next) => {
  try {
    // Correct the database name to "ecom"
    const data = await client
      .db("ecom")
      .collection("electronics")
      .find({})
      .toArray();

    if (data.length > 0) {
      // Check if data is not empty
      return res.status(200).json(data);
    } else {
      return res.status(404).json({ message: "No products found" }); // Handle case when no products are found
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const getClothings = async (req, res, next) => {
  try {
    // Correct the database name to "ecom"
    const data = await client
      .db("ecom")
      .collection("clothings")
      .find({})
      .toArray();

    if (data.length > 0) {
      // Check if data is not empty
      return res.status(200).json(data);
    } else {
      return res.status(404).json({ message: "No products found" }); // Handle case when no products are found
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const getAppliances = async (req, res, next) => {
  try {
    // Correct the database name to "ecom"
    const data = await client
      .db("ecom")
      .collection("homeappliances")
      .find({})
      .toArray();

    if (data.length > 0) {
      // Check if data is not empty
      return res.status(200).json(data);
    } else {
      return res.status(404).json({ message: "No products found" }); // Handle case when no products are found
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const getBeautyProducts = async (req, res, next) => {
  try {
    // Correct the database name to "ecom"
    const data = await client
      .db("ecom")
      .collection("beautyproducts")
      .find({})
      .toArray();

    if (data.length > 0) {
      // Check if data is not empty
      return res.status(200).json(data);
    } else {
      return res.status(404).json({ message: "No products found" }); // Handle case when no products are found
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
