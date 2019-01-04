const server = require("./app");
const PORT = 3300;
server.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});

module.exports = server;
