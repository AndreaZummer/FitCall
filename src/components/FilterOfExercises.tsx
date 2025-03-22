import { Outlet } from "react-router-dom";
import "../styles/FilterOfExercises.css";


function FilterOfExercises() {
    return (
        <div className="full-size-container"> 
            <div className="filter-container">
                <div className="filter">
                    <form>
                        <input type='text' name='text'/>
                        <input type="submit" value='Hľadať'/>
                    </form>
                    <form>
                        <h3>Filtrovať</h3>
                        <div className="filterInputContainer">
                            <h4>Cieľová partia</h4>
                            <div className="filterInput">
                                <input id='ruky' type="checkbox"/>
                                <label htmlFor="ruky">Ruky</label>
                            </div>
                            <div className="filterInput">
                                <input id='nohy' type="checkbox"/>
                                <label htmlFor="nohy">Nohy</label>
                            </div>
                            <div className="filterInput">
                                <input id='brucho' type="checkbox"/>
                                <label htmlFor="brucho">Brucho</label>
                            </div>
                            <div className="filterInput">
                                <input id='zadok' type="checkbox"/>
                                <label htmlFor="zadok">Zadok</label>
                            </div>
                            <div className="filterInput">
                                <input id='kondička' type="checkbox"/>
                                <label htmlFor="kondička">Kondička</label>
                            </div>
                        </div>
                        <div className="filterInputContainer">
                            <h4>Obtiažnosť</h4>
                            <div className="filterInput">
                                <input id='ľahké' type="checkbox"/>
                                <label htmlFor="ľahké">Ľahké</label>
                            </div>
                            <div className="filterInput">
                                <input id='stredné' type="checkbox"/>
                                <label htmlFor="stredné">Stredné</label>
                            </div>
                            <div className="filterInput">
                                <input id='ťažké' type="checkbox"/>
                                <label htmlFor="ťažké">Ťažké</label>
                            </div>
                        </div>
                        <div className="filterInputContainer">
                            <h4>Pomôcky</h4>
                            <div className="filterInput">
                                <input id='činky' type="checkbox"/>
                                <label htmlFor="činky">Činky</label>
                            </div>
                            <div className="filterInput">
                                <input id='kettlebell' type="checkbox"/>
                                <label htmlFor="ketlebell">Kettlebell</label>
                            </div>
                            <div className="filterInput">
                                <input id='expander' type="checkbox"/>
                                <label htmlFor="expander">Expander</label>
                            </div>
                            <div className="filterInput">
                                <input id='slider' type="checkbox"/>
                                <label htmlFor="slider">Slider</label>
                            </div>
                        </div>
                        
                    </form>
                </div>
            </div>
            <div className="exercise-preview">
                <div className="personal-fit">
                </div>
                <Outlet/>
            </div>
        </div>
    )
}

export default FilterOfExercises;
