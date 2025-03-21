"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.workoutGenerator = exports.shuffle = exports.intervalOrRepeat = void 0;
function intervalOrRepeat() {
    return Math.random();
}
exports.intervalOrRepeat = intervalOrRepeat;
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
exports.shuffle = shuffle;
function workoutGenerator(listOfWorkouts, { bodyPart, time, difficulty, equipment, typeOfExercise }) {
    let possibleWorkout = [];
    if (!typeOfExercise) {
        const result = intervalOrRepeat();
        if (result <= .5) {
            typeOfExercise = "interval";
        }
        else {
            typeOfExercise = "opakovania";
        }
    }
    if (!time) {
        time = Math.random() * 24 + 9;
        time *= 60;
    }
    if (typeOfExercise === "opakovania") {
        possibleWorkout = listOfWorkouts.filter((exercise) => {
            return exercise.repeat !== undefined;
        });
    }
    else {
        possibleWorkout = listOfWorkouts;
    }
    function generateFinalList(possibleWorkout, time) {
        shuffle(possibleWorkout);
        let actualTime = 0;
        let finalWorkout = [];
        while (actualTime < time) {
            const itemOfList = possibleWorkout[0];
            if (itemOfList === undefined) {
                return finalWorkout;
            }
            if (!finalWorkout.includes(itemOfList)) {
                finalWorkout.push(itemOfList);
                actualTime += itemOfList.time;
            }
            else {
                shuffle(possibleWorkout);
            }
        }
        return finalWorkout;
    }
    ;
    const finalWorkout = generateFinalList(possibleWorkout, time);
    return [finalWorkout, typeOfExercise];
}
exports.workoutGenerator = workoutGenerator;
