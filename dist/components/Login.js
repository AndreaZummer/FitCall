"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
require("../styles/Login.css");
const react_router_dom_1 = require("react-router-dom");
function Login() {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const [userName, setUsername] = (0, react_1.useState)('');
    function loginClose() {
        navigate('/');
    }
    function handleLoginSubmit() {
        navigate(`/${userName}`);
    }
    function handleUserNameInput(event) {
        setUsername(event.target.value);
    }
    return ((0, jsx_runtime_1.jsx)("div", { className: "container", children: (0, jsx_runtime_1.jsxs)("div", { className: "loginField", children: [(0, jsx_runtime_1.jsx)("button", { onClick: loginClose, children: "X" }), (0, jsx_runtime_1.jsxs)("form", { className: "loginForm", onSubmit: handleLoginSubmit, children: [(0, jsx_runtime_1.jsx)("input", { type: "text", name: 'userName', id: 'userName', placeholder: "Zadajte u\u017E\u00EDvate\u013Esk\u00E9 meno", required: true, autoFocus: true, onChange: handleUserNameInput, value: userName }), (0, jsx_runtime_1.jsx)("input", { type: "password", name: 'password', required: true, placeholder: "Heslo", id: 'password' }), (0, jsx_runtime_1.jsx)("input", { type: "submit", value: 'Prihl\u00E1si\u0165 sa' }), (0, jsx_runtime_1.jsx)("span", { onClick: loginClose, children: "Zabudli ste heslo?" })] })] }) }));
}
exports.default = Login;
