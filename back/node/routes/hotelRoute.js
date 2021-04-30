const router = require("express").Router();
import { getHotels, toto } from "../services/hotelService";

// define hotel route
router.get("/hotels", async (req, res) => {
  const hotels = await getHotels();
  res.send(hotels);
});

module.exports = router;
