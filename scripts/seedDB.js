const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/jewelry_db"
);

const products = [
    {
      handle: "black-resin-onyx-earrings",
      title: "Black Resin & Onyx Earrings",
      body: "Black resin and onyx earrings with white matte Swarovski at the top of the clip-on earrings. Earrings are offered in post earrings as well for pierced ears",
        tags: "earrings",
        price: 298,
        img: "products/IMG_7882.jpg?v=1596659139"
    }
]