"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("../styles/LandingPresentation.css");
const pexels_pixabay_416778_jpg_1 = __importDefault(require("../components/resources/pexels-pixabay-416778.jpg"));
const sport_lifestyle_fitness_male_training_jpg_1 = __importDefault(require("../components/resources/sport-lifestyle-fitness-male-training.jpg"));
const pexels_victorfreitas_841128_jpg_1 = __importDefault(require("../components/resources/pexels-victorfreitas-841128.jpg"));
const pexels_olly_868483_jpg_1 = __importDefault(require("../components/resources/pexels-olly-868483.jpg"));
const react_router_dom_1 = require("react-router-dom");
function LandingPresentation() {
    const navigate = (0, react_router_dom_1.useNavigate)();
    function signupClickHandle() {
        navigate('/Signup');
    }
    return ((0, jsx_runtime_1.jsxs)("div", { className: "presentation", children: [(0, jsx_runtime_1.jsxs)("div", { className: "slides crunch", children: [(0, jsx_runtime_1.jsx)("img", { alt: 'crunch', src: pexels_pixabay_416778_jpg_1.default }), (0, jsx_runtime_1.jsx)("h2", { children: "M\u00E1\u0161 r\u00E1d cvi\u010Denie?" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "slides", children: [(0, jsx_runtime_1.jsx)("h2", { id: 'stretching', children: "Ner\u00E1d improvizuje\u0161 a chce\u0161 si tr\u00E9ning pripravi\u0165 dopredu?" }), (0, jsx_runtime_1.jsx)("img", { alt: 'stretching', src: sport_lifestyle_fitness_male_training_jpg_1.default })] }), (0, jsx_runtime_1.jsxs)("div", { className: "slides", children: [(0, jsx_runtime_1.jsx)("img", { alt: 'exercises', src: pexels_olly_868483_jpg_1.default }), (0, jsx_runtime_1.jsx)("h2", { id: 'weighlift', children: "Alebo pr\u00E1ve naopak? Nem\u00E1\u0161 n\u00E1pady \u010Di \u010Das prem\u00FD\u0161\u013Ea\u0165 nad tr\u00E9ningom?" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "slides", children: [(0, jsx_runtime_1.jsxs)("div", { className: "text", children: [(0, jsx_runtime_1.jsxs)("h2", { className: 'exercise', children: [(0, jsx_runtime_1.jsx)("span", { className: "fitCall", children: "FitCall\u00AE" }), " je t\u00E1 spr\u00E1vna vo\u013Eba pre teba!"] }), (0, jsx_runtime_1.jsx)("p", { className: "exercise", children: "Zaregistruj sa a z\u00EDskaj tr\u00E9ning presne pod\u013Ea tvojho gusta" }), (0, jsx_runtime_1.jsx)("div", { className: 'sign registration', children: (0, jsx_runtime_1.jsx)("button", { className: 'login', id: "registrationButton", onClick: signupClickHandle, children: "Registrova\u0165 sa" }) })] }), (0, jsx_runtime_1.jsx)("img", { alt: 'weightlift', src: pexels_victorfreitas_841128_jpg_1.default })] })] }));
}
exports.default = LandingPresentation;
