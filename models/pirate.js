const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pirateSchema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  position: { type: String },
  crew: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Pirate = mongoose.model("Pirate", pirateSchema);

module.exports = Pirate;

