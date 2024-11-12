import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

function Homepage() {
    return (
        <div className="flex flex-col min-h-screen">
            <NavBar />
            <div className="flex-grow">
                Hi
            </div>
            <Footer />
        </div>
    )
}

export default Homepage;