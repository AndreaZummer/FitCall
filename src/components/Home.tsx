import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { useEffect, useState } from "react";
import { Exercise } from "../entities";

function Home() {

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    const [finalWorkout, setFinalWorkout] = useState<Exercise[]> ([]);
    const [intervalVsRepeat, setIntervalVsRepeat] = useState<"interval" | "opakovania" | null> (null);
    const [selectedType, setSelectedType] = useState<string[]>([]);

    function finalWorkoutSetup(finalWorkout:Exercise[]) {
        setFinalWorkout(finalWorkout)
    }

    function intervalVsRepeatSetup(intervalVsRepeat: "interval" | "opakovania" | null ) {
        setIntervalVsRepeat(intervalVsRepeat)
    }

    function selectedTypeSetup(type: string) {
        setSelectedType([...selectedType, type])
    } 

    function resetSelectedType() {
        setSelectedType([])
    }

    const context = {
        finalWorkout: finalWorkout,
        intervalVsRepeat: intervalVsRepeat,
        intervalVsRepeatSetup: intervalVsRepeatSetup,
        finalWorkoutSetup: finalWorkoutSetup,
        selectedTypeSetup: selectedTypeSetup,
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