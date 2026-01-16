const{ model } = require("mongoose");

const { HoldingsSchemas } = require("../schemas/HoldingsSchemas");

const HoldingModel = new model("holding", HoldingsSchemas);

model.exports = { HoldingModel };