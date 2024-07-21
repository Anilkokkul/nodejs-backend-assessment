const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  company_name: { type: String },
  city: { type: String },
  state: { type: String },
  zip: { type: Number },
  email: { type: String, required: true, unique: true },
  web: { type: String },
  age: { type: Number, required: true },
});

module.exports = mongoose.model("Users", userSchema);
