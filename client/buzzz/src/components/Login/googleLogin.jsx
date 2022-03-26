import styles from "./googleLogin.module.css";

const GoogleLogin = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.logintext}>
				<p>Login Share Connect !!</p>
			</div>
			<div className={styles.loginbtn}>
				<button className={styles.button}>
					<a href="http://localhost:5000/google" className={styles.anchor}>
						Sign in with Google
					</a>
				</button>
			</div>
		</div>
	);
};

export default GoogleLogin;
