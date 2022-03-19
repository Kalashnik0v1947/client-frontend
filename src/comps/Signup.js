import React from "react";
import { get, post } from "../http/service";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const navigate = useNavigate();

  const signUpUser = (e) => {
    e.preventDefault();
    post("/auth/signup", {
      username,
      password,
    })
      .then((results) => {
        localStorage.setItem("token", results.data);
        navigate("/profile");
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  return (
    <div>
      <div className="another-div">
        <form onSubmit={signUpUser} id="loginForm">
          <div className="form">
            <div className="title">Sign Up</div>
            <div className="subtitle">Please Enter Your Credentials</div>

            <div className="input-container ic2">
              <input
                id="lastname"
                className="input"
                type="text"
                placeholder=" "
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <div className="cut"></div>
              <label for="lastname" className="placeholder">
                Username
              </label>
            </div>
            <div className="input-container ic2">
              <input
                id="email"
                className="input"
                type="password"
                placeholder=" "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div className="cut cut-short"></div>
              <label for="email" className="placeholder">
                Password
              </label>
            </div>
            <button type="submit" className="submit">
              Sign Up
            </button>
          </div>
        </form>
      </div>
      <div className="login-signup">
    <p>.</p>
    </div>
    </div>
  );
};

export default Signup;
