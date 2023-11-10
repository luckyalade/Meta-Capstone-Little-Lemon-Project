import React from "react";
import "../Login/style/LoginStyle.css";
import Avatar from "../Login/Images/avatar.png";
// import Bg from "../Login/Images/bg.svg";

const Login = () => {
  return (
    <div style={{ background: "#121212" }}>
      <div className="login login-body">
        <div className="avatar">
          <img src={Avatar} alt="User Avatar" />
        </div>
        <h2>Login</h2>
        <h3>Welcome back Kelly</h3>

        <form className="login-form">
          <div className="textbox">
            <input type="email" placeholder="Username" />
            <span className="material-symbols-outlined"></span>
          </div>
          <div className="textbox">
            <input type="password" placeholder="Password" />
            <span className="material-symbols-outlined"></span>
          </div>
          <button type="submit">LOGIN</button>
          <a href="https://website.com">Forgot your credentials?</a>
        </form>
      </div>
    </div>
  );
};

export default Login;
