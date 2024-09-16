import React from "react";
import Hero from './Hero';
import Collections from './Collections';
import About from './About';
import Bangles from './Bangles';
import MeshBeads from './MeshBeads';
import Footer from "./Footer";
import Feedback from "./Feedback";

function Home(){
    return(
        <>
        <Hero />
        <About />
        <Collections />
        <Bangles />
        <MeshBeads />
        <Feedback />
        <Footer />
        </>
    )
}

export default Home;