const {
    generateRefreshToken,
    generateAccessToken,
    calculateExpiresTime,
} = require("../../helpers");
const { User } = require("../../models/user");

const { BASE_URL } = process.env;

const googleAuth = async (req, res) => {
    const { _id } = req.user

    const accessToken = generateAccessToken(req.user);
    const refreshToken = generateRefreshToken(req.user);
    await User.findByIdAndUpdate(_id, { accessToken, refreshToken });
    const expiresIn = calculateExpiresTime("72h");

    res.cookie("accessToken", accessToken,
        {
            httpOnly: true,
            maxAge: expiresIn,
            secure: true,
            signed: true
        })

    res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        maxAge: expiresIn,
        secure: true,
        signed: true
    })

    res.redirect(`${BASE_URL}`)

}

module.exports = googleAuth