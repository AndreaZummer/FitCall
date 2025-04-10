"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const personal_fit_background_jpg_1 = __importDefault(require("../styles/personal-fit-background.jpg"));
require("../styles/FilterOfExercises.css");
const filterOfExercisesSlice_1 = require("./filterOfExercisesSlice");
const store_1 = __importDefault(require("../app/store"));
const listOfExercises_1 = require("../data/listOfExercises");
const react_redux_1 = require("react-redux");
function FilterOfExercises() {
    const context = (0, react_router_dom_1.useOutletContext)();
    const navigate = (0, react_router_dom_1.useNavigate)();
    const selectedId = (0, react_redux_1.useSelector)(() => store_1.default.getState().filterOfExercises.selected);
    const selectedType = (0, react_redux_1.useSelector)(() => store_1.default.getState().filterOfExercises.selectedType);
    function finalWorkoutCreate() {
        let finalWorkout = [];
        for (let item of selectedId) {
            listOfExercises_1.listOfWorkouts.forEach(exercise => {
                if (item === exercise.id) {
                    finalWorkout.push(exercise);
                }
            });
        }
        return finalWorkout;
    }
    function generateHandle() {
        context.finalWorkoutSetup(finalWorkoutCreate());
        navigate('../ownworkout');
    }
    function removeHandle(selected) {
        const selectedIndex = selectedId.indexOf(selected);
        store_1.default.dispatch((0, filterOfExercisesSlice_1.removeSelected)({ selected, selectedIndex }));
    }
    return ((0, jsx_runtime_1.jsxs)("div", { className: "full-size-container", children: [(0, jsx_runtime_1.jsx)("div", { className: "filter-container", children: (0, jsx_runtime_1.jsxs)("div", { className: "menu", children: [(0, jsx_runtime_1.jsx)("div", { className: "overlay" }), (0, jsx_runtime_1.jsxs)("form", { className: "search", children: [(0, jsx_runtime_1.jsx)("input", { type: 'text', name: 'text', placeholder: "Vyh\u013Eada\u0165 cvik..." }), (0, jsx_runtime_1.jsx)("input", { type: "submit", className: 'login', value: 'H\u013Eada\u0165' })] }), (0, jsx_runtime_1.jsxs)("form", { className: "filter", children: [(0, jsx_runtime_1.jsx)("h2", { children: "Filter" }), (0, jsx_runtime_1.jsxs)("div", { className: "selection", children: [(0, jsx_runtime_1.jsx)("h3", { children: "Cie\u013Eov\u00E1 partia" }), (0, jsx_runtime_1.jsxs)("div", { className: "selectionButtons", children: [(0, jsx_runtime_1.jsxs)("div", { className: "inputLabel", children: [(0, jsx_runtime_1.jsx)("input", { id: 'ruky', type: "checkbox" }), (0, jsx_runtime_1.jsx)("label", { htmlFor: "ruky", className: "button", children: "Ruky" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "inputLabel", children: [(0, jsx_runtime_1.jsx)("input", { id: 'nohy', type: "checkbox" }), (0, jsx_runtime_1.jsx)("label", { htmlFor: "nohy", className: "button", children: "Nohy" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "inputLabel", children: [(0, jsx_runtime_1.jsx)("input", { id: 'brucho', type: "checkbox" }), (0, jsx_runtime_1.jsx)("label", { htmlFor: "brucho", className: "button", children: "Brucho" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "inputLabel", children: [(0, jsx_runtime_1.jsx)("input", { id: 'zadok', type: "checkbox" }), (0, jsx_runtime_1.jsx)("label", { htmlFor: "zadok", className: "button", children: "Zadok" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "inputLabel", children: [(0, jsx_runtime_1.jsx)("input", { id: 'kondi\u010Dka', type: "checkbox" }), (0, jsx_runtime_1.jsx)("label", { htmlFor: "kondi\u010Dka", className: "button", children: "Kondi\u010Dka" })] })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "selection", children: [(0, jsx_runtime_1.jsx)("h3", { children: "Obtia\u017Enos\u0165" }), (0, jsx_runtime_1.jsxs)("div", { className: "selectionButtons", children: [(0, jsx_runtime_1.jsxs)("div", { className: "inputLabel", children: [(0, jsx_runtime_1.jsx)("input", { id: '\u013Eahk\u00E9', type: "checkbox" }), (0, jsx_runtime_1.jsx)("label", { htmlFor: "\u013Eahk\u00E9", className: "button", children: "\u013Dahk\u00E9" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "inputLabel", children: [(0, jsx_runtime_1.jsx)("input", { id: 'stredn\u00E9', type: "checkbox" }), (0, jsx_runtime_1.jsx)("label", { htmlFor: "stredn\u00E9", className: "button", children: "Stredn\u00E9" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "inputLabel", children: [(0, jsx_runtime_1.jsx)("input", { id: '\u0165a\u017Ek\u00E9', type: "checkbox" }), (0, jsx_runtime_1.jsx)("label", { htmlFor: "\u0165a\u017Ek\u00E9", className: "button", children: "\u0164a\u017Ek\u00E9" })] })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "selection", children: [(0, jsx_runtime_1.jsx)("h3", { children: "Pom\u00F4cky" }), (0, jsx_runtime_1.jsxs)("div", { className: "selectionButtons", children: [(0, jsx_runtime_1.jsxs)("div", { className: "inputLabel", children: [(0, jsx_runtime_1.jsx)("input", { id: '\u010Dinky', type: "checkbox" }), (0, jsx_runtime_1.jsx)("label", { htmlFor: "\u010Dinky", className: "button", children: "\u010Cinky" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "inputLabel", children: [(0, jsx_runtime_1.jsx)("input", { id: 'kettlebell', type: "checkbox" }), (0, jsx_runtime_1.jsx)("label", { htmlFor: "ketlebell", className: "button", children: "Kettlebell" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "inputLabel", children: [(0, jsx_runtime_1.jsx)("input", { id: 'expander', type: "checkbox" }), (0, jsx_runtime_1.jsx)("label", { htmlFor: "expander", className: "button", children: "Expander" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "inputLabel", children: [(0, jsx_runtime_1.jsx)("input", { id: 'slider', type: "checkbox" }), (0, jsx_runtime_1.jsx)("label", { htmlFor: "slider", className: "button", children: "Slider" })] })] })] }), (0, jsx_runtime_1.jsx)("button", { className: "login", children: "Filtrova\u0165" })] })] }) }), (0, jsx_runtime_1.jsxs)("div", { className: "exercise-preview", children: [(0, jsx_runtime_1.jsx)("div", { className: "intendation" }), (0, jsx_runtime_1.jsxs)("div", { className: "personal-fit", style: { backgroundImage: `url(${personal_fit_background_jpg_1.default})` }, children: [(0, jsx_runtime_1.jsx)("div", { className: "overlay" }), (0, jsx_runtime_1.jsx)("div", { className: "fit", children: (0, jsx_runtime_1.jsx)("h2", { children: "Moje virtu\u00E1lne fitko" }) }), (0, jsx_runtime_1.jsx)("div", { className: "selectedExercises", children: selectedId && finalWorkoutCreate().map((exercise) => {
                                    return ((0, jsx_runtime_1.jsxs)("div", { className: "selected-exercise", children: [(0, jsx_runtime_1.jsx)("img", { alt: exercise.name, src: exercise.imageURL }), (0, jsx_runtime_1.jsxs)("div", { className: "half", children: [(0, jsx_runtime_1.jsx)("button", { className: "close remove", onClick: () => removeHandle(exercise.id), children: "X" }), (0, jsx_runtime_1.jsx)("h4", { children: exercise.name })] })] }, exercise.id));
                                }) }), (0, jsx_runtime_1.jsx)("button", { className: "login", id: "createExercise", onClick: generateHandle, children: "Vytvori\u0165 cvi\u010Denie" })] }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Outlet, {})] })] }));
}
exports.default = FilterOfExercises;
