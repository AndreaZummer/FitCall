"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const store_1 = __importDefault(require("../app/store"));
const loginSlice_1 = require("./loginSlice");
const signUpSlice_1 = require("./signUpSlice");
function SignUp() {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const login = store_1.default.getState().login;
    const password = store_1.default.getState().SignUp.password;
    const confirmPasswordValue = store_1.default.getState().SignUp.confirmPassword;
    const terms = store_1.default.getState().SignUp.terms;
    function passwordHandle(event) {
        store_1.default.dispatch((0, signUpSlice_1.setPassword)(event.target.value));
    }
    function confirmPasswordHandle(event) {
        store_1.default.dispatch((0, signUpSlice_1.confirmPassword)(event.target.value));
    }
    function loginClose() {
        navigate('/');
    }
    function handleLoginSubmit(event) {
        event.preventDefault();
        if (store_1.default.getState().SignUp.password !== store_1.default.getState().SignUp.confirmPassword) {
            alert('Heslá sa nezhodujú');
            store_1.default.dispatch((0, signUpSlice_1.resetPasswords)());
        }
        else {
            navigate(`/${store_1.default.getState().login}`);
        }
    }
    function handleUserNameInput(event) {
        store_1.default.dispatch((0, loginSlice_1.setUserName)(event.target.value));
    }
    function termsHandle() {
        store_1.default.dispatch((0, signUpSlice_1.setTerms)());
    }
    return ((0, jsx_runtime_1.jsx)("div", { className: "container", children: (0, jsx_runtime_1.jsxs)("div", { className: "loginField", children: [(0, jsx_runtime_1.jsx)("button", { onClick: loginClose, children: "X" }), (0, jsx_runtime_1.jsxs)("form", { className: "loginForm", onSubmit: handleLoginSubmit, children: [(0, jsx_runtime_1.jsx)("input", { type: "text", name: 'userName', placeholder: "Zadajte u\u017E\u00EDvate\u013Esk\u00E9 meno", required: true, autoFocus: true, onChange: handleUserNameInput, value: login }), (0, jsx_runtime_1.jsx)("input", { type: "email", name: "userMail", placeholder: 'Zadajte email', required: true, pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.toString() }), (0, jsx_runtime_1.jsx)("input", { type: "password", name: 'password', required: true, placeholder: "Heslo", id: 'password', minLength: 8, onChange: passwordHandle, value: password }), (0, jsx_runtime_1.jsx)("input", { type: "password", name: 'password', required: true, placeholder: "Zopakujte heslo", onChange: confirmPasswordHandle, value: confirmPasswordValue }), (0, jsx_runtime_1.jsxs)("div", { className: "terms", children: [(0, jsx_runtime_1.jsx)("input", { type: "checkbox", name: 'terms', required: true, id: 'terms', onClick: termsHandle }), (0, jsx_runtime_1.jsx)("label", { htmlFor: "terms", children: "S\u00FAhlas\u00EDm s podmienkami pou\u017E\u00EDvania aplik\u00E1cie FitCall" })] }), (0, jsx_runtime_1.jsx)("input", { type: "submit", value: 'Registrova\u0165 sa', disabled: terms ? false : true, id: !terms ? 'disabled' : 'enable' })] })] }) }));
}
exports.default = SignUp;
