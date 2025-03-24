"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const Footer_1 = __importDefault(require("./Footer"));
const Header_1 = __importDefault(require("./Header"));
const react_1 = require("react");
function Home() {
    (0, react_1.useEffect)(() => {
        window.scrollTo(0, 0);
    }, []);
    const [bodyPartSelected, setBodyPartSelected] = (0, react_1.useState)([]);
    const [difficultySelected, setDifficultySelected] = (0, react_1.useState)([]);
    const [equipmentSelected, setEquipmentSelected] = (0, react_1.useState)([]);
    const [timeSelected, setTimeSelected] = (0, react_1.useState)(0);
    const [intervalOrRepeatSelected, setIntervalOrRepeatSelected] = (0, react_1.useState)(null);
    const [selected, setSelected] = (0, react_1.useState)([]);
    const [selectedType, setSelectedType] = (0, react_1.useState)([]);
    function reset() {
        setBodyPartSelected([]);
        setDifficultySelected([]);
        setEquipmentSelected([]);
        setTimeSelected(0);
        setIntervalOrRepeatSelected(null);
        setSelected([]);
    }
    function resetSelectedType() {
        setSelectedType([]);
    }
    function bodyPartSetup(bodyPart) {
        if (bodyPartSelected.includes(bodyPart)) {
            setBodyPartSelected(bodyPartSelected.filter(item => { return item !== bodyPart; }));
        }
        else {
            setBodyPartSelected([...bodyPartSelected, bodyPart]);
        }
    }
    function difficultySetup(difficulty) {
        if (difficultySelected.includes(difficulty)) {
            setDifficultySelected(difficultySelected.filter(item => { return item !== difficulty; }));
        }
        else {
            setDifficultySelected([...difficultySelected, difficulty]);
        }
    }
    function equipmentSetup(equipment) {
        if (equipmentSelected.includes(equipment)) {
            setEquipmentSelected(equipmentSelected.filter(item => { return item !== equipment; }));
        }
        else {
            setEquipmentSelected([...equipmentSelected, equipment]);
        }
    }
    function timeSetup(time) {
        setTimeSelected(time);
    }
    function intervalOrRepeatSetup(intervalOrRepeat) {
        setIntervalOrRepeatSelected(intervalOrRepeat);
    }
    function addSelected(exercise, type) {
        setSelected([...selected, exercise]);
        setSelectedType([...selectedType, type]);
    }
    function removeHandle(removedexercise) {
        setSelected(selected.filter(exercise => {
            return removedexercise !== exercise;
        }));
    }
    const context = {
        bodyPartSetup: bodyPartSetup,
        difficultySetup: difficultySetup,
        equipmentSetup: equipmentSetup,
        timeSetup: timeSetup,
        intervalOrRepeatSetup: intervalOrRepeatSetup,
        bodyPartSelected: bodyPartSelected,
        difficultySelected: difficultySelected,
        equipmentSelected: equipmentSelected,
        timeSelected: timeSelected,
        intervalOrRepeatSelected: intervalOrRepeatSelected,
        reset: reset,
        addSelected: addSelected,
        selected: selected,
        removeHandle: removeHandle,
        selectedType: selectedType,
        resetSelectedType: resetSelectedType
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "landing", children: [(0, jsx_runtime_1.jsxs)("main", { children: [(0, jsx_runtime_1.jsx)(Header_1.default, {}), (0, jsx_runtime_1.jsx)(react_router_dom_1.Outlet, { context: context })] }), (0, jsx_runtime_1.jsx)(Footer_1.default, {})] }));
}
exports.default = Home;
