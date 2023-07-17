const express = require("express");
const app = express();
const task = require("./routes/task");
const connectDB = require("./db/connect");
require("dotenv").config();
app.use(express.static("./public"));
app.use(express.json());
const notFound = require("./middleware/notFound");

const errorHandlerMiddleware = require("./middleware/errorHandler");

app.use("/api/v1/tasks", task);

app.use(notFound);

app.use(errorHandlerMiddleware);

const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log("Listening to " + port);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
