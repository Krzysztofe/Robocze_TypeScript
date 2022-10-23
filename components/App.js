"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
// import NavBar from "./Home/NavBar/NavBar";
const Home_1 = __importDefault(require("./Home/Home"));
const Login_1 = __importDefault(require("./login/Login"));
// import Register from "./Login/Register";
const logout_1 = __importDefault(require("./login/logout"));
// import ProtectedRouteOddajMain from "./OddajRzeczy/ProtectedRoute";
// import GlobalContextProv from "./OddajRzeczy/Context/GlobalContextProv";
function App() {
    return (react_1.default.createElement(react_router_dom_1.BrowserRouter, { basename: '/Robocze_TypeScript' },
        react_1.default.createElement(react_router_dom_1.Routes, null,
            react_1.default.createElement(react_router_dom_1.Route, { path: '/', element: react_1.default.createElement(Home_1.default, null) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: '/logowanie', element: react_1.default.createElement(Login_1.default, null) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: '/wylogowano', element: react_1.default.createElement(logout_1.default, null) }))));
}
exports.default = App;
//# sourceMappingURL=App.js.map