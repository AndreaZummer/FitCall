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
    let afterTypeWorkout = [];
    let afterBodyWorkout = [];
    let afterEquipWorkout = [];
    let afterDiffWorkout = [];
    let afterTimeWorkout = [];
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
    else {
        time *= 60;
    }
    if (typeOfExercise === "opakovania") {
        afterTypeWorkout = listOfWorkouts.filter((exercise) => {
            return exercise.repeat !== undefined;
        });
    }
    else {
        afterTypeWorkout = listOfWorkouts;
    }
    if (bodyPart) {
        for (let exercise of afterTypeWorkout) {
            for (let part of bodyPart) {
                if (exercise.bodyPart.includes(part)) {
                    afterBodyWorkout.push(exercise);
                }
            }
        }
    }
    if (equipment) {
        console.log(equipment);
        for (let exercise of afterBodyWorkout) {
            if (!exercise.equipment) {
                afterEquipWorkout.push(exercise);
            }
            else if (equipment.includes(exercise.equipment)) {
                afterEquipWorkout.push(exercise);
                console.log(exercise);
            }
        }
    }
    if (difficulty?.includes("ľahké") && !difficulty.includes("ťažké")) {
        afterDiffWorkout = afterEquipWorkout.filter((exercise) => {
            return exercise.difficulty !== "ťažké";
        });
    }
    else if (!difficulty?.includes("ľahké") && difficulty?.includes("ťažké")) {
        afterDiffWorkout = afterEquipWorkout.filter((exercise) => {
            return exercise.difficulty !== "ľahké";
        });
    }
    else {
        afterDiffWorkout = afterEquipWorkout;
    }
    console.log(afterDiffWorkout.length);
    function generateFinalList(afterDiffWorkout, time) {
        shuffle(afterDiffWorkout);
        let actualTime = 0;
        while (actualTime < time) {
            const itemOfList = afterDiffWorkout[0];
            if (itemOfList === undefined) {
                return afterTimeWorkout;
            }
            if (!afterTimeWorkout.includes(itemOfList)) {
                afterTimeWorkout.push(itemOfList);
                actualTime += itemOfList.time;
            }
            else {
                shuffle(afterDiffWorkout);
            }
            if (actualTime < time && afterDiffWorkout.length === afterTimeWorkout.length) {
                return afterTimeWorkout;
            }
        }
        return afterTimeWorkout;
    }
    ;
    afterTimeWorkout = generateFinalList(afterDiffWorkout, time);
    return [afterTimeWorkout, typeOfExercise];
}
exports.workoutGenerator = workoutGenerator;
