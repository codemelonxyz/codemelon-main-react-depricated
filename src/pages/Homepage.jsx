import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import { BackgroundBeams } from "../components/ui/background-beams";
import { ThemeContext } from "../ThemeContext";
import React, {useContext} from 'react';

function Homepage() {
    const { theme, setTheme } = useContext(ThemeContext);
    return (
        <div className="flex flex-col min-h-screen">
             {theme === "dark" ? <BackgroundBeams /> : null }
            <NavBar />
            <div className="flex-grow">
                Hi
            </div>
            <Footer/>
           
        </div>
    )
}

export default Homepage;
