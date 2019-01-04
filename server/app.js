const express = require("express");
const app = express();
const errorHandler = require("./errorHandler");
const apiRoutes = require("./routes/apiRoutes.js");

app.use(express.json());

app.get("/", (req, res, next) => {
  res
    .status(200)
    .send({ message: "Welcome to the Prescriptions API" })
    .catch(err =>
      next({
        code: 500
      })
    );
});

app.use("/api", apiRoutes);

app.use(errorHandler);

module.exports = app;
