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
    const [searchParams, setSearchparams] = useSearchParams();
    const searchTerm = searchParams.get('search')?.toLowerCase();

    function generateFinalList() {
        let finalList:Exercise[] = [];

        if(!searchTerm) {
            finalList = listOfWorkouts;
        } else if (searchTerm) {
            finalList = listOfWorkouts.filter(exercise => {
                return exercise.name.toLowerCase().includes(searchTerm)
            })
        }
        return finalList
    };

    const finalList = useMemo(() => {
        if (!searchTerm) return listOfWorkouts;
        return listOfWorkouts.filter(exercise =>
            exercise.name.toLowerCase().includes(searchTerm)
        );
    }, [searchTerm]);
    
    useEffect(() => {
        window.scrollTo(0,0);
    }, [])

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

        if (currentPage > 1 && currentPage * 12 < finalList.length) {
            for (let i = currentPage -1; i < currentPage+2; i++) {
                if (i === currentPage) {
                    currentButtons.push(<button className="currentButton">{i}</button>)
                } else {
                    currentButtons.push(<button onClick={() => setCurrentPage(i)}>{i}</button>)
                }
            }
        }

        if(currentPage === 1) {
            for (let i = currentPage; i < currentPage+3; i++) {
                if (i === currentPage) {
                    currentButtons.push(<button className="currentButton">{i}</button>)
                } else {
                    currentButtons.push(<button onClick={() => setCurrentPage(i)}>{i}</button>)
                }
            }
        }

        if(currentPage * 12 > finalList.length) {
            for (let i = currentPage -2; i < currentPage+1; i++) {
                if (i === currentPage) {
                    currentButtons.push(<button className="currentButton">{i}</button>)
                } else {
                    currentButtons.push(<button onClick={() => setCurrentPage(i)}>{i}</button>)
                }
            }
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
                        {finalList.length < 13? displayButtons()[0] : displayButtons()}
                    </div>
                    <button disabled={currentPage * 12 > generateFinalList().length? true : false} onClick={() => setCurrentPage(currentPage +1)}>{'>'}</button>
                    <button disabled={currentPage * 12 > generateFinalList().length? true : false} onClick={() => setCurrentPage(Math.ceil(generateFinalList().length / 12))}>{'>>'}</button>
                </div>
            </div>
        </div>
    )
}

export default ListOfExercises;