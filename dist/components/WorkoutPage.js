"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("../styles/WorkoutPage.css");
const react_router_dom_1 = require("react-router-dom");
const react_1 = require("react");
const group_pilates_instructors_exercising_reformers_jpg_1 = __importDefault(require("../styles/group-pilates-instructors-exercising-reformers.jpg"));
function WorkoutPage() {
    const context = (0, react_router_dom_1.useOutletContext)();
    const navigate = (0, react_router_dom_1.useNavigate)();
    const params = (0, react_router_dom_1.useParams)();
    const { username } = params;
    (0, react_1.useEffect)(() => {
        window.scrollTo(0, 0);
    }, []);
    function deleteExercise(indexToDelete) {
        const modifyWorkout = context.finalWorkout.filter((workout, index) => { return index !== indexToDelete; });
        context.finalWorkoutSetup(modifyWorkout);
    }
    function typeOfExerciseHandle(index) {
        if (context.selectedType.length > 0) {
            if (context.selectedType[index] === 'interval') {
                return (0, jsx_runtime_1.jsx)("span", { className: "exerciseInter", children: "interval" });
            }
            else {
                return (0, jsx_runtime_1.jsx)("span", { className: "exerciseRepeat", children: "opakovania" });
            }
        }
        else {
            return (0, jsx_runtime_1.jsx)("span", { className: "exerciseInterval", children: context.intervalVsRepeat });
        }
    }
    function displayIntervalOrRepeatTime(index, exercise) {
        if (context.intervalVsRepeat === 'interval' || context.selectedType[index] === 'interval') {
            return (0, jsx_runtime_1.jsxs)("span", { className: "exerciseInter", children: [exercise.interval, " s"] });
        }
        else {
            return (0, jsx_runtime_1.jsx)("span", { className: "exerciseRepeat", children: exercise.repeat });
        }
    }
    function homeRedirect() {
        context.resetSelectedType();
        navigate(`/${username}`);
    }
    return ((0, jsx_runtime_1.jsx)("div", { className: "home", children: (0, jsx_runtime_1.jsxs)("div", { className: "choiceColumn", id: 'single', style: { backgroundImage: `url(${group_pilates_instructors_exercising_reformers_jpg_1.default})` }, children: [(0, jsx_runtime_1.jsx)("div", { className: "overlay" }), (0, jsx_runtime_1.jsx)("h2", { children: "Tvoj dne\u0161n\u00FD tr\u00E9ning" }), (0, jsx_runtime_1.jsx)("div", { className: "containerForGenerated", children: context.finalWorkout.map((exercise, index) => {
                        return ((0, jsx_runtime_1.jsxs)("div", { className: `generatedDetail`, children: [(0, jsx_runtime_1.jsx)("img", { alt: exercise.name, src: exercise.imageURL }), (0, jsx_runtime_1.jsxs)("div", { className: 'container-query', children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: `../listofexercises/${exercise.name}`, children: (0, jsx_runtime_1.jsx)("span", { className: "exerciseName", children: exercise.name }) }), (0, jsx_runtime_1.jsxs)("div", { className: 'container-query-detail', children: [(0, jsx_runtime_1.jsx)("span", { className: "exerciseBodyPart", children: exercise.bodyPart.length > 1 ? exercise.bodyPart.join(', ') : exercise.bodyPart }), (0, jsx_runtime_1.jsx)("span", { className: "exerciseEquipment", children: exercise.equipment }), (0, jsx_runtime_1.jsx)("span", { className: "exerciseDifficulty", children: exercise.difficulty })] }), typeOfExerciseHandle(index), (0, jsx_runtime_1.jsxs)("span", { className: "exerciseSerie", children: [exercise.series, " s\u00E9rie"] }), displayIntervalOrRepeatTime(index, exercise), (0, jsx_runtime_1.jsx)("button", { className: "deleteExercise", onClick: () => deleteExercise(index), children: "X" })] })] }, index));
                    }) }), (0, jsx_runtime_1.jsx)("button", { id: 'finish', className: "login", onClick: homeRedirect, children: "Skon\u010Di\u0165 tr\u00E9ning" })] }) }));
}
exports.default = WorkoutPage;
