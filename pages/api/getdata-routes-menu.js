import { query } from "../../lib/db";

export default async function handler(req, res) {
  //const route = req.body.route;
  try {
    const querySql = `Select * From menu Where status = '1' Order by sort`;
    const menu = await query({ query: querySql });
    res.status(200).json({ menu });
  } catch (error) {
    // unhide to check error
    res.status(500).json({ error: error.message });
  }
}
//if needed
// export const config = {
//   api: {
//     externalResolver: true,
//   },
// };
