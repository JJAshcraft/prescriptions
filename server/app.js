const express = require("express");
const app = express();
const apiRoutes = require("./routes/apiRoutes.js");

app.use(express.json());

app.get("/", (req, res, next) => {
  res
    .status(200)
    .send({ message: "Welcome to the Prescriptions API" })
    .catch(err => {
      res.status(500).json({ message: err.message });
    });
});

app.use("/api", apiRoutes);

module.exports = app;
