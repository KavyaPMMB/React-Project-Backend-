const mongoose = require("mongoose");

const CustomerSchema = mongoose.Schema({
  Name: { type: String },
  Email: { type: String },
  Address: { type: String },
City: { type: String},
  State:{type:String},
  PinCode:{type:Number},
  Country:{type:String},

});
const customer = mongoose.model("customer", CustomerSchema);

module.exports = customer;
