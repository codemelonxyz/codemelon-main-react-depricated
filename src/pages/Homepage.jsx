import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

function Homepage() {
    return (
        <div className="flex flex-col min-h-screen">
            <NavBar />
            <div className="flex-grow">
                Hi
            </div>
            <Footer>
                <div className="mt-4">
                    <a href="/privacy" className="mr-4 underline">Privacy Policy</a>
                    <a href="/cookies" className="underline">Cookie Policy</a>
                </div>
            </Footer>
            
        </div>
    )
}

export default Homepage;
