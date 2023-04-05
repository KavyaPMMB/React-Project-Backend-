const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const NewUser = require("./UserSchema");

const SignUp = async (req, res) => {
  const { FirstName, SecondName, Email, Password } = req.body;
  if (Password.length < 6) {
    return res.status(400).json({ error: "Password must have at least 6 characters" });
  }
  const condition = await NewUser.findOne({
    $or: [{ FirstName }, { Email }],
  });
  if (condition) {
    res.json("User Already exist");
  } else {
    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(Password, salt);
    const Userdetails = await NewUser.create({
      FirstName,
      SecondName,
      Email,
      Password: hashedpassword,
    });
    res.json({
      id: Userdetails._id,
      FirstName: Userdetails.FirstName,
      SecondName: Userdetails.SecondName,
      Email: Userdetails.Email,
      Password: Userdetails.Password,
      Token: tokengenerate(Userdetails._id),
    });
  }
};
const tokengenerate = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

module.exports = SignUp;
