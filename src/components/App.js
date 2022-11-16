import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Login from "./Login";
import Footer from "./Footer";
import Aside from "./Aside";

function App() {
    return (
        <div className="bg-color">

            <div className="bg-color2">
                <Header />
                <Hero />
                <Login />
                <Footer />
            </div>
            <Aside />
        </div>
    )
};

export default App;