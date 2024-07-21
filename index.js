const express = require("express");
require("dotenv").config();
const app = express();
const { db } = require("./db/connect");
const userRoutes = require("./routes/userRoutes");
const port = process.env.PORT || 8000;
app.use(express.json());
app.use("/api", userRoutes);
db();
app.get("/", (req, res) => {
  res.send(`<h1>Welcome to the NodeJS  Backend Assignment</h1>`);
});

app.listen(port, () => {
  console.log(`Server is running on port http//:localhost:${port}`);
});
