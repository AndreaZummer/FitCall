"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const listOfExercises_1 = require("../data/listOfExercises");
const react_router_dom_2 = require("react-router-dom");
const react_1 = require("react");
const detail_background_jpg_1 = __importDefault(require("../styles/detail-background.jpg"));
require("../styles/ExerciseDetail.css");
function ExerciseDetail() {
    window.scrollTo(0, 0);
    const params = (0, react_router_dom_1.useParams)();
    const { exercisename } = params;
    const navigate = (0, react_router_dom_1.useNavigate)();
    const context = (0, react_router_dom_2.useOutletContext)();
    const [selectedType, setSelectedType] = (0, react_1.useState)("interval");
    const actualExercise = listOfExercises_1.listOfWorkouts.filter(exercise => {
        return exercise.name === exercisename;
    });
    const exercise = (actualExercise[0]);
    function addExerciseHandle(exercise) {
        context.addSelected(exercise, selectedType);
        setSelectedType("interval");
    }
    function inputChangeHandle(event) {
        setSelectedType(event.target.value);
    }
    return ((0, jsx_runtime_1.jsx)("div", { className: "exercises-container", children: (0, jsx_runtime_1.jsxs)("div", { className: "choice-column back", style: { backgroundImage: `url(${detail_background_jpg_1.default})` }, children: [(0, jsx_runtime_1.jsx)("div", { className: "overlay zak" }), (0, jsx_runtime_1.jsxs)("div", { className: "detail", children: [(0, jsx_runtime_1.jsxs)("div", { className: "image-button", children: [(0, jsx_runtime_1.jsx)("img", { alt: exercise.name, src: exercise.imageURL }), (0, jsx_runtime_1.jsx)("button", { className: "login", onClick: () => navigate(-1), children: "Sp\u00E4\u0165" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "detail-instruction", children: [(0, jsx_runtime_1.jsx)("h2", { children: exercise.name }), (0, jsx_runtime_1.jsx)("p", { className: "short", children: exercise.description }), (0, jsx_runtime_1.jsx)("p", { className: "long", children: exercise.detail }), (0, jsx_runtime_1.jsxs)("p", { className: "bold", children: ["Cie\u013Eov\u00E1 partia: ", (0, jsx_runtime_1.jsx)("span", { children: exercise.bodyPart.join(', ') })] }), (0, jsx_runtime_1.jsxs)("p", { className: "bold", children: ["Obtia\u017Enos\u0165: ", (0, jsx_runtime_1.jsx)("span", { children: exercise.difficulty })] }), exercise.equipment && (0, jsx_runtime_1.jsxs)("p", { className: "bold", children: ["Pom\u00F4cky: ", (0, jsx_runtime_1.jsx)("span", { children: exercise.equipment })] }), (0, jsx_runtime_1.jsxs)("div", { className: "lastrow", children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: exercise.name, children: "Vyberte variantu" }), (0, jsx_runtime_1.jsxs)("select", { name: exercise.name, id: exercise.name, disabled: !exercise.repeat, onChange: inputChangeHandle, defaultValue: "interval", children: [(0, jsx_runtime_1.jsx)("option", { value: 'interval', children: "Intervaly" }), (0, jsx_runtime_1.jsx)("option", { value: 'opakovania', children: "Opakovania" })] }), (0, jsx_runtime_1.jsx)("input", { className: 'login', type: "submit", value: 'Prida\u0165 cvi\u010Denie', onClick: () => addExerciseHandle(exercise) })] })] })] })] }) }));
}
exports.default = ExerciseDetail;
