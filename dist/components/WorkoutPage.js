"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Header_1 = __importDefault(require("./Header"));
const Footer_1 = __importDefault(require("./Footer"));
require("../styles/WorkoutPage.css");
const react_router_dom_1 = require("react-router-dom");
const utilities_1 = require("../utilities");
const listOfExercises_1 = require("../data/listOfExercises");
const react_1 = require("react");
const group_pilates_instructors_exercising_reformers_jpg_1 = __importDefault(require("../styles/group-pilates-instructors-exercising-reformers.jpg"));
function WorkoutPage() {
    const params = (0, react_router_dom_1.useParams)();
    const { choice } = params;
    const { username } = params;
    const navigate = (0, react_router_dom_1.useNavigate)();
    const [finalWorkout, setFinalWorkout] = (0, react_1.useState)([]);
    const [intervalVsRepeat, setIntervalVsRepeat] = (0, react_1.useState)(null);
    (0, react_1.useEffect)(() => {
        window.scrollTo(0, 0);
        if (choice === "surpriseworkout") {
            const [finalWorkout, intervalVsRepeat] = (0, utilities_1.workoutGenerator)(listOfExercises_1.listOfWorkouts, {});
            setFinalWorkout(finalWorkout);
            setIntervalVsRepeat(intervalVsRepeat);
        }
    }, [params]);
    function deleteExercise(indexToDelete) {
        setFinalWorkout(workouts => workouts.filter((workout, index) => { return index !== indexToDelete; }));
    }
    function homeRedirect() {
        navigate(`../${username}`);
    }
    return ((0, jsx_runtime_1.jsxs)("div", { className: "landing", children: [(0, jsx_runtime_1.jsxs)("main", { children: [(0, jsx_runtime_1.jsx)(Header_1.default, {}), (0, jsx_runtime_1.jsx)("div", { className: "home", children: (0, jsx_runtime_1.jsxs)("div", { className: "choiceColumn", id: 'single', style: { backgroundImage: `url(${group_pilates_instructors_exercising_reformers_jpg_1.default})` }, children: [(0, jsx_runtime_1.jsx)("div", { className: "overlay" }), (0, jsx_runtime_1.jsx)("h2", { children: "Tvoj dne\u0161n\u00FD tr\u00E9ning" }), (0, jsx_runtime_1.jsx)("div", { className: "containerForGenerated", children: finalWorkout.map((exercise, index) => {
                                        return ((0, jsx_runtime_1.jsxs)("div", { className: `generatedDetail`, children: [(0, jsx_runtime_1.jsx)("img", { alt: exercise.name, src: exercise.imageURL }), (0, jsx_runtime_1.jsx)("span", { className: "exerciseName", children: exercise.name }), (0, jsx_runtime_1.jsx)("span", { className: "exerciseBodyPart", children: exercise.bodyPart.length > 1 ? exercise.bodyPart.join(', ') : exercise.bodyPart }), (0, jsx_runtime_1.jsx)("span", { className: "exerciseEquipment", children: exercise.equipment }), (0, jsx_runtime_1.jsx)("span", { className: "exerciseDifficulty", children: exercise.difficulty }), (0, jsx_runtime_1.jsx)("span", { className: "exerciseInterval", children: intervalVsRepeat }), (0, jsx_runtime_1.jsxs)("span", { className: "exerciseSerie", children: [exercise.series, " s\u00E9rie"] }), intervalVsRepeat === 'interval' ? (0, jsx_runtime_1.jsxs)("span", { className: "exerciseInter", children: [exercise.interval, " s"] }) : (0, jsx_runtime_1.jsx)("span", { className: "exerciseRepeat", children: exercise.repeat }), (0, jsx_runtime_1.jsx)("button", { className: "deleteExercise", onClick: () => deleteExercise(index), children: "X" })] }, exercise.id));
                                    }) }), (0, jsx_runtime_1.jsx)("button", { id: 'finish', className: "login", onClick: homeRedirect, children: "Skon\u010Di\u0165 tr\u00E9ning" })] }) })] }), (0, jsx_runtime_1.jsx)(Footer_1.default, {})] }));
}
exports.default = WorkoutPage;
