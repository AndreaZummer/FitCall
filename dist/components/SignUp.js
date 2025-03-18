"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const react_1 = require("react");
function SignUp() {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const [userName, setUsername] = (0, react_1.useState)('');
    const [password, setPassword] = (0, react_1.useState)('');
    const [confirmPassword, setConfirmPassword] = (0, react_1.useState)('');
    const [terms, setTerms] = (0, react_1.useState)(false);
    function passwordHandle(event) {
        setPassword(event.target.value);
    }
    function confirmPasswordHandle(event) {
        setConfirmPassword(event.target.value);
    }
    function loginClose() {
        navigate('/');
    }
    function handleLoginSubmit(event) {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert('Heslá sa nezhodujú');
            setPassword('');
            setConfirmPassword('');
        }
        else {
            navigate(`/${userName}`);
        }
    }
    function handleUserNameInput(event) {
        setUsername(event.target.value);
    }
    function termsHandle() {
        terms ? setTerms(false) : setTerms(true);
    }
    return ((0, jsx_runtime_1.jsx)("div", { className: "container", children: (0, jsx_runtime_1.jsxs)("div", { className: "loginField", children: [(0, jsx_runtime_1.jsx)("button", { onClick: loginClose, children: "X" }), (0, jsx_runtime_1.jsxs)("form", { className: "loginForm", onSubmit: handleLoginSubmit, children: [(0, jsx_runtime_1.jsx)("input", { type: "text", name: 'userName', placeholder: "Zadajte u\u017E\u00EDvate\u013Esk\u00E9 meno", required: true, autoFocus: true, onChange: handleUserNameInput, value: userName }), (0, jsx_runtime_1.jsx)("input", { type: "email", name: "userMail", placeholder: 'Zadajte email', required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.toString() }), (0, jsx_runtime_1.jsx)("input", { type: "password", name: 'password', required: true, placeholder: "Heslo", id: 'password', minLength: 8, onChange: passwordHandle, value: password }), (0, jsx_runtime_1.jsx)("input", { type: "password", name: 'password', required: true, placeholder: "Zopakujte heslo", onChange: confirmPasswordHandle, value: confirmPassword }), (0, jsx_runtime_1.jsxs)("div", { className: "terms", children: [(0, jsx_runtime_1.jsx)("input", { type: "checkbox", name: 'terms', required: true, id: 'terms', onClick: termsHandle }), (0, jsx_runtime_1.jsx)("label", { htmlFor: "terms", children: "S\u00FAhlas\u00EDm s podmienkami pou\u017E\u00EDvania aplik\u00E1cie FitCall" })] }), (0, jsx_runtime_1.jsx)("input", { type: "submit", value: 'Registrova\u0165 sa', disabled: terms ? false : true, id: !terms ? 'disabled' : 'enable' })] })] }) }));
}
exports.default = SignUp;
