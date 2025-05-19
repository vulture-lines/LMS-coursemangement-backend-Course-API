const { Schema, model } = require("mongoose");

const certificateCounterSchema = new Schema({
  year: { type: Number, required: true, unique: true },
  count: { type: Number, default: 0 }
});

module.exports = model("CertificateCounter", certificateCounterSchema);
