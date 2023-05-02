import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        padding: "20px",
        border: "1px solid",
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/registration">Registration</Link>
      <Link to="/login">Login</Link>
      <Link to="/addpost">Add Posts</Link>
      <Link to="/showpost">Show Posts</Link>
    </div>
  );
};

export default Navbar;
