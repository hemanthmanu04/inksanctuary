import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";
const app = express();
app.use(express.json());

app.use(
  cors({
    origin: ["https://inksanctuary-frontend.vercel.app"],
    methods: ["POST", "GET", "DELETE", "PUT"],
    credentials: true,
  })
);

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome to MY store");
});

app.use("/books", booksRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("Connected");
    app.listen(PORT, () => {
      console.log(`App listening to port :${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
