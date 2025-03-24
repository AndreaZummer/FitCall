import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { useEffect, useState } from "react";
import { Exercise } from "../entities";

function Home() {

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    const [bodyPartSelected, setBodyPartSelected] = useState<("brucho" | "ruky" | "nohy" | "zadok" | "kondička")[]>([]);
    const [difficultySelected, setDifficultySelected] = useState<("ľahké" | "stredné" | "ťažké")[]>([]);
    const [equipmentSelected, setEquipmentSelected] = useState<("činky" | "expander" | "kettlebell" | "slider" | "bez pomôcok")[]>([]);
    const [timeSelected, setTimeSelected] = useState(0);
    const [intervalOrRepeatSelected, setIntervalOrRepeatSelected] = useState<"interval" | "opakovania" | null | undefined>(null);
    const [selected, setSelected] = useState<Exercise[]>([]);
    const [selectedType, setSelectedType] = useState<string[]>([]);


    function reset() {
        setBodyPartSelected([]);
        setDifficultySelected([]);
        setEquipmentSelected([]);
        setTimeSelected(0);
        setIntervalOrRepeatSelected(null);
        setSelected([]);
    }

    function resetSelectedType() {
        setSelectedType([])
    }


    function bodyPartSetup(bodyPart: "brucho" | "ruky" | "nohy" | "zadok" | "kondička") {
        if(bodyPartSelected.includes(bodyPart)) {
            setBodyPartSelected(
                bodyPartSelected.filter(item => {return  item!==bodyPart})
            )
        } else {
            setBodyPartSelected([...bodyPartSelected, bodyPart])
        }
    }

    function difficultySetup(difficulty: "ľahké" | "stredné" | "ťažké") {
        if(difficultySelected.includes(difficulty)) {
            setDifficultySelected(
                difficultySelected.filter(item => {return  item!==difficulty})
            )
        } else {
            setDifficultySelected([...difficultySelected, difficulty])
        }
    }

    function equipmentSetup(equipment: "činky" | "expander" | "kettlebell" | "slider" | "bez pomôcok") {
        if(equipmentSelected.includes(equipment)) {
            setEquipmentSelected(
                equipmentSelected.filter(item => {return  item!==equipment})
            )
        } else {
            setEquipmentSelected([...equipmentSelected, equipment])
        }
    }
    function timeSetup(time: number) {
        setTimeSelected(time)
    }
    function intervalOrRepeatSetup(intervalOrRepeat: "interval" | "opakovania" | null | undefined) {
        setIntervalOrRepeatSelected(intervalOrRepeat)
    }

    function addSelected(exercise:Exercise, type: string) {
        setSelected([...selected, exercise]);
        setSelectedType([...selectedType, type])
    }

    function removeHandle(removedexercise:Exercise) {
        setSelected(selected.filter(exercise => {
            return removedexercise !== exercise
        }))
    }

    const context = {
        bodyPartSetup: bodyPartSetup,
        difficultySetup: difficultySetup,
        equipmentSetup: equipmentSetup,
        timeSetup: timeSetup,
        intervalOrRepeatSetup: intervalOrRepeatSetup,
        bodyPartSelected: bodyPartSelected,
        difficultySelected: difficultySelected,
        equipmentSelected: equipmentSelected,
        timeSelected: timeSelected,
        intervalOrRepeatSelected: intervalOrRepeatSelected,
        reset: reset,
        addSelected: addSelected,
        selected: selected,
        removeHandle: removeHandle,
        selectedType: selectedType,
        resetSelectedType: resetSelectedType
    }


    return ( 
        <div className="landing">
            <main>
                <Header/>
                <Outlet context={context}/>
            </main>
            <Footer/>
        </div>
    )
}

export default Home;