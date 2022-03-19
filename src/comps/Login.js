import React from "react";
import { get, post } from "../http/service";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const navigate = useNavigate();

  const loginUser = (e) => {
    e.preventDefault();
    post("/auth/login", {
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

  // const checkToken = () => {
  //   let thing = localStorage.getItem("token");
  //   console.log("This was stored in our localStorage", thing);
  // };

  // const checkIfLoggedIn = (e) => {
  //   e.preventDefault();
  //   get("/auth/loggedin")
  //     .then((results) => {
  //       console.log("Are you logged in?", results.data);
  //     })
  //     .catch((err) => {
  //       console.error(err.message);
  //     });
  // };

  // const logout = () => {
  //   localStorage.removeItem("token");
  //   console.log("You have logged out");
  // };

  return (
    <div>
      <div className="another-div">
        <form onSubmit={loginUser} id="loginForm">
          <div className="form">
            <div className="title">Log In</div>
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
              Log In
            </button>
          </div>
        </form>
      </div>
    <div className="login-signup">
    <p>.</p>
    </div>
     
      {/* <button onClick={checkIfLoggedIn}>See if you are logged in</button>
      <button onClick={checkToken}>check if token is stored</button>
      <button onClick={logout}>Log Out</button> */}
    </div>
  );
};

export default Login;
