import { Outlet, useParams } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { useEffect, useState } from "react";

function Home() {

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    const [bodyPartSelected, setBodyPartSelected] = useState<("brucho" | "ruky" | "nohy" | "zadok" | "kondička")[]>([]);
    const [difficultySelected, setDifficultySelected] = useState<("ľahké" | "stredné" | "ťažké")[]>([]);
    const [equipmentSelected, setEquipmentSelected] = useState<("činky" | "expander" | "kettlebell" | "slider" | "bez pomôcok")[]>([]);
    const [timeSelected, setTimeSelected] = useState(0);
    const [intervalOrRepeatSelected, setIntervalOrRepeatSelected] = useState<"interval" | "opakovania" | null>(null);

    function reset() {
        setBodyPartSelected([]);
        setDifficultySelected([]);
        setEquipmentSelected([]);
        setTimeSelected(0);
        setIntervalOrRepeatSelected(null);
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
    function intervalOrRepeatSetup(intervalOrRepeat: "interval" | "opakovania") {
        setIntervalOrRepeatSelected(intervalOrRepeat)
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
        reset: reset
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