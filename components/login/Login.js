"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_router_1 = require("react-router");
// import {signInWithEmailAndPassword} from 'firebase/auth'
// import {auth} from '../Libraries/FireBaseConfig';
const Title_1 = __importDefault(require("../Title"));
const LoginButtons_1 = __importDefault(require("./LoginButtons"));
// import {loginValidation} from "../Libraries/libraryValidations";
const Login = () => {
    const navigate = (0, react_router_1.useNavigate)();
    const [inputValueLogin, setInputValueLogin] = (0, react_1.useState)({ email: "", password: "" });
    const [errors, setErrors] = (0, react_1.useState)('');
    const handleChange = (e) => {
        setInputValueLogin(Object.assign(Object.assign({}, inputValueLogin), { [e.target.name]: e.target.value }));
    };
    // const handleLogin = (e: FormEvent<HTMLFormElement>):void => {
    //     e.preventDefault()
    //
    //     setErrors(loginValidation(inputValueLogin))
    //
    //     if(loginValidation(inputValueLogin).length > 0){
    //         return
    //     }
    //
    //     signInWithEmailAndPassword(
    //         auth,
    //         inputValueLogin.email,
    //         inputValueLogin.password
    //     )
    //         .then(() => navigate('/'))
    //         .catch(error => setErrors(error.code))
    // }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: 'headerSpacer' }),
        react_1.default.createElement(Title_1.default, { text: ['zaloguj się'], classContainer: '', classH2: '', classUnderline: 'login__underline' }),
        react_1.default.createElement("div", { className: "login__inputs" },
            react_1.default.createElement("label", { className: 'login__label' },
                "Email",
                react_1.default.createElement("input", { type: 'text', name: 'email', value: inputValueLogin.email, onChange: handleChange, className: 'login__input' })),
            react_1.default.createElement("label", { className: 'login__label' },
                "Has\u0142o",
                react_1.default.createElement("input", { type: 'password', name: 'password', value: inputValueLogin.password, onChange: handleChange, className: 'login__input' }))),
        react_1.default.createElement("p", { className: 'login__errors' }, errors),
        react_1.default.createElement(LoginButtons_1.default, { link: '/rejestracja', btnRight: 'za\u0142\u00F3\u017C konto', btnLeft: 'zaloguj si\u0119' })));
};
exports.default = Login;
//# sourceMappingURL=Login.js.map