"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("../styles/Login.css");
function Login() {
    return ((0, jsx_runtime_1.jsx)("div", { className: "container", children: (0, jsx_runtime_1.jsx)("div", { className: "loginField", children: (0, jsx_runtime_1.jsxs)("form", { children: [(0, jsx_runtime_1.jsx)("input", { type: "email", name: 'email', id: 'email', placeholder: "Zadajte email", required: true, pattern: /^[*]+@[*]+\.[*]+/.toString() }), (0, jsx_runtime_1.jsx)("label", { htmlFor: "email", children: "Email" }), (0, jsx_runtime_1.jsx)("input", { type: "password", name: 'password', required: true, placeholder: "password", id: 'password', minLength: 8 }), (0, jsx_runtime_1.jsx)("label", { htmlFor: "password", children: "Password" })] }) }) }));
}
exports.default = Login;
