"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const repo_jpg_1 = __importDefault(require("./resources/repo.jpg"));
const pexels_png_1 = __importDefault(require("./resources/pexels.png"));
const codecademy_png_1 = __importDefault(require("./resources/codecademy.png"));
const codewithmosh_logo_jpg_1 = __importDefault(require("./resources/codewithmosh_logo.jpg"));
const freepik_png_1 = __importDefault(require("./resources/freepik.png"));
require("../styles/Footer.css");
function Footer() {
    return ((0, jsx_runtime_1.jsxs)("footer", { children: [(0, jsx_runtime_1.jsxs)("div", { className: "sponsors", children: [(0, jsx_runtime_1.jsx)("h4", { children: "V spolupr\u00E1ci s:" }), (0, jsx_runtime_1.jsxs)("div", { className: "sponsorsImages", children: [(0, jsx_runtime_1.jsx)("img", { src: pexels_png_1.default, alt: 'pexels' }), (0, jsx_runtime_1.jsx)("img", { src: repo_jpg_1.default, alt: 'repo' }), (0, jsx_runtime_1.jsx)("img", { src: codecademy_png_1.default, alt: 'codeCademy' }), (0, jsx_runtime_1.jsx)("img", { src: codewithmosh_logo_jpg_1.default, alt: 'mosh' }), (0, jsx_runtime_1.jsx)("img", { src: freepik_png_1.default, alt: 'freepik' })] })] }), (0, jsx_runtime_1.jsx)("div", { id: 'copyright', children: (0, jsx_runtime_1.jsx)("span", { children: "FitCall\u00AE 2025" }) }), (0, jsx_runtime_1.jsxs)("div", { className: 'contact', children: [(0, jsx_runtime_1.jsx)("span", { children: "Kontaktn\u00E9 \u00FAdaje:" }), (0, jsx_runtime_1.jsxs)("p", { children: ["FitCall s.r.o.", (0, jsx_runtime_1.jsx)("br", {}), "S\u00FArna 6", (0, jsx_runtime_1.jsx)("br", {}), "Ko\u0161ice 040 01"] }), (0, jsx_runtime_1.jsx)("span", { id: 'mail', children: "fitCall@fitcall.sk" })] })] }));
}
exports.default = Footer;
