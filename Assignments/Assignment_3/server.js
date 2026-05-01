const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Todo App is running successfully!");
});

app.listen(PORT, () => {
  console.log("Server is running on port 3000");
});