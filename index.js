const express = require("express");
const { dbConnection } = require("./config/config");
const app = express();
const PORT = process.env.SERVER_PORT;

const runServer = async () => {
  await dbConnection();

  app.use(express.json());
  app.use("/products", require("./routes/products"));
  app.listen(PORT, () => console.log(`server listening to port ${PORT}...`));
};

runServer();
