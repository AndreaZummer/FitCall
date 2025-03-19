"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./App.css");
const react_router_dom_1 = require("react-router-dom");
const Login_1 = __importDefault(require("./components/Login"));
const LandingPage_1 = __importDefault(require("./components/LandingPage"));
const SignUp_1 = __importDefault(require("./components/SignUp"));
const Home_1 = __importDefault(require("./components/Home"));
const router = (0, react_router_dom_1.createBrowserRouter)((0, react_router_dom_1.createRoutesFromElements)([
    (0, jsx_runtime_1.jsxs)(react_router_dom_1.Route, { path: '/', element: (0, jsx_runtime_1.jsx)(LandingPage_1.default, {}), children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: 'login', element: (0, jsx_runtime_1.jsx)(Login_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: 'signup', element: (0, jsx_runtime_1.jsx)(SignUp_1.default, {}) })] }),
    (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: ':username', element: (0, jsx_runtime_1.jsx)(Home_1.default, {}) })
]));
function App() {
    return ((0, jsx_runtime_1.jsx)(react_router_dom_1.RouterProvider, { router: router }));
}
exports.default = App;
