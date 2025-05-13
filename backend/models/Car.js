const mongoose = require("mongoose");

const carSchema = new mongoose.Schema(
  {
    model: { type: String, required: true },
    image: { type: String },
    description: { type: String },
    range: { type: Number, required: true },
    pricePerDay: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Car", carSchema);
