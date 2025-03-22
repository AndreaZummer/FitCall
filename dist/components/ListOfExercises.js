"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const listOfExercises_1 = require("../data/listOfExercises");
require("../styles/ListOfExercises.css");
const pexels_leonardho_1717096_jpg_1 = __importDefault(require("../styles/pexels-leonardho-1717096.jpg"));
function ListOfExercises() {
    return ((0, jsx_runtime_1.jsx)("div", { className: "exercises-container", children: (0, jsx_runtime_1.jsxs)("div", { className: "choice-column back", style: { backgroundImage: `url(${pexels_leonardho_1717096_jpg_1.default})` }, children: [(0, jsx_runtime_1.jsx)("div", { className: "overlay zak" }), (0, jsx_runtime_1.jsx)("div", { className: "display-container", children: listOfExercises_1.listOfWorkouts.map((exercise, index) => {
                        return (index < 12 && ((0, jsx_runtime_1.jsxs)("div", { className: "exercise-container", children: [(0, jsx_runtime_1.jsxs)("div", { className: "firstrow", children: [(0, jsx_runtime_1.jsx)("img", { alt: exercise.name, src: exercise.imageURL }), (0, jsx_runtime_1.jsxs)("div", { className: "popis", children: [(0, jsx_runtime_1.jsx)("span", { children: exercise.difficulty }), (0, jsx_runtime_1.jsx)("span", { id: 'equip', children: exercise.equipment })] })] }), (0, jsx_runtime_1.jsx)("h3", { children: exercise.name }), (0, jsx_runtime_1.jsx)("p", { children: exercise.description }), (0, jsx_runtime_1.jsxs)("div", { className: "lastrow", children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: exercise.name, children: "Vyberte variantu" }), (0, jsx_runtime_1.jsxs)("select", { name: exercise.name, id: exercise.name, disabled: !exercise.repeat, children: [(0, jsx_runtime_1.jsx)("option", { value: 'Intervaly', children: "Intervaly" }), (0, jsx_runtime_1.jsx)("option", { value: 'Opakovania', children: "Opakovania" })] }), (0, jsx_runtime_1.jsx)("input", { className: 'login', type: "submit", value: 'Prida\u0165 cvi\u010Denie' })] })] })));
                    }) })] }) }));
}
exports.default = ListOfExercises;
