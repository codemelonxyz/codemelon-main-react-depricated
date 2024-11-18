import React, { useContext } from 'react';
import NavBar from "../components/Navbar.jsx";
import Footer from "../components/Footer";
import { BackgroundBeams } from "../components/ui/background-beams";
import { ThemeContext } from "../ThemeContext";
import { Lamp } from "../components/homepage/Lamp.jsx"; 
import Search from "../components/homepage/Seach.jsx";
import Grid from "../components/homepage/Grid.jsx";
import { GridCards } from '../components/homepage/GridCards.jsx';
function Homepage() {
    const { theme } = useContext(ThemeContext);
    return (
        <div className="flex flex-col min-h-screen relative">
            {theme === "dark" && <BackgroundBeams className="z-10" />}
            <NavBar />
            <div className={`flex-grow ${theme === "dark" ? "bg-neutral-950" : "bg-white"}`}>
                <Lamp /> 
                <div className={`flex justify-center items-center font-bold ${theme === "light" ? "text-neutral-950" : "text-white"}`}>
                    <p className='mb-[10rem] text-2xl lg:text-5xl'>Our Apps and Services</p>
                </div>
                < GridCards />
                <Search />
            </div>
            <Footer/>
        </div>
    );
}

export default Homepage;
