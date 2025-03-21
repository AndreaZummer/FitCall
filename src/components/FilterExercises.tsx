import background from '../styles/filter-background.jpg';
import '../styles/FilterExercise.css';
import { useState } from 'react';

function FilterExercise() {

    window.scrollTo(0,0);

    function filterWorkout() {

    }

    return (
        <div className="home">
            <div className="choiceColumn" id='filter' style={{backgroundImage: `url(${background})` }}>
                <div className="overlay"></div>
                <h2>Čo to dnes bude?</h2>
                <div className='menu'>
                    <div className='selection'>
                        <h3>Čo dnes cvičíme?</h3>
                        <div className='selectionButtons'>
                            <button>Ruky</button>
                            <button>Nohy</button>
                            <button>Brucho</button>
                            <button>Zadok</button>
                            <button className='tooLong'>Kondička</button>
                        </div>
                    </div>
                    <div className='selection'>
                        <h3>Náročnosť?</h3>
                        <div className='selectionButtons'>
                            <button>Ľahké</button>
                            <button>Stredné</button>
                            <button>Ťažké</button>
                        </div>
                    </div>
                    <div className='selection'>
                        <h3>Nejaké pomôcky?</h3>
                        <div className='selectionButtons'>
                            <button>Kettlebell</button>
                            <button>Činky</button>
                            <button>Expander</button>
                            <button>Slider</button>
                            <button className='tooLong'>Bez pomôcok</button>
                        </div>
                    </div>
                    <div className='selection'>
                        <h3>Ako dlho cvičíme?</h3>
                        <div className='selectionButtons'>
                            <button>10 minút</button>
                            <button>20 minút</button>
                            <button>30 minút</button>
                        </div>
                    </div>
                    <div className='selection'>
                        <h3>Intervaly či opakovania?</h3>
                        <div className='selectionButtons'>
                            <button>Intervaly</button>
                            <button>Opakovania</button>
                        </div>
                    </div>
                </div>
                <button id='filterOut' className="login" onClick={filterWorkout}>Vytvoriť tréning</button>
            </div>
        </div>
    )
}

export default FilterExercise;