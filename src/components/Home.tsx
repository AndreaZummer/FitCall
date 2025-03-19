import Footer from "./Footer";
import Header from "./Header";
import '../styles/Home.css';
import { useEffect } from "react";

function Home() {

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    
    return ( 
        <div>
            <main>
                <Header/>
                <div className="home">
                    <div className="choiceColumn">
                        <h2>Vyskladám si tréning</h2>
                        <ul>
                            <li>Pozri si všetky ponúkané cviky</li>
                            <li>Navoľ si ľubovoľný počet cvičení</li>
                            <li>Pri väčšine cvičení možnosť výberu interval/počet opakovaní</li>
                        </ul>
                        <button className="login">Pozrieť si cvičenia</button>
                    </div>
                    <div className="choiceColumn">
                        <h2>Vyfiltrujem si tréning</h2>
                        <ul>
                            <li>Vyber si obtiažnosť cvičenia</li>
                            <li>Zvoľ si cieľovú partiu tela</li>
                            <li>Povedz nám ako dlho chceš cvičiť</li>
                            <li>Nemáš všetky potrebné cvičebné pomôcky?...Nevadí! Vyber si tie ktoré máš</li>
                        </ul>
                        <button className="login">Navoliť typ tréningu</button>
                    </div>
                    <div className="choiceColumn">
                        <h2>Nechám sa prekvapiť</h2>
                        <ul>
                            <li>Stále nový tréning, pri ktorom nikdy nevieš čo ťa čaká</li>
                            <li>Nepáči sa ti niektorý cvik? Tak ho vymeň!</li>
                        </ul>
                        <button className="login">Vytvoriť tréning</button>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default Home;