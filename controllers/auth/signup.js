const bcrypt = require("bcrypt");

const { User } = require("../../models/user");

const HttpError = require("../middlewares/HttpError");


const signup = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      throw HttpError(409, "Email is already in use");
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({ ...req.body, password: hashPassword });

    res.status(201).json({
      status: "success",
      code: 201,
      data: {
        newUser,
      },
      //   name: newUser.name,
      //   email: newUser.email,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = signup;