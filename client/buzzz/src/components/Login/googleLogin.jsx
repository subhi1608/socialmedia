
import styles from './googleLogin.module.css'

const GoogleLogin = () => {
   
    return (
     
        <div className={styles.wrapper}>
            <div className={styles.logo}>
            </div>
            <div className={styles.logintext}>
            <p>Enter your details and Start</p> 
            <p>your journey with us</p>
            </div>
            <div className={styles.btnabovetext}>
            <p>Don't Stop until you're proud</p>
            </div>
            <div className={styles.loginbtn}>
            <button className={styles.button} >
                <a href="http://localhost:5000/google" className={styles.anchor}>Sign in with Google</a>
            </button>
            </div>
        </div>
    
    )
}

export default GoogleLogin
