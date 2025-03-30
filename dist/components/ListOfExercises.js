"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const listOfExercises_1 = require("../data/listOfExercises");
require("../styles/ListOfExercises.css");
const pexels_leonardho_1717096_jpg_1 = __importDefault(require("../styles/pexels-leonardho-1717096.jpg"));
const react_router_dom_1 = require("react-router-dom");
const react_router_dom_2 = require("react-router-dom");
function ListOfExercises() {
    const [selectedType, setSelectedType] = (0, react_1.useState)("interval");
    const [currentPage, setCurrentPage] = (0, react_1.useState)(1);
    const [currentItems, setCurrentItems] = (0, react_1.useState)([]);
    const context = (0, react_router_dom_1.useOutletContext)();
    (0, react_1.useEffect)(() => {
        window.scrollTo(0, 0);
        function generateItems() {
            const firstItemIndex = (currentPage - 1) * 12;
            setCurrentItems(listOfExercises_1.listOfWorkouts.slice(firstItemIndex, firstItemIndex + 12 || listOfExercises_1.listOfWorkouts.length - 1));
        }
        generateItems();
        window.scrollTo(0, 0);
    }, [currentPage]);
    function displayButtons() {
        let currentButtons = [];
        if (currentPage > 1 && currentPage * 12 < listOfExercises_1.listOfWorkouts.length) {
            for (let i = currentPage - 1; i < currentPage + 2; i++) {
                if (i === currentPage) {
                    currentButtons.push((0, jsx_runtime_1.jsx)("button", { className: "currentButton", children: i }));
                }
                else {
                    currentButtons.push((0, jsx_runtime_1.jsx)("button", { onClick: () => setCurrentPage(i), children: i }));
                }
            }
        }
        if (currentPage === 1) {
            for (let i = currentPage; i < currentPage + 3; i++) {
                if (i === currentPage) {
                    currentButtons.push((0, jsx_runtime_1.jsx)("button", { className: "currentButton", children: i }));
                }
                else {
                    currentButtons.push((0, jsx_runtime_1.jsx)("button", { onClick: () => setCurrentPage(i), children: i }));
                }
            }
        }
        if (currentPage * 12 > listOfExercises_1.listOfWorkouts.length) {
            for (let i = currentPage - 2; i < currentPage + 1; i++) {
                if (i === currentPage) {
                    currentButtons.push((0, jsx_runtime_1.jsx)("button", { className: "currentButton", children: i }));
                }
                else {
                    currentButtons.push((0, jsx_runtime_1.jsx)("button", { onClick: () => setCurrentPage(i), children: i }));
                }
            }
        }
        return currentButtons;
    }
    function addExerciseHandle(exercise) {
        context.addSelected(exercise, selectedType);
        setSelectedType("interval");
    }
    function inputChangeHandle(event) {
        setSelectedType(event.target.value);
    }
    return ((0, jsx_runtime_1.jsx)("div", { className: "exercises-container", children: (0, jsx_runtime_1.jsxs)("div", { className: "choice-column back", style: { backgroundImage: `url(${pexels_leonardho_1717096_jpg_1.default})` }, children: [(0, jsx_runtime_1.jsx)("div", { className: "overlay zak" }), (0, jsx_runtime_1.jsx)("div", { className: "display-container", children: currentItems.map((exercise, index) => {
                        return ((0, jsx_runtime_1.jsxs)("div", { className: "exercise-container", children: [(0, jsx_runtime_1.jsxs)("div", { className: "firstrow", children: [(0, jsx_runtime_1.jsx)("img", { alt: exercise.name, src: exercise.imageURL }), (0, jsx_runtime_1.jsxs)("div", { className: "popis", children: [(0, jsx_runtime_1.jsx)("span", { children: exercise.difficulty }), (0, jsx_runtime_1.jsx)("span", { id: 'equip', children: exercise.equipment })] })] }), (0, jsx_runtime_1.jsx)(react_router_dom_2.Link, { to: `./${exercise.name}`, children: (0, jsx_runtime_1.jsx)("h3", { children: exercise.name }) }), (0, jsx_runtime_1.jsx)("p", { children: exercise.description }), (0, jsx_runtime_1.jsxs)("div", { className: "lastrow", children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: exercise.name, children: "Vyberte variantu" }), (0, jsx_runtime_1.jsxs)("select", { name: exercise.name, id: exercise.name, disabled: !exercise.repeat, onChange: inputChangeHandle, defaultValue: "interval", children: [(0, jsx_runtime_1.jsx)("option", { value: 'interval', children: "Intervaly" }), (0, jsx_runtime_1.jsx)("option", { value: 'opakovania', children: "Opakovania" })] }), (0, jsx_runtime_1.jsx)("input", { className: 'login', type: "submit", value: 'Prida\u0165 cvi\u010Denie', onClick: () => addExerciseHandle(exercise) })] })] }, exercise.name));
                    }) }), (0, jsx_runtime_1.jsxs)("div", { className: "paginationButtons-container", children: [(0, jsx_runtime_1.jsx)("button", { disabled: currentPage === 1 ? true : false, onClick: () => setCurrentPage(currentPage - 1), children: '<' }), (0, jsx_runtime_1.jsx)("div", { className: "paginationButtons", children: displayButtons() }), (0, jsx_runtime_1.jsx)("button", { disabled: currentPage * 12 > listOfExercises_1.listOfWorkouts.length ? true : false, onClick: () => setCurrentPage(currentPage + 1), children: '>' })] })] }) }));
}
exports.default = ListOfExercises;
