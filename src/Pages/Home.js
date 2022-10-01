import React from 'react';
import About from '../Components/Home/About';
import AboutMe from '../Components/Home/AboutMe';
import Gallery from '../Components/Home/Gallery';
import Services from '../Components/Home/Services';
import Showcase from '../Components/Home/Showcase';
import Testimonials from '../Components/Home/Testimonials';


const Home = () => {
    return (
        <>
        <Showcase />
        <AboutMe />
        <About />
        <Services />
        <Testimonials />
        <Gallery />
        </>
    );
}

export default Home;