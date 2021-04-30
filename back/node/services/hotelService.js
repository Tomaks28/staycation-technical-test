import camelCase from "camelcase-keys";

import DB from "../db";

export const getHotels = async () => {
  const res = await DB.query(
    `
    SELECT DISTINCT MAX(o.price) as price, re.hotel_id, h.*, o.discount_price, COUNT(re.hotel_id) as nb_reviews, AVG(re.score) as avg_score
FROM reviews as re, hotels as h, rooms as r, openings as o
WHERE re.hotel_id IN (SELECT h.id
FROM hotels as h, openings as o, rooms as r
WHERE 
r.id = o.room_id
AND h.id = r.id)
AND o.date = $1
AND o.stock >0
AND re.hotel_id = h.id
AND r.id = o.room_id
AND h.id = r.id
GROUP BY re.hotel_id, h.id, o.discount_price
ORDER BY o.discount_price
    `,
    ["2020-02-14"]
  );
  return camelCase(res.rows);
};
