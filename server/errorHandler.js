const errorHandler = (err, req, res, next) => {
  switch (err.code) {
    case 404:
      res.status(404).send({
        title: "Not Found",
        message: err.message
      });
    case 500:
      res.status(500).send({
        title: "Internal Server Error",
        message: err.message
      });
  }
};

module.exports = errorHandler;
