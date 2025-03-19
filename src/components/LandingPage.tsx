import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import LandingPresentation from "./LandingPresentation";


function LandingPage() {

    return (
        <div className="landing">
            <main>
                <Header/>
                <Outlet/>
                <LandingPresentation />
            </main>
            <Footer/>
        </div>
)}

export default LandingPage;