import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Aside from "./components/Aside";

function App() {
  const [isLoggingIn, setIsLoggingIn] = useState(true);
  const toggleLoggingIn = () => setIsLoggingIn(!isLoggingIn);

  return (
    <div className="bg-color">
      <div className="bg-color2">
        <Header isLoggingIn={isLoggingIn} />
        <Hero isLoggingIn={isLoggingIn} />
        <Login isLoggingIn={isLoggingIn} />
        <Footer isLoggingIn={isLoggingIn} toggleLoggingIn={toggleLoggingIn} />
      </div>
      <Aside />
    </div>
  );
}

export default App;