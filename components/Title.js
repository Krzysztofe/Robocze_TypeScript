"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Title = ({ text, classContainer, classH2, classUnderline }) => {
    return (react_1.default.createElement("div", { className: classContainer },
        react_1.default.createElement("h2", { className: `title__h2 ${classH2}` },
            text[0],
            " ",
            react_1.default.createElement("br", null),
            text[1]),
        react_1.default.createElement("div", { className: `title__decoration ${classUnderline}` }, " ")));
};
exports.default = Title;
//# sourceMappingURL=Title.js.map