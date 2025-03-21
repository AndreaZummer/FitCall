import { Exercise } from "./entities";

type generatorProps = {
    bodyPart?: ("brucho" | "ruky" | "nohy" | "zadok" | "kondička") [];
    time?: number;
    difficulty?: "ľahké" | "stredné" | "ťažké"; 
    equipment?: "činky" | "expander" | "kettlebell" | "slider";
    typeOfExercise?: "interval" | "opakovania";
}

export function intervalOrRepeat() {
    return Math.random();
}

export function shuffle(array:Exercise[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; 
    }
    return array;
}


export function workoutGenerator(listOfWorkouts:Exercise[],{bodyPart, time, difficulty, equipment, typeOfExercise}: generatorProps): [Exercise[],("interval" | "opakovania")] {
    let possibleWorkout: Exercise[] = [];

    // Set of Interval exercise or repeat exercise
    if (!typeOfExercise) {
        const result = intervalOrRepeat();
        if (result <= .5) {
            typeOfExercise = "interval";
        } else {
            typeOfExercise = "opakovania";
        }
    }

    // Set of workout time
    if(!time) {
        time = Math.random() * 24 + 9;
        time *= 60;
    }

    // Filter out only interval exercises if repeat choosen
    if (typeOfExercise === "opakovania") {
        possibleWorkout = listOfWorkouts.filter((exercise) => {
            return exercise.repeat !== undefined
        })
    } else {
        possibleWorkout = listOfWorkouts;
    }










    // Generate traning with correct time
    function generateFinalList(possibleWorkout: Exercise[],time: number) {

        shuffle(possibleWorkout);
        let actualTime = 0;
        let finalWorkout: Exercise[] =[];

        while (actualTime<time) {
            const itemOfList = possibleWorkout[0];

            if (itemOfList === undefined) {
                return finalWorkout;
            } 
            if (!finalWorkout.includes(itemOfList)) {
                finalWorkout.push(itemOfList);
                actualTime += itemOfList.time;
            } else {
                shuffle(possibleWorkout)
            }
        }
        return finalWorkout
    };

    const finalWorkout = generateFinalList(possibleWorkout,time);
    
    return [finalWorkout, typeOfExercise]
}
