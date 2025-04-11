import React, { useEffect, useState, useMemo } from "react";
import { listOfWorkouts } from "../data/listOfExercises";
import "../styles/ListOfExercises.css";
import background from '../styles/pexels-leonardho-1717096.jpg';
import { Exercise } from "../entities";
import { Link, useSearchParams } from "react-router-dom";
import { addSelected } from "./filterOfExercisesSlice";
import store from "../app/store";

function ListOfExercises() {
    const [selectedType, setSelectedType] = useState<"interval" | "opakovania">("interval");
    const [currentPage, setCurrentPage] = useState(1);
    const [currentItems, setCurrentItems] = useState<Exercise[]>([]);
    const [searchParams] = useSearchParams();
    const searchTerm = searchParams.get('search')?.toLowerCase();
    const bodyPartTerm = useMemo(() => searchParams.getAll('bodyPart'), [searchParams]);
    const difficultyTerm = useMemo(() => searchParams.getAll('difficulty'), [searchParams]);
    const equipmentTerm = useMemo(() => searchParams.getAll('equipment'), [searchParams]);

    const finalList = useMemo(() => {
        if (searchTerm) {
            return listOfWorkouts.filter(exercise =>
                exercise.name.toLowerCase().includes(searchTerm)
            )
        } else if (bodyPartTerm || difficultyTerm || equipmentTerm) {
            let finalList: Exercise[]= [...listOfWorkouts];

            if (bodyPartTerm.length > 0) {
                finalList = finalList.filter(exercise => {
                    return exercise.bodyPart.some(part => bodyPartTerm.includes(part))
                })
            }

            if (difficultyTerm.length > 0) {
                finalList = finalList.filter(exercise => {
                    return difficultyTerm.includes(exercise.difficulty)
                })
            }

            if (equipmentTerm.length > 0) {
                finalList = finalList.filter(exercise => {
                    return !exercise.equipment || equipmentTerm.includes(exercise.equipment)
                })
            }
            return finalList;
        } else {
            return listOfWorkouts;
        }
        
    }, [searchTerm, bodyPartTerm, difficultyTerm, equipmentTerm]);
    
    useEffect(() => {
        window.scrollTo(0,0);
    }, []);

    useEffect(() => {
        setCurrentPage(1)
    }, [searchParams])

    useEffect(() => {
        
        function generateItems() {
            const firstItemIndex = (currentPage - 1) * 12;
            setCurrentItems(finalList.slice(firstItemIndex, firstItemIndex + 12));
        }
        generateItems();

        window.scrollTo(0,0);
    }, [currentPage,finalList])

    function displayButtons() {
        let currentButtons = []
        const lastPage = Math.ceil(finalList.length / 12)

        if(currentPage === 1) {
            currentButtons.push(<button className="currentButton">{currentPage}</button>)
            if (12 < finalList.length) {
                currentButtons.push(<button onClick={() => setCurrentPage(currentPage+1)}>{currentPage+1}</button>)
            }
            if (finalList.length > 24) {
                currentButtons.push(<button onClick={() => setCurrentPage(currentPage+2)}>{currentPage+2}</button>)
            }
        } else if (currentPage === lastPage) {
            currentButtons.push(<button className="currentButton">{currentPage}</button>)
            if (12 < finalList.length) {
                currentButtons.unshift(<button onClick={() => setCurrentPage(currentPage-1)}>{currentPage-1}</button>)
            }
            if (finalList.length > 24) {
                currentButtons.unshift(<button onClick={() => setCurrentPage(currentPage-2)}>{currentPage-2}</button>)
            }
        } else {
            currentButtons.push(<button onClick={() => setCurrentPage(currentPage-1)}>{currentPage-1}</button>)
            currentButtons.push(<button className="currentButton">{currentPage}</button>)
            currentButtons.push(<button onClick={() => setCurrentPage(currentPage+1)}>{currentPage+1}</button>)
        }
        return currentButtons
    }

    function addExerciseHandle(selected:number) {
        const param = {selected,selectedType}
        store.dispatch(addSelected(param))
        setSelectedType("interval")
    }   
    function inputChangeHandle(event:React.ChangeEvent<HTMLSelectElement>) {
        if (event.target.value === 'opakovania') {
            setSelectedType('opakovania');
        } else {
            setSelectedType('interval')
        }
    }

    return (
        <div className="exercises-container">
            <div className="choice-column back" style={{backgroundImage:`url(${background})`}}>
            <div className="overlay zak"></div>
                <div className="display-container">
                    {currentItems.map((exercise, index) => {
                        return (
                            <div className="exercise-container" key={exercise.name}>
                                <div className="firstrow">
                                    <img alt={exercise.name} src={exercise.imageURL}/>
                                    <div className="popis">
                                        <span>{exercise.difficulty}</span>
                                        <span id='equip'>{exercise.equipment}</span>
                                    </div>
                                </div>
                                    <Link to={`./${exercise.name}`}><h3>{exercise.name}</h3></Link>
                                    <p>{exercise.description}</p>
                                    <div className="lastrow">
                                        <label htmlFor={exercise.name}>Vyberte variantu</label>
                                        <select name={exercise.name} id={exercise.name} disabled={!exercise.repeat}  onChange={inputChangeHandle} defaultValue={"interval"}>
                                            <option value='interval'>Intervaly</option>
                                            <option value='opakovania'>Opakovania</option>
                                        </select>
                                            <input className='login' type="submit" value='Pridať cvičenie' onClick={() => addExerciseHandle(exercise.id)}/>
                                    </div>
                            </div>
                        )
                    })}
                </div>
                <div className="paginationButtons-container">
                    <button disabled={currentPage===1? true : false} onClick={() => setCurrentPage(1)}>{'<<'}</button>
                    <button disabled={currentPage===1? true : false} onClick={() => setCurrentPage(currentPage -1)}>{'<'}</button>
                    <div className="paginationButtons">
                        {displayButtons()}
                    </div>
                    <button disabled={currentPage * 12 > finalList.length? true : false} onClick={() => setCurrentPage(currentPage +1)}>{'>'}</button>
                    <button disabled={currentPage * 12 > finalList.length? true : false} onClick={() => setCurrentPage(Math.ceil(finalList.length / 12))}>{'>>'}</button>
                </div>
            </div>
        </div>
    )
}

export default ListOfExercises;