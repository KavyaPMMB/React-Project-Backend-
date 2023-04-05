const mongoose = require("mongoose");

const ClientSchema = mongoose.Schema({
  Name: { type: String },
  UserName: { type: String },
  Email: { type: String },
  SignedStatus: { type: Boolean,default: false },
  Role: { type: String},
  PhoneNumber:{type:Number},

});
const client = mongoose.model("client", ClientSchema);

module.exports = client;
