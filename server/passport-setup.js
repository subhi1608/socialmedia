const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.serializeUser(function (user, done) {
	done(null, user);
});

passport.deserializeUser(function (user, done) {
	done(null, user);
});

const User = require("./models/User");
//  const User = require('./index')

passport.use(
	new GoogleStrategy(
		{
			clientID:
				"683705606806-g5rh49i574mur1426sq0qbdjgfbnlg11.apps.googleusercontent.com",
			clientSecret: "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",
			callbackURL: "http://localhost:5000/google/callback",
		},
		async function (accessToken, refreshToken, profile, done) {
			try {
				const fetchedUser = await User.findOne({
					email: profile.emails[0].value,
				});

				if (fetchedUser) {
					console.log(fetchedUser);
					return done(null, fetchedUser);
				}
				const createdUser = await User.create({
					userId: profile.id,
					username: profile.displayName,
					email: profile.emails ? profile.emails[0].value : "",
					profilePic: profile.photos[0].value,
				});

				done(null, createdUser);
			} catch (err) {
				done(err);
			}
			return done(null, profile);
		}
	)
);
