"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
require("../styles/Offer.css");
const utilities_1 = require("../utilities");
const listOfExercises_1 = require("../data/listOfExercises");
function Offer() {
    const navigation = (0, react_router_dom_1.useNavigate)();
    const context = (0, react_router_dom_1.useOutletContext)();
    function generateWorkoutSurprise() {
        const [finalWorkout, intervalVsRepeat] = (0, utilities_1.workoutGenerator)(listOfExercises_1.listOfWorkouts, {});
        context.intervalVsRepeatSetup(intervalVsRepeat);
        context.finalWorkoutSetup(finalWorkout);
        navigation('./surpriseworkout');
    }
    function filterWorkout() {
        navigation('./filter');
    }
    function listOfExerciseNavigation() {
        navigation('./listofexercises');
    }
    return ((0, jsx_runtime_1.jsxs)("div", { className: "home", children: [(0, jsx_runtime_1.jsxs)("div", { className: "choiceColumn", children: [(0, jsx_runtime_1.jsx)("h2", { children: "Vysklad\u00E1m si tr\u00E9ning" }), (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsx)("li", { children: "Pozri si v\u0161etky pon\u00FAkan\u00E9 cviky" }), (0, jsx_runtime_1.jsx)("li", { children: "Navo\u013E si \u013Eubovo\u013En\u00FD po\u010Det cvi\u010Den\u00ED" }), (0, jsx_runtime_1.jsx)("li", { children: "Pri v\u00E4\u010D\u0161ine cvi\u010Den\u00ED mo\u017Enos\u0165 v\u00FDberu interval/po\u010Det opakovan\u00ED" })] }), (0, jsx_runtime_1.jsx)("button", { className: "login login-query", onClick: listOfExerciseNavigation, children: "Pozrie\u0165 si cvi\u010Denia" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "choiceColumn", children: [(0, jsx_runtime_1.jsx)("h2", { children: "Vyfiltrujem si tr\u00E9ning" }), (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsx)("li", { children: "Vyber si obtia\u017Enos\u0165 cvi\u010Denia" }), (0, jsx_runtime_1.jsx)("li", { children: "Zvo\u013E si cie\u013Eov\u00FA partiu tela" }), (0, jsx_runtime_1.jsx)("li", { children: "Povedz n\u00E1m ako dlho chce\u0161 cvi\u010Di\u0165" }), (0, jsx_runtime_1.jsx)("li", { children: "Nem\u00E1\u0161 v\u0161etky potrebn\u00E9 cvi\u010Debn\u00E9 pom\u00F4cky?...Nevad\u00ED! Vyber si tie ktor\u00E9 m\u00E1\u0161" })] }), (0, jsx_runtime_1.jsx)("button", { className: "login login-query", onClick: filterWorkout, children: "Navoli\u0165 typ tr\u00E9ningu" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "choiceColumn", children: [(0, jsx_runtime_1.jsx)("h2", { children: "Nech\u00E1m sa prekvapi\u0165" }), (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsx)("li", { children: "St\u00E1le nov\u00FD tr\u00E9ning, pri ktorom nikdy nevie\u0161 \u010Do \u0165a \u010Dak\u00E1" }), (0, jsx_runtime_1.jsx)("li", { children: "Nep\u00E1\u010Di sa ti niektor\u00FD cvik? Tak ho vyme\u0148!" })] }), (0, jsx_runtime_1.jsx)("button", { className: "login login-query", onClick: generateWorkoutSurprise, children: "Vytvori\u0165 tr\u00E9ning" })] })] }));
}
exports.default = Offer;
