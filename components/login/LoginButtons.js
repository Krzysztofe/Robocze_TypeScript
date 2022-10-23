"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const ButtonsLogin = ({ link, btnRight, btnLeft }) => {
    return (react_1.default.createElement("div", { className: "buttonsLogin" },
        react_1.default.createElement(react_router_dom_1.Link, { to: link },
            react_1.default.createElement("button", { className: 'buttonLogin' }, btnRight)),
        react_1.default.createElement("button", { type: 'submit', className: 'buttonLogin' }, btnLeft)));
};
exports.default = ButtonsLogin;
//# sourceMappingURL=LoginButtons.js.map