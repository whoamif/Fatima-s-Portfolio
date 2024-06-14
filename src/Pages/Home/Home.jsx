import React from 'react';
import "./Home.scss"
import Navbar from '../../component/Navbar/Navbar';
import Hero from '../../component/Hero/Hero';
import Quote from '../../component/Quote/Quote';
import Projects from '../../component/Projects/Projects';
import Skills from '../../component/skills/Skills';
import About from '../../component/about/About';
import Contact from '../../component/Contact/Contact';
import Footer from '../../component/footer/Footer';


const Home = () => {

    return (
        <div className='home-container'>
            <div className="wrapper">
                <Navbar />
                <Hero />
                <Quote />
                <Projects title={"Projects"} view={true} typeProject={"big"}/>
                <Skills />
                <About />
                <Contact />
            </div>
            <Footer />
        </div>
    );
}

export default Home;
