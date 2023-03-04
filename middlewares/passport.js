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

const googleCallback = async (req, profile, done) => {
    try {
        console.log(profile);
        const { email, displayName } = profile;
        const user = await User.findOne({ email })
        if (user) {
            return done(null, user)
        }
        const hashpassword = bcrypt.hash(uuid(), 10)
        const newUser = await User.create({ email, name: displayName, password: hashpassword })
        done(null, newUser)
    } catch (error) {
        done(error)
    }
}

const googleStrategy = new Strategy(googleParams, googleCallback);

passport.use("google", googleStrategy)

module.exports = passport;