"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const filter_background_jpg_1 = __importDefault(require("../styles/filter-background.jpg"));
const store_1 = __importDefault(require("../app/store"));
require("../styles/FilterExercise.css");
const react_1 = require("react");
const listOfExercises_1 = require("../data/listOfExercises");
const utilities_1 = require("../utilities");
const react_redux_1 = require("react-redux");
const filterExerciseSlice_1 = require("./filterExerciseSlice");
function FilterExercise() {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const dispatch = (0, react_redux_1.useDispatch)();
    const context = (0, react_router_dom_1.useOutletContext)();
    const { bodyPart, difficulty, equipment, time, typeOfExercise } = (0, react_redux_1.useSelector)(() => store_1.default.getState().filterExercise);
    (0, react_1.useEffect)(() => {
        window.scrollTo(0, 0);
    }, []);
    function bodyPartSetup(part) {
        if (bodyPart.includes(part)) {
            dispatch((0, filterExerciseSlice_1.deleteBodyPart)(part));
        }
        else {
            dispatch((0, filterExerciseSlice_1.addBodyPart)(part));
        }
    }
    function difficultySetup(diff) {
        if (difficulty.includes(diff)) {
            dispatch((0, filterExerciseSlice_1.deleteDifficulty)(diff));
        }
        else {
            dispatch((0, filterExerciseSlice_1.addDifficulty)(diff));
        }
    }
    function equipmentSetup(equip) {
        if (equipment.includes(equip)) {
            dispatch((0, filterExerciseSlice_1.deleteEquipment)(equip));
        }
        else {
            dispatch((0, filterExerciseSlice_1.addEquipment)(equip));
        }
    }
    function filterWorkout() {
        const [finalWorkout, intervalVsRepeat] = (0, utilities_1.workoutGenerator)(listOfExercises_1.listOfWorkouts, { bodyPart, time, difficulty, equipment, typeOfExercise });
        context.finalWorkoutSetup(finalWorkout);
        context.intervalVsRepeatSetup(intervalVsRepeat);
        navigate('../filteredworkout');
    }
    return ((0, jsx_runtime_1.jsx)("div", { className: "home", children: (0, jsx_runtime_1.jsxs)("div", { className: "choiceColumn", id: 'filter', style: { backgroundImage: `url(${filter_background_jpg_1.default})` }, children: [(0, jsx_runtime_1.jsx)("div", { className: "overlay" }), (0, jsx_runtime_1.jsx)("h2", { children: "\u010Co to dnes bude?" }), (0, jsx_runtime_1.jsxs)("div", { className: 'menu', children: [(0, jsx_runtime_1.jsxs)("div", { className: 'selection', children: [(0, jsx_runtime_1.jsx)("h3", { children: "\u010Co dnes cvi\u010D\u00EDme?" }), (0, jsx_runtime_1.jsxs)("div", { className: 'selectionButtons', children: [(0, jsx_runtime_1.jsxs)("div", { className: 'inputLabel', children: [(0, jsx_runtime_1.jsx)("input", { id: '1', type: 'checkbox', onChange: () => { bodyPartSetup('ruky'); } }), (0, jsx_runtime_1.jsx)("label", { htmlFor: '1', className: 'button', children: "Ruky" })] }), (0, jsx_runtime_1.jsxs)("div", { className: 'inputLabel', children: [(0, jsx_runtime_1.jsx)("input", { id: '2', type: 'checkbox', onChange: () => { bodyPartSetup('nohy'); } }), (0, jsx_runtime_1.jsx)("label", { htmlFor: '2', className: 'button', children: "Nohy" })] }), (0, jsx_runtime_1.jsxs)("div", { className: 'inputLabel', children: [(0, jsx_runtime_1.jsx)("input", { id: '3', type: 'checkbox', onChange: () => { bodyPartSetup('zadok'); } }), (0, jsx_runtime_1.jsx)("label", { htmlFor: '3', className: 'button', children: "Zadok" })] }), (0, jsx_runtime_1.jsxs)("div", { className: 'inputLabel', children: [(0, jsx_runtime_1.jsx)("input", { id: '4', type: 'checkbox', onChange: () => { bodyPartSetup('brucho'); } }), (0, jsx_runtime_1.jsx)("label", { htmlFor: '4', className: 'button', children: "Brucho" })] }), (0, jsx_runtime_1.jsxs)("div", { className: 'inputLabel', children: [(0, jsx_runtime_1.jsx)("input", { id: '5', type: 'checkbox', onChange: () => { bodyPartSetup('kondička'); } }), (0, jsx_runtime_1.jsx)("label", { htmlFor: '5', className: 'button tooLong', children: "Kondi\u010Dka" })] })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: 'selection', children: [(0, jsx_runtime_1.jsx)("h3", { children: "N\u00E1ro\u010Dnos\u0165?" }), (0, jsx_runtime_1.jsxs)("div", { className: 'selectionButtons', children: [(0, jsx_runtime_1.jsxs)("div", { className: 'inputLabel', children: [(0, jsx_runtime_1.jsx)("input", { id: '6', type: 'checkbox', onChange: () => { difficultySetup('ľahké'); } }), (0, jsx_runtime_1.jsx)("label", { htmlFor: '6', className: 'button', children: "\u013Dahk\u00E9" })] }), (0, jsx_runtime_1.jsxs)("div", { className: 'inputLabel', children: [(0, jsx_runtime_1.jsx)("input", { id: '7', type: 'checkbox', onChange: () => { difficultySetup('stredné'); } }), (0, jsx_runtime_1.jsx)("label", { htmlFor: '7', className: 'button', children: "Stredn\u00E9" })] }), (0, jsx_runtime_1.jsxs)("div", { className: 'inputLabel', children: [(0, jsx_runtime_1.jsx)("input", { id: '8', type: 'checkbox', onChange: () => { difficultySetup('ťažké'); } }), (0, jsx_runtime_1.jsx)("label", { htmlFor: '8', className: 'button', children: "\u0164a\u017Ek\u00E9" })] })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: 'selection', children: [(0, jsx_runtime_1.jsx)("h3", { children: "Nejak\u00E9 pom\u00F4cky?" }), (0, jsx_runtime_1.jsxs)("div", { className: 'selectionButtons', children: [(0, jsx_runtime_1.jsxs)("div", { className: 'inputLabel', children: [(0, jsx_runtime_1.jsx)("input", { id: '9', type: 'checkbox', onChange: () => { equipmentSetup('kettlebell'); } }), (0, jsx_runtime_1.jsx)("label", { htmlFor: '9', className: 'button', children: "Kettlebell" })] }), (0, jsx_runtime_1.jsxs)("div", { className: 'inputLabel', children: [(0, jsx_runtime_1.jsx)("input", { id: '10', type: 'checkbox', onChange: () => { equipmentSetup('činky'); } }), (0, jsx_runtime_1.jsx)("label", { htmlFor: '10', className: 'button', children: "\u010Cinky" })] }), (0, jsx_runtime_1.jsxs)("div", { className: 'inputLabel', children: [(0, jsx_runtime_1.jsx)("input", { id: "11", type: 'checkbox', onChange: () => { equipmentSetup('slider'); } }), (0, jsx_runtime_1.jsx)("label", { htmlFor: '11', className: 'button', children: "Slider" })] }), (0, jsx_runtime_1.jsxs)("div", { className: 'inputLabel', children: [(0, jsx_runtime_1.jsx)("input", { id: '12', type: 'checkbox', onChange: () => { equipmentSetup('expander'); } }), (0, jsx_runtime_1.jsx)("label", { htmlFor: '12', className: 'button', children: "Expander" })] }), (0, jsx_runtime_1.jsxs)("div", { className: 'inputLabel', children: [(0, jsx_runtime_1.jsx)("input", { id: '13', type: 'checkbox', onClick: () => { equipmentSetup('bez pomôcok'); } }), (0, jsx_runtime_1.jsx)("label", { htmlFor: '13', className: 'button', children: "Bez pom\u00F4cok" })] })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: 'selection', children: [(0, jsx_runtime_1.jsx)("h3", { children: "Ako dlho cvi\u010D\u00EDme?" }), (0, jsx_runtime_1.jsxs)("div", { className: 'selectionButtons', children: [(0, jsx_runtime_1.jsxs)("div", { className: 'inputLabel', children: [(0, jsx_runtime_1.jsx)("input", { id: '14', type: 'checkbox', onChange: () => { dispatch((0, filterExerciseSlice_1.addTime)(10)); } }), (0, jsx_runtime_1.jsx)("label", { htmlFor: '14', className: 'button', children: "10 min\u00FAt" })] }), (0, jsx_runtime_1.jsxs)("div", { className: 'inputLabel', children: [(0, jsx_runtime_1.jsx)("input", { id: '15', type: 'checkbox', onChange: () => { dispatch((0, filterExerciseSlice_1.addTime)(20)); } }), (0, jsx_runtime_1.jsx)("label", { htmlFor: '15', className: 'button', children: "20 min\u00FAt" })] }), (0, jsx_runtime_1.jsxs)("div", { className: 'inputLabel', children: [(0, jsx_runtime_1.jsx)("input", { id: '16', type: 'checkbox', onChange: () => { dispatch((0, filterExerciseSlice_1.addTime)(30)); } }), (0, jsx_runtime_1.jsx)("label", { htmlFor: '16', className: 'button', children: "30 min\u00FAt" })] })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: 'selection', children: [(0, jsx_runtime_1.jsx)("h3", { children: "Intervaly \u010Di opakovania?" }), (0, jsx_runtime_1.jsxs)("div", { className: 'selectionButtons', children: [(0, jsx_runtime_1.jsxs)("div", { className: 'inputLabel', children: [(0, jsx_runtime_1.jsx)("input", { id: '17', type: 'checkbox', onChange: () => { dispatch((0, filterExerciseSlice_1.addTypeOfExercise)('interval')); } }), (0, jsx_runtime_1.jsx)("label", { htmlFor: '17', className: 'button', children: "Interval" })] }), (0, jsx_runtime_1.jsxs)("div", { className: 'inputLabel', children: [(0, jsx_runtime_1.jsx)("input", { id: '18', type: 'checkbox', onChange: () => { dispatch((0, filterExerciseSlice_1.addTypeOfExercise)('opakovania')); } }), (0, jsx_runtime_1.jsx)("label", { htmlFor: '18', className: 'button', children: "Opakovania" })] })] })] })] }), (0, jsx_runtime_1.jsx)("button", { id: 'filterOut', className: "login", onClick: filterWorkout, children: "Vytvori\u0165 tr\u00E9ning" })] }) }));
}
exports.default = FilterExercise;
