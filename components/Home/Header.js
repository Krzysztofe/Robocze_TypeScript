"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
// import {useAuthState} from "react-firebase-hooks/auth";
// import {auth} from "../Libraries/FireBaseConfig";
const Title_1 = __importDefault(require("../Title"));
const HeaderImageSmall = require('../../asets/Hero Image.png');
// import HeaderImageLarge from '../../asets/Hero Image@2x.png'
const Header = () => {
    // const [user] = useAuthState(auth);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: 'headerSpacer', id: 'start' }),
        react_1.default.createElement("header", { className: "wrapper wrapper--header" },
            react_1.default.createElement("img", { src: HeaderImageSmall, alt: "rzeczy do oddania", className: 'header__imageSmall' }),
            react_1.default.createElement("aside", { className: 'header__right' },
                react_1.default.createElement(Title_1.default, { text: ['zacznij pomagać!',
                        'Oddaj niechciane rzeczy' +
                            ' w zaufane ręce'], classH2: 'header__h2' })))));
};
exports.default = Header;
//# sourceMappingURL=Header.js.map