import React from "react";
import GoogleLogin from "../components/Login/googleLogin";
import style from "./myprofile.module.css";
const Login = () => {
	return (
		<div className={style.login}>
			<GoogleLogin />
		</div>
	);
};

export default Login;
