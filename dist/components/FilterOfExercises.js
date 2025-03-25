"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const personal_fit_background_jpg_1 = __importDefault(require("../styles/personal-fit-background.jpg"));
require("../styles/FilterOfExercises.css");
const react_1 = require("react");
function FilterOfExercises() {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const context = (0, react_router_dom_1.useOutletContext)();
    (0, react_1.useEffect)(() => {
        context.resetSelectedType();
    }, []);
    function generateHandle() {
        navigate('../ownworkout');
    }
    return ((0, jsx_runtime_1.jsx)("div", { className: "full-size-container", children: (0, jsx_runtime_1.jsxs)("div", { className: "exercise-preview", children: [(0, jsx_runtime_1.jsx)("div", { className: "intendation" }), (0, jsx_runtime_1.jsxs)("div", { className: "personal-fit", style: { backgroundImage: `url(${personal_fit_background_jpg_1.default})` }, children: [(0, jsx_runtime_1.jsx)("div", { className: "overlay" }), (0, jsx_runtime_1.jsx)("h2", { children: "Moje virtu\u00E1lne fitko" }), (0, jsx_runtime_1.jsx)("div", { className: "selectedExercises", children: context.selected && context.selected.map((exercise) => {
                                return ((0, jsx_runtime_1.jsxs)("div", { className: "selected-exercise", children: [(0, jsx_runtime_1.jsx)("img", { alt: exercise.name, src: exercise.imageURL }), (0, jsx_runtime_1.jsxs)("div", { className: "half", children: [(0, jsx_runtime_1.jsx)("button", { className: "close remove", onClick: () => context.removeHandle(exercise), children: "X" }), (0, jsx_runtime_1.jsx)("h4", { children: exercise.name })] })] }, exercise.id));
                            }) }), (0, jsx_runtime_1.jsx)("button", { className: "login", id: "createExercise", onClick: generateHandle, children: "Vytvori\u0165 cvi\u010Denie" })] }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Outlet, { context: context })] }) }));
}
exports.default = FilterOfExercises;
