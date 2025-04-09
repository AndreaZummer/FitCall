"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const store_1 = __importDefault(require("../app/store"));
require("../styles/Login.css");
const loginSlice_1 = require("./loginSlice");
const react_router_dom_1 = require("react-router-dom");
function Login() {
    const navigate = (0, react_router_dom_1.useNavigate)();
    function loginClose() {
        navigate('/');
    }
    function handleLoginSubmit() {
        navigate(`/${store_1.default.getState().login}`);
    }
    function handleUserNameInput(event) {
        store_1.default.dispatch((0, loginSlice_1.setUserName)(event.target.value));
    }
    return ((0, jsx_runtime_1.jsx)("div", { className: "container", children: (0, jsx_runtime_1.jsxs)("div", { className: "loginField", children: [(0, jsx_runtime_1.jsx)("button", { onClick: loginClose, children: "X" }), (0, jsx_runtime_1.jsxs)("form", { className: "loginForm", onSubmit: handleLoginSubmit, children: [(0, jsx_runtime_1.jsx)("input", { type: "text", name: 'userName', id: 'userName', placeholder: "Zadajte u\u017E\u00EDvate\u013Esk\u00E9 meno", required: true, autoFocus: true, onChange: handleUserNameInput }), (0, jsx_runtime_1.jsx)("input", { type: "password", name: 'password', required: true, placeholder: "Heslo", id: 'password' }), (0, jsx_runtime_1.jsx)("input", { type: "submit", value: 'Prihl\u00E1si\u0165 sa' }), (0, jsx_runtime_1.jsx)("span", { onClick: loginClose, children: "Zabudli ste heslo?" })] })] }) }));
}
exports.default = Login;
