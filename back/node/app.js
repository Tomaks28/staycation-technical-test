import express from "express";
import cors from "cors";

import { getUser } from "./services/userService";
import hotelRoute from "./routes/hotelRoute";

const app = express();

app.use(cors());
app.use(hotelRoute);

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.get("/users/:id", async (req, res) => {
  const user = await getUser(req.params.id);
  res.send(user);
});

app.all("*", (req, res) => {
  res.send("Route doesn't exists!");
});

app.listen(9000, function () {
  console.log("Example app listening on port 9000!");
});
