
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const NewUser = require("./UserSchema");

  const Login = async (req, res) => {
  const { Email, Password } = req.body;
  const Useremail=await NewUser.findOne({Email})
  if (Useremail && (await bcrypt.compare(Password, Useremail.Password))) {
    res.json({message:"Login Successfull",Token: tokengenerate(Useremail._id)});
  } 
  else
  {
    res.json(" Login Failed")
  }
}
const tokengenerate = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

module.exports=Login