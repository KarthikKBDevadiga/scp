import ArrowIcon from "../../icons/ArrowIcon";
import LockIcon from "../../icons/LockIcon";
import MailIcon from "../../icons/MailIcon";
import "./Login.css";
const Login = () => {
  return (
    <div className="main">
      <div className="card">
        <div className="heading">Member Login</div>
        <div
          style={{
            marginTop: "48px",
          }}
          className="inputField"
        >
          <MailIcon className="inputFieldIcon" />
          <input placeholder="email" />
        </div>
        <div
          style={{
            marginTop: "16px",
          }}
          className="inputField"
        >
          <LockIcon className="inputFieldIcon" />
          <input placeholder="password" type="password" />
        </div>

        <div
          style={{
            marginTop: "64px",
          }}
          className="loginButton"
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
        {/* <div
          style={{
            marginTop: "16px",
          }}
          className="signupButton"
        >
          SIGN UP
        </div> */}
      </div>
    </div>
  );
};
export default Login;
