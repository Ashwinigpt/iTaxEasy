import React from "react";

function Header({ isLoggingIn }) {
  return (
    <div className="header">
      <div>
        <p className="login">{isLoggingIn ? "Login" : "Sign UP"}</p>
      </div>
      <div className="sofia">
        <img
          className="scanner"
          src="https://cdn-icons-png.flaticon.com/512/3126/3126504.png"
          alt=""
        />
        <p className="sof">SOFIA</p>
      </div>
    </div>
  );
}

export default Header;