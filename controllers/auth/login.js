const jwt = require("jsonwebtoken");
const { User } = require("../../models/user");
const HttpError = require("../middlewares/HttpError");
const { SECRET_KEY } = process.env;

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !user.comparePassword(password)) {
      throw new HttpError(401, "Email or password invalid");
    }

    const payload = {
      id: user._id,
    };

    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
    console.log(token);
    const result = await User.findByIdAndUpdate(user._id, { token });
    res.status(200).json({
      status: "success",
      code: 201,
      token,
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
module.exports = login;