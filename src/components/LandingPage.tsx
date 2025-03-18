import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";


function LandingPage() {
    
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
)}

export default LandingPage;