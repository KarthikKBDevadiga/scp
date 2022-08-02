import LockIcon from "../../icons/LockIcon";
import MailIcon from "../../icons/MailIcon";
import "./Login.css";
const Login = () => {
  return (
    <div className="main">
      <div className="card">
        <div className="heading">Login</div>
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
            marginTop: "16px",
            textAlign: "right",
            color: "#1d4ed8",
            fontSize: "14px",
          }}
        >
          Forget Password?
        </div>
        <div
          style={{
            marginTop: "32px",
          }}
          className="loginButton"
        >
          LOGIN
        </div>
        <div
          style={{
            marginTop: "16px",
          }}
          className="signupButton"
        >
          SIGN UP
        </div>
      </div>
    </div>
  );
};
export default Login;
