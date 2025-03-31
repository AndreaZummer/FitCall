"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
require("../styles/Header.css");
const logo_png_1 = __importDefault(require("./resources/logo.png"));
const stopwatch_svgrepo_com_svg_1 = __importDefault(require("./resources/stopwatch-svgrepo-com.svg"));
const fitness_watch_pulse_smartwatch_svgrepo_com_svg_1 = __importDefault(require("./resources/fitness-watch-pulse-smartwatch-svgrepo-com.svg"));
const gym_bag_barrel_svgrepo_com_svg_1 = __importDefault(require("./resources/gym-bag-barrel-svgrepo-com.svg"));
const dumbell_fitness_svgrepo_com_svg_1 = __importDefault(require("./resources/dumbell-fitness-svgrepo-com.svg"));
const shoe_5_svgrepo_com_svg_1 = __importDefault(require("./resources/shoe-5-svgrepo-com.svg"));
const avatar_man_profile_svgrepo_com_svg_1 = __importDefault(require("./resources/avatar-man-profile-svgrepo-com.svg"));
function Header() {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const params = (0, react_router_dom_1.useParams)();
    const userName = params["username"];
    function logOutClickHandler() {
        navigate('/');
    }
    function loginClickHandler() {
        navigate('/Login');
    }
    function signupClickHandle() {
        navigate('/Signup');
    }
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'app-header', children: [(0, jsx_runtime_1.jsx)("img", { id: "logo", alt: "logo", src: logo_png_1.default, onClick: () => navigate(`./`) }), (0, jsx_runtime_1.jsx)("img", { className: "header-svgs", id: 'stop', alt: "stopwatch", src: stopwatch_svgrepo_com_svg_1.default }), (0, jsx_runtime_1.jsx)("img", { className: "header-svgs", id: 'watch', alt: "fitness watch", src: fitness_watch_pulse_smartwatch_svgrepo_com_svg_1.default }), (0, jsx_runtime_1.jsx)("img", { className: "header-svgs", id: 'bag', alt: "bag", src: gym_bag_barrel_svgrepo_com_svg_1.default }), (0, jsx_runtime_1.jsx)("img", { className: "header-svgs", id: 'shoe', alt: "shoe", src: shoe_5_svgrepo_com_svg_1.default }), (0, jsx_runtime_1.jsx)("img", { className: "header-svgs", id: 'dumbell', alt: "dumbell", src: dumbell_fitness_svgrepo_com_svg_1.default }), !userName ?
                (0, jsx_runtime_1.jsxs)("div", { className: 'sign', children: [(0, jsx_runtime_1.jsx)("button", { className: 'login', onClick: loginClickHandler, children: "Prihl\u00E1si\u0165 sa" }), (0, jsx_runtime_1.jsx)("p", { children: "alebo" }), (0, jsx_runtime_1.jsx)("span", { className: "signUp", onClick: signupClickHandle, children: "Registrova\u0165 sa" })] })
                :
                    (0, jsx_runtime_1.jsxs)("div", { className: "profil", children: [(0, jsx_runtime_1.jsxs)("div", { className: "userInfo", children: [(0, jsx_runtime_1.jsx)("img", { alt: 'avatar', src: avatar_man_profile_svgrepo_com_svg_1.default }), (0, jsx_runtime_1.jsx)("h3", { children: userName })] }), (0, jsx_runtime_1.jsx)("span", { className: "signUp", onClick: logOutClickHandler, children: "Odhl\u00E1si\u0165 sa" })] })] }));
}
exports.default = Header;
