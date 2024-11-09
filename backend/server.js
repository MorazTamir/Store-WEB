/* Assignment 4: Store Project */
/* Submitted by: Ninel Benyish & Moraz Tamir */

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

const uri = process.env.DATABASE_URL;

const productSchima = mongoose.Schema({
  id: Number,
  name: String,
  imageUrl: String,
  description: String,
  price: Number,
});

const Product = mongoose.model("carts_208397455", productSchima);

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", async (req, res, next) => {
  try {
    const data = await Product.find({});
    res.status(200).send(data);
  } catch (err) {
    next(err);
  }
});

mongoose
  .connect(uri)
  .then(
    app.listen(PORT, () => {
      console.log(`Server Started at ${PORT}`);
    })
  )
  .catch((error) => {
    console.log(error);
  });
