const express = require("express");
const app = express();
const PORT = 5000;
const mongoose = require("mongoose");
const morgan = require("morgan");
const helmet = require("helmet");
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");
const passport = require("passport");
const cors = require("cors");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const googleauth = require("./routes/google-auth");
const postRoute = require("./routes/posts");

const dbUser = mongoose.connect(
	"mongodb://localhost:27017/socialbuzzz",
	{ useNewUrlParser: true, useUnifiedTopology: true },
	() => {
		console.log("connected to database");
	}
);
// middleware
app.use(
	cookieSession({
		name: "jwt",
		keys: ["secret"],
	})
);
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(helmet());
app.use(morgan("common"));
app.use(
	cors({
		origin: "http://localhost:3000",
		credentials: true,
	})
);

app.use("/", googleauth);
app.use("/user", userRoute);
app.use("/auth", authRoute);
app.use("/post", postRoute);

app.listen(PORT, () => {
	console.log(`Server running at PORT ${PORT}`);
});
