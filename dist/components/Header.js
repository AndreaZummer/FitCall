"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("../styles/Header.css");
const logo_png_1 = __importDefault(require("./resources/logo.png"));
const stopwatch_svgrepo_com_svg_1 = __importDefault(require("./resources/stopwatch-svgrepo-com.svg"));
const fitness_watch_pulse_smartwatch_svgrepo_com_svg_1 = __importDefault(require("./resources/fitness-watch-pulse-smartwatch-svgrepo-com.svg"));
const gym_bag_barrel_svgrepo_com_svg_1 = __importDefault(require("./resources/gym-bag-barrel-svgrepo-com.svg"));
const dumbell_fitness_svgrepo_com_svg_1 = __importDefault(require("./resources/dumbell-fitness-svgrepo-com.svg"));
const shoe_5_svgrepo_com_svg_1 = __importDefault(require("./resources/shoe-5-svgrepo-com.svg"));
function Header() {
    function loginClickHandler() {
    }
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'app-header', children: [(0, jsx_runtime_1.jsx)("img", { id: "logo", alt: "logo", src: logo_png_1.default }), (0, jsx_runtime_1.jsx)("img", { className: "header-svgs", id: 'stop', alt: "stopwatch", src: stopwatch_svgrepo_com_svg_1.default }), (0, jsx_runtime_1.jsx)("img", { className: "header-svgs", id: 'watch', alt: "fitness watch", src: fitness_watch_pulse_smartwatch_svgrepo_com_svg_1.default }), (0, jsx_runtime_1.jsx)("img", { className: "header-svgs", id: 'bag', alt: "bag", src: gym_bag_barrel_svgrepo_com_svg_1.default }), (0, jsx_runtime_1.jsx)("img", { className: "header-svgs", id: 'shoe', alt: "shoe", src: shoe_5_svgrepo_com_svg_1.default }), (0, jsx_runtime_1.jsx)("img", { className: "header-svgs", id: 'dumbell', alt: "dumbell", src: dumbell_fitness_svgrepo_com_svg_1.default }), (0, jsx_runtime_1.jsxs)("div", { className: 'sign', children: [(0, jsx_runtime_1.jsx)("button", { className: 'login', onClick: loginClickHandler, children: "Prihl\u00E1si\u0165 sa" }), (0, jsx_runtime_1.jsx)("p", { children: "alebo" }), (0, jsx_runtime_1.jsx)("span", { id: "signUp", children: "Registrova\u0165 sa" })] })] }));
}
exports.default = Header;
