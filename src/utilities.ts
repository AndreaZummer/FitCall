import { Exercise } from "./entities";

type generatorProps = {
    bodyPart?: ("brucho" | "ruky" | "nohy" | "zadok" | "kondička") [];
    time?: number;
    difficulty?: ("ľahké" | "stredné" | "ťažké")[]; 
    equipment?: ("činky" | "expander" | "kettlebell" | "slider" | "bez pomôcok")[];
    typeOfExercise?: "interval" | "opakovania" | null ;
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
    let afterTypeWorkout: Exercise[] = [];
    let afterBodyWorkout: Exercise[] = [];
    let afterEquipWorkout: Exercise[] = [];
    let afterDiffWorkout: Exercise[] = [];
    let afterTimeWorkout: Exercise[] = [];

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
    } else {
        time *= 60
    }

    // Filter out only interval exercises if repeat choosen
    if (typeOfExercise === "opakovania") {
        afterTypeWorkout = listOfWorkouts.filter((exercise) => {
            return exercise.repeat !== undefined
        })
    } else {
        afterTypeWorkout = listOfWorkouts;
    }

    //  filter out body parts
    
    if (bodyPart?.length!==0 && bodyPart !== undefined) {
        for (let exercise of afterTypeWorkout) {
            for (let part of bodyPart) {
                if (exercise.bodyPart.includes(part)) {
                    afterBodyWorkout.push(exercise)
                }
            }
        }
    } else {
        afterBodyWorkout = afterTypeWorkout
    }
    console.log(afterBodyWorkout)
    // filter out equipment
    
    if (equipment && equipment?.length > 0) {
        afterEquipWorkout = afterBodyWorkout.filter((exercise) => {
            if (equipment.includes('bez pomôcok')) {
                return !exercise.equipment
            }  else {
                return !exercise.equipment || equipment.includes(exercise.equipment);
            }
        })
    }

    console.log(afterEquipWorkout)
    // filter out difficulty
    if(difficulty!== undefined && difficulty.length!==0) {
        if (difficulty?.includes("ľahké") && !difficulty.includes("ťažké")) {
            afterDiffWorkout = afterEquipWorkout.filter((exercise) => {
                return exercise.difficulty!=="ťažké"
            })
        } else if (!difficulty?.includes("ľahké") && difficulty?.includes("ťažké")) {
            afterDiffWorkout = afterEquipWorkout.filter((exercise) => {
                return exercise.difficulty!=="ľahké"
            })
        } else {
            afterDiffWorkout = afterEquipWorkout;
        }
    } else {
        afterDiffWorkout = afterEquipWorkout
    }

    // Generate traning with correct time
    function generateFinalList(afterDiffWorkout: Exercise[],time: number) {

        shuffle(afterDiffWorkout);
        let actualTime = 0;

        while (actualTime<time) {
            const itemOfList = afterDiffWorkout[0];

            if (itemOfList === undefined) {
                return afterTimeWorkout;
            } 
            if (!afterTimeWorkout.includes(itemOfList)) {
                afterTimeWorkout.push(itemOfList);
                actualTime += itemOfList.time;
            } else {
                afterDiffWorkout = shuffle(afterDiffWorkout)
            }
            if (actualTime<time && afterDiffWorkout.length === afterTimeWorkout.length) {
                return afterTimeWorkout
            }
        }
        return afterTimeWorkout
    };

    afterTimeWorkout = generateFinalList(afterDiffWorkout,time);
    
    return [afterTimeWorkout, typeOfExercise]
}
