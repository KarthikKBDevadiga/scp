import ArrowIcon from "../../icons/ArrowIcon";
import LockIcon from "../../icons/LockIcon";
import MailIcon from "../../icons/MailIcon";
import styles from "./Login.module.css";
const Login = () => {
  return (
    <div className={styles.main}>
      <div className={styles.card}>
        <div className={styles.heading}>Member Login</div>
        <div
          style={{
            marginTop: "48px",
          }}
          className={styles.inputField}
        >
          <MailIcon className={styles.inputFieldIcon} />
          <input placeholder="email" />
        </div>
        <div
          style={{
            marginTop: "16px",
          }}
          className={styles.inputField}
        >
          <LockIcon className={styles.inputFieldIcon} />
          <input placeholder="password" type="password" />
        </div>

        <div
          style={{
            marginTop: "64px",
          }}
          className={styles.loginButton}
        >
          LOGIN
        </div>
        <div
          style={{
            textAlign: "center",
            marginTop: "16px",
          }}
        >
          Forgot <span style={{ fontWeight: "bold" }}>Username</span> /{" "}
          <span style={{ fontWeight: "bold" }}>Password</span>?
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "64px",
            textAlign: "center",
            gap: "8px",
            cursor: "pointer",
          }}
        >
          <div style={{ alignSelf: "center", fontWeight: "bold" }}>
            Create your account
          </div>
          <ArrowIcon style={{ alignSelf: "center" }} />
        </div>
      </div>
    </div>
  );
};
export default Login;
