const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

const MONGODB_URI =
  process.env.MONGODB_URI ||
  "mongodb+srv://val:pnv050212@cluster0.mgb3j.mongodb.net/Dogs?retryWrites=true&w=majority";

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((x) =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch((err) => console.error("Error connecting to mongo", err));

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000", "https://plant-trouve.herokuapp.com"], //Swap this with the client url
  })
);
