import React from "react";

function Aside({ isLoggingIn }) {
  return (
    <div className="aside-bg">
      <img
        className="aside-img"
        src={isLoggingIn ? "https://demo.flatlogic.com/sofia-react/static/media/loginImage.d7078415.svg" : "https://demo.flatlogic.com/sofia-react/static/media/registerImage.c1769a78.svg"}
        alt=""
      />
      <p className="flatlogic">2021 © Flatlogic. Hand-crafted & Made with ❤️</p>
    </div>
  );
}

export default Aside;
