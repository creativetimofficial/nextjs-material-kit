import { query } from "../../lib/db";

export default async function handler(req, res) {
  const route = req.body.route;
  try {
    const querySql = `Select m.url,
              p.title,
              p.keywords,
              p.description,
              p.name,
              p.content_page,p.content_page_left
      From menu m
      Left Join pages p On p.id = m.pages_id
      Where m.url=? Limit 1`;

    const valueParams = [route];
    const page = await query({ query: querySql, values: valueParams });

    res.status(200).json({ page: page[0] });
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
