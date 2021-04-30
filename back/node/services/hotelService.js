import camelCase from "camelcase-keys";

import DB from "../db";

export const getHotels = async () => {
  const res = await DB.query(
    `
  SELECT DISTINCT MAX(o.price) as price, h.*, o.discount_price FROM hotels as h, openings as o, rooms as r
    WHERE o.date = $1
    AND o.stock > 0
    AND r.id = o.room_id 
    AND h.id = r.id
    GROUP BY h.id, o.discount_price
    ORDER BY o.discount_price
    `,
    ["2020-02-14"]
  );
  return camelCase(res.rows);
};
