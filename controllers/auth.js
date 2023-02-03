const User = require("../models/user");
const bcrypt = require("bcryptjs");

const HttpError = require("../middlewares/HttpError");

const registration  = async (req, res, next) => {
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

const login = async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user || !user.comparePassword(password)) {
        throw new HttpError(409, "Email or password invalid");
      }
  
      const result = await User.findByIdAndUpdate(user._id);
      res.status(201).json({
        status: "success",
        data: {
          result,
        },
        // name: user.name,
        // email: user.email,
      });
    } catch (error) {
      next(HttpError(500));
    }
  };

const getCurrent = async (req, res) => {
  const { email } = req.user;

  res.json({ email});
};

const logout = async (req, res, next) => {
    try {
      const { _id } = req.user;
      await User.findByIdAndUpdate(_id, { token: "" });
      res.status(204).json({ message: "Logout success" });
    } catch (error) {
      next(error);
    }
  };

module.exports = {
  login,
  registration,
  getCurrent,
  logout,
};