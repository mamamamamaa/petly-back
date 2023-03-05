const passport = require("passport");
const { Strategy } = require("passport-google-oauth2");
const bcrypt = require("bcryptjs")
const { uuid } = require('uuidv4');

const { User } = require("../models/user");

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_CALLBACK_URL_DEV } = process.env

const googleParams = {
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: GOOGLE_CALLBACK_URL_DEV,
    passReqToCallback: true,
}

const googleCallback = async (req, accessToken, refreshToken, profile, done) => {
    try {
        console.log("PROFILE", profile);
        const { email, displayName } = profile;
        console.log("PROFILE_EMAIL", email);
        console.log("PROFILE_displayName", displayName);

        const user = await User.findOne({ email })
        if (user) {
            return done(null, user)
        }
        const hashpassword = await bcrypt.hash(uuid(), 10)
        const verificationToken = uuid()
        const newUser = await User.create({
            email,
            name: displayName,
            password: hashpassword,
            verificationToken,
            verify: true,
            mobilePhone: "unknown",
            city: "unknown"
        })
        done(null, newUser)
    } catch (error) {
        console.log(error);
        done(error)
    }
}

const googleStrategy = new Strategy(googleParams, googleCallback);

passport.use("google", googleStrategy)

module.exports = passport;