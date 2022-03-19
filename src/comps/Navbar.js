import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    console.log("You have logged out");
    navigate("/");
  };

  if (localStorage.getItem("token")) {
    return (
      <nav id="nav-bar">
        <Link to="/home">HOME</Link>
        <Link to="/menu">MENU</Link>
        <Link to="/info">INFO</Link>
        <Link to="/reservations">RESERVATIONS</Link>
        <Link to="/profile">PROFILE</Link>
        <Link onClick={logout} to="/home">
          SIGN OUT
        </Link>
      </nav>
    );
  } else {
    return (
      <nav id="nav-bar">
        <Link to="/home">HOME</Link>
        <Link to="/menu">MENU</Link>
        <Link to="/info">INFO</Link>
        <Link to="/login">LOG IN</Link>
        <Link to="/signup">SIGN UP</Link>
      </nav>
    );
  }
};

export default Navbar;
