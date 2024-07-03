const express = require("express");
const { dbConnection } = require("./config/config");
const app = express();
const PORT = 3000;
app.use(express.json());

const runServer = async () => {
  await dbConnection();

  app.listen(PORT, () => console.log(`server listening to port ${PORT}...`));
};

runServer();
