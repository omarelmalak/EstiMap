const mongoose = require("mongoose");

const userModel = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

userModel.methods.matchPassword = async function(enteredPassword) {
  return this.password === enteredPassword;
};

const User = mongoose.model("User", userModel);

module.exports = User;
