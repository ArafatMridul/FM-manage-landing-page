import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Difference from "./components/Difference";
import Testimonial from "./components/Testimonial";
import Simplify from "./components/Simplify";
import Footer from "./components/Footer";

const App = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Difference />
            <Testimonial />
            <Simplify />
            <Footer />
        </>
    );
};

export default App;
