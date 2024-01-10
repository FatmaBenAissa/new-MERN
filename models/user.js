const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userSchema = new schema({
  img: String,
  name: String,
  Lastname: String,
  age: Number,
  email: { type: String, unique: true },
  isAdmin: { type: Boolean, default: false },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
