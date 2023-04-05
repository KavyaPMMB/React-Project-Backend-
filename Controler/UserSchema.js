const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  FirstName: { type: String },
  SecondName: { type: String },
  Email: { type: String },
  Password: { type: String },
});
const NewUser = mongoose.model("NewUser", UserSchema);

module.exports = NewUser;
