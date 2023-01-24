import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Services from "./components/Services";
import Profile from "./components/Profile";
import Partners from "./components/Partners";
import Contact from './components/Contact';
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Main />
      <Services />
      <Profile />
      <Partners />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;