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
    return ((0, jsx_runtime_1.jsxs)("div", { className: "landing", children: [(0, jsx_runtime_1.jsxs)("main", { children: [(0, jsx_runtime_1.jsx)(Header_1.default, {}), (0, jsx_runtime_1.jsx)(react_router_dom_1.Outlet, {})] }), (0, jsx_runtime_1.jsx)(Footer_1.default, {})] }));
}
exports.default = Home;
