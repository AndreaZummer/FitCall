import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { useEffect } from "react";

function Home() {

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
/*

    function selectedTypeSetup(type: string) {
        setSelectedType([...selectedType, type])
    } 

    function resetSelectedType() {
        setSelectedType([])
    }
*/
    return ( 
        <div className="landing">
            <main>
                <Header/>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}

export default Home;