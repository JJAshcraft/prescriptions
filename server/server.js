const express = require("express");
const server = express();
const apiRoutes = require("./routes/apiRoutes.js");
const PORT = 3300;

server.use(express.json());

server.get("/", (req, res) => {
  res.send("Prescriptions API");
});

server.use("/api", apiRoutes);

server.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
