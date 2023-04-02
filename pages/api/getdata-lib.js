import { query } from "../../lib/db";

export default async function handler(req, res) {
  try {
    const querySql = "SELECT productID,name, price FROM products";
    const valueParams = [];
    //console.log("=================================");
    const data = await query({ query: querySql, values: [valueParams] });
    //console.log("data", data);
    res.status(200).json({ products: data });
  } catch (error) {
    // unhide to check error
    // res.status(500).json({ error: error.message });
  }
}
