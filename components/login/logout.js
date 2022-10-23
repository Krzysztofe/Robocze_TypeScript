"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Title_1 = __importDefault(require("../Title"));
const Logout = () => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: 'headerSpacer' }),
        react_1.default.createElement("main", { className: 'wrapper wrapper--login' },
            react_1.default.createElement(Title_1.default, { text: ['wylogowanie nastąpiło', 'pomyślnie'], classContainer: '', classH2: '', classUnderline: 'login__underline' }),
            react_1.default.createElement(react_router_dom_1.Link, { to: '/' },
                react_1.default.createElement("button", { className: 'buttonLogin' }, "strona g\u0142\u00F3wna")))));
};
exports.default = Logout;
//# sourceMappingURL=logout.js.map