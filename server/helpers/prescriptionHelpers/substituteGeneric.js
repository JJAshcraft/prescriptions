const express = require("express");

const substituteGeneric = async (req, res, next) => {
  res.send("testing endpoint");
};

module.exports = substituteGeneric;
