import repo from './resources/repo.jpg';
import pexels from './resources/pexels.png';
import codeCademy from './resources/codecademy.png';
import mosh from './resources/codewithmosh_logo.jpg';
import freepik from './resources/freepik.png';
import '../styles/Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="sponsors">
                <h4>V spolupráci s:</h4>
                <div className="sponsorsImages">
                    <img  src={pexels} alt='pexels'/>
                    <img  src={repo} alt='repo'/>
                    <img  src={codeCademy} alt='codeCademy'/>
                    <img  src={mosh} alt='mosh'/>
                    <img  src={freepik} alt='freepik'/>
                </div>
            </div>
            <div id='copyright'>
                <span>FitCall® 2025</span>
            </div>
            <div className='contact'>
                <span>Kontaktné údaje:</span>
                <p>
                    FitCall s.r.o.<br/>
                    Súrna 6<br/>
                    Košice 040 01
                </p>
                <span id='mail'>fitCall@fitcall.sk</span>
            </div>
        </div>
            
        
    )
}

export default Footer;