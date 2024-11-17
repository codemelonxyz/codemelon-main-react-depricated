import React, { useContext } from 'react';
import NavBar from "../components/Navbar.jsx";
import Footer from "../components/Footer";
import { BackgroundBeams } from "../components/ui/background-beams";
import { ThemeContext } from "../ThemeContext";
import { Lamp } from "../components/homepage/Lamp.jsx"; 
import Search from "../components/homepage/Seach.jsx";
import Grid from "../components/homepage/Grid.jsx";
function Homepage() {
    const { theme } = useContext(ThemeContext);
    return (
        <div className="flex flex-col min-h-screen relative">
            {theme === "dark" && <BackgroundBeams className="z-10" />}
            <NavBar />
            <div className={`flex-grow ${theme === "dark" ? "bg-neutral-950" : "bg-white"}`}>
                <Lamp /> 
                {/* <Grid /> */}
                <Search />
            </div>
            <Footer/>
        </div>
    );
}

export default Homepage;
