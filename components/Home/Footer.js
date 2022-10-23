"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Facebook = require("../../asets/Facebook.png");
const Instagram = require("../../asets/Instagram.png");
const Footer = () => {
    return (react_1.default.createElement("footer", { className: 'wrapper wrapper--footer' },
        react_1.default.createElement("div", { className: "footer__container" },
            react_1.default.createElement("a", { href: 'https://www.facebook.com/', className: 'contact__logo' },
                react_1.default.createElement("img", { src: Facebook, alt: 'Facebook_logo' })),
            react_1.default.createElement("a", { href: 'https://www.instagram.com/', className: 'contact__logo' },
                react_1.default.createElement("img", { src: Instagram, alt: 'Instagram_logo' })),
            "pppppp")));
};
exports.default = Footer;
//# sourceMappingURL=Footer.js.map