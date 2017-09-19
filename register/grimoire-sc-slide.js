(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Component2 = __webpack_require__(1);

var _Component3 = _interopRequireDefault(_Component2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContainerComponent = function (_Component) {
    _inherits(ContainerComponent, _Component);

    function ContainerComponent() {
        _classCallCheck(this, ContainerComponent);

        return _possibleConstructorReturn(this, (ContainerComponent.__proto__ || Object.getPrototypeOf(ContainerComponent)).apply(this, arguments));
    }

    _createClass(ContainerComponent, [{
        key: "$mount",
        value: function $mount() {
            this.targetElement = this.generateTag();
            this._defaultDisplay = this.targetElement.style.display;
            var parentContainer = this.node.getComponentInAncestor(ContainerComponent);
            if (parentContainer) {
                this._parent = parentContainer.targetElement;
            } else {
                var _parentContainer = document.querySelector(this.getAttribute("defaultContainer"));
                var parent = document.createElement("div");
                parent.className = "slide-container";
                _parentContainer.appendChild(parent);
                this._parent = parent;
            }
            var className = this.node.getAttribute("class");
            className = className ? className : [];
            if (className.length > 0 || this.defaultClasses.length > 0) {
                this.targetElement.className = Array.prototype.concat([], className, this.defaultClasses).reduce(function (a, b) {
                    return a + " " + b;
                });
            }
            var idName = this.node.getAttribute("id");
            if (idName) {
                this.targetElement.id = idName;
            }
            this.targetElement.style.display = "none";
            this._parent.appendChild(this.targetElement);
        }
    }, {
        key: "generateTag",
        value: function generateTag() {
            return document.createElement("div");
        }
    }, {
        key: "$buildStart",
        value: function $buildStart(buildIndex) {
            if (this.getAttribute("inBuild") === buildIndex) {
                this.targetElement.style.display = this._defaultDisplay;
                this.targetElement.style.opacity = "1";
            }
            if (buildIndex === this.getAttribute("outBuild")) {
                this.targetElement.style.display = "none";
            }
        }
    }, {
        key: "$buildProgress",
        value: function $buildProgress(args) {
            if (this.getAttribute("inBuild") === args.buildIndex) {
                this.targetElement.style.display = this._defaultDisplay;
                this.targetElement.style.opacity = args.progress + "";
            }
        }
    }, {
        key: "$slideEnd",
        value: function $slideEnd() {
            this.targetElement.style.display = "none";
        }
    }, {
        key: "defaultClasses",
        get: function get() {
            return [];
        }
    }]);

    return ContainerComponent;
}(_Component3.default);

exports.default = ContainerComponent;

ContainerComponent.attributes = {
    inBuild: {
        converter: "Number",
        default: 0
    },
    outBuild: {
        converter: "Number",
        default: Number.MAX_SAFE_INTEGER
    },
    defaultContainer: {
        converter: "String",
        default: "div#paragraph-root"
    }
};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value: true});
exports.default=window.GrimoireJS.Node.Component;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ContainerComponent2 = __webpack_require__(0);

var _ContainerComponent3 = _interopRequireDefault(_ContainerComponent2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

var EditorComponent = function (_ContainerComponent) {
    _inherits(EditorComponent, _ContainerComponent);

    function EditorComponent() {
        _classCallCheck(this, EditorComponent);

        return _possibleConstructorReturn(this, (EditorComponent.__proto__ || Object.getPrototypeOf(EditorComponent)).apply(this, arguments));
    }

    _createClass(EditorComponent, [{
        key: "_readText",
        value: function _readText(url) {
            return new Promise(function (resolve, reject) {
                var xhr = new XMLHttpRequest();
                xhr.open("GET", "" + url);
                xhr.addEventListener("load", function () {
                    resolve(xhr.responseText);
                });
                xhr.send();
            });
        }
    }, {
        key: "_configure",
        value: function _configure() {
            return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                if (!EditorComponent._configured) {
                                    _context.next = 2;
                                    break;
                                }

                                return _context.abrupt("return");

                            case 2:
                                _context.t0 = monaco.languages.typescript.javascriptDefaults;
                                _context.next = 5;
                                return this._readText("jquery.d.ts");

                            case 5:
                                _context.t1 = _context.sent;

                                _context.t0.addExtraLib.call(_context.t0, _context.t1);

                                _context.t2 = monaco.languages.typescript.javascriptDefaults;
                                _context.next = 10;
                                return this._readText("grimoire.d.ts");

                            case 10:
                                _context.t3 = _context.sent;

                                _context.t2.addExtraLib.call(_context.t2, _context.t3);

                                EditorComponent._configured = true;

                            case 13:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
    }, {
        key: "_createEditor",
        value: function _createEditor(container, buttonElem) {
            window["require"].config({ paths: { 'vs': 'libs/monaco-editor/min/vs' } });
            var that = this;
            this._readText(this.getAttribute("src")).then(function (text) {
                window["require"](['vs/editor/editor.main'], function () {
                    var editor = monaco.editor.create(container, {
                        value: text,
                        readOnly: false,
                        language: that.getAttribute("language"),
                        scrollBeyondLastLine: false,
                        automaticLayout: true,
                        fontSize: 20,
                        scrollbar: {
                            handleMouseWheel: true
                        },
                        theme: "vs-dark"
                    });
                    if (that.getAttribute("language") === "javascript") {
                        buttonElem.addEventListener("click", function () {
                            eval(editor.getValue());
                        });
                    }
                    buttonElem.addEventListener("click", function () {
                        that.node.emit("execute", editor.getValue());
                    });
                    this.editor = editor;
                    that._configure();
                });
            });
        }
    }, {
        key: "generateTag",
        value: function generateTag() {
            var container = document.createElement("div");
            var containerContainer = document.createElement("div");
            containerContainer.className = "single-editor-container-outer";
            containerContainer.appendChild(container);
            container.className = "single-editor-container";
            var buttonContainer = document.createElement("div");
            buttonContainer.className = "button-container";
            if (!this.getAttribute("runButton")) {
                buttonContainer.style.visibility = "hidden";
            }
            var buttonInnerContainer = document.createElement("div");
            buttonInnerContainer.className = "button-inner-container";
            var buttonSelf = document.createElement("p");
            buttonSelf.innerText = "RUN";
            buttonInnerContainer.appendChild(buttonSelf);
            buttonContainer.appendChild(buttonInnerContainer);
            container.appendChild(buttonContainer);
            var actualContainer = document.createElement("div");
            actualContainer.className = "actual-editor-container";
            container.appendChild(actualContainer);
            this._createEditor(actualContainer, buttonInnerContainer);
            return containerContainer;
        }
    }]);

    return EditorComponent;
}(_ContainerComponent3.default);

exports.default = EditorComponent;

EditorComponent._configured = false;
EditorComponent.attributes = {
    source: {
        default: "",
        converter: "String"
    },
    inBuild: {
        converter: "Number",
        default: 0
    },
    outBuild: {
        converter: "Number",
        default: Number.MAX_SAFE_INTEGER
    },
    defaultContainer: {
        converter: "String",
        default: "div#editor-root"
    },
    language: {
        converter: "String",
        default: "javascript"
    },
    src: {
        converter: "String",
        default: ""
    },
    runButton: {
        converter: "Boolean",
        default: false
    }
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _ContainerComponent2 = __webpack_require__(0);

var _ContainerComponent3 = _interopRequireDefault(_ContainerComponent2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImageComponent = function (_ContainerComponent) {
    _inherits(ImageComponent, _ContainerComponent);

    function ImageComponent() {
        _classCallCheck(this, ImageComponent);

        return _possibleConstructorReturn(this, (ImageComponent.__proto__ || Object.getPrototypeOf(ImageComponent)).apply(this, arguments));
    }

    _createClass(ImageComponent, [{
        key: "$mount",
        value: function $mount() {
            _get(ImageComponent.prototype.__proto__ || Object.getPrototypeOf(ImageComponent.prototype), "$mount", this).call(this);
            var img = this.targetElement;
            img.src = this.getAttribute("src");
        }
    }, {
        key: "generateTag",
        value: function generateTag() {
            return document.createElement("img");
        }
    }]);

    return ImageComponent;
}(_ContainerComponent3.default);

exports.default = ImageComponent;

ImageComponent.attributes = {
    src: {
        default: "",
        converter: "String"
    },
    inBuild: {
        converter: "Number",
        default: 0
    },
    outBuild: {
        converter: "Number",
        default: Number.MAX_SAFE_INTEGER
    },
    defaultContainer: {
        converter: "String",
        default: "div#paragraph-root"
    }
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _ContainerComponent2 = __webpack_require__(0);

var _ContainerComponent3 = _interopRequireDefault(_ContainerComponent2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ParagraphComponent = function (_ContainerComponent) {
    _inherits(ParagraphComponent, _ContainerComponent);

    function ParagraphComponent() {
        _classCallCheck(this, ParagraphComponent);

        return _possibleConstructorReturn(this, (ParagraphComponent.__proto__ || Object.getPrototypeOf(ParagraphComponent)).apply(this, arguments));
    }

    _createClass(ParagraphComponent, [{
        key: "$mount",
        value: function $mount() {
            _get(ParagraphComponent.prototype.__proto__ || Object.getPrototypeOf(ParagraphComponent.prototype), "$mount", this).call(this);
            this.targetElement.innerText = this.getAttribute("text");
        }
    }, {
        key: "generateTag",
        value: function generateTag() {
            return document.createElement("p");
        }
    }]);

    return ParagraphComponent;
}(_ContainerComponent3.default);

exports.default = ParagraphComponent;

ParagraphComponent.attributes = {
    text: {
        default: "",
        converter: "String"
    },
    inBuild: {
        converter: "Number",
        default: 0
    },
    outBuild: {
        converter: "Number",
        default: Number.MAX_SAFE_INTEGER
    },
    defaultContainer: {
        converter: "String",
        default: "div#paragraph-root"
    }
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Component2 = __webpack_require__(1);

var _Component3 = _interopRequireDefault(_Component2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProgressSeeker = function (_Component) {
    _inherits(ProgressSeeker, _Component);

    function ProgressSeeker() {
        _classCallCheck(this, ProgressSeeker);

        return _possibleConstructorReturn(this, (ProgressSeeker.__proto__ || Object.getPrototypeOf(ProgressSeeker)).apply(this, arguments));
    }

    _createClass(ProgressSeeker, [{
        key: "$mount",
        value: function $mount() {
            this.inBuild = this.getAttribute("inBuild");
        }
    }, {
        key: "$slideStart",
        value: function $slideStart() {
            this.node.setAttribute("progress", 0);
        }
    }, {
        key: "$buildProgress",
        value: function $buildProgress(args) {
            if (this.inBuild === args.buildIndex) {
                this.node.setAttribute("progress", args.progress);
            }
        }
    }]);

    return ProgressSeeker;
}(_Component3.default);

exports.default = ProgressSeeker;

ProgressSeeker.attributes = {
    inBuild: {
        default: 1,
        converter: "Number"
    }
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Component2 = __webpack_require__(1);

var _Component3 = _interopRequireDefault(_Component2);

var _TransformComponent = __webpack_require__(10);

var _TransformComponent2 = _interopRequireDefault(_TransformComponent);

var _Quaternion = __webpack_require__(11);

var _Quaternion2 = _interopRequireDefault(_Quaternion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 定速回転のためのコンポーネント
 */
var Rotate = function (_Component) {
    _inherits(Rotate, _Component);

    function Rotate() {
        _classCallCheck(this, Rotate);

        return _possibleConstructorReturn(this, (Rotate.__proto__ || Object.getPrototypeOf(Rotate)).apply(this, arguments));
    }

    _createClass(Rotate, [{
        key: "$mount",
        value: function $mount() {
            this._transform = this.node.getComponent(_TransformComponent2.default);
        }
    }, {
        key: "$update",
        value: function $update() {
            this._transform.rotation = _Quaternion2.default.multiply(this._transform.rotation, _Quaternion2.default.euler(0, this.getAttribute("speed"), 0));
        }
    }]);

    return Rotate;
}(_Component3.default);
/**
 * このコンポーネントが持つ属性
 */


exports.default = Rotate;
Rotate.attributes = {
    speed: {
        converter: "String",
        default: 0.01
    }
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _ContainerComponent2 = __webpack_require__(0);

var _ContainerComponent3 = _interopRequireDefault(_ContainerComponent2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VideoComponent = function (_ContainerComponent) {
    _inherits(VideoComponent, _ContainerComponent);

    function VideoComponent() {
        _classCallCheck(this, VideoComponent);

        return _possibleConstructorReturn(this, (VideoComponent.__proto__ || Object.getPrototypeOf(VideoComponent)).apply(this, arguments));
    }

    _createClass(VideoComponent, [{
        key: "$mount",
        value: function $mount() {
            _get(VideoComponent.prototype.__proto__ || Object.getPrototypeOf(VideoComponent.prototype), "$mount", this).call(this);
            var video = this.targetElement;
            video.src = this.getAttribute("src");
            video.loop = true;
            this.video = video;
        }
    }, {
        key: "$slideStart",
        value: function $slideStart() {
            this.video.play();
        }
    }, {
        key: "generateTag",
        value: function generateTag() {
            return document.createElement("video");
        }
    }]);

    return VideoComponent;
}(_ContainerComponent3.default);

exports.default = VideoComponent;

VideoComponent.attributes = {
    inBuild: {
        converter: "Number",
        default: 0
    },
    src: {
        converter: "String",
        default: 0
    },
    outBuild: {
        converter: "Number",
        default: Number.MAX_SAFE_INTEGER
    },
    defaultContainer: {
        converter: "String",
        default: "div#paragraph-root"
    }
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value: true});
exports.default=window.GrimoireJS;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ContainerComponent = __webpack_require__(0);

var _ContainerComponent2 = _interopRequireDefault(_ContainerComponent);

var _EditorComponent = __webpack_require__(2);

var _EditorComponent2 = _interopRequireDefault(_EditorComponent);

var _ImageComponent = __webpack_require__(3);

var _ImageComponent2 = _interopRequireDefault(_ImageComponent);

var _ParagraphComponent = __webpack_require__(4);

var _ParagraphComponent2 = _interopRequireDefault(_ParagraphComponent);

var _ProgressSeeker = __webpack_require__(5);

var _ProgressSeeker2 = _interopRequireDefault(_ProgressSeeker);

var _Rotate = __webpack_require__(6);

var _Rotate2 = _interopRequireDefault(_Rotate);

var _VideoComponent = __webpack_require__(7);

var _VideoComponent2 = _interopRequireDefault(_VideoComponent);

var _main = __webpack_require__(12);

var _main2 = _interopRequireDefault(_main);

var _grimoirejs = __webpack_require__(8);

var _grimoirejs2 = _interopRequireDefault(_grimoirejs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __VERSION__ = "1.0.0";
var __NAME__ = "grimoirejs-sc-slide";

//"cauldron generate-exposure --src ./src --dest ./src/index.ts --ts --main ./src/main.ts --dts ./ref",
var __EXPOSE__ = {
    "Components": {
        "ContainerComponent": _ContainerComponent2.default,
        "EditorComponent": _EditorComponent2.default,
        "ImageComponent": _ImageComponent2.default,
        "ParagraphComponent": _ParagraphComponent2.default,
        "ProgressSeeker": _ProgressSeeker2.default,
        "Rotate": _Rotate2.default,
        "VideoComponent": _VideoComponent2.default
    }
};

_grimoirejs2.default.notifyRegisteringPlugin(__NAME__);
var __BASE__ = (0, _main2.default)();
Object.assign(__EXPOSE__, {
    __VERSION__: __VERSION__,
    __NAME__: __NAME__
});
Object.assign(__BASE__ || {}, __EXPOSE__);
window["GrimoireJS"].lib.sc_slide = __EXPOSE__;
exports.default = __BASE__;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value: true});
exports.default=window.GrimoireJS&&window.GrimoireJS.lib.fundamental?window.GrimoireJS.lib.fundamental.Components.TransformComponent:undefined;


/***/ }),
/* 11 */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value: true});
exports.default=window.GrimoireJS&&window.GrimoireJS.lib.math?window.GrimoireJS.lib.math.Quaternion:undefined;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

__webpack_require__(13);

__webpack_require__(14);

__webpack_require__(15);

__webpack_require__(16);

__webpack_require__(17);

var _grimoirejs = __webpack_require__(8);

var _grimoirejs2 = _interopRequireDefault(_grimoirejs);

var _ParagraphComponent = __webpack_require__(4);

var _ParagraphComponent2 = _interopRequireDefault(_ParagraphComponent);

var _ContainerComponent = __webpack_require__(0);

var _ContainerComponent2 = _interopRequireDefault(_ContainerComponent);

var _ImageComponent = __webpack_require__(3);

var _ImageComponent2 = _interopRequireDefault(_ImageComponent);

var _ProgressSeeker = __webpack_require__(5);

var _ProgressSeeker2 = _interopRequireDefault(_ProgressSeeker);

var _VideoComponent = __webpack_require__(7);

var _VideoComponent2 = _interopRequireDefault(_VideoComponent);

var _EditorComponent = __webpack_require__(2);

var _EditorComponent2 = _interopRequireDefault(_EditorComponent);

var _MarkdownComponent = __webpack_require__(22);

var _MarkdownComponent2 = _interopRequireDefault(_MarkdownComponent);

var _Rotate = __webpack_require__(6);

var _Rotate2 = _interopRequireDefault(_Rotate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

exports.default = function () {
    _grimoirejs2.default.register(function () {
        return __awaiter(undefined, void 0, void 0, regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _grimoirejs2.default.registerComponent("Paragraph", _ParagraphComponent2.default);
                            _grimoirejs2.default.registerComponent("Container", _ContainerComponent2.default);
                            _grimoirejs2.default.registerComponent("Image", _ImageComponent2.default);
                            _grimoirejs2.default.registerComponent("ProgressSeeker", _ProgressSeeker2.default);
                            _grimoirejs2.default.registerComponent("Video", _VideoComponent2.default);
                            _grimoirejs2.default.registerComponent("Rotate", _Rotate2.default);
                            _grimoirejs2.default.registerComponent("Editor", _EditorComponent2.default);
                            _grimoirejs2.default.registerComponent("Markdown", _MarkdownComponent2.default);
                            _grimoirejs2.default.registerNode("p", ["Paragraph"]);
                            _grimoirejs2.default.registerNode("div", ["Container"]);
                            _grimoirejs2.default.registerNode("img", ["Image"]);
                            _grimoirejs2.default.registerNode("video", ["Video"]);
                            _grimoirejs2.default.registerNode("editor", ["Editor"]);
                            _grimoirejs2.default.registerNode("markdown", ["Markdown"]);
                            _grimoirejs2.default.registerNode("render-slide-hitarea", ["RenderSlideHitarea"], {}, "render-slide");

                        case 15:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));
    });
    (0, _grimoirejs2.default)(function () {
        $("#editor-root").on("keydown", function (e) {
            e.stopPropagation();
        });
        (0, _grimoirejs2.default)("#slide")("#simple-goml-container").on("execute", function (e) {
            var parser = new DOMParser();
            var parsed = parser.parseFromString(e, "text/xml");
            var scene = parsed.getElementsByTagName("scene");
            var childs = scene.item(0).children;
            for (var i = 0; i < 3; i++) {
                var n = childs.item(i);
                var gn = (0, _grimoirejs2.default)("#slide")(".editor-content-container " + n.nodeName);
                for (var j = 0; j < n.attributes.length; j++) {
                    var at = n.attributes.item(j);
                    gn.setAttribute(at.name, at.value);
                }
            }
            (0, _grimoirejs2.default)("#slide")(".editor-content-container").append("<object>" + scene.item(0).innerHTML + "</object>");
        });
    });
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Vector = __webpack_require__(7);

var _Vector2 = _interopRequireDefault(_Vector);

var _FrameBuffer = __webpack_require__(17);

var _FrameBuffer2 = _interopRequireDefault(_FrameBuffer);

var _Texture2D = __webpack_require__(18);

var _Texture2D2 = _interopRequireDefault(_Texture2D);

var _SceneComponent = __webpack_require__(3);

var _SceneComponent2 = _interopRequireDefault(_SceneComponent);

var _ForwardShadingManagerComponent = __webpack_require__(4);

var _ForwardShadingManagerComponent2 = _interopRequireDefault(_ForwardShadingManagerComponent);

var _RenderBuffer = __webpack_require__(22);

var _RenderBuffer2 = _interopRequireDefault(_RenderBuffer);

var _Component2 = __webpack_require__(1);

var _Component3 = _interopRequireDefault(_Component2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SceneLightManager = function (_Component) {
    _inherits(SceneLightManager, _Component);

    function SceneLightManager() {
        _classCallCheck(this, SceneLightManager);

        var _this = _possibleConstructorReturn(this, (SceneLightManager.__proto__ || Object.getPrototypeOf(SceneLightManager)).apply(this, arguments));

        _this.lights = {
            point: [],
            directional: [],
            spot: []
        };
        _this.shadowMapCameras = [];
        return _this;
    }

    _createClass(SceneLightManager, [{
        key: "$awake",
        value: function $awake() {
            var _this2 = this;

            this.getAttributeRaw("shadowQuality").watch(function (v) {
                _this2._singleShadowMapSize = Math.pow(2, v);
            }, true);
        }
    }, {
        key: "$mount",
        value: function $mount() {
            this._gl = this.companion.get("gl");
            this._shadowMapTexture = new _Texture2D2.default(this._gl);
            this._lightMatricesTexture = new _Texture2D2.default(this._gl);
            this._lightMatricesTexture.magFilter = WebGLRenderingContext.NEAREST;
            this._lightMatricesTexture.minFilter = WebGLRenderingContext.NEAREST;
            this._shadowMapRenderbuffer = new _RenderBuffer2.default(this._gl);
            this._maxTextureSize = this._gl.getParameter(WebGLRenderingContext.MAX_TEXTURE_SIZE);
            this._shadingManager = this.node.getComponentInAncestor(_ForwardShadingManagerComponent2.default);
            var scene = this.node.getComponent(_SceneComponent2.default);
            this._lightSceneDesc = scene.sceneDescription.lights;
            this._shadingManager.addSceneLightManager(this);
            this._updateShadowMapSize();
            this.shadowMapFBO = new _FrameBuffer2.default(this._gl);
            this.shadowMapFBO.update(this._shadowMapTexture);
            this.shadowMapFBO.update(this._shadowMapRenderbuffer);
        }
    }, {
        key: "$unmount",
        value: function $unmount() {
            this._shadingManager.removeSceneLightManager(this);
            this.shadowMapFBO.destroy();
            this._shadowMapTexture.destroy();
        }
    }, {
        key: "addLight",
        value: function addLight(light) {
            switch (light.lightType) {
                case "point":
                    this.lights.point.push(light);
                    this._lightSceneDesc.point.colors.incrementLength();
                    this._lightSceneDesc.point.positions.incrementLength();
                    this._lightSceneDesc.point.params.incrementLength();
                    break;
                case "directional":
                    this.lights.directional.push(light);
                    this._lightSceneDesc.directional.colors.incrementLength();
                    this._lightSceneDesc.directional.directions.incrementLength();
                    this._lightSceneDesc.directional.params.incrementLength();
                    break;
                case "spot":
                    this.lights.spot.push(light);
                    this._lightSceneDesc.spot.colors.incrementLength();
                    this._lightSceneDesc.spot.directions.incrementLength();
                    this._lightSceneDesc.spot.positions.incrementLength();
                    this._lightSceneDesc.spot.params.incrementLength();
                    break;
            }
            this._shadingManager.updateLightCount();
        }
    }, {
        key: "removeLight",
        value: function removeLight(light) {
            switch (light.lightType) {
                case "point":
                    var i1 = this.lights.point.indexOf(light);
                    this.lights.point.splice(i1, 1);
                    this._lightSceneDesc.point.colors.decrementLength();
                    this._lightSceneDesc.point.positions.decrementLength();
                    this._lightSceneDesc.point.params.decrementLength();
                    break;
                case "directional":
                    var i2 = this.lights.directional.indexOf(light);
                    this.lights.directional.splice(i2, 1);
                    this._lightSceneDesc.directional.colors.decrementLength();
                    this._lightSceneDesc.directional.directions.decrementLength();
                    this._lightSceneDesc.directional.params.decrementLength();
                    break;
                case "spot":
                    var i3 = this.lights.spot.indexOf(light);
                    this.lights.spot.splice(i3, 1);
                    this._lightSceneDesc.spot.colors.decrementLength();
                    this._lightSceneDesc.spot.directions.decrementLength();
                    this._lightSceneDesc.spot.positions.decrementLength();
                    this._lightSceneDesc.spot.params.decrementLength();
                    break;
            }
            this._shadingManager.updateLightCount();
        }
    }, {
        key: "addShadowMapCamera",
        value: function addShadowMapCamera(smCamera) {
            this.shadowMapCameras.push(smCamera);
            smCamera.shadowMapIndex = this.shadowMapCameras.length - 1;
            this._updateShadowMapSize();
        }
    }, {
        key: "removeShadowMapCamera",
        value: function removeShadowMapCamera(smCamera) {
            var index = this.shadowMapCameras.indexOf(smCamera);
            this.shadowMapCameras.splice(index, 1);
            for (var i = 0; i < this.shadowMapCameras.length; i++) {
                this.shadowMapCameras[i].shadowMapIndex = i;
            }
            this._updateShadowMapSize();
        }
    }, {
        key: "viewportByShadowmapIndex",
        value: function viewportByShadowmapIndex(index) {
            var i = index % this._shadowMapElementCounts.X;
            var j = (index - i) / this._shadowMapElementCounts.X;
            this._gl.viewport(i * this._singleShadowMapSize, j * this._singleShadowMapSize, this._singleShadowMapSize, this._singleShadowMapSize);
        }
    }, {
        key: "updateLightMatricies",
        value: function updateLightMatricies(camera) {
            var _this3 = this;

            this.shadowMapCameras.forEach(function (v) {
                v.updateCamera(camera);
            });
            this.shadowMapCameras.forEach(function (v, i) {
                var pv = v.ProjectionViewMatrix.rawElements;
                for (var j = 0; j < 16; j++) {
                    _this3.lightMatrices[16 * i + j] = pv[j];
                }
            });
            this._updateLightMatricesTexture();
        }
        /**
         * Update texture size
         */

    }, {
        key: "_updateShadowMapSize",
        value: function _updateShadowMapSize() {
            var max = this._maxTextureSize;
            var single = this._singleShadowMapSize; // in px
            var byEdge = max / single;
            var count = this.shadowMapCameras.length;
            var size = count === 0 ? 0 : Math.pow(2, Math.ceil(Math.log2(Math.ceil(Math.sqrt(count))))) * single;
            if (size > max) {
                throw new Error("Max shadow map buffer size overflow");
            }
            if (count === 0) {
                this._shadowMapTexture.update(0, 1, 1, 0, WebGLRenderingContext.RGB, WebGLRenderingContext.UNSIGNED_BYTE);
                this._shadowMapRenderbuffer.update(WebGLRenderingContext.DEPTH_COMPONENT16, 1, 1);
            } else {
                this._shadowMapTexture.update(0, size, size, 0, WebGLRenderingContext.RGB, WebGLRenderingContext.UNSIGNED_BYTE);
                this._shadowMapRenderbuffer.update(WebGLRenderingContext.DEPTH_COMPONENT16, size, size);
            }
            var matCount = Math.pow(2, Math.ceil(Math.log2(count)));
            this.lightMatrices = new Float32Array(matCount * 16);
            this._shadowMapElementCounts = new _Vector2.default(size / single, size / single);
            this._updateLightMatricesTexture();
            this._lightSceneDesc.shadowMap = {
                shadowMapCountPerEdge: this._shadowMapElementCounts,
                count: matCount,
                shadowMap: this._shadowMapTexture,
                lightMatrices: this._lightMatricesTexture,
                pixelSize: 1.0 / this._singleShadowMapSize
            };
        }
    }, {
        key: "_updateLightMatricesTexture",
        value: function _updateLightMatricesTexture() {
            var count = this.shadowMapCameras.length;
            this._lightMatricesTexture.update(0, 4, Math.pow(2, Math.ceil(Math.log2(count))), 0, WebGLRenderingContext.RGBA, WebGLRenderingContext.FLOAT, this.lightMatrices);
        }
    }]);

    return SceneLightManager;
}(_Component3.default);

exports.default = SceneLightManager;

SceneLightManager.attributes = {
    shadowQuality: {
        converter: "Number",
        default: 9
    }
};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.Node.Component;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SceneComponent = __webpack_require__(3);

var _SceneComponent2 = _interopRequireDefault(_SceneComponent);

var _SceneLightManager = __webpack_require__(0);

var _SceneLightManager2 = _interopRequireDefault(_SceneLightManager);

var _Component2 = __webpack_require__(1);

var _Component3 = _interopRequireDefault(_Component2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LightTypeComponentBase = function (_Component) {
    _inherits(LightTypeComponentBase, _Component);

    function LightTypeComponentBase() {
        _classCallCheck(this, LightTypeComponentBase);

        return _possibleConstructorReturn(this, (LightTypeComponentBase.__proto__ || Object.getPrototypeOf(LightTypeComponentBase)).apply(this, arguments));
    }

    _createClass(LightTypeComponentBase, [{
        key: "$mount",
        value: function $mount() {
            this.__sceneLightManager = this.node.getComponentInAncestor(_SceneLightManager2.default);
            var sceneDesc = this.__sceneLightManager.node.getComponent(_SceneComponent2.default).sceneDescription;
            this.__lightDesc = sceneDesc.lights;
            this.__sceneLightManager.addLight(this);
        }
    }, {
        key: "$unmount",
        value: function $unmount() {
            this.__sceneLightManager.removeLight(this);
        }
    }, {
        key: "__ensureIndex",
        value: function __ensureIndex(lightParameters) {
            var index = lightParameters.indicies.indexOf(this.id);
            if (index >= 0) {
                return index;
            } else {
                lightParameters.indicies.push(this.id);
                return lightParameters.indicies.length - 1;
            }
        }
    }]);

    return LightTypeComponentBase;
}(_Component3.default);

exports.default = LightTypeComponentBase;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.lib.fundamental.Components.SceneComponent;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Component2 = __webpack_require__(1);

var _Component3 = _interopRequireDefault(_Component2);

var _MaterialFactory = __webpack_require__(19);

var _MaterialFactory2 = _interopRequireDefault(_MaterialFactory);

var _MaterialContainerComponent = __webpack_require__(20);

var _MaterialContainerComponent2 = _interopRequireDefault(_MaterialContainerComponent);

var _Basic = __webpack_require__(21);

var _Basic2 = _interopRequireDefault(_Basic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ForwardShadingManagerComponent = function (_Component) {
    _inherits(ForwardShadingManagerComponent, _Component);

    function ForwardShadingManagerComponent() {
        _classCallCheck(this, ForwardShadingManagerComponent);

        var _this = _possibleConstructorReturn(this, (ForwardShadingManagerComponent.__proto__ || Object.getPrototypeOf(ForwardShadingManagerComponent)).apply(this, arguments));

        _this._sceneLightManagers = [];
        return _this;
    }

    _createClass(ForwardShadingManagerComponent, [{
        key: "$awake",
        value: function $awake() {
            this._macroRegistry = this.companion.get("MaterialFactory").macro;
            this._macroRegistry.setValue("DIR_LIGHT_COUNT", "0");
            this._macroRegistry.setValue("POINT_LIGHT_COUNT", "0");
            this._macroRegistry.setValue("SPOT_LIGHT_COUNT", "0");
            this._macroRegistry.setValue("SHADOW_MAP_COUNT", "0");
            _MaterialFactory2.default.addSORTMaterial("basic-shading", _Basic2.default);
            _MaterialContainerComponent2.default.rewriteDefaultMaterial("basic-shading");
        }
    }, {
        key: "addSceneLightManager",
        value: function addSceneLightManager(s) {
            this._sceneLightManagers.push(s);
            this.updateLightCount();
        }
    }, {
        key: "removeSceneLightManager",
        value: function removeSceneLightManager(s) {
            var o = this._sceneLightManagers.indexOf(s);
            this._sceneLightManagers.splice(o, 1);
            this.updateLightCount();
        }
    }, {
        key: "updateLightCount",
        value: function updateLightCount() {
            var d = 0,
                s = 0,
                p = 0,
                sm = 0;
            for (var i = 0; i < this._sceneLightManagers.length; i++) {
                var slm = this._sceneLightManagers[i];
                d = Math.max(slm.lights.directional.length, d);
                p = Math.max(slm.lights.point.length, p);
                s = Math.max(slm.lights.spot.length, s);
                sm = Math.max(slm.shadowMapCameras.length, sm);
            }
            this._macroRegistry.setValue("DIR_LIGHT_COUNT", d + "");
            this._macroRegistry.setValue("POINT_LIGHT_COUNT", p + "");
            this._macroRegistry.setValue("SPOT_LIGHT_COUNT", s + "");
            this._macroRegistry.setValue("SHADOW_MAP_COUNT", sm + "");
        }
    }]);

    return ForwardShadingManagerComponent;
}(_Component3.default);

exports.default = ForwardShadingManagerComponent;

ForwardShadingManagerComponent.attributes = {};
ForwardShadingManagerComponent._typeToMacros = {
    point: "POINT_LIGHT_COUNT",
    directional: "DIR_LIGHT_COUNT",
    spot: "SPOT_LIGHT_COUNT"
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Matrix = __webpack_require__(24);

var _Matrix2 = _interopRequireDefault(_Matrix);

var _Vector = __webpack_require__(25);

var _Vector2 = _interopRequireDefault(_Vector);

var _SceneLightManager = __webpack_require__(0);

var _SceneLightManager2 = _interopRequireDefault(_SceneLightManager);

var _CameraComponent2 = __webpack_require__(26);

var _CameraComponent3 = _interopRequireDefault(_CameraComponent2);

var _AABB = __webpack_require__(27);

var _AABB2 = _interopRequireDefault(_AABB);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShadowMapCameraComponent = function (_CameraComponent) {
    _inherits(ShadowMapCameraComponent, _CameraComponent);

    function ShadowMapCameraComponent() {
        _classCallCheck(this, ShadowMapCameraComponent);

        var _this = _possibleConstructorReturn(this, (ShadowMapCameraComponent.__proto__ || Object.getPrototypeOf(ShadowMapCameraComponent)).apply(this, arguments));

        _this._sceneAABBCache = new _AABB2.default();
        _this._vectorCache = new _Vector2.default(0, 0, 0);
        return _this;
    }

    _createClass(ShadowMapCameraComponent, [{
        key: "$awake",
        value: function $awake() {
            this.Near = 0.01;
            this.Far = 50.0;
            this.OrthographicMode = true;
            this.OrthoSize = 30;
            this.AutoAspect = false;
            this.Aspect = 1.0;
        }
    }, {
        key: "$mount",
        value: function $mount() {
            _get(ShadowMapCameraComponent.prototype.__proto__ || Object.getPrototypeOf(ShadowMapCameraComponent.prototype), "$mount", this).call(this);
            var sm = this.containedScene.node.getComponent(_SceneLightManager2.default);
            sm.addShadowMapCamera(this);
        }
    }, {
        key: "updateCamera",
        value: function updateCamera(sceneCamera) {
            this._sceneAABBCache.clear();
            var ipv = _Matrix2.default.inverse(sceneCamera.ProjectionViewMatrix);
            for (var ix = 0; ix < 2; ix++) {
                for (var iy = 0; iy < 2; iy++) {
                    for (var iz = 0; iz < 2; iz++) {
                        this._vectorCache.rawElements[0] = ix == 0 ? -1 : 1;
                        this._vectorCache.rawElements[1] = iy == 0 ? -1 : 1;
                        this._vectorCache.rawElements[2] = iz == 0 ? -1 : 1;
                        this._sceneAABBCache.expand(_Matrix2.default.transformPoint(ipv, this._vectorCache));
                    }
                }
            }
            var diagonal = this._sceneAABBCache.pointLBF.subtractWith(this._sceneAABBCache.Center).magnitude;
            //this.transform.localPosition = this._sceneAABBCache.Center.addWith(this.transform.forward.negateThis().multiplyWith(diagonal));
        }
    }, {
        key: "$unmount",
        value: function $unmount() {
            var sm = this.containedScene.node.getComponent(_SceneLightManager2.default);
            sm.removeShadowMapCamera(this);
        }
    }]);

    return ShadowMapCameraComponent;
}(_CameraComponent3.default);

exports.default = ShadowMapCameraComponent;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _LightTypeComponentBase = __webpack_require__(2);

var _LightTypeComponentBase2 = _interopRequireDefault(_LightTypeComponentBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DirectionalLightTypeComponent = function (_LightTypeComponentBa) {
    _inherits(DirectionalLightTypeComponent, _LightTypeComponentBa);

    function DirectionalLightTypeComponent() {
        _classCallCheck(this, DirectionalLightTypeComponent);

        return _possibleConstructorReturn(this, (DirectionalLightTypeComponent.__proto__ || Object.getPrototypeOf(DirectionalLightTypeComponent)).apply(this, arguments));
    }

    _createClass(DirectionalLightTypeComponent, [{
        key: "$awake",
        value: function $awake() {
            var _this2 = this;

            this.lightType = "directional";
            this.getAttributeRaw("color").boundTo("_color");
            this.getAttributeRaw("intensity").boundTo("_intensity");
            this.getAttributeRaw("shadow").watch(function (v) {
                return _this2._useShadowChanged(v);
            }, true);
            this._transform = this.node.getComponent("Transform");
        }
    }, {
        key: "$update",
        value: function $update(args) {
            var sceneDesc = args.sceneDescription;
            var directionals = sceneDesc.lights.directional;
            var index = this.__ensureIndex(directionals);
            var d = this._transform.forward;
            var p = this._transform.globalPosition;
            directionals.directions.set(index, d.X, d.Y, d.Z);
            var c = this._color;
            directionals.colors.set(index, c.R * this._intensity, c.G * this._intensity, c.B * this._intensity);
            directionals.params.set(index, this._shadowCamera ? this._shadowCamera.shadowMapIndex : -1, p.X, p.Y, p.Z);
        }
    }, {
        key: "_useShadowChanged",
        value: function _useShadowChanged(v) {
            if (!v && this._shadowCamera) {
                this._shadowCamera.dispose();
                this._shadowCamera = null;
            } else if (v) {
                this._shadowCamera = this.node.addComponent("ShadowMapCamera");
            }
        }
    }]);

    return DirectionalLightTypeComponent;
}(_LightTypeComponentBase2.default);

exports.default = DirectionalLightTypeComponent;

DirectionalLightTypeComponent.attributes = {
    color: {
        converter: "Color3",
        default: "white"
    },
    intensity: {
        converter: "Number",
        default: 1
    },
    shadow: {
        converter: "Boolean",
        default: false
    }
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.lib.math.Vector2;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Component2 = __webpack_require__(1);

var _Component3 = _interopRequireDefault(_Component2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LightComponent = function (_Component) {
    _inherits(LightComponent, _Component);

    function LightComponent() {
        _classCallCheck(this, LightComponent);

        return _possibleConstructorReturn(this, (LightComponent.__proto__ || Object.getPrototypeOf(LightComponent)).apply(this, arguments));
    }

    _createClass(LightComponent, [{
        key: "$awake",
        value: function $awake() {
            var _this2 = this;

            this.getAttributeRaw("type").watch(function (v) {
                return _this2._onLightTypeChanged(v);
            }, true);
        }
        /**
         * Called when the light type was changed
         * @param {string} type [description]
         */

    }, {
        key: "_onLightTypeChanged",
        value: function _onLightTypeChanged(type) {
            type = type.toLowerCase();
            // check if the light type was changed actually.
            if (type === this._lastLightType) {
                return;
            } else {
                this._lastLightType = type;
            }
            this._removeLastTypeComponent();
            this._addLightTypeComponent(type);
        }
    }, {
        key: "_addLightTypeComponent",
        value: function _addLightTypeComponent(type) {
            switch (type) {
                case "directional":
                    this._lightTypeComponent = this.node.addComponent("DirectionalLightType", {}, true);
                    break;
                case "point":
                    this._lightTypeComponent = this.node.addComponent("PointLightType", {}, true);
                    break;
                case "spot":
                    this._lightTypeComponent = this.node.addComponent("SpotLightType", {}, true);
                    break;
            }
        }
    }, {
        key: "_removeLastTypeComponent",
        value: function _removeLastTypeComponent() {
            if (this._lightTypeComponent) {
                this._lightTypeComponent.dispose();
            }
        }
    }]);

    return LightComponent;
}(_Component3.default);

exports.default = LightComponent;

LightComponent.attributes = {
    type: {
        converter: "String",
        default: "Directional"
    }
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _LightTypeComponentBase = __webpack_require__(2);

var _LightTypeComponentBase2 = _interopRequireDefault(_LightTypeComponentBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PointLightTypeComponent = function (_LightTypeComponentBa) {
    _inherits(PointLightTypeComponent, _LightTypeComponentBa);

    function PointLightTypeComponent() {
        _classCallCheck(this, PointLightTypeComponent);

        return _possibleConstructorReturn(this, (PointLightTypeComponent.__proto__ || Object.getPrototypeOf(PointLightTypeComponent)).apply(this, arguments));
    }

    _createClass(PointLightTypeComponent, [{
        key: "$awake",
        value: function $awake() {
            this.lightType = "point";
            this.getAttributeRaw("color").boundTo("_color");
            this._transform = this.node.getComponent("Transform");
            this.getAttributeRaw("distance").boundTo("_distance");
            this.getAttributeRaw("decay").boundTo("_decay");
            this.getAttributeRaw("intensity").boundTo("_intensity");
        }
    }, {
        key: "$update",
        value: function $update(args) {
            var sceneDesc = args.sceneDescription;
            var points = sceneDesc.lights.point;
            var index = this.__ensureIndex(points);
            var pos = this._transform.globalPosition;
            points.positions.set(index, pos.X, pos.Y, pos.Z);
            points.colors.set(index, this._color.R * this._intensity, this._color.G * this._intensity, this._color.B * this._intensity);
            points.params.set(index, this._distance, this._decay);
        }
    }]);

    return PointLightTypeComponent;
}(_LightTypeComponentBase2.default);

exports.default = PointLightTypeComponent;

PointLightTypeComponent.attributes = {
    color: {
        converter: "Color3",
        default: "white"
    },
    distance: {
        converter: "Number",
        default: 5.0
    },
    decay: {
        converter: "Number",
        default: 2.0
    },
    intensity: {
        converter: "Number",
        default: 1
    }
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SceneLightManager = __webpack_require__(0);

var _SceneLightManager2 = _interopRequireDefault(_SceneLightManager);

var _Component2 = __webpack_require__(1);

var _Component3 = _interopRequireDefault(_Component2);

var _RenderSceneComponent = __webpack_require__(23);

var _RenderSceneComponent2 = _interopRequireDefault(_RenderSceneComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RenderShadowMapComponent = function (_Component) {
    _inherits(RenderShadowMapComponent, _Component);

    function RenderShadowMapComponent() {
        _classCallCheck(this, RenderShadowMapComponent);

        return _possibleConstructorReturn(this, (RenderShadowMapComponent.__proto__ || Object.getPrototypeOf(RenderShadowMapComponent)).apply(this, arguments));
    }

    _createClass(RenderShadowMapComponent, [{
        key: "$mount",
        value: function $mount() {
            this._renderSceneComponent = this.node.getComponent(_RenderSceneComponent2.default);
            if (!this._renderSceneComponent) {
                throw new Error("There was no RenderScene component found on the node attached RenderShadowMapComponent");
            }
            this._gl = this.companion.get("gl");
        }
    }, {
        key: "$render",
        value: function $render(args) {
            var _this2 = this;

            var sceneCamera = this._renderSceneComponent.camera ? this._renderSceneComponent.camera : args.camera;
            var slm = sceneCamera.containedScene.node.getComponent(_SceneLightManager2.default);
            if (slm.shadowMapCameras.length === 0) {
                return;
            }
            slm.shadowMapFBO.bind();
            this._gl.clearColor(0, 0, 0, 0);
            this._gl.clearDepth(1);
            this._gl.clear(WebGLRenderingContext.COLOR_BUFFER_BIT | WebGLRenderingContext.DEPTH_BUFFER_BIT);
            slm.updateLightMatricies(sceneCamera);
            slm.shadowMapCameras.forEach(function (v) {
                slm.viewportByShadowmapIndex(v.shadowMapIndex);
                v.updateContainedScene(args.timer);
                v.renderScene({
                    camera: v,
                    buffers: null,
                    layer: "default",
                    viewport: args.viewport,
                    technique: "depth",
                    renderer: _this2._renderSceneComponent,
                    sceneDescription: {},
                    timer: args.timer
                });
            });
            this._gl.flush();
            this._gl.bindFramebuffer(WebGLRenderingContext.FRAMEBUFFER, null);
        }
    }]);

    return RenderShadowMapComponent;
}(_Component3.default);

exports.default = RenderShadowMapComponent;

RenderShadowMapComponent.attributes = {};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _ShadowMapCameraComponent = __webpack_require__(5);

var _ShadowMapCameraComponent2 = _interopRequireDefault(_ShadowMapCameraComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SpotLightShadowMapCameraComponent = function (_ShadowMapCameraCompo) {
    _inherits(SpotLightShadowMapCameraComponent, _ShadowMapCameraCompo);

    function SpotLightShadowMapCameraComponent() {
        _classCallCheck(this, SpotLightShadowMapCameraComponent);

        return _possibleConstructorReturn(this, (SpotLightShadowMapCameraComponent.__proto__ || Object.getPrototypeOf(SpotLightShadowMapCameraComponent)).apply(this, arguments));
    }

    _createClass(SpotLightShadowMapCameraComponent, [{
        key: "$awake",
        value: function $awake() {
            _get(SpotLightShadowMapCameraComponent.prototype.__proto__ || Object.getPrototypeOf(SpotLightShadowMapCameraComponent.prototype), "$awake", this).call(this);
            this.OrthographicMode = false;
        }
    }]);

    return SpotLightShadowMapCameraComponent;
}(_ShadowMapCameraComponent2.default);

exports.default = SpotLightShadowMapCameraComponent;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _LightTypeComponentBase = __webpack_require__(2);

var _LightTypeComponentBase2 = _interopRequireDefault(_LightTypeComponentBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SpotLightTypeComponent = function (_LightTypeComponentBa) {
    _inherits(SpotLightTypeComponent, _LightTypeComponentBa);

    function SpotLightTypeComponent() {
        _classCallCheck(this, SpotLightTypeComponent);

        return _possibleConstructorReturn(this, (SpotLightTypeComponent.__proto__ || Object.getPrototypeOf(SpotLightTypeComponent)).apply(this, arguments));
    }

    _createClass(SpotLightTypeComponent, [{
        key: "$awake",
        value: function $awake() {
            var _this2 = this;

            this.lightType = "spot";
            this.getAttributeRaw("color").boundTo("_color");
            this._transform = this.node.getComponent("Transform");
            this.getAttributeRaw("innerCone").boundTo("_innerCone");
            this.getAttributeRaw("outerCone").boundTo("_outerCone");
            this.getAttributeRaw("decay").boundTo("_decay");
            this.getAttributeRaw("intensity").boundTo("_intensity");
            this.getAttributeRaw("shadow").watch(function (v) {
                return _this2._useShadowChanged(v);
            }, true);
        }
    }, {
        key: "$update",
        value: function $update(args) {
            var sceneDesc = args.sceneDescription;
            var spots = sceneDesc.lights.spot;
            var index = this.__ensureIndex(spots);
            var pos = this._transform.globalPosition;
            var dir = this._transform.up.negateThis();
            spots.positions.set(index, pos.X, pos.Y, pos.Z);
            spots.colors.set(index, this._color.R * this._intensity, this._color.G * this._intensity, this._color.B * this._intensity);
            spots.directions.set(index, dir.X, dir.Y, dir.Z);
            spots.params.set(index, this._innerCone, this._outerCone, this._decay, this._shadowCamera ? this._shadowCamera.shadowMapIndex : -1);
        }
    }, {
        key: "_useShadowChanged",
        value: function _useShadowChanged(v) {
            if (!v && this._shadowCamera) {
                this._shadowCamera.dispose();
                this._shadowCamera = null;
            } else if (v) {
                this._shadowCamera = this.node.addComponent("SpotLightShadowMapCamera");
            }
        }
    }]);

    return SpotLightTypeComponent;
}(_LightTypeComponentBase2.default);

exports.default = SpotLightTypeComponent;

SpotLightTypeComponent.attributes = {
    color: {
        converter: "Color3",
        default: "white"
    },
    innerCone: {
        converter: "Angle2D",
        default: "5d"
    },
    outerCone: {
        converter: "Angle2D",
        default: "20d"
    },
    decay: {
        converter: "Number",
        default: 1
    },
    intensity: {
        converter: "Number",
        default: 1
    },
    shadow: {
        converter: "Boolean",
        default: false
    }
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ImportResolver = __webpack_require__(28);

var _ImportResolver2 = _interopRequireDefault(_ImportResolver);

var _UniformResolverRegistry = __webpack_require__(29);

var _UniformResolverRegistry2 = _interopRequireDefault(_UniformResolverRegistry);

var _ShadingChunk = __webpack_require__(30);

var _ShadingChunk2 = _interopRequireDefault(_ShadingChunk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LightVariableRegister = function () {
    function LightVariableRegister() {
        _classCallCheck(this, LightVariableRegister);
    }

    _createClass(LightVariableRegister, null, [{
        key: "registerAll",
        value: function registerAll() {
            _ImportResolver2.default.staticImports["forward-shading"] = _ShadingChunk2.default;
            this._registerLightVariable("DIRECTIONAL_LIGHT_DIRECTIONS", function (n, p, i) {
                return p.uniformVector3Array(n, i.lights.directional.directions.elements);
            });
            this._registerLightVariable("DIRECTIONAL_LIGHT_COLORS", function (n, p, i) {
                return p.uniformVector3Array(n, i.lights.directional.colors.elements);
            });
            this._registerLightVariable("DIRECTIONAL_LIGHT_PARAMS", function (n, p, i) {
                return p.uniformVector4Array(n, i.lights.directional.params.elements);
            });
            this._registerLightVariable("POINT_LIGHT_POSITIONS", function (n, p, i) {
                return p.uniformVector3Array(n, i.lights.point.positions.elements);
            });
            this._registerLightVariable("POINT_LIGHT_COLORS", function (n, p, i) {
                return p.uniformVector3Array(n, i.lights.point.colors.elements);
            });
            this._registerLightVariable("POINT_LIGHT_PARAMS", function (n, p, i) {
                return p.uniformVector2Array(n, i.lights.point.params.elements);
            });
            this._registerLightVariable("SPOT_LIGHT_POSITIONS", function (n, p, i) {
                return p.uniformVector3Array(n, i.lights.spot.positions.elements);
            });
            this._registerLightVariable("SPOT_LIGHT_COLORS", function (n, p, i) {
                return p.uniformVector3Array(n, i.lights.spot.colors.elements);
            });
            this._registerLightVariable("SPOT_LIGHT_DIRECTIONS", function (n, p, i) {
                return p.uniformVector3Array(n, i.lights.spot.directions.elements);
            });
            this._registerLightVariable("SPOT_LIGHT_PARAMS", function (n, p, i) {
                return p.uniformVector4Array(n, i.lights.spot.params.elements);
            });
            this._registerLightVariable("SHADOW_MATRICES", function (n, p, i) {
                return p.uniformTexture2D(n, i.lights.shadowMap.lightMatrices);
            });
            this._registerLightVariable("SHADOW_MATRICES_COUNT", function (n, p, i) {
                return p.uniformFloat(n, i.lights.shadowMap.count);
            });
            this._registerLightVariable("SHADOW_MAP_TEXTURE", function (n, p, i) {
                return p.uniformTexture2D(n, i.lights.shadowMap.shadowMap);
            });
            this._registerLightVariable("SHADOW_MAP_ELEMENT_COUNT", function (n, p, i) {
                return p.uniformVector2(n, i.lights.shadowMap.shadowMapCountPerEdge);
            });
            this._registerLightVariable("SHADOW_MAP_PIXEL_SIZE", function (n, p, i) {
                return p.uniformFloat(n, i.lights.shadowMap.pixelSize);
            });
        }
    }, {
        key: "_registerLightVariable",
        value: function _registerLightVariable(semantic, register) {
            _UniformResolverRegistry2.default.add(semantic, function (valInfo) {
                return function (proxy, args) {
                    register(valInfo.name, proxy, args.sceneDescription);
                };
            });
        }
    }]);

    return LightVariableRegister;
}();

exports.default = LightVariableRegister;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VectorArrayContainer = function () {
    function VectorArrayContainer(size, length) {
        _classCallCheck(this, VectorArrayContainer);

        this.size = size;
        this.length = length;
        this.resize(size, length);
    }

    _createClass(VectorArrayContainer, [{
        key: "resize",
        value: function resize(size, length) {
            this.elements = new Float32Array(size * length);
            this.size = size;
            this.length = length;
        }
    }, {
        key: "set",
        value: function set(index, x, y, z, w) {
            var i = this.size * index;
            this.elements[i + 0] = x;
            if (y !== void 0) {
                this.elements[i + 1] = y;
                if (z !== void 0) {
                    this.elements[i + 2] = z;
                    if (w !== void 0) {
                        this.elements[i + 3] = w;
                    }
                }
            }
        }
    }, {
        key: "incrementLength",
        value: function incrementLength() {
            this.resize(this.size, this.length + 1);
        }
    }, {
        key: "decrementLength",
        value: function decrementLength() {
            this.resize(this.size, this.length - 1);
        }
    }]);

    return VectorArrayContainer;
}();

exports.default = VectorArrayContainer;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _DirectionalLightTypeComponent = __webpack_require__(6);

var _DirectionalLightTypeComponent2 = _interopRequireDefault(_DirectionalLightTypeComponent);

var _ForwardShadingManagerComponent = __webpack_require__(4);

var _ForwardShadingManagerComponent2 = _interopRequireDefault(_ForwardShadingManagerComponent);

var _LightComponent = __webpack_require__(8);

var _LightComponent2 = _interopRequireDefault(_LightComponent);

var _LightTypeComponentBase = __webpack_require__(2);

var _LightTypeComponentBase2 = _interopRequireDefault(_LightTypeComponentBase);

var _PointLightTypeComponent = __webpack_require__(9);

var _PointLightTypeComponent2 = _interopRequireDefault(_PointLightTypeComponent);

var _RenderShadowMapComponent = __webpack_require__(10);

var _RenderShadowMapComponent2 = _interopRequireDefault(_RenderShadowMapComponent);

var _SceneLightManager = __webpack_require__(0);

var _SceneLightManager2 = _interopRequireDefault(_SceneLightManager);

var _ShadowMapCameraComponent = __webpack_require__(5);

var _ShadowMapCameraComponent2 = _interopRequireDefault(_ShadowMapCameraComponent);

var _SpotLightShadowMapCameraComponent = __webpack_require__(11);

var _SpotLightShadowMapCameraComponent2 = _interopRequireDefault(_SpotLightShadowMapCameraComponent);

var _SpotLightTypeComponent = __webpack_require__(12);

var _SpotLightTypeComponent2 = _interopRequireDefault(_SpotLightTypeComponent);

var _LightVariableRegister = __webpack_require__(13);

var _LightVariableRegister2 = _interopRequireDefault(_LightVariableRegister);

var _VectorArrayContainer = __webpack_require__(14);

var _VectorArrayContainer2 = _interopRequireDefault(_VectorArrayContainer);

var _main = __webpack_require__(31);

var _main2 = _interopRequireDefault(_main);

var _grimoirejs = __webpack_require__(15);

var _grimoirejs2 = _interopRequireDefault(_grimoirejs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __VERSION__ = "1.7.3";
var __NAME__ = "grimoirejs-forward-shading";

var __EXPOSE__ = {
    "Components": {
        "DirectionalLightTypeComponent": _DirectionalLightTypeComponent2.default,
        "ForwardShadingManagerComponent": _ForwardShadingManagerComponent2.default,
        "LightComponent": _LightComponent2.default,
        "LightTypeComponentBase": _LightTypeComponentBase2.default,
        "PointLightTypeComponent": _PointLightTypeComponent2.default,
        "RenderShadowMapComponent": _RenderShadowMapComponent2.default,
        "SceneLightManager": _SceneLightManager2.default,
        "ShadowMapCameraComponent": _ShadowMapCameraComponent2.default,
        "SpotLightShadowMapCameraComponent": _SpotLightShadowMapCameraComponent2.default,
        "SpotLightTypeComponent": _SpotLightTypeComponent2.default
    },
    "Util": {
        "LightVariableRegister": _LightVariableRegister2.default,
        "VectorArrayContainer": _VectorArrayContainer2.default
    }
};

_grimoirejs2.default.notifyRegisteringPlugin(__NAME__);
var __BASE__ = (0, _main2.default)();
Object.assign(__EXPOSE__, {
    __VERSION__: __VERSION__,
    __NAME__: __NAME__
});
Object.assign(__BASE__ || {}, __EXPOSE__);
window["GrimoireJS"].lib.forward_shading = __EXPOSE__;
exports.default = __BASE__;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.lib.fundamental.Resource.FrameBuffer;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.lib.fundamental.Resource.Texture2D;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.lib.fundamental.Material.MaterialFactory;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.lib.fundamental.Components.MaterialContainerComponent;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = "@Technique default{\n@Pass{\n@BlendFunc(SRC_ALPHA,ONE_MINUS_SRC_ALPHA)\nFS_PREC(mediump,float)\n\nvarying vec3 vNormal;\nvarying vec2 vTexCoord;\nvarying vec4 vPosition;\n\n#ifdef ATTRIBUTE_COLOR_ENABLED\nvarying vec4 vColor;\n#endif\n\n#ifdef VS\n  attribute vec3 position;\n  attribute vec3 normal;\n  #ifdef ATTRIBUTE_TEXCOORD_ENABLED\n  attribute vec2 texCoord;\n  #endif\n  #ifdef ATTRIBUTE_COLOR_ENABLED\n  @COLOR\n  attribute vec4 color;\n  #endif\n\n  uniform mat4 _matPVM;\n  uniform mat4 _matM;\n\n  void main(){\n    gl_Position = _matPVM * vec4(position,1.0);\n    vNormal = normalize((_matM * vec4(normal,0.0)).xyz);\n    vPosition = (_matM * vec4(position,1.0));\n    #ifndef ATTRIBUTE_TEXCOORD_ENABLED\n    vTexCoord = position.xy / 2.0 + vec2(0.5);\n    #endif\n    #ifdef ATTRIBUTE_TEXCOORD_ENABLED\n    vTexCoord = texCoord;\n    #endif\n    #ifdef ATTRIBUTE_COLOR_ENABLED\n    vColor = color;\n    #endif\n  }\n#endif\n\n#ifdef FS\n  @CAMERA_POSITION\n  uniform vec3 _cameraPosition;\n  @{flag:\"USE_TEXTURE\"}\n  uniform sampler2D texture;\n  @{flag:\"USE_ROUGHNESS_TEXTURE\"}\n  uniform sampler2D roughnessMap;\n\n  @{default:\"white\",type:\"color\"}\n  uniform vec4 albedo;\n\n  @{default:1.0}\n  uniform float roughness;\n\n  @{default:0.99}\n  uniform float metalic;\n\n  @{default:\"black\",type:\"color\"}\n  uniform vec3 emission;\n\n  @import \"forward-shading\"\n\n\n\n  void main(){\n    vec3 dBaseColor = albedo.rgb;\n    vec4 lastColor = vec4(0,0,0,albedo.a);\n    #ifdef ATTRIBUTE_COLOR_ENABLED\n    dBaseColor *= vColor.rgb;\n    #endif\n    #ifdef USE_TEXTURE\n      vec4 texColor = texture2D(texture,vTexCoord);\n      dBaseColor = pow(texColor.rgb,vec3(2.2));\n      lastColor.a *= texColor.a;\n    #endif\n    float r = roughness;\n    #ifdef USE_ROUGHNESS_TEXTURE\n      r *= texture2D(roughnessMap,vTexCoord).r;\n    #endif\n    vec3 dielectricSpecular = vec3(0.04);\n    vec3 diffuse = mix(dBaseColor.rgb * (1. - dielectricSpecular.r),vec3(0),metalic);\n    vec3 f0 = mix(dielectricSpecular,dBaseColor.rgb,metalic);\n    pbr_params param = pbr_params(diffuse,f0,roughness*roughness,roughness);\n    lastColor.rgb += emission + shading(param,vNormal,vPosition.xyz/vPosition.w);\n    gl_FragColor.rgb = pow(lastColor.rgb,vec3(1.0/2.2)); // Gamma correction\n    gl_FragColor.a = albedo.a;\n    #ifdef ATTRIBUTE_COLOR_ENABLED\n    gl_FragColor.a *= vColor.a;\n    #endif\n  }\n#endif\n}\n}\n\n@Technique hitarea{\n  @Disable(BLEND)\n  @Pass{\n    FS_PREC(mediump,float)\n\n    #ifdef VS\n      attribute vec3 position;\n      uniform mat4 _matPVM;\n\n      void main(){\n        gl_Position = _matPVM * vec4(position,1.0);\n      }\n    #endif\n\n    #ifdef FS\n      @MESH_INDEX\n      uniform vec4 meshIndex;\n      void main(){\n        gl_FragColor = meshIndex;\n      }\n    #endif\n  }\n}\n\n@Technique depth{\n  @Pass{\n    @CullFace(FRONT)\n  FS_PREC(highp,float)\n\n  varying vec4 vPos;\n\n  vec3 EncodeFloatRGB( float v ) {\n    vec3 enc = vec3(1.0, 255.0, 65025.0) * v;\n    enc = fract(enc);\n    enc -= enc.yzz * vec3(1.0/255.0,1.0/255.0,0.0);\n    return enc;\n  }\n\n  float DecodeFloatRGB( vec3 rgb ) {\n    return dot( rgb, vec3(1.0, 1./255.0, 1./65025.0) );\n  }\n\n  #ifdef VS\n    attribute vec3 position;\n    uniform mat4 _matPVM;\n    void main(){\n      gl_Position = vPos= _matPVM * vec4(position,1.0);\n    }\n  #endif\n\n  #ifdef FS\n    void main(){\n      gl_FragColor.rgb = EncodeFloatRGB((vPos.z/vPos.w + 1.0)/2.0);\n      gl_FragColor.a = 1.0;\n    }\n  #endif\n  }\n}\n"

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.lib.fundamental.Resource.RenderBuffer;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.lib.fundamental.Components.RenderSceneComponent;

/***/ }),
/* 24 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.lib.math.Matrix;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.lib.math.Vector3;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.lib.fundamental.Components.CameraComponent;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.lib.math.AABB;

/***/ }),
/* 28 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.lib.fundamental.Sort.ImportResolver;

/***/ }),
/* 29 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.lib.fundamental.Material.UniformResolverRegistry;

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = "#define GR_FORWARD_SHADING_ENABLED\n@ReferMacro(DIR_LIGHT_COUNT,0)\n@ReferMacro(POINT_LIGHT_COUNT,0)\n@ReferMacro(SPOT_LIGHT_COUNT,0)\n@ReferMacro(SHADOW_MAP_COUNT,0)\n@ReferMacro(OES_TEXTURE_FLOAT,)\n\n#if DIR_LIGHT_COUNT > 0\n  #define USE_DIR_LIGHT\n#endif\n\n#if POINT_LIGHT_COUNT > 0\n  #define USE_POINT_LIGHT\n#endif\n\n#if SPOT_LIGHT_COUNT > 0\n  #define USE_SPOT_LIGHT\n#endif\n\n#if SHADOW_MAP_COUNT > 0\n  #define USE_SHADOW_MAP\n#endif\n\n#ifdef USE_DIR_LIGHT\n  @DIRECTIONAL_LIGHT_DIRECTIONS\n  uniform vec3 _dLightDir[DIR_LIGHT_COUNT];\n\n  @DIRECTIONAL_LIGHT_COLORS\n  uniform vec3 _dLightColor[DIR_LIGHT_COUNT];\n\n  @DIRECTIONAL_LIGHT_PARAMS\n  uniform vec4 _dLightParams[DIR_LIGHT_COUNT];\n#endif\n\n#ifdef USE_POINT_LIGHT\n\n  @POINT_LIGHT_POSITIONS\n  uniform vec3 _pLightPosition[POINT_LIGHT_COUNT];\n\n  @POINT_LIGHT_COLORS\n  uniform vec3 _pLightColor[POINT_LIGHT_COUNT];\n\n  @POINT_LIGHT_PARAMS\n  uniform vec2 _pLightParam[POINT_LIGHT_COUNT];\n\n#endif\n\n#ifdef USE_SPOT_LIGHT\n\n  @SPOT_LIGHT_POSITIONS\n  uniform vec3 _sLightPosition[SPOT_LIGHT_COUNT];\n\n  @SPOT_LIGHT_DIRECTIONS\n  uniform vec3 _sLightDir[SPOT_LIGHT_COUNT];\n\n  @SPOT_LIGHT_COLORS\n  uniform vec3 _sLightColor[SPOT_LIGHT_COUNT];\n\n  @SPOT_LIGHT_PARAMS\n  uniform vec4 _sLightParam[SPOT_LIGHT_COUNT];\n#endif\n\n#ifdef USE_SHADOW_MAP\n  @SHADOW_MAP_ELEMENT_COUNT\n  uniform vec2 _shadowMapElementCount;\n\n  @SHADOW_MAP_PIXEL_SIZE\n  uniform float _shadowMapPixelSize;\n\n  @SHADOW_MATRICES\n  uniform sampler2D _lightMatrices;\n\n  @SHADOW_MATRICES_COUNT\n  uniform float _lightMatricesCount;\n\n  @SHADOW_MAP_TEXTURE\n  uniform sampler2D _shadowMapTexture;\n\n  @{default:0.01}\n  uniform float shadowBias;\n\n  highp float decodeFloatRGB( vec3 rgb ) {\n    return dot( rgb, vec3(1.0, 1./255.0, 1./65025.0) );\n  }\n#endif\n\n// Define simple shading params\nstruct pbr_params{\n    vec3 diffuseColor;\n    vec3 f0;\n    float alpha;\n    float roughness;\n};\nfloat lambert(vec3 lightDirection,vec3 surfaceNormal) {\n  return max(0.0, dot(lightDirection, surfaceNormal));\n}\n\nfloat ctd_GGX_Distribution(pbr_params param,vec3 l,vec3 v,vec3 n,vec3 h){\n  float alpha2 = pow(param.alpha,2.0);\n  float nh2 = pow(dot(n,h),2.0);\n  return alpha2/(PI*pow(nh2*(alpha2 - 1.0) + 1.0,2.0));\n}\n\nfloat ctg_GGX_SingleGeometryTerm(pbr_params param,vec3 n,vec3 v){\n  float d = dot(n,v);\n  return 2.*d /(d + sqrt(d*d + param.alpha*param.alpha*(1. - d*d)));\n}\n\nvec3 ctf_Schlick(pbr_params param,vec3 l,vec3 v,vec3 n,vec3 h){\n  vec3 f0 = param.f0;\n  float vh = dot(v,n);\n  return f0 + pow(1.0-vh,5.0) * (vec3(1.0) - f0);\n}\n\nvec3 cookTorranceBRDF(pbr_params param,vec3 l,vec3 v,vec3 n){\n  vec3 h = normalize(l+v);\n  return  ctf_Schlick(param,l,v,n,h) * ctd_GGX_Distribution(param,l,v,n,h) * ctg_GGX_SingleGeometryTerm(param,n,l) * ctg_GGX_SingleGeometryTerm(param,n,v)/(4.0 * dot(l,n) * dot(v,n));\n}\n\nvec3 BRDF(pbr_params params,vec3 li,vec3 lo,vec3 n){\n  return min(vec3(1.0),params.diffuseColor/PI + cookTorranceBRDF(params,li,lo,n));\n}\n#ifdef USE_DIR_LIGHT\n\n#ifdef USE_SHADOW_MAP\n\n  bool isUVRegion(vec2 uv){\n    return all(bvec4(greaterThan(uv,vec2(0,0)),lessThan(uv,vec2(1,1))));\n  }\n\n  vec2 correctUV(vec2 uv,float index){\n    float i = fract(index / _shadowMapElementCount.x) * _shadowMapElementCount.x;\n    float j = (index - i) / _shadowMapElementCount.x;\n    return vec2((i + uv.x)/_shadowMapElementCount.x,(j + uv.y)/_shadowMapElementCount.y);\n  }\n\n  float shadowCoefficient(vec3 fragPosition,highp mat4 lightMatrix,float index){\n    highp vec4 lPos = lightMatrix * vec4(fragPosition,1.0);\n    if(any(bvec2(lPos.z/lPos.w > 1.0,lPos.z/lPos.w < -1.0))){\n      return 1.0;\n    }\n    vec2 bUV = lPos.xy / lPos.w / 2.0 + vec2(0.5);\n    highp float od = (lPos.z/lPos.w + 1.0)/2.0;\n    float fill = 0.0;\n    float N = 0.;\n    // PCF sampling\n    vec2 lUV = bUV;\n    if(isUVRegion(lUV)){\n      highp float d = decodeFloatRGB(texture2D(_shadowMapTexture,correctUV(lUV,index)).rgb);\n      fill += step(shadowBias,od-d);\n      N++;\n    }\n    lUV = bUV + vec2(_shadowMapPixelSize,0);\n    if(isUVRegion(lUV)){\n      highp float d = decodeFloatRGB(texture2D(_shadowMapTexture,correctUV(lUV,index)).rgb);\n      fill += step(shadowBias,od-d);\n      N++;\n    }\n    lUV = bUV + vec2(-_shadowMapPixelSize,0);\n    if(isUVRegion(lUV)){\n      highp float d = decodeFloatRGB(texture2D(_shadowMapTexture,correctUV(lUV,index)).rgb);\n      fill += step(shadowBias,od-d);\n      N++;\n    }\n    lUV = bUV + vec2(0,_shadowMapPixelSize);\n    if(isUVRegion(lUV)){\n      highp float d = decodeFloatRGB(texture2D(_shadowMapTexture,correctUV(lUV,index)).rgb);\n      fill += step(shadowBias,od-d);\n      N++;\n    }\n    lUV = bUV + vec2(0,-_shadowMapPixelSize);\n    if(isUVRegion(lUV)){\n      highp float d = decodeFloatRGB(texture2D(_shadowMapTexture,correctUV(lUV,index)).rgb);\n      fill += step(shadowBias,od-d);\n      N++;\n    }\n    if(N > 4.0){\n      return 1.0 - fill/N;\n    }\n    return 1.0;\n  }\n\n  highp vec4 fromLightMatrices(vec2 uv){\n    return texture2D(_lightMatrices,uv);\n  }\n\n  highp mat4 fetchLightMatrix(float index){\n    float y = 1.0 / _lightMatricesCount * (index  + 0.5);\n    return mat4(\n      fromLightMatrices(vec2(0.125,y)),\n      fromLightMatrices(vec2(0.375,y)),\n      fromLightMatrices(vec2(0.625,y)),\n      fromLightMatrices(vec2(0.875,y))\n      );\n  }\n#endif\n\n  vec3 directionalLight(pbr_params param,vec3 fragNormal,vec3 fragPosition){\n    vec3 result = vec3(0,0,0);\n    for(int i = 0; i < DIR_LIGHT_COUNT;i++){\n      vec3 lI = lambert(fragNormal,-_dLightDir[i]) * _dLightColor[i];\n      float sc = 1.0;\n      #ifdef USE_SHADOW_MAP // Shadowmap Calculations\n        if(_dLightParams[i].x >= 0.0){\n          highp mat4 lMat = fetchLightMatrix(_dLightParams[i].x);\n          sc = shadowCoefficient(fragPosition,lMat,_dLightParams[i].x);\n        }\n      #endif\n      vec3 lColor = sc * lI * BRDF(param,-_dLightDir[i],normalize(_cameraPosition - fragPosition),fragNormal);\n      result += lColor;\n    }\n    return result;\n  }\n#endif\n#ifdef USE_POINT_LIGHT\n// BRDF arguments\n// param,(normalized fragment to light verctor),(normalized fragment to camera vector), fragment position\n  vec3 pointLight(pbr_params param,vec3 fragNormal,vec3 fragPosition){\n    vec3 result = vec3(0,0,0);\n    for(int i = 0; i < POINT_LIGHT_COUNT;i++){\n      vec3 p2l = _pLightPosition[i] - fragPosition;\n      float d = length(p2l);\n      vec2 lightParam = _pLightParam[i];\n      float atten = max(0.,1.0-d/lightParam.x)/(1.0 + lightParam.y*lightParam.y*d);\n      p2l = normalize(p2l);\n      vec3 lI = lambert(fragNormal,p2l)* _pLightColor[i] * atten;\n      vec3 lColor = lI  * BRDF(param,p2l,normalize(_cameraPosition - fragPosition),fragNormal);\n      result += lColor ;\n    }\n    return result;\n  }\n#endif\n#ifdef USE_SPOT_LIGHT\n  vec3 spotLight(pbr_params param,vec3 fragNormal,vec3 fragPosition){\n    vec3 result = vec3(0);\n    for(int i = 0; i < SPOT_LIGHT_COUNT; i++){\n      float innerConeAngle = _sLightParam[i].x;\n      float outerConeAngle = _sLightParam[i].y;\n      float outCos=cos(outerConeAngle);\n      float innCos=cos(innerConeAngle);\n\n      vec3 p2l = _sLightPosition[i] - fragPosition;\n      float d = length(p2l);\n      p2l=normalize(p2l);\n      float c = dot(-p2l,normalize(_sLightDir[i]));\n      float decay = _sLightParam[i].z;//減衰係数\n      decay = 1.;\n      float angleDecay = decay;\n      //\n      float distDecayCoefficient = 1.0 / (d * d);\n      float angleDecayCoefficient = pow(clamp((c-outCos)/(innCos-outCos),0.0,1.0),angleDecay);\n      //\n      vec3 lI = lambert(p2l,fragNormal)*_sLightColor[i]*angleDecayCoefficient*distDecayCoefficient;\n      vec3 lColor = lI * BRDF(param,p2l,normalize(_cameraPosition - fragPosition),fragNormal);\n      result += lColor;\n    }\n    return result;\n  }\n#endif\n  vec3 shading(pbr_params params,vec3 fragNormal,vec3 fragPosition){\n    vec3 lightingColor = vec3(0);\n    #ifdef USE_DIR_LIGHT\n    lightingColor.rgb += directionalLight(params,fragNormal,fragPosition);\n    #endif\n    #ifdef USE_POINT_LIGHT\n    lightingColor.rgb += pointLight(params,fragNormal,fragPosition);\n    #endif\n    #ifdef USE_SPOT_LIGHT\n    lightingColor.rgb += spotLight(params,fragNormal,fragPosition);\n    #endif\n    return lightingColor;\n  }\n"

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _SpotLightShadowMapCameraComponent = __webpack_require__(11);

var _SpotLightShadowMapCameraComponent2 = _interopRequireDefault(_SpotLightShadowMapCameraComponent);

var _Vector = __webpack_require__(7);

var _Vector2 = _interopRequireDefault(_Vector);

var _RenderShadowMapComponent = __webpack_require__(10);

var _RenderShadowMapComponent2 = _interopRequireDefault(_RenderShadowMapComponent);

var _ShadowMapCameraComponent = __webpack_require__(5);

var _ShadowMapCameraComponent2 = _interopRequireDefault(_ShadowMapCameraComponent);

var _VectorArrayContainer = __webpack_require__(14);

var _VectorArrayContainer2 = _interopRequireDefault(_VectorArrayContainer);

var _SceneLightManager = __webpack_require__(0);

var _SceneLightManager2 = _interopRequireDefault(_SceneLightManager);

var _DirectionalLightTypeComponent = __webpack_require__(6);

var _DirectionalLightTypeComponent2 = _interopRequireDefault(_DirectionalLightTypeComponent);

var _LightComponent = __webpack_require__(8);

var _LightComponent2 = _interopRequireDefault(_LightComponent);

var _PointLightTypeComponent = __webpack_require__(9);

var _PointLightTypeComponent2 = _interopRequireDefault(_PointLightTypeComponent);

var _SpotLightTypeComponent = __webpack_require__(12);

var _SpotLightTypeComponent2 = _interopRequireDefault(_SpotLightTypeComponent);

var _ForwardShadingManagerComponent = __webpack_require__(4);

var _ForwardShadingManagerComponent2 = _interopRequireDefault(_ForwardShadingManagerComponent);

var _grimoirejs = __webpack_require__(15);

var _grimoirejs2 = _interopRequireDefault(_grimoirejs);

var _GLExtRequestor = __webpack_require__(32);

var _GLExtRequestor2 = _interopRequireDefault(_GLExtRequestor);

var _LightVariableRegister = __webpack_require__(13);

var _LightVariableRegister2 = _interopRequireDefault(_LightVariableRegister);

var _SceneComponent = __webpack_require__(3);

var _SceneComponent2 = _interopRequireDefault(_SceneComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Please do not change the name of variable on the line below.

exports.default = function () {
    _grimoirejs2.default.register(function () {
        return __awaiter(undefined, void 0, void 0, regeneratorRuntime.mark(function _callee() {
            var g;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _SceneComponent2.default.onSceneDescriptionCreation(function (s) {
                                s.lights = {
                                    directional: {
                                        indicies: [],
                                        directions: new _VectorArrayContainer2.default(3, 0),
                                        colors: new _VectorArrayContainer2.default(3, 0),
                                        params: new _VectorArrayContainer2.default(4, 0)
                                    },
                                    point: {
                                        indicies: [],
                                        positions: new _VectorArrayContainer2.default(3, 0),
                                        colors: new _VectorArrayContainer2.default(3, 0),
                                        params: new _VectorArrayContainer2.default(2, 0)
                                    },
                                    spot: {
                                        indicies: [],
                                        positions: new _VectorArrayContainer2.default(3, 0),
                                        directions: new _VectorArrayContainer2.default(3, 0),
                                        colors: new _VectorArrayContainer2.default(3, 0),
                                        params: new _VectorArrayContainer2.default(4, 0)
                                    },
                                    shadowMap: {
                                        shadowMapCountPerEdge: new _Vector2.default(0, 0),
                                        shadowMap: null,
                                        lightMatrices: null,
                                        pixelSize: 0,
                                        count: 0
                                    }
                                };
                            });
                            g = _grimoirejs2.default;

                            g.registerComponent("ForwardShadingManager", _ForwardShadingManagerComponent2.default);
                            g.registerComponent("Light", _LightComponent2.default);
                            g.registerComponent("DirectionalLightType", _DirectionalLightTypeComponent2.default);
                            g.registerComponent("PointLightType", _PointLightTypeComponent2.default);
                            g.registerComponent("SpotLightType", _SpotLightTypeComponent2.default);
                            g.registerComponent("SceneLightManager", _SceneLightManager2.default);
                            g.registerComponent("ShadowMapCamera", _ShadowMapCameraComponent2.default);
                            g.registerComponent("RenderShadowMap", _RenderShadowMapComponent2.default);
                            g.registerComponent("SpotLightShadowMapCamera", _SpotLightShadowMapCameraComponent2.default);
                            g.overrideDeclaration("scene", ["SceneLightManager"]);
                            g.overrideDeclaration("render-scene", ["RenderShadowMap"]);
                            g.overrideDeclaration("goml", ["ForwardShadingManager"]);
                            g.registerNode("light", ["Transform", "Light"]);
                            _LightVariableRegister2.default.registerAll();
                            _GLExtRequestor2.default.request("OES_texture_float");

                        case 17:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));
    });
};

/***/ }),
/* 32 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.lib.fundamental.Resource.GLExtRequestor;

/***/ })
/******/ ]);
});
//# sourceMappingURL=grimoire-forward-shading.js.map

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _AnimationParser = __webpack_require__(4);

var _AnimationParser2 = _interopRequireDefault(_AnimationParser);

var _TextFileResolver = __webpack_require__(19);

var _TextFileResolver2 = _interopRequireDefault(_TextFileResolver);

var _Animation = __webpack_require__(1);

var _Animation2 = _interopRequireDefault(_Animation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

/**
 * Store registered animations.
 * Animations are instanciated from this class.
 */
var AnimationFactory = function () {
    function AnimationFactory() {
        _classCallCheck(this, AnimationFactory);
    }

    _createClass(AnimationFactory, null, [{
        key: "addAnimationType",

        /**
         * Add animation type by generator and typeName
         * @param typeName
         * @param animationGenerator
         */
        value: function addAnimationType(typeName, animationGenerator) {
            if (this._knownTypeNames.has(typeName)) {
                throw new Error("Specified animation " + typeName + " was loaded already.");
            }
            this._knownTypeNames.add(typeName);
            this.animationGenerators[typeName] = animationGenerator;
            if (AnimationFactory.onRegisterHandlers[typeName]) {
                AnimationFactory.onRegisterHandlers[typeName].forEach(function (t) {
                    return t();
                });
            }
        }
        /**
         * Add animation type directly.
         * @param typeName
         * @param source
         */

    }, {
        key: "addAnimation",
        value: function addAnimation(typeName, source) {
            var recipe = _AnimationParser2.default.parse(source);
            AnimationFactory.addAnimationType(typeName, function () {
                return new _Animation2.default(recipe);
            });
        }
        /**
         * Load animation type from specified url.
         * @param typeName
         * @param url
         */

    }, {
        key: "addAnimationFromURL",
        value: function addAnimationFromURL(typeName, url) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var source;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                if (!this._knownTypeNames.has(typeName)) {
                                    _context.next = 2;
                                    break;
                                }

                                throw new Error("Specified animation " + typeName + " was loaded already.");

                            case 2:
                                this._knownTypeNames.add(typeName); // TextFileResolver can be async, to prevent being appended new loader for same typeName
                                // Mark as the typeName loading temporary.
                                _context.next = 5;
                                return _TextFileResolver2.default.resolve(url);

                            case 5:
                                source = _context.sent;

                                this._knownTypeNames.delete(typeName); // Remove once.
                                AnimationFactory.addAnimation(typeName, source);

                            case 8:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
    }, {
        key: "_onRegister",
        value: function _onRegister(typeName, handler) {
            if (AnimationFactory.onRegisterHandlers[typeName]) {
                AnimationFactory.onRegisterHandlers[typeName].push(handler);
            } else {
                AnimationFactory.onRegisterHandlers[typeName] = [handler];
            }
        }
        /**
         * Instanciate animation by specifing typeName.
         * @param typeName
         */

    }, {
        key: "instanciate",
        value: function instanciate(typeName) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                if (!AnimationFactory.animationGenerators[typeName]) {
                                    _context2.next = 4;
                                    break;
                                }

                                return _context2.abrupt("return", AnimationFactory.animationGenerators[typeName]());

                            case 4:
                                _context2.next = 6;
                                return this._waitForRegistered(typeName);

                            case 6:
                                return _context2.abrupt("return", _context2.sent);

                            case 7:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));
        }
    }, {
        key: "_waitForRegistered",
        value: function _waitForRegistered(typeName) {
            return new Promise(function (resolve) {
                AnimationFactory._onRegister(typeName, function () {
                    resolve(AnimationFactory.animationGenerators[typeName]());
                });
            });
        }
    }]);

    return AnimationFactory;
}();
/**
 * Registered animation generators.
 */


exports.default = AnimationFactory;
AnimationFactory.animationGenerators = {};
/**
 * To wait an animation loaded, instanciate can postpone instanciating by storeing this handler and call later.
 */
AnimationFactory.onRegisterHandlers = {};
/**
 * typeNames that already loaded or loading.
 */
AnimationFactory._knownTypeNames = new Set();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _AnimationClip = __webpack_require__(2);

var _AnimationClip2 = _interopRequireDefault(_AnimationClip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Animation = function () {
    function Animation(_clips) {
        _classCallCheck(this, Animation);

        this.clips = {};
        for (var key in _clips) {
            this.clips[key] = new _AnimationClip2.default(_clips[key]);
        }
    }

    _createClass(Animation, [{
        key: "getClip",
        value: function getClip(clipName) {
            if (this.clips[clipName] === void 0) {
                throw new Error("Animation type " + clipName + " is not exist.");
            } else {
                return this.clips[clipName];
            }
        }
    }]);

    return Animation;
}();

exports.default = Animation;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GomlNode = __webpack_require__(10);

var _GomlNode2 = _interopRequireDefault(_GomlNode);

var _TimelineCalculator = __webpack_require__(3);

var _TimelineCalculator2 = _interopRequireDefault(_TimelineCalculator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AnimationClip = function () {
    function AnimationClip(timeline) {
        _classCallCheck(this, AnimationClip);

        this._timeline = {};
        for (var key in timeline) {
            this.timeline[key] = timeline[key];
        }
    }

    _createClass(AnimationClip, [{
        key: "step",
        value: function step(rootNode, time) {
            var _this = this;

            var _loop = function _loop(key) {
                // TODO cache!!!!!
                var e = _this.timeline[key];
                var component = rootNode.getComponent(e.component);
                var attribute = component.getAttributeRaw(e.attribute);
                if (e.query === '@') {
                    component.setAttribute(e.attribute, _TimelineCalculator2.default.calc(time, e, attribute));
                } else {
                    rootNode.element.querySelectorAll(e.query).forEach(function (childElement) {
                        _GomlNode2.default.fromElement(childElement).getComponent(e.component).setAttribute(e.attribute, _TimelineCalculator2.default.calc(time, e, attribute));
                    });
                }
            };

            for (var key in this.timeline) {
                _loop(key);
            }
        }
    }, {
        key: "timeline",
        get: function get() {
            return this._timeline;
        }
    }, {
        key: "length",
        get: function get() {
            var len = 0;
            for (var key in this.timeline) {
                var t = this.timeline[key].timeline[this.timeline[key].timeline.length - 1];
                len = t > len ? t : len;
            }
            return len;
        }
    }]);

    return AnimationClip;
}();

exports.default = AnimationClip;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _IAnimationEffectName = __webpack_require__(11);

var _Vector = __webpack_require__(12);

var _Vector2 = _interopRequireDefault(_Vector);

var _Vector3 = __webpack_require__(13);

var _Vector4 = _interopRequireDefault(_Vector3);

var _Vector5 = __webpack_require__(14);

var _Vector6 = _interopRequireDefault(_Vector5);

var _Color = __webpack_require__(15);

var _Color2 = _interopRequireDefault(_Color);

var _Color3 = __webpack_require__(16);

var _Color4 = _interopRequireDefault(_Color3);

var _Quaternion = __webpack_require__(17);

var _Quaternion2 = _interopRequireDefault(_Quaternion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TimelineCalculator = function () {
    function TimelineCalculator() {
        _classCallCheck(this, TimelineCalculator);
    }

    _createClass(TimelineCalculator, null, [{
        key: "calc",
        value: function calc(time, element, attribute) {
            var timelinePosition = this._decideTimelinePosition(time, element.timeline);
            if (element.values.length - 1 === timelinePosition) {
                return element.values[timelinePosition];
            }
            if (element.defaultEffect !== void 0) {
                var t = Math.max(0, Math.min(1, (time - element.timeline[timelinePosition]) / (element.timeline[timelinePosition + 1] - element.timeline[timelinePosition])));
                var v1 = attribute.converter.convert(element.values[timelinePosition], attribute);
                var v2 = attribute.converter.convert(element.values[timelinePosition + 1], attribute);
                if (element.defaultEffect === _IAnimationEffectName.EffectName.LINEAR) {
                    switch (attribute.converter.name.name) {
                        case "Number" || "Angle2D":
                            return v1 + (v2 - v1) * t;
                        case "Vector2":
                            return _Vector6.default.lerp(v1, v2, t);
                        case "Vector3":
                            return _Vector4.default.lerp(v1, v2, t);
                        case "Vector4":
                            return _Vector2.default.lerp(v1, v2, t);
                        case "Rotation3":
                            return _Quaternion2.default.slerp(v1, v2, t);
                        case "Color3":
                            var v3 = _Vector4.default.lerp(v1.toVector(), v2.toVector(), t);
                            return new _Color2.default(v3.X, v3.Y, v3.Z);
                        case "Color4":
                            var v4 = _Vector2.default.lerp(v1.toVector(), v2.toVector(), t);
                            return new _Color4.default(v4.X, v4.Y, v4.Z, v4.W);
                        default:
                            throw new Error('Converter ' + attribute.converter.name + ' is not supported.');
                    }
                } else if (element.defaultEffect === _IAnimationEffectName.EffectName.DESCRETE) {
                    return element.values[timelinePosition];
                }
            }
        }
    }, {
        key: "_decideTimelinePosition",
        value: function _decideTimelinePosition(time, timeline) {
            var left = 0;
            var right = timeline.length - 1;
            var mid = void 0;
            if (time < timeline[left]) {
                return left;
            } else if (time > timeline[right]) {
                return right;
            }
            while (right - left > 1) {
                mid = Math.floor((left + right) / 2);
                if (timeline[mid] === time) {
                    return mid;
                } else if (timeline[mid] < time) {
                    left = mid;
                } else if (time < timeline[mid]) {
                    right = mid;
                }
            }
            return left;
        }
    }]);

    return TimelineCalculator;
}();

exports.default = TimelineCalculator;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _HashCalculator = __webpack_require__(18);

var _HashCalculator2 = _interopRequireDefault(_HashCalculator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AnimationParser = function () {
    function AnimationParser() {
        _classCallCheck(this, AnimationParser);
    }

    _createClass(AnimationParser, null, [{
        key: "parse",
        value: function parse(source) {
            var sourceHash = _HashCalculator2.default.calcHash(source);
            // Might be faster if we don't use hash to cache.
            // Just do in simple way.
            if (AnimationParser._parsedCache[sourceHash] !== void 0) {
                return AnimationParser._parsedCache[sourceHash];
            } else {
                AnimationParser._parsedCache[sourceHash] = JSON.parse(source);
                return AnimationParser._parsedCache[sourceHash];
            }
        }
    }]);

    return AnimationParser;
}();

exports.default = AnimationParser;

AnimationParser._parsedCache = {};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _AnimationFactory = __webpack_require__(0);

var _AnimationFactory2 = _interopRequireDefault(_AnimationFactory);

var _Component2 = __webpack_require__(6);

var _Component3 = _interopRequireDefault(_Component2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

var AnimationComponent = function (_Component) {
    _inherits(AnimationComponent, _Component);

    function AnimationComponent() {
        _classCallCheck(this, AnimationComponent);

        return _possibleConstructorReturn(this, (AnimationComponent.__proto__ || Object.getPrototypeOf(AnimationComponent)).apply(this, arguments));
    }

    _createClass(AnimationComponent, [{
        key: "$mount",
        value: function $mount() {
            this.__bindAttributes();
            if (this.animation && typeof this.animation === "string") {
                this._animationPromise = _AnimationFactory2.default.instanciate(this.animation);
                this._registerAttributes();
            } else {
                throw new Error("Animation type name must be sppecified and string");
            }
        }
    }, {
        key: "$update",
        value: function $update(args) {
            if (this._ready && this.auto) this._update(args.timer);
        }
    }, {
        key: "_registerAttributes",
        value: function _registerAttributes() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return this._animationPromise;

                            case 2:
                                this._animation = _context.sent;

                                this._ready = true;

                            case 4:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
    }, {
        key: "_update",
        value: function _update(timer) {
            for (var key in this.clips) {
                var length = this._animation.getClip(this.clips[key]).length;
                var t = this.loop ? timer.time % length : Math.max(timer.time, length);
                if (t > length) return;
                this._animation.getClip(this.clips[key]).step(this.node, t);
            }
        }
    }, {
        key: "getClip",
        value: function getClip(clipName) {
            return this._animation.getClip(clipName);
        }
    }, {
        key: "Animation",
        get: function get() {
            return this._animation;
        }
    }]);

    return AnimationComponent;
}(_Component3.default);

exports.default = AnimationComponent;

AnimationComponent.attributes = {
    animation: {
        converter: "String",
        default: null
    },
    clips: {
        converter: "StringArray",
        default: null
    },
    auto: {
        converter: "Boolean",
        default: true
    },
    loop: {
        converter: "Boolean",
        default: true
    }
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value: true});
exports.default=window.GrimoireJS.Node.Component;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _AnimationFactory = __webpack_require__(0);

var _AnimationFactory2 = _interopRequireDefault(_AnimationFactory);

var _Component2 = __webpack_require__(6);

var _Component3 = _interopRequireDefault(_Component2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AnimationImporterComponent = function (_Component) {
    _inherits(AnimationImporterComponent, _Component);

    function AnimationImporterComponent() {
        _classCallCheck(this, AnimationImporterComponent);

        return _possibleConstructorReturn(this, (AnimationImporterComponent.__proto__ || Object.getPrototypeOf(AnimationImporterComponent)).apply(this, arguments));
    }

    _createClass(AnimationImporterComponent, [{
        key: "$awake",
        value: function $awake() {
            this.__bindAttributes();
            this.getAttributeRaw("typeName").watch(function (v) {
                console.warn("Changeing 'typeName' on AnimationImporter makes no sense. This change won't affect anything.");
            });
            this.getAttributeRaw("src").watch(function (v) {
                console.warn("Changeing 'src' on AnimationImporter makes no sense. This change won't affect anything.");
            });
            if (!this.typeName || !this.src) {
                throw new Error("type or src cannot be null in Animation importer");
            } else {
                _AnimationFactory2.default.addAnimationFromURL(this.typeName, this.src);
            }
        }
    }]);

    return AnimationImporterComponent;
}(_Component3.default);

exports.default = AnimationImporterComponent;

AnimationImporterComponent.attributes = {
    typeName: {
        default: null,
        converter: "String"
    },
    src: {
        default: null,
        converter: "String"
    }
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value: true});
exports.default=window.GrimoireJS;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Animation = __webpack_require__(1);

var _Animation2 = _interopRequireDefault(_Animation);

var _AnimationClip = __webpack_require__(2);

var _AnimationClip2 = _interopRequireDefault(_AnimationClip);

var _AnimationFactory = __webpack_require__(0);

var _AnimationFactory2 = _interopRequireDefault(_AnimationFactory);

var _AnimationParser = __webpack_require__(4);

var _AnimationParser2 = _interopRequireDefault(_AnimationParser);

var _AnimationComponent = __webpack_require__(5);

var _AnimationComponent2 = _interopRequireDefault(_AnimationComponent);

var _AnimationImporterComponent = __webpack_require__(7);

var _AnimationImporterComponent2 = _interopRequireDefault(_AnimationImporterComponent);

var _TimelineCalculator = __webpack_require__(3);

var _TimelineCalculator2 = _interopRequireDefault(_TimelineCalculator);

var _main = __webpack_require__(20);

var _main2 = _interopRequireDefault(_main);

var _grimoirejs = __webpack_require__(8);

var _grimoirejs2 = _interopRequireDefault(_grimoirejs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __VERSION__ = "1.3.1";
var __NAME__ = "grimoirejs-animation";

var __EXPOSE__ = {
    "Animation": {
        "Animation": _Animation2.default,
        "AnimationClip": _AnimationClip2.default,
        "AnimationFactory": _AnimationFactory2.default,
        "AnimationParser": _AnimationParser2.default
    },
    "Components": {
        "AnimationComponent": _AnimationComponent2.default,
        "AnimationImporterComponent": _AnimationImporterComponent2.default
    },
    "Util": {
        "TimelineCalculator": _TimelineCalculator2.default
    }
};

_grimoirejs2.default.notifyRegisteringPlugin(__NAME__);
var __BASE__ = (0, _main2.default)();
Object.assign(__EXPOSE__, {
    __VERSION__: __VERSION__,
    __NAME__: __NAME__
});
Object.assign(__BASE__ || {}, __EXPOSE__);
window["GrimoireJS"].lib.animation = __EXPOSE__;
exports.default = __BASE__;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value: true});
exports.default=window.GrimoireJS.Node.GomlNode;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var EffectName = exports.EffectName = undefined;
(function (EffectName) {
    EffectName.LINEAR = "LINEAR";
    EffectName.DESCRETE = "DESCRETE";
    EffectName.BEZIER = "BEZIER";
})(EffectName || (exports.EffectName = EffectName = {}));
exports.default = EffectName;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value: true});
exports.default=window.GrimoireJS&&window.GrimoireJS.lib.math?window.GrimoireJS.lib.math.Vector4:undefined;


/***/ }),
/* 13 */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value: true});
exports.default=window.GrimoireJS&&window.GrimoireJS.lib.math?window.GrimoireJS.lib.math.Vector3:undefined;


/***/ }),
/* 14 */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value: true});
exports.default=window.GrimoireJS&&window.GrimoireJS.lib.math?window.GrimoireJS.lib.math.Vector2:undefined;


/***/ }),
/* 15 */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value: true});
exports.default=window.GrimoireJS&&window.GrimoireJS.lib.math?window.GrimoireJS.lib.math.Color3:undefined;


/***/ }),
/* 16 */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value: true});
exports.default=window.GrimoireJS&&window.GrimoireJS.lib.math?window.GrimoireJS.lib.math.Color4:undefined;


/***/ }),
/* 17 */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value: true});
exports.default=window.GrimoireJS&&window.GrimoireJS.lib.math?window.GrimoireJS.lib.math.Quaternion:undefined;


/***/ }),
/* 18 */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value: true});
exports.default=window.GrimoireJS&&window.GrimoireJS.lib.fundamental?window.GrimoireJS.lib.fundamental.Util.HashCalculator:undefined;


/***/ }),
/* 19 */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value: true});
exports.default=window.GrimoireJS&&window.GrimoireJS.lib.fundamental?window.GrimoireJS.lib.fundamental.Asset.TextFileResolver:undefined;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _grimoirejs = __webpack_require__(8);

var _grimoirejs2 = _interopRequireDefault(_grimoirejs);

var _AnimationImporterComponent = __webpack_require__(7);

var _AnimationImporterComponent2 = _interopRequireDefault(_AnimationImporterComponent);

var _AnimationComponent = __webpack_require__(5);

var _AnimationComponent2 = _interopRequireDefault(_AnimationComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

// function animate(attributeName: string, value: number[], time: number) {
//   if (this instanceof NodeInterface) {
//     (this as NodeInterface).forEach(n => (n as any).animate(attributeName, value, time))
//   } else {
//     const animation = (this as GomlNode).addComponent("Animation", { animation: 'dynamic', clip: 'dynamic' }) as AnimationComponent;
//     let timelines: {
//       "times": number[],
//       "values": number[]
//     }[] = [];
//     for (let i = 0; i < this.getAttributeRaw(attributeName)._value.length; i++) {
//       timelines[i] = {
//         "times": [0, time],
//         "values": [this.getAttributeRaw(attributeName)._value[i], value[i]]
//       }
//     }
//
//     const animationRecipe = {
//       'dynamic': [
//         {
//           "query": "@",
//           "component": this.getAttributeRaw('position').component.name.name,
//           "attribute": attributeName,
//           "timelines": timelines
//         }
//       ]
//     }
//     animation.Animation = new Animation(animationRecipe);
//   }
// }
exports.default = function () {
    _grimoirejs2.default.register(function () {
        return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _grimoirejs2.default.registerNode("import-animation", ["AnimationImporter"]);
                            _grimoirejs2.default.registerComponent("Animation", _AnimationComponent2.default);
                            _grimoirejs2.default.registerComponent("AnimationImporter", _AnimationImporterComponent2.default);
                            // gr.prototype.constructor.Interface.NodeInterface.prototype.animate = animate;
                            // (GomlNode.prototype as any).animate = animate;

                        case 3:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));
    });
};

/***/ })
/******/ ]);
});
//# sourceMappingURL=grimoire-animation.js.map

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ParserModuleBase2 = __webpack_require__(9);

var _ParserModuleBase3 = _interopRequireDefault(_ParserModuleBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ParserModule = function (_ParserModuleBase) {
    _inherits(ParserModule, _ParserModuleBase);

    function ParserModule(parser, baseDirectory) {
        _classCallCheck(this, ParserModule);

        var _this = _possibleConstructorReturn(this, (ParserModule.__proto__ || Object.getPrototypeOf(ParserModule)).call(this));

        _this.parser = parser;
        _this.baseDirectory = baseDirectory;
        _this.__gl = parser.gl;
        return _this;
    }

    _createClass(ParserModule, [{
        key: "fetchGLTF",
        value: function fetchGLTF(url) {
            return undefined;
        }
        /**
         * Load .gltf file
         * @return {Promise<GLTF>} [description]
         */

    }, {
        key: "loadAsGLTF",
        value: function loadAsGLTF(tf) {
            return undefined;
        }
        /**
         * Start loading texture resource.
         * @return {Promise<Texture2D>} [description]
         */

    }, {
        key: "fetchTextureResource",
        value: function fetchTextureResource(tf) {
            return undefined;
        }
        /**
         * Start loading texture resource.
         * @return {Promise<Texture2D>} [description]
         */

    }, {
        key: "loadTextureResources",
        value: function loadTextureResources(tf) {
            return undefined;
        }
        /**
         * Load image as texture
         * @return {Promise<Texture2D>} [description]
         */

    }, {
        key: "convertTotexture",
        value: function convertTotexture(arg) {
            return undefined;
        }
        /**
         * Start loading buffer resource.
         * @return {Promise<ArrayBuffer>} [description]
         */

    }, {
        key: "loadBufferResource",
        value: function loadBufferResource(tf) {
            return undefined;
        }
    }, {
        key: "loadBufferResources",
        value: function loadBufferResources(tf) {
            return undefined;
        }
    }, {
        key: "loadBufferViews",
        value: function loadBufferViews(args) {
            return undefined;
        }
    }, {
        key: "loadPrimitivesOfMesh",
        value: function loadPrimitivesOfMesh(args) {
            return undefined;
        }
    }, {
        key: "loadPrimitive",
        value: function loadPrimitive(args) {
            return undefined;
        }
    }, {
        key: "appendIndices",
        value: function appendIndices(args) {
            return undefined;
        }
    }, {
        key: "addVertexAttributes",
        value: function addVertexAttributes(args) {
            return undefined;
        }
    }, {
        key: "complementVertexAttributes",
        value: function complementVertexAttributes(args) {
            return undefined;
        }
    }, {
        key: "loadMaterials",
        value: function loadMaterials(args) {
            return undefined;
        }
    }, {
        key: "loadMaterial",
        value: function loadMaterial(args) {
            return undefined;
        }
    }, {
        key: "loadAnimations",
        value: function loadAnimations(args) {
            return undefined;
        }
    }, {
        key: "loadAnimation",
        value: function loadAnimation(args) {
            return undefined;
        }
    }]);

    return ParserModule;
}(_ParserModuleBase3.default);

exports.default = ParserModule;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Color = __webpack_require__(20);

var _Color2 = _interopRequireDefault(_Color);

var _Color3 = __webpack_require__(21);

var _Color4 = _interopRequireDefault(_Color3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GLTFConstantConvert = function () {
    function GLTFConstantConvert() {
        _classCallCheck(this, GLTFConstantConvert);
    }

    _createClass(GLTFConstantConvert, null, [{
        key: "asColorValue",
        value: function asColorValue(a) {
            if (a.length === 3) {
                return new _Color2.default(a[0], a[1], a[2]);
            } else {
                return new _Color4.default(a[0], a[1], a[2], a[3]);
            }
        }
    }, {
        key: "asVectorSize",
        value: function asVectorSize(type) {
            switch (type) {
                case "SCALAR":
                    return 1;
                case "VEC2":
                    return 2;
                case "VEC3":
                    return 3;
                case "VEC4":
                case "MAT2":
                    return 4;
                case "MAT3":
                    return 9;
                case "MAT4":
                    return 16;
                default:
                    throw new Error("Invalid vectorSize");
            }
        }
    }, {
        key: "asByteSize",
        value: function asByteSize(componentType) {
            switch (componentType) {
                case WebGLRenderingContext.UNSIGNED_BYTE:
                case WebGLRenderingContext.BYTE:
                    return 1;
                case WebGLRenderingContext.UNSIGNED_SHORT:
                case WebGLRenderingContext.SHORT:
                    return 2;
                case WebGLRenderingContext.UNSIGNED_INT:
                case WebGLRenderingContext.INT:
                case WebGLRenderingContext.FLOAT:
                    return 4;
                default:
                    throw new Error("Unknown size!");
            }
        }
    }, {
        key: "elementTypeToTypedArray",
        value: function elementTypeToTypedArray(type) {
            switch (type) {
                case WebGLRenderingContext.UNSIGNED_BYTE:
                    return Uint8Array;
                case WebGLRenderingContext.BYTE:
                    return Int8Array;
                case WebGLRenderingContext.UNSIGNED_SHORT:
                    return Uint16Array;
                case WebGLRenderingContext.SHORT:
                    return Int16Array;
                case WebGLRenderingContext.UNSIGNED_INT:
                    return Uint32Array;
                case WebGLRenderingContext.INT:
                    return Int32Array;
                case WebGLRenderingContext.FLOAT:
                    return Float32Array;
                default:
                    throw new Error("Unsupported");
            }
        }
    }, {
        key: "indexCountToBufferInfo",
        value: function indexCountToBufferInfo(count) {
            if (count < 256) {
                return {
                    elementType: WebGLRenderingContext.UNSIGNED_BYTE,
                    byteSize: 1,
                    ctor: Uint8Array
                };
            } else if (count < 65536) {
                return {
                    elementType: WebGLRenderingContext.UNSIGNED_SHORT,
                    byteSize: 2,
                    ctor: Uint16Array
                };
            } else {
                return {
                    elementType: WebGLRenderingContext.UNSIGNED_INT,
                    byteSize: 4,
                    ctor: Uint32Array
                };
            }
        }
    }]);

    return GLTFConstantConvert;
}();

exports.default = GLTFConstantConvert;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Component2 = __webpack_require__(6);

var _Component3 = _interopRequireDefault(_Component2);

var _Parser = __webpack_require__(7);

var _Parser2 = _interopRequireDefault(_Parser);

var _DefaultInstanciator = __webpack_require__(16);

var _DefaultInstanciator2 = _interopRequireDefault(_DefaultInstanciator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GLTFModelComponent = function (_Component) {
    _inherits(GLTFModelComponent, _Component);

    function GLTFModelComponent() {
        _classCallCheck(this, GLTFModelComponent);

        var _this = _possibleConstructorReturn(this, (GLTFModelComponent.__proto__ || Object.getPrototypeOf(GLTFModelComponent)).apply(this, arguments));

        _this.jointMatrices = {};
        _this.skeletons = {};
        return _this;
    }

    _createClass(GLTFModelComponent, [{
        key: "$mount",
        value: function $mount() {
            var _this2 = this;

            var src = this.getAttribute("src");
            if (src) {
                var gl = this.companion.get("gl");
                var promise = _Parser2.default.parseFromURL(gl, src).then(function (data) {
                    GLTFModelComponent.instanciator.instanciateAll(data, _this2, _this2.getAttribute("scene"));
                });
                if (this.getAttribute("waitForLoad")) {
                    var loader = this.companion.get("loader");
                    loader["register"](promise, this);
                }
            }
        }
    }, {
        key: "$update",
        value: function $update() {}
    }]);

    return GLTFModelComponent;
}(_Component3.default);

exports.default = GLTFModelComponent;

GLTFModelComponent.instanciator = new _DefaultInstanciator2.default();
GLTFModelComponent.componentName = "GLTFModelComponent";
GLTFModelComponent.attributes = {
    src: {
        converter: "String",
        default: null
    },
    scene: {
        converter: "String",
        default: null
    },
    waitForLoad: {
        converter: "Boolean",
        default: false
    }
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Matrix = __webpack_require__(4);

var _Matrix2 = _interopRequireDefault(_Matrix);

var _TransformComponent = __webpack_require__(5);

var _TransformComponent2 = _interopRequireDefault(_TransformComponent);

var _Component2 = __webpack_require__(6);

var _Component3 = _interopRequireDefault(_Component2);

var _GLTFModelComponent = __webpack_require__(2);

var _GLTFModelComponent2 = _interopRequireDefault(_GLTFModelComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GLTFJointComponent = function (_Component) {
    _inherits(GLTFJointComponent, _Component);

    function GLTFJointComponent() {
        _classCallCheck(this, GLTFJointComponent);

        return _possibleConstructorReturn(this, (GLTFJointComponent.__proto__ || Object.getPrototypeOf(GLTFJointComponent)).apply(this, arguments));
    }

    _createClass(GLTFJointComponent, [{
        key: "$mount",
        value: function $mount() {
            this._model = this.node.getComponentInAncestor(_GLTFModelComponent2.default);
            this._transform = this.node.getComponent(_TransformComponent2.default);
            this._invBindMatrix = new _Matrix2.default(this.getAttribute("invBindShapeMatrix"));
            this._skinIndex = this.getAttribute("skinIndex");
            this._jointIndex = this.getAttribute("jointIndex");
        }
    }, {
        key: "$update",
        value: function $update() {
            var poseMat = this._model.skeletons[this._skinIndex].globalTransformInverse.multiplyWith(this._transform.globalTransform).multiplyWith(this._invBindMatrix); //.multiplyWith(this._model.skeletons[this._skinIndex].globalTransform);
            for (var i = 0; i < 16; i++) {
                this._model.jointMatrices[this._skinIndex][this._jointIndex * 16 + i] = poseMat.rawElements[i];
            }
        }
    }]);

    return GLTFJointComponent;
}(_Component3.default);

exports.default = GLTFJointComponent;

GLTFJointComponent.attributes = {
    invBindShapeMatrix: {
        converter: "Object",
        default: null
    },
    skinIndex: {
        converter: "Number",
        default: null
    },
    jointIndex: {
        converter: "Number",
        default: null
    }
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.lib.math.Matrix;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.lib.fundamental.Components.TransformComponent;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.Node.Component;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _DefaultParserModule = __webpack_require__(8);

var _DefaultParserModule2 = _interopRequireDefault(_DefaultParserModule);

var _NormalComplementorModule = __webpack_require__(12);

var _NormalComplementorModule2 = _interopRequireDefault(_NormalComplementorModule);

var _IndexComplementorModule = __webpack_require__(14);

var _IndexComplementorModule2 = _interopRequireDefault(_IndexComplementorModule);

var _EmbeddedBufferModule = __webpack_require__(15);

var _EmbeddedBufferModule2 = _interopRequireDefault(_EmbeddedBufferModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Modules

var GLTFParser = function () {
    function GLTFParser(gl, url) {
        _classCallCheck(this, GLTFParser);

        this.gl = gl;
        this.url = url;
        this.parserModuleInstances = [];
        for (var i = 0; i < GLTFParser.parserModules.length; i++) {
            var moduleCtor = GLTFParser.parserModules[i];
            this.parserModuleInstances.push(new moduleCtor(this, url.substr(0, url.lastIndexOf("/") + 1)));
        }
    }

    _createClass(GLTFParser, [{
        key: "callParserModule",
        value: function callParserModule(target, arg) {
            for (var i = 0; i < this.parserModuleInstances.length; i++) {
                var module = this.parserModuleInstances[i];
                var moduleMethod = target(module);
                if (moduleMethod === void 0) {
                    continue;
                }
                var result = moduleMethod.call(module, arg);
                if (result !== void 0) {
                    return result;
                }
            }
            throw new Error("Parsing gltf failed. At the module \"" + target.toString() + "\"");
        }
    }, {
        key: "parse",
        value: function parse() {
            return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
                var _this = this;

                var result, gltfRaw, gltf, textureResourcePromise, bufferResources;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                result = {};
                                _context.next = 3;
                                return this.callParserModule(function (t) {
                                    return t.fetchGLTF;
                                }, this.url);

                            case 3:
                                gltfRaw = _context.sent;
                                gltf = this.callParserModule(function (t) {
                                    return t.loadAsGLTF;
                                }, gltfRaw);

                                result.tf = gltf;
                                _context.next = 8;
                                return this.callParserModule(function (t) {
                                    return t.loadTextureResources;
                                }, gltf).then(function (textures) {
                                    return _this.callParserModule(function (t) {
                                        return t.loadMaterials;
                                    }, { tf: gltf, textures: textures });
                                }).then(function (materials) {
                                    result.materials = materials;
                                });

                            case 8:
                                textureResourcePromise = _context.sent;
                                _context.next = 11;
                                return this.callParserModule(function (t) {
                                    return t.loadBufferResources;
                                }, gltf).then(function (buffers) {
                                    var bufferViews = _this.callParserModule(function (t) {
                                        return t.loadBufferViews;
                                    }, { tf: gltf, buffers: buffers });
                                    var primitives = _this.callParserModule(function (t) {
                                        return t.loadPrimitivesOfMesh;
                                    }, { tf: gltf, bufferViews: bufferViews });
                                    var animations = _this.callParserModule(function (t) {
                                        return t.loadAnimations;
                                    }, { tf: gltf, bufferViews: bufferViews });
                                    result.primitives = primitives;
                                    result.bufferViews = bufferViews;
                                    result.animations = animations;
                                });

                            case 11:
                                bufferResources = _context.sent;
                                return _context.abrupt("return", result);

                            case 13:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
    }], [{
        key: "parseFromURL",
        value: function parseFromURL(gl, url) {
            return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee2() {
                var parser;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                parser = new GLTFParser(gl, url);
                                return _context2.abrupt("return", parser.parse());

                            case 2:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));
        }
    }]);

    return GLTFParser;
}();

exports.default = GLTFParser;

GLTFParser.parserModules = [_EmbeddedBufferModule2.default, _IndexComplementorModule2.default, _NormalComplementorModule2.default, _DefaultParserModule2.default];

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ParserModule2 = __webpack_require__(0);

var _ParserModule3 = _interopRequireDefault(_ParserModule2);

var _ConstantConverter = __webpack_require__(1);

var _ConstantConverter2 = _interopRequireDefault(_ConstantConverter);

var _Texture2D = __webpack_require__(22);

var _Texture2D2 = _interopRequireDefault(_Texture2D);

var _Geometry = __webpack_require__(23);

var _Geometry2 = _interopRequireDefault(_Geometry);

var _MaterialFactory = __webpack_require__(11);

var _MaterialFactory2 = _interopRequireDefault(_MaterialFactory);

var _TextureReference = __webpack_require__(24);

var _TextureReference2 = _interopRequireDefault(_TextureReference);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

var DefaultParserModule = function (_ParserModule) {
    _inherits(DefaultParserModule, _ParserModule);

    function DefaultParserModule() {
        _classCallCheck(this, DefaultParserModule);

        return _possibleConstructorReturn(this, (DefaultParserModule.__proto__ || Object.getPrototypeOf(DefaultParserModule)).apply(this, arguments));
    }

    _createClass(DefaultParserModule, [{
        key: "fetchGLTF",
        value: function fetchGLTF(url) {
            return this.__fetchBuffer(url);
        }
    }, {
        key: "loadAsGLTF",
        value: function loadAsGLTF(buffer) {
            var rawStr = this.__bufferToString(buffer);
            return JSON.parse(rawStr);
        }
    }, {
        key: "loadTextureResources",
        value: function loadTextureResources(tf) {
            return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
                var _this2 = this;

                var textures, promises, _loop, key;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                textures = {};
                                promises = [];

                                if (tf.images) {
                                    _loop = function _loop(key) {
                                        var texture = tf.textures[key];
                                        var promise = _this2.parser.callParserModule(function (t) {
                                            return t.fetchTextureResource;
                                        }, tf.images[texture.source]).then(function (img) {
                                            var texture = _this2.parser.callParserModule(function (t) {
                                                return t.convertTotexture;
                                            }, { tf: tf, image: img, texIndex: key });
                                            textures[key] = texture;
                                        });
                                        promises.push(promise);
                                    };

                                    for (key in tf.textures) {
                                        _loop(key);
                                    }
                                }
                                _context.next = 5;
                                return Promise.all(promises);

                            case 5:
                                return _context.abrupt("return", textures);

                            case 6:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
        /**
         * Start loading texture resource.
         * @return {Promise<Texture2D>} [description]
         */

    }, {
        key: "fetchTextureResource",
        value: function fetchTextureResource(tf) {
            return this.__fetchImage(this.baseDirectory + tf.uri);
        }
        /**
         * Load image as texture
         * @return {Promise<Texture2D>} [description]
         */

    }, {
        key: "convertTotexture",
        value: function convertTotexture(arg) {
            var tex = new _Texture2D2.default(this.__gl);
            tex.update(arg.image);
            var texInfo = arg.tf.textures[arg.texIndex];
            var samplerInfo = {};
            if (!texInfo) {
                samplerInfo = arg.tf.samplers[texInfo.sampler];
            }
            tex.magFilter = samplerInfo.magFilter || WebGLRenderingContext.LINEAR;
            tex.minFilter = samplerInfo.minFilter || WebGLRenderingContext.NEAREST_MIPMAP_LINEAR;
            tex.wrapS = samplerInfo.wrapS || WebGLRenderingContext.REPEAT;
            tex.wrapT = samplerInfo.wrapT || WebGLRenderingContext.REPEAT;
            return tex;
        }
        /**
         * Start loading buffer resource.
         * @return {Promise<ArrayBuffer>} [description]
         */

    }, {
        key: "loadBufferResource",
        value: function loadBufferResource(tf) {
            return this.__fetchBuffer(this.baseDirectory + tf.uri);
        }
    }, {
        key: "loadBufferResources",
        value: function loadBufferResources(tf) {
            return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee2() {
                var _this3 = this;

                var buffers, promises, _loop2, key;

                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                buffers = {};
                                promises = [];

                                _loop2 = function _loop2(key) {
                                    promises.push(_this3.parser.callParserModule(function (t) {
                                        return t.loadBufferResource;
                                    }, tf.buffers[key]).then(function (buffer) {
                                        buffers[key] = buffer;
                                    }));
                                };

                                for (key in tf.buffers) {
                                    _loop2(key);
                                }
                                _context2.next = 6;
                                return Promise.all(promises);

                            case 6:
                                return _context2.abrupt("return", buffers);

                            case 7:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));
        }
    }, {
        key: "loadBufferViews",
        value: function loadBufferViews(args) {
            var bufferViews = {};
            for (var key in args.tf.bufferViews) {
                var bufferViewInfo = args.tf.bufferViews[key];
                bufferViews[key] = new Uint8Array(args.buffers[bufferViewInfo.buffer], bufferViewInfo.byteOffset, bufferViewInfo.byteLength);
            }
            return bufferViews;
        }
    }, {
        key: "loadPrimitivesOfMesh",
        value: function loadPrimitivesOfMesh(args) {
            var result = {};
            for (var key in args.tf.meshes) {
                var meshInfo = args.tf.meshes[key];
                var primitives = [];
                result[key] = primitives;
                for (var pKey in meshInfo.primitives) {
                    primitives.push(this.parser.callParserModule(function (t) {
                        return t.loadPrimitive;
                    }, { tf: args.tf, bufferViews: args.bufferViews, primitive: meshInfo.primitives[pKey] }));
                }
            }
            return result;
        }
    }, {
        key: "loadPrimitive",
        value: function loadPrimitive(args) {
            var geo = new _Geometry2.default(this.__gl);
            this.parser.callParserModule(function (t) {
                return t.appendIndices;
            }, { tf: args.tf, bufferViews: args.bufferViews, primitive: args.primitive, geometry: geo });
            this.parser.callParserModule(function (t) {
                return t.addVertexAttributes;
            }, { tf: args.tf, bufferViews: args.bufferViews, primitive: args.primitive, geometry: geo });
            return geo;
        }
    }, {
        key: "appendIndices",
        value: function appendIndices(args) {
            if (args.primitive.indices !== void 0) {
                var topology = args.primitive.mode || WebGLRenderingContext.TRIANGLES;
                var indexAccessor = args.tf.accessors[args.primitive.indices];
                args.geometry.addIndex("default", args.bufferViews[indexAccessor.bufferView], topology, indexAccessor.byteOffset, indexAccessor.count, indexAccessor.componentType);
                return true;
            }
        }
    }, {
        key: "addVertexAttributes",
        value: function addVertexAttributes(args) {
            for (var attrib in args.primitive.attributes) {
                var accessor = args.tf.accessors[args.primitive.attributes[attrib]];
                var bufAccessor = {};
                bufAccessor[attrib] = {
                    size: _ConstantConverter2.default.asVectorSize(accessor.type),
                    type: accessor.componentType,
                    stride: accessor.byteStride,
                    offset: accessor.byteOffset
                };
                args.geometry.addAttributes(args.bufferViews[accessor.bufferView], bufAccessor);
            }
            this.parser.callParserModule(function (t) {
                return t.complementVertexAttributes;
            }, args);
            return true;
        }
    }, {
        key: "complementVertexAttributes",
        value: function complementVertexAttributes(args) {
            return true;
        }
    }, {
        key: "loadMaterials",
        value: function loadMaterials(args) {
            return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee3() {
                var result, key;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                result = {};
                                _context3.t0 = regeneratorRuntime.keys(args.tf.materials);

                            case 2:
                                if ((_context3.t1 = _context3.t0()).done) {
                                    _context3.next = 9;
                                    break;
                                }

                                key = _context3.t1.value;
                                _context3.next = 6;
                                return this.parser.callParserModule(function (t) {
                                    return t.loadMaterial;
                                }, { material: args.tf.materials[key], textures: args.textures });

                            case 6:
                                result[key] = _context3.sent;
                                _context3.next = 2;
                                break;

                            case 9:
                                return _context3.abrupt("return", result);

                            case 10:
                            case "end":
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));
        }
    }, {
        key: "loadMaterial",
        value: function loadMaterial(args) {
            return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee4() {
                var material, pmr, pass;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                if (!args.material["pbrMetallicRoughness"]) {
                                    _context4.next = 18;
                                    break;
                                }

                                _context4.next = 3;
                                return _MaterialFactory2.default.get(this.__gl).instanciate("gltf-pbr-metallic-roughness");

                            case 3:
                                material = _context4.sent;
                                pmr = args.material["pbrMetallicRoughness"];
                                pass = material.techniques["default"].passes[0];

                                if (pmr.baseColorFactor) {
                                    pass.setArgument("baseColorFactor", pmr.baseColorFactor, null);
                                }
                                if (pmr.baseColorTexture) {
                                    pass.setArgument("baseColorTexture", new _TextureReference2.default(args.textures[pmr.baseColorTexture.index]), null);
                                }
                                if (pmr.metallicFactor) {
                                    pass.setArgument("metallicFactor", pmr.metallicFactor, null);
                                }
                                if (pmr.metallicTexture) {
                                    pass.setArgument("metallicTexture", new _TextureReference2.default(args.textures[pmr.metallicTexture.index]), null);
                                }
                                if (pmr.roughnessFactor) {
                                    pass.setArgument("roughnessFactor", pmr.roughnessFactor, null);
                                }
                                if (pmr.roughnessTexture) {
                                    pass.setArgument("roughnessTexture", new _TextureReference2.default(args.textures[pmr.roughnessTexture.index]), null);
                                }
                                if (pmr.metallicRoughnessTexture) {
                                    pass.setArgument("metallicRoughnessTexture", new _TextureReference2.default(args.textures[pmr.metallicRoughnessTexture.index]), null);
                                }
                                if (args.material["emissiveFactor"]) {
                                    pass.setArgument("emissiveFactor", args.material["emissiveFactor"], null);
                                }
                                if (args.material["emissiveTexture"]) {
                                    pass.setArgument("emissiveTexture", new _TextureReference2.default(args.textures[args.material["emissiveTexture"].index]), null);
                                }
                                if (args.material["normalTexture"]) {
                                    pass.setArgument("normalTexture", new _TextureReference2.default(args.textures[args.material["normalTexture"].index]), null);
                                }
                                if (args.material["occlusionTexture"]) {
                                    pass.setArgument("occlusionTexture", new _TextureReference2.default(args.textures[args.material["occlusionTexture"].index]), null);
                                }
                                return _context4.abrupt("return", material);

                            case 18:
                            case "end":
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));
        }
    }, {
        key: "loadAnimations",
        value: function loadAnimations(args) {
            var result = {};
            for (var key in args.tf.animations) {
                var animation = args.tf.animations[key];
                result[key] = this.parser.callParserModule(function (m) {
                    return m.loadAnimation;
                }, { tf: args.tf, bufferViews: args.bufferViews, animation: animation });
            }
            return result;
        }
    }, {
        key: "loadAnimation",
        value: function loadAnimation(args) {
            var defaultClip = [];
            for (var i = 0; i < args.animation.channels.length; i++) {
                var clip = {};
                var channel = args.animation.channels[i];
                var query = ".gltf-node-" + channel.target.node;
                var target = this._pathNameToGrimoire(channel.target.path);
                var sampler = args.animation.samplers[channel.sampler];
                clip.query = query;
                clip.component = target.component;
                clip.attribute = target.attributeName;
                var inputAccessor = args.tf.accessors[sampler.input];
                var outputAccessor = args.tf.accessors[sampler.output];
                var inputBuffer = args.bufferViews[inputAccessor.bufferView];
                var outputBuffer = args.bufferViews[outputAccessor.bufferView];
                var elemCount = _ConstantConverter2.default.asVectorSize(outputAccessor.type);
                var inputBufferF32 = new Float32Array(inputBuffer.buffer, inputBuffer.byteOffset + inputAccessor.byteOffset, inputAccessor.count);
                var outputBufferF32 = new Float32Array(outputBuffer.buffer, outputBuffer.byteOffset + outputAccessor.byteOffset, outputAccessor.count * elemCount);
                var times = new Array(inputAccessor.count);
                for (var _i = 0; _i < inputAccessor.count; _i++) {
                    times[_i] = inputBufferF32[_i] * 1000; // SHould consider buffer stride
                }
                clip.timeline = times;
                clip.defaultEffect = "LINEAR"; // TODO bug of animation plugin?
                var values = [];
                for (var _i2 = 0; _i2 < outputAccessor.count; _i2++) {
                    values[_i2] = [];
                    for (var j = 0; j < elemCount; j++) {
                        values[_i2][j] = outputBufferF32[_i2 * elemCount + j]; // SHould consider buffer stride
                    }
                }
                clip.values = values;
                defaultClip.push(clip);
            }
            return {
                default: defaultClip
            };
        }
    }, {
        key: "_pathNameToGrimoire",
        value: function _pathNameToGrimoire(name) {
            switch (name) {
                case "translation":
                    return { component: "Transform", attributeName: "position" };
                case "rotation":
                    return { component: "Transform", attributeName: "rotation" };
                case "scale":
                    return { component: "Transform", attributeName: "scale" };
                case "weights":
                    return { component: "VertexMorpher", attributeName: "weights" };
                default:
                    throw new Error("Unsupported path type on grimoire");
            }
        }
    }]);

    return DefaultParserModule;
}(_ParserModule3.default);

exports.default = DefaultParserModule;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ImageResolver = __webpack_require__(10);

var _ImageResolver2 = _interopRequireDefault(_ImageResolver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Base class of ParserModule.
 * Provides utility for parsing glTF files.
 */
var ParserModuleBase = function () {
    function ParserModuleBase() {
        _classCallCheck(this, ParserModuleBase);
    }

    _createClass(ParserModuleBase, [{
        key: "__fetchBuffer",
        value: function __fetchBuffer(url) {
            return new Promise(function (resolve, reject) {
                var xhr = new XMLHttpRequest();
                xhr.open("GET", url);
                xhr.responseType = "arraybuffer";
                xhr.onload = function (v) {
                    resolve(xhr.response);
                };
                xhr.onerror = function (e) {
                    reject({
                        message: "Loading resource at '" + url + " failed. Is there resource file in dependency at correct location?'",
                        error: e
                    });
                };
                xhr.send();
            });
        }
    }, {
        key: "__fetchImage",
        value: function __fetchImage(url) {
            return _ImageResolver2.default.resolve(url);
        }
        /**
         * Check provided string being data uri or not.
         * @param  {string}  target [description]
         * @return {boolean}        [description]
         */

    }, {
        key: "__isDataUri",
        value: function __isDataUri(target) {
            return !!target.match(/^\s*data\:.*;base64/);
        }
        /**
         * Get directiory location from specified url
         * @param  {string} url [description]
         * @return {string}     [description]
         */

    }, {
        key: "__getBaseDir",
        value: function __getBaseDir(url) {
            return url.substr(0, url.lastIndexOf("/") + 1);
        }
        /**
         * Convert dataURI text to raw text
         * @param  {string} dataUrl [description]
         * @return {string}         [description]
         */

    }, {
        key: "__dataUriToText",
        value: function __dataUriToText(dataUrl) {
            var splittedUri = dataUrl.split(",");
            var byteString = atob(splittedUri[1]);
            return byteString;
        }
        /**
         * Convert data url string into array buffer
         * @param  {string}      dataUri [description]
         * @return {ArrayBuffer}         [description]
         */

    }, {
        key: "__dataUriToArrayBuffer",
        value: function __dataUriToArrayBuffer(dataUri) {
            var splittedUri = dataUri.split(",");
            var byteString = atob(splittedUri[1]);
            var byteStringLength = byteString.length;
            var arrayBuffer = new ArrayBuffer(byteStringLength);
            var uint8Array = new Uint8Array(arrayBuffer);
            for (var i = 0; i < byteStringLength; i++) {
                uint8Array[i] = byteString.charCodeAt(i);
            }
            return arrayBuffer;
        }
        /**
         * Convert data uri into image element
         * @param  {string}  dataUrl [description]
         * @return {Promise}         [description]
         */

    }, {
        key: "__dataUriToImage",
        value: function __dataUriToImage(dataUrl) {
            return new Promise(function (resolve, reject) {
                var image = new Image();
                image.src = dataUrl;
                image.onload = function () {
                    resolve(image);
                };
            });
        }
    }, {
        key: "__bufferToString",
        value: function __bufferToString(arr) {
            var tmp = "";
            var len = 1024;
            for (var p = 0; p < arr.byteLength; p += len) {
                tmp += this._smallBufferToString(new Uint8Array(arr.slice(p, p + len)));
            }
            return tmp;
        }
    }, {
        key: "__getBufferReader",
        value: function __getBufferReader(arr) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : WebGLRenderingContext.UNSIGNED_BYTE;
            var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            var stride = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

            var singleByte = 0;
            switch (type) {
                case WebGLRenderingContext.UNSIGNED_BYTE:
                    arr = new Uint8Array(arr.buffer, arr.byteOffset, arr.byteLength);
                    break;
                case WebGLRenderingContext.UNSIGNED_SHORT:
                    arr = new Uint16Array(arr.buffer, arr.byteOffset, arr.byteLength);
                    break;
                case WebGLRenderingContext.UNSIGNED_BYTE:
                    arr = new Uint32Array(arr.buffer, arr.byteOffset, arr.byteLength);
                    break;
                default:
                    throw new Error("Unknown array buffer");
            }
            if (stride !== 0) {
                throw new Error("Accessing a buffer with stride is not supported yet.");
            }
            return function (i) {
                return arr[offset + i];
            };
        }
    }, {
        key: "_smallBufferToString",
        value: function _smallBufferToString(arr) {
            return String.fromCharCode.apply("", arr);
        }
    }]);

    return ParserModuleBase;
}();

exports.default = ParserModuleBase;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.lib.fundamental.Asset.ImageResolver;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.lib.fundamental.Material.MaterialFactory;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ParserModule2 = __webpack_require__(0);

var _ParserModule3 = _interopRequireDefault(_ParserModule2);

var _Vector = __webpack_require__(13);

var _Vector2 = _interopRequireDefault(_Vector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NormalComplementorModule = function (_ParserModule) {
    _inherits(NormalComplementorModule, _ParserModule);

    function NormalComplementorModule() {
        _classCallCheck(this, NormalComplementorModule);

        return _possibleConstructorReturn(this, (NormalComplementorModule.__proto__ || Object.getPrototypeOf(NormalComplementorModule)).apply(this, arguments));
    }

    _createClass(NormalComplementorModule, [{
        key: "complementVertexAttributes",
        value: function complementVertexAttributes(args) {
            if (args.primitive.attributes["NORMAL"] === void 0 && args.primitive.attributes["POSITION"] !== void 0) {
                var accessor = args.tf.accessors[args.primitive.attributes["POSITION"]];
                var baseBufferView = args.bufferViews[accessor.bufferView];
                var positions = new Float32Array(baseBufferView.buffer, baseBufferView.byteOffset + accessor.byteOffset);
                if (accessor.byteStride !== void 0 && accessor.byteStride !== 0) {
                    throw new Error("Complementing normal with a position buffer which buffer has stride as a parameter");
                }
                if (!accessor.count) {
                    throw new Error("Accessor count of POSITION buffer should be defined for complementing NORMAL buffer");
                }
                var defaultAccessor = args.tf.accessors[args.primitive.indices];
                // generate normal buffer
                var normal = new Float32Array(accessor.count * 3);
                if (defaultAccessor) {
                    var bufferSource = args.bufferViews[defaultAccessor.bufferView];
                    var byteAccessor = this.__getBufferReader(bufferSource, defaultAccessor.componentType, defaultAccessor.byteOffset, defaultAccessor.byteStride);
                    for (var i = 0; i < accessor.count / 3; i++) {
                        this._calcFlatNormal(positions, normal, byteAccessor(3 * i), byteAccessor(3 * i + 1), byteAccessor(3 * i + 2));
                    }
                } else {
                    for (var _i = 0; _i < accessor.count / 3; _i++) {
                        this._calcFlatNormal(positions, normal, 3 * _i, 3 * _i + 1, 3 * _i + 2);
                    }
                }
                // add normal to geometry
                args.geometry.addAttributes(normal, {
                    NORMAL: {
                        size: 3
                    }
                });
            }
            return false;
        }
    }, {
        key: "_getElement",
        value: function _getElement(positions, posbase, elemIndex) {
            return positions[posbase + elemIndex];
        }
    }, {
        key: "_calcFlatNormal",
        value: function _calcFlatNormal(positions, normals, i0, i1, i2) {
            var v0Tov1 = new _Vector2.default(this._getElement(positions, 3 * i1, 0) - this._getElement(positions, 3 * i0, 0), this._getElement(positions, 3 * i1, 1) - this._getElement(positions, 3 * i0, 1), this._getElement(positions, 3 * i1, 2) - this._getElement(positions, 3 * i0, 2));
            var v0Tov2 = new _Vector2.default(this._getElement(positions, 3 * i2, 0) - this._getElement(positions, 3 * i0, 0), this._getElement(positions, 3 * i2, 1) - this._getElement(positions, 3 * i0, 1), this._getElement(positions, 3 * i2, 2) - this._getElement(positions, 3 * i0, 2));
            var nor = _Vector2.default.cross(v0Tov1, v0Tov2).normalizeThis();
            normals[3 * i0] = nor.X;
            normals[3 * i0 + 1] = nor.Y;
            normals[3 * i0 + 2] = nor.Z;
            normals[3 * i1] = nor.X;
            normals[3 * i1 + 1] = nor.Y;
            normals[3 * i1 + 2] = nor.Z;
            normals[3 * i2] = nor.X;
            normals[3 * i2 + 1] = nor.Y;
            normals[3 * i2 + 2] = nor.Z;
        }
    }]);

    return NormalComplementorModule;
}(_ParserModule3.default);

exports.default = NormalComplementorModule;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.lib.math.Vector3;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ParserModule2 = __webpack_require__(0);

var _ParserModule3 = _interopRequireDefault(_ParserModule2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndexComplementorModule = function (_ParserModule) {
    _inherits(IndexComplementorModule, _ParserModule);

    function IndexComplementorModule() {
        _classCallCheck(this, IndexComplementorModule);

        return _possibleConstructorReturn(this, (IndexComplementorModule.__proto__ || Object.getPrototypeOf(IndexComplementorModule)).apply(this, arguments));
    }

    _createClass(IndexComplementorModule, [{
        key: "appendIndices",
        value: function appendIndices(args) {
            if (args.primitive.indices === void 0) {
                var topology = args.primitive.mode || WebGLRenderingContext.TRIANGLES;
                var accessor = args.tf.accessors[args.primitive.attributes["POSITION"]];
                if (accessor.count === void 0) {
                    throw new Error("POSITION buffer should have count parameter. Construction of index buffer was failed.");
                }
                if (topology !== WebGLRenderingContext.TRIANGLES) {
                    throw new Error("Complementing index buffer is only supported for TRIANGLES topology currently.");
                }
                var indices = new Array(accessor.count);
                for (var i = 0; i < accessor.count; i++) {
                    indices[i] = i;
                }
                args.geometry.addIndex("default", indices);
                return true;
            }
        }
    }]);

    return IndexComplementorModule;
}(_ParserModule3.default);

exports.default = IndexComplementorModule;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ParserModule2 = __webpack_require__(0);

var _ParserModule3 = _interopRequireDefault(_ParserModule2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EmbeddedBufferModule = function (_ParserModule) {
    _inherits(EmbeddedBufferModule, _ParserModule);

    function EmbeddedBufferModule() {
        _classCallCheck(this, EmbeddedBufferModule);

        return _possibleConstructorReturn(this, (EmbeddedBufferModule.__proto__ || Object.getPrototypeOf(EmbeddedBufferModule)).apply(this, arguments));
    }

    _createClass(EmbeddedBufferModule, [{
        key: "loadBufferResource",
        value: function loadBufferResource(tf) {
            if (this.__isDataUri(tf.uri)) {
                return Promise.resolve(this.__dataUriToArrayBuffer(tf.uri));
            }
        }
    }]);

    return EmbeddedBufferModule;
}(_ParserModule3.default);

exports.default = EmbeddedBufferModule;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TransformComponent = __webpack_require__(5);

var _TransformComponent2 = _interopRequireDefault(_TransformComponent);

var _MeshRendererComponent = __webpack_require__(25);

var _MeshRendererComponent2 = _interopRequireDefault(_MeshRendererComponent);

var _Quaternion = __webpack_require__(26);

var _Quaternion2 = _interopRequireDefault(_Quaternion);

var _Vector = __webpack_require__(13);

var _Vector2 = _interopRequireDefault(_Vector);

var _Matrix = __webpack_require__(4);

var _Matrix2 = _interopRequireDefault(_Matrix);

var _AnimationFactory = __webpack_require__(27);

var _AnimationFactory2 = _interopRequireDefault(_AnimationFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DefaultInstanciator = function () {
    function DefaultInstanciator() {
        _classCallCheck(this, DefaultInstanciator);
    }

    _createClass(DefaultInstanciator, [{
        key: "instanciateAll",
        value: function instanciateAll(recipe, model, scene) {
            var sceneIndex = scene;
            if (sceneIndex === null) {
                sceneIndex = recipe.tf.scene;
            }
            if (typeof sceneIndex !== "number") {
                for (var key in recipe.tf.scenes) {
                    sceneIndex = key;
                    break;
                }
            }
            var sceneInfo = recipe.tf.scenes[sceneIndex];
            this.__instanciateScene(sceneInfo, model, recipe);
            this.__instanciateAnimations(model, recipe);
        }
    }, {
        key: "__instanciateScene",
        value: function __instanciateScene(scene, model, recipe) {
            var nodes = {};
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = scene.nodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var nodeName = _step.value;

                    this.__instanciateNode(recipe, nodeName, nodes, model.node, model);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }, {
        key: "__instanciateAnimations",
        value: function __instanciateAnimations(model, recipe) {
            for (var key in recipe.animations) {
                _AnimationFactory2.default.addAnimation("gltf-animation-" + key, JSON.stringify(recipe.animations[key]));
                model.node.addComponent("Animation", {
                    animation: "gltf-animation-" + key,
                    clips: "default"
                });
            }
        }
    }, {
        key: "__instanciateNode",
        value: function __instanciateNode(recipe, nodeName, instanciatedNodes, parent, model) {
            var node = recipe.tf.nodes[nodeName];
            var currentNode = void 0;
            var meshes = [];
            if (node.mesh !== void 0) {
                var primitives = recipe.primitives[node.mesh];
                var meshInfo = recipe.tf.meshes[node.mesh];
                if (primitives.length === 1) {
                    var mat = recipe.materials[meshInfo.primitives[0].material];
                    var meshNode = parent.addChildByName("mesh", {
                        geometry: primitives[0],
                        material: mat
                    });
                    meshes.push(meshNode);
                    currentNode = meshNode;
                } else {
                    var objectNode = parent.addChildByName("object", {});
                    for (var i = 0; i < primitives.length; i++) {
                        var _mat = recipe.materials[meshInfo.primitives[i].material];
                        var _meshNode = objectNode.addChildByName("mesh", {
                            geometry: primitives[i],
                            material: _mat
                        });
                        meshes.push(_meshNode);
                    }
                    currentNode = objectNode;
                }
            } else {
                currentNode = parent.addChildByName("object", {});
            }
            instanciatedNodes[nodeName] = currentNode;
            currentNode.setAttribute("class", "gltf-node-" + nodeName);
            this.__applyTransform(currentNode, node);
            if (node.children) {
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _iterator2 = node.children[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var child = _step2.value;

                        this.__instanciateNode(recipe, child, instanciatedNodes, currentNode, model);
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                            _iterator2.return();
                        }
                    } finally {
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }
            }
            // If this node was skin, create joint matrix buffer in model
            if (node.skin !== void 0) {
                var skinInfo = recipe.tf.skins[node.skin];
                model.skeletons[node.skin] = currentNode.getComponent(_TransformComponent2.default);
                var invBindShapeMatrixSourceAccessor = recipe.tf.accessors[skinInfo.inverseBindMatrices];
                var invBindShapeMatrixSource = recipe.bufferViews[invBindShapeMatrixSourceAccessor.bufferView];
                var invBindShapeMatrixSourceCasted = new Float32Array(invBindShapeMatrixSource.buffer, invBindShapeMatrixSource.byteOffset, invBindShapeMatrixSource.byteLength / 4);
                var stride = !invBindShapeMatrixSourceAccessor.byteStride ? 4 : invBindShapeMatrixSourceAccessor.byteStride;
                var getInvBindShapeElement = function getInvBindShapeElement(i) {
                    return invBindShapeMatrixSourceCasted[invBindShapeMatrixSourceAccessor.byteOffset / 4 + stride / 4 * i];
                };
                if (model.jointMatrices[node.skin] === void 0) {
                    model.jointMatrices[node.skin] = new Float32Array(skinInfo.joints.length * 16);
                }
                for (var _i = 0; _i < meshes.length; _i++) {
                    meshes[_i].setAttribute("fundamental.MaterialContainer.jointCount", skinInfo.joints.length);
                    meshes[_i].getComponent(_MeshRendererComponent2.default).renderArgs["gltf-jointMatrices"] = model.jointMatrices[node.skin];
                }
                skinInfo.joints.forEach(function (j, jointIndex) {
                    if (instanciatedNodes[j]) {
                        var invBindShapeMatrix = new Array(16);
                        for (var _i2 = 0; _i2 < 16; _i2++) {
                            invBindShapeMatrix[_i2] = getInvBindShapeElement(_i2 + 16 * jointIndex);
                        }
                        instanciatedNodes[j].setAttribute("class", instanciatedNodes[j].getAttribute("class") + " gltf-joint-" + jointIndex);
                        instanciatedNodes[j].addComponent("GLTFJoint", {
                            invBindShapeMatrix: invBindShapeMatrix,
                            skinIndex: node.skin,
                            jointIndex: jointIndex
                        });
                    } else {
                        throw new Error("specified node was not found");
                    }
                });
            }
        }
    }, {
        key: "__applyTransform",
        value: function __applyTransform(node, nodeInfo) {
            var transform = node.getComponent(_TransformComponent2.default);
            if (nodeInfo.rotation) {
                transform.setAttribute("rotation", new _Quaternion2.default([].concat(nodeInfo.rotation)));
            }
            if (nodeInfo.translation) {
                transform.setAttribute("position", new _Vector2.default([].concat(nodeInfo.translation)));
            }
            if (nodeInfo.scale) {
                transform.setAttribute("scale", new _Vector2.default([].concat(nodeInfo.scale)));
            }
            if (nodeInfo.matrix) {
                if (nodeInfo.rotation || nodeInfo.translation || nodeInfo.scale) {
                    throw new Error("Matrix property can not be existed with other transoform property");
                }
                var mat = new _Matrix2.default(nodeInfo.matrix);
                transform.applyMatrix(mat);
            }
        }
    }]);

    return DefaultInstanciator;
}();

exports.default = DefaultInstanciator;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Accessor = __webpack_require__(19);

var _Accessor2 = _interopRequireDefault(_Accessor);

var _GLTFJointComponent = __webpack_require__(3);

var _GLTFJointComponent2 = _interopRequireDefault(_GLTFJointComponent);

var _GLTFModelComponent = __webpack_require__(2);

var _GLTFModelComponent2 = _interopRequireDefault(_GLTFModelComponent);

var _DefaultInstanciator = __webpack_require__(16);

var _DefaultInstanciator2 = _interopRequireDefault(_DefaultInstanciator);

var _ConstantConverter = __webpack_require__(1);

var _ConstantConverter2 = _interopRequireDefault(_ConstantConverter);

var _DefaultParserModule = __webpack_require__(8);

var _DefaultParserModule2 = _interopRequireDefault(_DefaultParserModule);

var _EmbeddedBufferModule = __webpack_require__(15);

var _EmbeddedBufferModule2 = _interopRequireDefault(_EmbeddedBufferModule);

var _IndexComplementorModule = __webpack_require__(14);

var _IndexComplementorModule2 = _interopRequireDefault(_IndexComplementorModule);

var _NormalComplementorModule = __webpack_require__(12);

var _NormalComplementorModule2 = _interopRequireDefault(_NormalComplementorModule);

var _Parser = __webpack_require__(7);

var _Parser2 = _interopRequireDefault(_Parser);

var _ParserModule = __webpack_require__(0);

var _ParserModule2 = _interopRequireDefault(_ParserModule);

var _ParserModuleBase = __webpack_require__(9);

var _ParserModuleBase2 = _interopRequireDefault(_ParserModuleBase);

var _ResourceResolver = __webpack_require__(28);

var _ResourceResolver2 = _interopRequireDefault(_ResourceResolver);

var _main = __webpack_require__(31);

var _main2 = _interopRequireDefault(_main);

var _grimoirejs = __webpack_require__(17);

var _grimoirejs2 = _interopRequireDefault(_grimoirejs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __VERSION__ = "2.2.1";
var __NAME__ = "grimoirejs-gltf";

var __EXPOSE__ = {
    "Accessor": {
        "Accessor": _Accessor2.default
    },
    "Components": {
        "GLTFJointComponent": _GLTFJointComponent2.default,
        "GLTFModelComponent": _GLTFModelComponent2.default
    },
    "Instanciator": {
        "DefaultInstanciator": _DefaultInstanciator2.default
    },
    "Parser": {
        "ConstantConverter": _ConstantConverter2.default,
        "DefaultParserModule": _DefaultParserModule2.default,
        "Modules": {
            "EmbeddedBufferModule": _EmbeddedBufferModule2.default,
            "IndexComplementorModule": _IndexComplementorModule2.default,
            "NormalComplementorModule": _NormalComplementorModule2.default
        },
        "Parser": _Parser2.default,
        "ParserModule": _ParserModule2.default,
        "ParserModuleBase": _ParserModuleBase2.default
    },
    "Util": {
        "ResourceResolver": _ResourceResolver2.default
    }
};

_grimoirejs2.default.notifyRegisteringPlugin(__NAME__);
var __BASE__ = (0, _main2.default)();
Object.assign(__EXPOSE__, {
    __VERSION__: __VERSION__,
    __NAME__: __NAME__
});
Object.assign(__BASE__ || {}, __EXPOSE__);
window["GrimoireJS"].lib.gltf = __EXPOSE__;
exports.default = __BASE__;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ConstantConverter = __webpack_require__(1);

var _ConstantConverter2 = _interopRequireDefault(_ConstantConverter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The accessor class to be used for fetching animation frames
 */
var Accessor = function () {
    function Accessor(buffer, count, componentType, elementSize, byteOffset, byteStride) {
        _classCallCheck(this, Accessor);

        this.buffer = buffer;
        this.count = count;
        this.componentType = componentType;
        this.elementSize = elementSize;
        this.byteOffset = byteOffset;
        this.byteStride = byteStride;
        this._dView = new DataView(buffer.buffer, buffer.byteOffset + byteOffset);
        this._elementByteSize = _ConstantConverter2.default.asByteSize(componentType);
        if (byteStride === 0) {
            this.byteStride = this.elementSize * this._elementByteSize;
        }
    }

    _createClass(Accessor, [{
        key: "getByIndex",
        value: function getByIndex(index) {
            if (index < 0 || index >= this.count) {
                return null;
            }
            var res = new Array(this.elementSize);
            for (var i = 0; i < this.elementSize; i++) {
                res[i] = this._getSingleByIndex(index, i);
            }
            return res;
        }
    }, {
        key: "_getSingleByIndex",
        value: function _getSingleByIndex(index, elementIndex) {
            switch (this.componentType) {
                case WebGLRenderingContext.FLOAT:
                    return this._dView.getFloat32(index * this.byteStride + this._elementByteSize * elementIndex, true);
                default:
                    throw new Error("Unsupported element type");
            }
        }
    }]);

    return Accessor;
}();

exports.default = Accessor;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.lib.math.Color3;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.lib.math.Color4;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.lib.fundamental.Resource.Texture2D;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.lib.fundamental.Geometry.Geometry;

/***/ }),
/* 24 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.lib.fundamental.Material.TextureReference;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.lib.fundamental.Components.MeshRendererComponent;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.lib.math.Quaternion;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.lib.animation.Animation.AnimationFactory;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TextFileResolver = __webpack_require__(29);

var _TextFileResolver2 = _interopRequireDefault(_TextFileResolver);

var _ImageResolver = __webpack_require__(10);

var _ImageResolver2 = _interopRequireDefault(_ImageResolver);

var _HashCalculator = __webpack_require__(30);

var _HashCalculator2 = _interopRequireDefault(_HashCalculator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Provides resolving resource dependency while parsing gltf file.
 */
var ResourceResolver = function () {
    function ResourceResolver(_rootPath) {
        _classCallCheck(this, ResourceResolver);

        this._rootPath = _rootPath;
        this.baseDirectory = this._getBaseDir(_rootPath);
    }

    _createClass(ResourceResolver, [{
        key: "loadGLTFFile",
        value: function loadGLTFFile() {
            var _this = this;

            return new Promise(function (resolve, reject) {
                var xhr = new XMLHttpRequest();
                xhr.open("GET", _this._rootPath);
                xhr.responseType = "arraybuffer";
                xhr.onload = function (v) {
                    var uiarr = new Uint8Array(xhr.response);
                    var glTFMagic = [103, 108, 84, 70];
                    var isBinary = true;
                    for (var i = 0; i < glTFMagic.length; i++) {
                        if (uiarr[i] !== glTFMagic[i]) {
                            isBinary = false;
                        }
                    }
                    var resultJson = void 0;
                    if (isBinary) {
                        var darr = new DataView(xhr.response);
                        var fl = darr.getUint32(8, true); // fullLength
                        var l = darr.getUint32(12, true); // contentLength
                        resultJson = _this._bufferToString(xhr.response.slice(20, 20 + l));
                        _this.binaryGLTFBuffer = xhr.response.slice(20 + l, fl);
                    } else {
                        resultJson = _this._bufferToString(xhr.response);
                    }
                    _this.tf = JSON.parse(resultJson);
                    _this.tf.id = _HashCalculator2.default.calcHash(resultJson);
                    resolve(_this.tf);
                };
                xhr.onerror = function (e) {
                    // reject({
                    //   message: `Loading resource at '${this.baseDirectory + url} failed. Is there resource file in dependency at correct location?'`,
                    //   error:e
                    // });
                };
                xhr.send();
            });
        }
        /**
         * Load image from specified url or dataURL.
         * @param  {string}  url [description]
         * @return {Promise}     [description]
         */

    }, {
        key: "loadImage",
        value: function loadImage(image) {
            var url = image.uri;
            var isBlob = false;
            if (image["extensions"] && image["extensions"]["KHR_binary_glTF"]) {
                var binaryInfo = image["extensions"]["KHR_binary_glTF"];
                var bufferViewInfo = this.tf.bufferViews[binaryInfo.bufferView];
                var blob = new Blob([new Uint8Array(this.binaryGLTFBuffer, bufferViewInfo.byteOffset, bufferViewInfo.byteLength)], {
                    type: binaryInfo.mimeType
                });
                url = window.URL.createObjectURL(blob);
                isBlob = true;
            }
            if (this._isDataUrl(url)) {
                return this._dataUriToImage(url);
            } else {
                return _ImageResolver2.default.resolve(isBlob ? url : this.baseDirectory + url);
            }
        }
        /**
         * Load buffer from specified url or dataURL.
         * @return {Promise<ArrayBuffer>} [description]
         */

    }, {
        key: "loadBuffer",
        value: function loadBuffer(url) {
            var _this2 = this;

            if (this._isDataUrl(url)) {
                return new Promise(function (resolve, reject) {
                    resolve(_this2._dataUriToArrayBuffer(url));
                });
            }
            return new Promise(function (resolve, reject) {
                var xhr = new XMLHttpRequest();
                xhr.open("GET", _this2.baseDirectory + url);
                xhr.responseType = "arraybuffer";
                xhr.onload = function (v) {
                    resolve(xhr.response);
                };
                xhr.onerror = function (e) {
                    reject({
                        message: "Loading resource at '" + (_this2.baseDirectory + url) + " failed. Is there resource file in dependency at correct location?'",
                        error: e
                    });
                };
                xhr.send();
            });
        }
        /**
         * Load string from specified url or dataURL
         * @param  {string}          url [description]
         * @return {Promise<string>}     [description]
         */

    }, {
        key: "loadShader",
        value: function loadShader(shader) {
            var url = shader.uri;
            var isBlob = false;
            if (shader["extensions"] && shader["extensions"]["KHR_binary_glTF"]) {
                var binaryInfo = shader["extensions"]["KHR_binary_glTF"];
                var bufferViewInfo = this.tf.bufferViews[binaryInfo.bufferView];
                var blob = new Blob([new Uint8Array(this.binaryGLTFBuffer, bufferViewInfo.byteOffset, bufferViewInfo.byteLength)], {
                    type: "text/plain"
                });
                url = window.URL.createObjectURL(blob);
                isBlob = true;
            }
            if (this._isDataUrl(url)) {
                return Promise.resolve(this._dataUriToText(url));
            } else {
                return _TextFileResolver2.default.resolve(isBlob ? url : this.baseDirectory + url);
            }
        }
        /**
         * Convert data url string into array buffer
         * @param  {string}      dataUri [description]
         * @return {ArrayBuffer}         [description]
         */

    }, {
        key: "_dataUriToArrayBuffer",
        value: function _dataUriToArrayBuffer(dataUri) {
            var splittedUri = dataUri.split(",");
            var byteString = atob(splittedUri[1]);
            var byteStringLength = byteString.length;
            var arrayBuffer = new ArrayBuffer(byteStringLength);
            var uint8Array = new Uint8Array(arrayBuffer);
            for (var i = 0; i < byteStringLength; i++) {
                uint8Array[i] = byteString.charCodeAt(i);
            }
            return arrayBuffer;
        }
        /**
         * Convert data uri into image element
         * @param  {string}  dataUrl [description]
         * @return {Promise}         [description]
         */

    }, {
        key: "_dataUriToImage",
        value: function _dataUriToImage(dataUrl) {
            var _this3 = this;

            return new Promise(function (resolve, reject) {
                var canvas = document.createElement("canvas");
                var context = canvas.getContext("2d");
                var image = new Image();
                image.src = dataUrl;
                image.onload = function () {
                    resolve(_this3._ensureCorrectSize(image));
                };
            });
        }
    }, {
        key: "_dataUriToText",
        value: function _dataUriToText(dataUrl) {
            var splittedUri = dataUrl.split(",");
            var byteString = atob(splittedUri[1]);
            return byteString;
        }
    }, {
        key: "_ensureCorrectSize",
        value: function _ensureCorrectSize(image) {
            var canvas = document.createElement("canvas");
            var context = canvas.getContext("2d");
            var cWidth = Math.pow(2, Math.ceil(Math.log(image.width) / Math.LN2));
            var cHeight = Math.pow(2, Math.ceil(Math.log(image.height) / Math.LN2));
            if (cWidth === image.width && cHeight === image.height) {
                return image;
            }
            canvas.width = cWidth;
            canvas.height = cHeight;
            context.drawImage(image, 0, 0, image.width, image.height, 0, 0, cWidth, cHeight);
            return canvas;
        }
    }, {
        key: "_bufferToString",
        value: function _bufferToString(arr) {
            var tmp = "";
            var len = 1024;
            for (var p = 0; p < arr.byteLength; p += len) {
                tmp += this._smallBufferToString(new Uint8Array(arr.slice(p, p + len)));
            }
            return tmp;
        }
    }, {
        key: "_smallBufferToString",
        value: function _smallBufferToString(arr) {
            return String.fromCharCode.apply("", arr);
        }
        /**
         * Check specified url is dataUrl or not
         * @param  {string}  dataUrl [description]
         * @return {boolean}         [description]
         */

    }, {
        key: "_isDataUrl",
        value: function _isDataUrl(dataUrl) {
            return !!dataUrl.match(/^\s*data\:.*;base64/);
        }
        /**
         * Get directiory location from specified url
         * @param  {string} url [description]
         * @return {string}     [description]
         */

    }, {
        key: "_getBaseDir",
        value: function _getBaseDir(url) {
            return url.substr(0, url.lastIndexOf("/") + 1);
        }
    }]);

    return ResourceResolver;
}();

exports.default = ResourceResolver;

/***/ }),
/* 29 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.lib.fundamental.Asset.TextFileResolver;

/***/ }),
/* 30 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.lib.fundamental.Util.HashCalculator;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _GLTFJointComponent = __webpack_require__(3);

var _GLTFJointComponent2 = _interopRequireDefault(_GLTFJointComponent);

var _GLTFModelComponent = __webpack_require__(2);

var _GLTFModelComponent2 = _interopRequireDefault(_GLTFModelComponent);

var _grimoirejs = __webpack_require__(17);

var _grimoirejs2 = _interopRequireDefault(_grimoirejs);

var _MaterialFactory = __webpack_require__(11);

var _MaterialFactory2 = _interopRequireDefault(_MaterialFactory);

var _UniformResolverRegistry = __webpack_require__(32);

var _UniformResolverRegistry2 = _interopRequireDefault(_UniformResolverRegistry);

var _gltfUnlit = __webpack_require__(33);

var _gltfUnlit2 = _interopRequireDefault(_gltfUnlit);

var _gltfPbrMetallicRoughness = __webpack_require__(34);

var _gltfPbrMetallicRoughness2 = _interopRequireDefault(_gltfPbrMetallicRoughness);

var _ImportResolver = __webpack_require__(35);

var _ImportResolver2 = _interopRequireDefault(_ImportResolver);

var _GLExtRequestor = __webpack_require__(36);

var _GLExtRequestor2 = _interopRequireDefault(_GLExtRequestor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

exports.default = function () {
    if (typeof _ImportResolver2.default.staticImports["forward-shading"] !== "string") {
        _ImportResolver2.default.staticImports["forward-shading"] = "";
    }
    _GLExtRequestor2.default.request("OES_standard_derivatives");
    _GLExtRequestor2.default.request("OES_element_index_uint");
    _grimoirejs2.default.register(function () {
        return __awaiter(undefined, void 0, void 0, regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _grimoirejs2.default.registerComponent("GLTFModel", _GLTFModelComponent2.default);
                            _grimoirejs2.default.registerComponent("GLTFJoint", _GLTFJointComponent2.default);
                            _grimoirejs2.default.registerNode("model", ["GLTFModel"], {}, "object");
                            _grimoirejs2.default.registerNode("gltf-mesh", [], {
                                material: "new(gltf-unlit)"
                            }, "mesh");
                            _grimoirejs2.default.registerNode("gltf-joint", ["GLTFJoint"], {}, "object");
                            _grimoirejs2.default.registerNode("gltf-assets", [], {});
                            _MaterialFactory2.default.addSORTMaterial("gltf-unlit", _gltfUnlit2.default);
                            _MaterialFactory2.default.addSORTMaterial("gltf-pbr-metallic-roughness", _gltfPbrMetallicRoughness2.default);
                            _UniformResolverRegistry2.default.add("JOINTMATRIX", function (valInfo, material) {
                                return function (proxy, info) {
                                    if (info.renderable.renderArgs["gltf-jointMatrices"]) {
                                        proxy.uniformMatrixArray(valInfo.name, info.renderable.renderArgs["gltf-jointMatrices"]);
                                    }
                                };
                            });

                        case 9:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));
    });
};

/***/ }),
/* 32 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.lib.fundamental.Material.UniformResolverRegistry;

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = "@Pass{\n@BlendFunc(SRC_ALPHA,ONE_MINUS_SRC_ALPHA)\n@ExposeMacro(int,jointCount,JOINT_COUNT,0)\nFS_PREC(mediump,float)\n\nvarying vec3 vPosition;\nvarying vec3 vNormal;\nvarying vec2 vUV;\n\n#ifdef VS\n#if JOINT_COUNT > 0\n  @JOINTMATRIX\n  uniform mat4 boneMatrices[JOINT_COUNT];\n#endif\n  @NORMAL\n  attribute vec3 normal;\n  @POSITION\n  attribute vec3 position;\n  @TEXCOORD_0\n  attribute vec2 texCoord;\n#if JOINT_COUNT > 0\n  @JOINT\n  attribute vec4 joint;\n  @WEIGHT\n  attribute vec4 weight;\n#endif\n  uniform mat4 _matPVM;\n  uniform mat4 _matM;\n  void main(){\n    mat4 transform = _matM;\n    mat4 projectionTransform = _matPVM;\n    #if JOINT_COUNT > 0\n      mat4 skinMat = weight.x * boneMatrices[int(joint.x)] + weight.y * boneMatrices[int(joint.y)] + weight.z * boneMatrices[int(joint.z)] + weight.w * boneMatrices[int(joint.w)];\n      transform *= skinMat;\n      projectionTransform *= skinMat;\n    #endif\n    vUV = texCoord;\n    vNormal = normalize((transform * vec4(normal,0.0)).xyz);\n    vPosition = (transform * vec4(position,1.0)).xyz;\n    gl_Position = projectionTransform * vec4(position,1.0);\n  }\n\n\n#endif\n\n\n#ifdef FS\n\n  @{type:\"color\"}\n  uniform vec3 ambient;\n\n  @AMBIENT_COEFFICIENT\n  uniform float ambientCoefficient;\n\n  uniform sampler2D ambientTexture;\n\n  @HAS_TEXTURE{sampler:\"ambientTexture\"}\n  uniform bool ambientTextureUsed;\n\n  @{type:\"color\"}\n  uniform vec4 diffuse;\n\n  uniform sampler2D diffuseTexture;\n\n  @HAS_TEXTURE{sampler:\"diffuseTexture\"}\n  uniform bool diffuseTextureUsed;\n\n  @{type:\"color\"}\n  uniform vec3 specular;\n\n  uniform sampler2D specularTexture;\n\n  @HAS_TEXTURE{sampler:\"specularTexture\"}\n  uniform bool specularTextureUsed;\n\n  @{type:\"color\"}\n  uniform vec3 emission;\n\n  uniform sampler2D emissionTexture;\n\n  @HAS_TEXTURE{sampler:\"emissionTexture\"}\n  uniform bool emissionTextureUsed;\n\n  @{default:\"1.0\"}\n  uniform float shininess;\n\n  @{default:\"1.0\"}\n  uniform float transparency;\n\n  uniform vec3 _cameraPosition;\n\n  @{default:\"n(1,1,-1)\"}\n  uniform vec3 sunDir;\n\n  void main(){\n    vec4 dColor = vec4(0);\n    vec3 sColor = vec3(0);\n    vec3 eColor = vec3(0);\n    vec3 aColor = vec3(0);\n    vec3 hVec = normalize(normalize(_cameraPosition - vPosition) + sunDir);\n    if(ambientTextureUsed){\n      aColor = texture2D(ambientTexture,vUV).rgb;\n    }else{\n      aColor = ambient;\n    }\n    if(diffuseTextureUsed){\n      dColor = texture2D(diffuseTexture,vUV);\n    }else{\n      dColor = diffuse;\n    }\n    dColor.rgb = max(0.,dot(sunDir,vNormal)) * dColor.rgb;\n    if(specularTextureUsed){\n      sColor = texture2D(specularTexture,vUV).rgb;\n    }else{\n      sColor = specular;\n    }\n    if(emissionTextureUsed){\n      eColor = texture2D(emissionTexture,vUV).rgb;\n    }else{\n      eColor = emission;\n    }\n    sColor = sColor * pow(max(0.,dot(hVec,vNormal)),shininess);\n    gl_FragColor.rgb = dColor.rgb + sColor + aColor * ambientCoefficient;// + eColor;// + aColor;\n    gl_FragColor.a = dColor.a * transparency;\n  }\n#endif\n}\n"

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = "@Pass{\n#extension GL_OES_standard_derivatives : enable\n@BlendFunc(SRC_ALPHA,ONE_MINUS_SRC_ALPHA)\n@ExposeMacro(int,jointCount,JOINT_COUNT,0)\nFS_PREC(mediump,float)\n\nvarying vec3 vPosition;\nvarying vec3 vNormal;\nvarying vec2 vUV;\n\n#ifdef VS\n#if JOINT_COUNT > 0\n  @JOINTMATRIX\n  uniform mat4 boneMatrices[JOINT_COUNT];\n#endif\n  @NORMAL\n  attribute vec3 normal;\n  @POSITION\n  attribute vec3 position;\n#ifdef ATTRIBUTE_TEXCOORD_0_ENABLED\n  @TEXCOORD_0\n  attribute vec2 texCoord;\n#endif\n#if JOINT_COUNT > 0\n  @JOINTS_0\n  attribute vec4 joint;\n  @WEIGHTS_0\n  attribute vec4 weight;\n#endif\n  uniform mat4 _matPVM;\n  uniform mat4 _matM;\n  void main(){\n    mat4 transform = _matM;\n    mat4 projectionTransform = _matPVM;\n    #if JOINT_COUNT > 0\n      mat4 skinMat = weight.x * boneMatrices[int(joint.x)] + weight.y * boneMatrices[int(joint.y)] + weight.z * boneMatrices[int(joint.z)] + weight.w * boneMatrices[int(joint.w)];\n      transform *= skinMat;\n      projectionTransform *= skinMat;\n    #endif\n    #ifdef ATTRIBUTE_TEXCOORD_0_ENABLED\n        vUV = texCoord;\n    #else\n        vUV  = position.xy /2.0 + vec2(0.5);\n    #endif\n    vNormal = normalize((transform * vec4(normal,0.0)).xyz);\n    vPosition = (transform * vec4(position,1.0)).xyz;\n    gl_Position = projectionTransform * vec4(position,1.0);\n  }\n\n\n#endif\n\n\n#ifdef FS\n  @{flag:\"USE_NORMAL_TEXTURE\"}\n  uniform sampler2D normalTexture;\n\n  @{default:\"1,1,1,1\"}\n  uniform vec4 baseColorFactor;\n\n  @{flag:\"USE_BASECOLOR_TEXTURE\"}\n  uniform sampler2D baseColorTexture;\n\n  @{default:\"1\"}\n  uniform float metallicFactor;\n\n  @{flag:\"USE_METALIC_TEXTURE\"}\n  uniform sampler2D metallicTexture;\n\n  @{default:\"1\"}\n  uniform float roughnessFactor;\n\n  @{flag:\"USE_ROUGHNESS_TEXTURE\"}\n  uniform sampler2D roughnessTexture;\n\n  @{default:\"0,0,0\"}\n  uniform vec3 emissiveFactor;\n\n  @{flag:\"USE_EMISSIVE_TEXTURE\"}\n  uniform sampler2D emissiveTexture;\n\n  @{flag:\"USE_METALIC_ROUGHNESS_TEXTURE\"}\n  uniform sampler2D metallicRoughnessTexture;\n\n  @{flag:\"USE_OCCLUSION_TEXTURE\"}\n  uniform sampler2D occlusionTexture;\n\n  @CAMERA_POSITION\n  uniform vec3 _cameraPosition;\n\n  @import \"forward-shading\"\n\n  #ifndef GR_FORWARD_SHADING_ENABLED\n\n  struct simple_pbr_params{\n    vec3 diffuseColor;\n    vec3 f0;\n    float alpha;\n    float roughness;\n  };\n\n    @{default:\"n(3,0.5,10)\"}\n    uniform vec3 simpleLightDirection;\n\n    @{type:\"color\",default:\"gray\"}\n    uniform vec3 simpleLightColor;\n\n    @{default:0.3}\n    uniform float simpleLightIntencity;\n\n    float lambert(vec3 lightDirection,vec3 surfaceNormal) {\n      return max(0.0, dot(lightDirection, surfaceNormal));\n    }\n\n    float ctd_GGX_Distribution(simple_pbr_params param,vec3 l,vec3 v,vec3 n,vec3 h){\n      float alpha2 = pow(param.alpha,2.0);\n      float nh2 = pow(dot(n,h),2.0);\n      return alpha2/(PI*pow(nh2*(alpha2 - 1.0) + 1.0,2.0));\n    }\n\n    float ctg_GGX_SingleGeometryTerm(simple_pbr_params param,vec3 n,vec3 v){\n      float d = dot(n,v);\n      return 2.*d /(d + sqrt(d*d + param.alpha*param.alpha*(1. - d*d)));\n    }\n\n    vec3 ctf_Schlick(simple_pbr_params param,vec3 l,vec3 v,vec3 n,vec3 h){\n      vec3 f0 = param.f0;\n      float vh = dot(v,n);\n      return f0 + pow(1.0-vh,5.0) * (vec3(1.0) - f0);\n    }\n\n    vec3 cookTorranceBRDF(simple_pbr_params param,vec3 l,vec3 v,vec3 n){\n      vec3 h = normalize(l+v);\n      return  ctf_Schlick(param,l,v,n,h) * ctd_GGX_Distribution(param,l,v,n,h) * ctg_GGX_SingleGeometryTerm(param,n,l) * ctg_GGX_SingleGeometryTerm(param,n,v)/(4.0 * dot(l,n) * dot(v,n));\n    }\n\n    vec3 BRDF(simple_pbr_params params,vec3 li,vec3 lo,vec3 n){\n      return params.diffuseColor/PI + cookTorranceBRDF(params,li,lo,n);\n    }\n\n  #endif\n\n\n  void main(){\n    vec4 baseColor = baseColorFactor;\n    #ifdef USE_BASECOLOR_TEXTURE\n      baseColor *= texture2D(baseColorTexture,vUV);\n    #endif\n    vec3 emissive = emissiveFactor;\n    #ifdef USE_EMISSIVE_TEXTURE\n      emissive *= texture2D(emissiveTexture,vUV).rgb;\n    #endif\n    float metallic = metallicFactor;\n    #ifdef USE_METALIC_TEXTURE\n      metallic *= texture2D(metallicTexture,vUV).r;\n    #endif\n    float roughness = roughnessFactor;\n    #ifdef USE_ROUGHNESS_TEXTURE\n      roughness *= texture2D(roughnessTexture,vUV).r;\n    #endif\n    #ifdef USE_METALIC_ROUGHNESS_TEXTURE\n      vec3 rm = texture2D(metallicRoughnessTexture,vUV).rgb;\n      metallic *= rm.b;\n      roughness *= rm.g;\n    #endif\n    vec3 normal = vNormal;\n    #ifdef USE_NORMAL_TEXTURE\n      vec3 pos_dx = dFdx(vPosition);\n      vec3 pos_dy = dFdy(vPosition);\n      vec3 tex_dx = dFdx(vec3(vUV, 0.0));\n      vec3 tex_dy = dFdy(vec3(vUV, 0.0));\n      vec3 t = (tex_dy.t * pos_dx - tex_dx.t * pos_dy) / (tex_dx.s * tex_dy.t - tex_dy.s * tex_dx.t);\n      t = normalize(t - vNormal * dot(vNormal, t));\n      vec3 b = normalize(cross(vNormal, t));\n      mat3 tbn = mat3(t, b, vNormal);\n      vec3 n = texture2D(normalTexture, vUV).rgb;\n      normal = normalize(tbn * (2.0 * n - 1.0));\n    #endif\n    vec3 dielectricSpecular = vec3(0.04);\n    vec3 diffuse = mix(baseColor.rgb * (1. - dielectricSpecular.r),vec3(0),metallic);\n    vec3 f0 = mix(dielectricSpecular,baseColor.rgb,metallic);\n    float alpha = roughness * roughness;\n    #ifdef GR_FORWARD_SHADING_ENABLED\n      pbr_params param = pbr_params(diffuse,f0,alpha,roughness);\n      gl_FragColor.rgb = shading(param,normal,vPosition);\n    #endif\n    #ifndef GR_FORWARD_SHADING_ENABLED\n      simple_pbr_params params = simple_pbr_params(diffuse,f0,alpha,roughness);\n      float lam = lambert(simpleLightDirection,normal);\n      vec3 brdfCoeff = BRDF(params,-simpleLightDirection,normalize(_cameraPosition - vPosition),normal);\n      gl_FragColor.rgb = vec3(lam) * simpleLightIntencity * simpleLightColor * brdfCoeff;\n    #endif\n    gl_FragColor.rgb += emissive;\n    gl_FragColor.rgb = pow(gl_FragColor.rgb,1.0/vec3(2.2));\n    #ifdef USE_OCCLUSION_TEXTURE\n      gl_FragColor.rgb *= texture2D(occlusionTexture,vUV).r;\n    #endif\n    gl_FragColor.a = baseColor.a;\n  }\n#endif\n}\n"

/***/ }),
/* 35 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.lib.fundamental.Sort.ImportResolver;

/***/ }),
/* 36 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.lib.fundamental.Resource.GLExtRequestor;

/***/ })
/******/ ]);
});
//# sourceMappingURL=grimoire-gltf.js.map

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Component2 = __webpack_require__(1);

var _Component3 = _interopRequireDefault(_Component2);

var _FrameBuffer = __webpack_require__(3);

var _FrameBuffer2 = _interopRequireDefault(_FrameBuffer);

var _Texture2D = __webpack_require__(4);

var _Texture2D2 = _interopRequireDefault(_Texture2D);

var _RenderBuffer = __webpack_require__(5);

var _RenderBuffer2 = _interopRequireDefault(_RenderBuffer);

var _SlideComponent = __webpack_require__(2);

var _SlideComponent2 = _interopRequireDefault(_SlideComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

var RenderSlideComponent = function (_Component) {
    _inherits(RenderSlideComponent, _Component);

    function RenderSlideComponent() {
        _classCallCheck(this, RenderSlideComponent);

        var _this = _possibleConstructorReturn(this, (RenderSlideComponent.__proto__ || Object.getPrototypeOf(RenderSlideComponent)).apply(this, arguments));

        _this._transiting = false;
        return _this;
    }

    _createClass(RenderSlideComponent, [{
        key: "$mount",
        value: function $mount() {
            return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
                var _this2 = this;

                var frame, parsed, gr;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                this._gl = this.companion.get("gl");
                                this._currentBuffer = new _FrameBuffer2.default(this._gl);
                                this._lastBuffer = new _FrameBuffer2.default(this._gl);
                                this._currentTexture = new _Texture2D2.default(this._gl);
                                this._lastTexture = new _Texture2D2.default(this._gl);
                                this._renderBuffer = new _RenderBuffer2.default(this._gl);
                                this._resizeTexture(1, 1);
                                this._currentBuffer.update(this._currentTexture);
                                this._currentBuffer.update(this._renderBuffer);
                                this._lastBuffer.update(this._lastTexture);
                                this._lastBuffer.update(this._renderBuffer);
                                this._slides = this.tree("goml").single().getComponentsInChildren(_SlideComponent2.default);
                                this.getAttributeRaw("current").boundTo("_currentFrame");
                                frame = window.location.hash.substring(1);
                                parsed = void 0;

                                if (frame && (parsed = /(\d+)(?:-(\d+))?/gm.exec(frame))) {
                                    setTimeout(function () {
                                        _this2._currentFrame = _this2._toFrameIndex(parseInt(parsed[1]), parseInt(parsed[2] || 0 + ''));
                                        _this2._enterFrame(-1, _this2._currentFrame);
                                    }, 0);
                                } else {
                                    setTimeout(function () {
                                        _this2._updateHash(_this2._currentFrame);
                                        _this2._enterFrame(-1, _this2._currentFrame);
                                    }, 0);
                                }
                                gr = this.companion.get("GeometryRegistory");
                                _context.next = 19;
                                return gr.getGeometry("quad");

                            case 19:
                                this._quad = _context.sent;

                            case 20:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
    }, {
        key: "$render",
        value: function $render(args) {
            var slideInfo = this._getSlide(this._currentFrame);
            if (this._transiting && slideInfo.build === 0) {
                var progress = (Date.now() - this._transitionStartTime) / this._lastTransitionTime;
                this._renderTo(args, slideInfo.slide, this._currentBuffer);
                var lastSlide = this._getSlide(this._currentFrame - 1);
                this._renderTo(args, lastSlide.slide, this._lastBuffer);
                this._gl.bindFramebuffer(WebGLRenderingContext.FRAMEBUFFER, null);
                this._gl.clearColor(0, 0, 0, 0);
                this._gl.clear(WebGLRenderingContext.COLOR_BUFFER_BIT | WebGLRenderingContext.DEPTH_BUFFER_BIT);
                this._gl.viewport(0, 0, args.viewport.Width, args.viewport.Height);
                slideInfo.slide.transitionMaterial.setAttribute("progress", progress);
                slideInfo.slide.transitionMaterial.setAttribute("last", this._lastTexture);
                slideInfo.slide.transitionMaterial.setAttribute("current", this._currentTexture);
                slideInfo.slide.transitionMaterial.material.draw({
                    targetBuffer: "default",
                    geometry: this._quad,
                    attributeValues: {},
                    sceneDescription: {},
                    camera: null,
                    transform: null,
                    buffers: args.buffers,
                    viewport: args.viewport,
                    technique: "default"
                });
                this._gl.flush();
            } else {
                if (this._transiting) {
                    var _progress = (Date.now() - this._transitionStartTime) / this._lastTransitionTime;
                    slideInfo.slide.buildProgress(slideInfo.build, _progress);
                }
                this._renderTo(args, slideInfo.slide, null);
            }
        }
    }, {
        key: "_renderTo",
        value: function _renderTo(args, slide, fbo) {
            if (fbo) {
                this._gl.viewport(0, 0, this._bufferWidth, this._bufferHeight);
                fbo.bind();
            } else {
                this._gl.viewport(0, 0, args.viewport.Width, args.viewport.Height);
                this._gl.bindFramebuffer(WebGLRenderingContext.FRAMEBUFFER, null);
            }
            var bg = slide.backgroundColor;
            this._gl.clearColor(bg.R, bg.G, bg.B, bg.A);
            this._gl.clear(WebGLRenderingContext.COLOR_BUFFER_BIT | WebGLRenderingContext.DEPTH_BUFFER_BIT);
            slide.camera.updateContainedScene(args.timer);
            slide.camera.renderScene({
                renderer: this,
                camera: slide.camera,
                buffers: args.buffers,
                layer: "default",
                viewport: args.viewport,
                timer: args.timer,
                technique: "default",
                sceneDescription: {}
            });
        }
    }, {
        key: "$resizeBuffer",
        value: function $resizeBuffer(arg) {
            this._resizeTexture(arg.pow2Width, arg.pow2Height);
        }
    }, {
        key: "next",
        value: function next() {
            return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee2() {
                var lastFrame, allFrame, i, currentFrameInfo;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                if (!this._transiting) {
                                    _context2.next = 2;
                                    break;
                                }

                                return _context2.abrupt("return");

                            case 2:
                                lastFrame = this._currentFrame;
                                allFrame = 0;

                                for (i = 0; i < this._slides.length; i++) {
                                    allFrame += this._slides[i].build;
                                }
                                this._currentFrame = Math.min(this._currentFrame + 1, allFrame - 1);
                                currentFrameInfo = this._getSlide(this._currentFrame);

                                if (!(currentFrameInfo.build === 0)) {
                                    _context2.next = 14;
                                    break;
                                }

                                _context2.next = 10;
                                return this._transitWait(currentFrameInfo.slide, currentFrameInfo.slide.transitionTime);

                            case 10:
                                if (_context2.sent) {
                                    _context2.next = 12;
                                    break;
                                }

                                return _context2.abrupt("return");

                            case 12:
                                _context2.next = 18;
                                break;

                            case 14:
                                _context2.next = 16;
                                return this._transitWait(currentFrameInfo.slide, currentFrameInfo.slide.buildTransitionTime);

                            case 16:
                                if (_context2.sent) {
                                    _context2.next = 18;
                                    break;
                                }

                                return _context2.abrupt("return");

                            case 18:
                                this._updateHash(this._currentFrame);
                                this._enterFrame(lastFrame, this._currentFrame);

                            case 20:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));
        }
    }, {
        key: "prev",
        value: function prev() {
            return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee3() {
                var lastFrame, slideInfo, prevSlideInfo;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                lastFrame = this._currentFrame;
                                slideInfo = this._getSlide(this._currentFrame); // 前のスライドの最後までを計算

                                this._currentFrame = Math.max(this._currentFrame - 1 - slideInfo.build, 0);
                                prevSlideInfo = this._getSlide(this._currentFrame); // さらに前のスライドの最初まで戻す

                                this._currentFrame = Math.max(this._currentFrame - prevSlideInfo.build, 0);
                                this._updateHash(this._currentFrame);
                                this._enterFrame(lastFrame, this._currentFrame);
                                this._lastTransitionTime = 0;
                                this._transitionStartTime = 0;
                                this._lastWaitingHash = -1;
                                this._transiting = false;

                            case 11:
                            case "end":
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));
        }
    }, {
        key: "_resizeTexture",
        value: function _resizeTexture(width, height) {
            this._lastTexture.update(0, width, height, 0, WebGLRenderingContext.RGBA, WebGLRenderingContext.UNSIGNED_BYTE);
            this._currentTexture.update(0, width, height, 0, WebGLRenderingContext.RGBA, WebGLRenderingContext.UNSIGNED_BYTE);
            this._renderBuffer.update(WebGLRenderingContext.DEPTH_COMPONENT16, width, height);
            this._bufferWidth = width;
            this._bufferHeight = height;
        }
    }, {
        key: "_transitWait",
        value: function _transitWait(currentSlide, time) {
            return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee4() {
                var hash;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                this._transiting = true;
                                this._lastTransitionTime = time * 1000;
                                this._transitionStartTime = Date.now();
                                hash = this._lastWaitingHash = Math.random();
                                _context4.next = 6;
                                return this._waitFor(time * 1000);

                            case 6:
                                if (!(hash !== this._lastWaitingHash)) {
                                    _context4.next = 8;
                                    break;
                                }

                                return _context4.abrupt("return", false);

                            case 8:
                                this._lastTransitionTime = 0;
                                this._transitionStartTime = 0;
                                this._transiting = false;
                                return _context4.abrupt("return", true);

                            case 12:
                            case "end":
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));
        }
        /**
         * Call slide components events
         * @param {number} lastFrame [description]
         * @param {number} frame     [description]
         */

    }, {
        key: "_enterFrame",
        value: function _enterFrame(lastFrame, frame) {
            var lastSlide = this._getSlide(lastFrame);
            var currentSlide = this._getSlide(frame);
            if (lastFrame !== -1) lastSlide.slide.buildEnd(lastSlide.build);
            if (lastFrame === -1 || lastSlide.slide !== currentSlide.slide) {
                if (lastFrame !== -1) lastSlide.slide.slideEnd();
                currentSlide.slide.slideStart();
            }
            currentSlide.slide.buildStart(currentSlide.build);
        }
        /**
         * Fetch slide component and build index from index.
         * @param  {number} index [description]
         * @return {[type]}       [description]
         */

    }, {
        key: "_getSlide",
        value: function _getSlide(index) {
            var currentIndex = 0;
            for (var i = 0; i < this._slides.length; i++) {
                var slide = this._slides[i];
                if (currentIndex + slide.build > index) {
                    return {
                        slideIndex: i,
                        slide: slide,
                        build: index - currentIndex
                    };
                }
                currentIndex += slide.build;
            }
        }
    }, {
        key: "_waitFor",
        value: function _waitFor(time) {
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    resolve();
                }, time);
            });
        }
    }, {
        key: "_toFrameIndex",
        value: function _toFrameIndex(slideIndex, buildIndex) {
            var sum = 0;
            for (var i = 0; i < slideIndex; i++) {
                sum += this._slides[i].build;
            }
            return sum + buildIndex;
        }
    }, {
        key: "_updateHash",
        value: function _updateHash(frame) {
            var slideInfo = this._getSlide(frame);
            if (slideInfo.slide.build === 1) {
                window.location.hash = "" + slideInfo.slideIndex;
            } else {
                window.location.hash = slideInfo.slideIndex + "-" + slideInfo.build;
            }
        }
    }, {
        key: "camera",
        get: function get() {
            return this._getSlide(this._currentFrame).slide.camera;
        }
    }]);

    return RenderSlideComponent;
}(_Component3.default);

exports.default = RenderSlideComponent;

RenderSlideComponent.attributes = {
    current: {
        default: 0,
        converter: "Number"
    }
};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value: true});
exports.default=window.GrimoireJS.Node.Component;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Component2 = __webpack_require__(1);

var _Component3 = _interopRequireDefault(_Component2);

var _CameraComponent = __webpack_require__(10);

var _CameraComponent2 = _interopRequireDefault(_CameraComponent);

var _MaterialComponent = __webpack_require__(11);

var _MaterialComponent2 = _interopRequireDefault(_MaterialComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SlideComponent = function (_Component) {
    _inherits(SlideComponent, _Component);

    function SlideComponent() {
        _classCallCheck(this, SlideComponent);

        return _possibleConstructorReturn(this, (SlideComponent.__proto__ || Object.getPrototypeOf(SlideComponent)).apply(this, arguments));
    }

    _createClass(SlideComponent, [{
        key: "$awake",
        value: function $awake() {
            this.build = this.getAttribute("build");
            this.transitionTime = this.getAttribute("transitionTime");
            this.buildTransitionTime = this.getAttribute("buildTransitionTime");
            this.camera = this.node.queryChildren(this.getAttribute("camera"))[0].getComponent(_CameraComponent2.default);
            this.transitionMaterial = this.tree(this.getAttribute("transition")).single().getComponent(_MaterialComponent2.default);
            this.backgroundColor = this.getAttribute("bgColor");
        }
    }, {
        key: "buildProgress",
        value: function buildProgress(buildIndex, progress) {
            var args = {
                buildIndex: buildIndex,
                progress: progress
            };
            this.node.broadcastMessage("buildProgress", args);
            this.node.emit("build-progress", args);
        }
    }, {
        key: "slideStart",
        value: function slideStart() {
            this.node.broadcastMessage("slideStart");
            this.node.emit("slide-start");
        }
    }, {
        key: "slideEnd",
        value: function slideEnd() {
            this.node.broadcastMessage("slideEnd");
            this.node.emit("slide-end");
        }
    }, {
        key: "buildStart",
        value: function buildStart(build) {
            this.node.broadcastMessage("buildStart", build);
            this.node.emit("build-start", build);
        }
    }, {
        key: "buildEnd",
        value: function buildEnd(build) {
            this.node.broadcastMessage("buildEnd", build);
            this.node.emit("slide-end", build);
        }
    }]);

    return SlideComponent;
}(_Component3.default);

exports.default = SlideComponent;

SlideComponent.attributes = {
    transition: {
        default: "material#default.transition",
        converter: "String"
    },
    build: {
        default: 1,
        converter: "Number"
    },
    type: {
        default: "scene",
        converter: "String"
    },
    camera: {
        default: "camera",
        converter: "String"
    },
    transitionTime: {
        default: "0.1",
        converter: "Number"
    },
    buildTransitionTime: {
        default: "0.2",
        converter: "Number"
    },
    bgColor: {
        default: "#F9EFD5",
        converter: "Color4"
    }
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value: true});
exports.default=window.GrimoireJS&&window.GrimoireJS.lib.fundamental?window.GrimoireJS.lib.fundamental.Resource.FrameBuffer:undefined;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value: true});
exports.default=window.GrimoireJS&&window.GrimoireJS.lib.fundamental?window.GrimoireJS.lib.fundamental.Resource.Texture2D:undefined;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value: true});
exports.default=window.GrimoireJS&&window.GrimoireJS.lib.fundamental?window.GrimoireJS.lib.fundamental.Resource.RenderBuffer:undefined;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _MeshIndexCalculator = __webpack_require__(12);

var _MeshIndexCalculator2 = _interopRequireDefault(_MeshIndexCalculator);

var _FrameBuffer = __webpack_require__(3);

var _FrameBuffer2 = _interopRequireDefault(_FrameBuffer);

var _Texture2D = __webpack_require__(4);

var _Texture2D2 = _interopRequireDefault(_Texture2D);

var _RenderBuffer = __webpack_require__(5);

var _RenderBuffer2 = _interopRequireDefault(_RenderBuffer);

var _TextureSizeCalculator = __webpack_require__(13);

var _TextureSizeCalculator2 = _interopRequireDefault(_TextureSizeCalculator);

var _RenderSlideComponent = __webpack_require__(0);

var _RenderSlideComponent2 = _interopRequireDefault(_RenderSlideComponent);

var _Component2 = __webpack_require__(1);

var _Component3 = _interopRequireDefault(_Component2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RenderSlideHitAreaComponent = function (_Component) {
    _inherits(RenderSlideHitAreaComponent, _Component);

    function RenderSlideHitAreaComponent() {
        _classCallCheck(this, RenderSlideHitAreaComponent);

        var _this = _possibleConstructorReturn(this, (RenderSlideHitAreaComponent.__proto__ || Object.getPrototypeOf(RenderSlideHitAreaComponent)).apply(this, arguments));

        _this._readCache = new Uint8Array(4);
        return _this;
    }

    _createClass(RenderSlideHitAreaComponent, [{
        key: "$mount",
        value: function $mount() {
            this._sceneRenderer = this.node.getComponent(_RenderSlideComponent2.default);
            if (!this._sceneRenderer) {
                throw new Error("The node attaching RenderHitArea should contain RenderScene.");
            }
            this._gl = this.companion.get("gl");
            this._canvas = this.companion.get("canvasElement");
            this.hitareaTexture = new _Texture2D2.default(this._gl);
            this.hitareaRenderbuffer = new _RenderBuffer2.default(this._gl);
            if (this.hitareaFBO) {
                this.hitareaFBO.destroy();
                this.hitareaFBO = null;
            }
        }
    }, {
        key: "$resizeBuffer",
        value: function $resizeBuffer(args) {
            var size = _TextureSizeCalculator2.default.getPow2Size(args.width, args.height);
            this._bufferSize = [size.width, size.height];
            this.hitareaTexture.update(0, size.width, size.height, 0, WebGLRenderingContext.RGBA, WebGLRenderingContext.UNSIGNED_BYTE);
            this.hitareaRenderbuffer.update(WebGLRenderingContext.DEPTH_COMPONENT16, size.width, size.height);
            if (!this.hitareaFBO) {
                this.hitareaFBO = new _FrameBuffer2.default(this._gl);
                this.hitareaFBO.update(this.hitareaTexture);
                this.hitareaFBO.update(this.hitareaRenderbuffer);
            }
        }
    }, {
        key: "$render",
        value: function $render(args) {
            if (!this._mouseInside) {
                return;
            }
            this.hitareaFBO.bind();
            this._gl.viewport(0, 0, this._bufferSize[0], this._bufferSize[1]);
            // clear buffer if needed
            this._gl.clearColor(0, 0, 0, 0);
            this._gl.clear(WebGLRenderingContext.COLOR_BUFFER_BIT);
            this._gl.clearDepth(1);
            this._gl.clear(WebGLRenderingContext.DEPTH_BUFFER_BIT);
            var camera = this._sceneRenderer.camera || args.camera;
            camera.renderScene({
                renderer: this._sceneRenderer,
                camera: camera,
                buffers: args.buffers,
                layer: "default",
                viewport: args.viewport,
                timer: args.timer,
                technique: "hitarea",
                sortingTechnique: "default",
                sceneDescription: {}
            });
            this._gl.flush();
            this._gl.readPixels(this._lastPosition[0] * this._bufferSize[0], this._lastPosition[1] * this._bufferSize[1], 1, 1, WebGLRenderingContext.RGBA, WebGLRenderingContext.UNSIGNED_BYTE, this._readCache);
            var index = _MeshIndexCalculator2.default.fromColor(this._readCache);
            if (index === 0) {
                if (this._lastRenderable instanceof _Component3.default) {
                    this._lastRenderable.node.emit("mouseleave", this._lastRenderable);
                }
                this._lastRenderable = null;
            } else {
                var r = camera.containedScene.queueRegistory.getByIndex(index - 1);
                if (this._lastRenderable !== r) {
                    if (this._lastRenderable instanceof _Component3.default) {
                        this._lastRenderable.node.emit("mouseleave", this._lastRenderable);
                    }
                    if (r instanceof _Component3.default) {
                        r.node.emit("mouseenter", r);
                    }
                } else {
                    if (r instanceof _Component3.default) {
                        if (this._mouseMoved) {
                            r.node.emit("mousemove", r);
                        } else {
                            r.node.emit("mouseon", r);
                        }
                    }
                }
                this._lastRenderable = r;
            }
            this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, null);
        }
    }, {
        key: "$mousemove",
        value: function $mousemove(v) {
            this._lastPosition = [v.viewportNormalizedX, 1.0 - v.viewportNormalizedY];
            this._mouseMoved = true;
        }
    }, {
        key: "$mouseenter",
        value: function $mouseenter(v) {
            this._mouseInside = true;
            this._lastPosition = [v.viewportNormalizedX, 1.0 - v.viewportNormalizedY];
            this._mouseMoved = true;
        }
    }, {
        key: "$mouseleave",
        value: function $mouseleave(v) {
            this._mouseInside = false;
            this._lastPosition = [v.viewportNormalizedX, 1.0 - v.viewportNormalizedY];
            this._mouseMoved = true;
            if (this._lastRenderable instanceof _Component3.default) {
                this._lastRenderable.node.emit("mouseleave", this._lastRenderable);
            }
            this._lastRenderable = null;
        }
    }]);

    return RenderSlideHitAreaComponent;
}(_Component3.default);

exports.default = RenderSlideHitAreaComponent;

RenderSlideHitAreaComponent.attributes = {};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Component2 = __webpack_require__(1);

var _Component3 = _interopRequireDefault(_Component2);

var _RenderSlideComponent = __webpack_require__(0);

var _RenderSlideComponent2 = _interopRequireDefault(_RenderSlideComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SlideControllerComponent = function (_Component) {
    _inherits(SlideControllerComponent, _Component);

    function SlideControllerComponent() {
        _classCallCheck(this, SlideControllerComponent);

        return _possibleConstructorReturn(this, (SlideControllerComponent.__proto__ || Object.getPrototypeOf(SlideControllerComponent)).apply(this, arguments));
    }

    _createClass(SlideControllerComponent, [{
        key: "$mount",
        value: function $mount() {
            var _this2 = this;

            var query = this.getAttribute("clickRegion");
            var elem = document.querySelector(query);
            var slideRenderer = this.node.getComponent(_RenderSlideComponent2.default);
            elem.addEventListener("mousedown", function () {
                if (_this2.getAttribute("clickEnabled")) {
                    slideRenderer.next();
                }
            });
            document.addEventListener("keydown", function (e) {
                if (e.keyCode === 39) {
                    slideRenderer.next();
                }
                if (e.keyCode === 37) {
                    slideRenderer.prev();
                }
            });
        }
    }]);

    return SlideControllerComponent;
}(_Component3.default);

exports.default = SlideControllerComponent;

SlideControllerComponent.attributes = {
    clickRegion: {
        default: ".gr-container",
        converter: "String"
    },
    clickEnabled: {
        default: false,
        converter: "Boolean"
    }
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value: true});
exports.default=window.GrimoireJS;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _RenderSlideComponent = __webpack_require__(0);

var _RenderSlideComponent2 = _interopRequireDefault(_RenderSlideComponent);

var _RenderSlideHitareaComponent = __webpack_require__(6);

var _RenderSlideHitareaComponent2 = _interopRequireDefault(_RenderSlideHitareaComponent);

var _SlideComponent = __webpack_require__(2);

var _SlideComponent2 = _interopRequireDefault(_SlideComponent);

var _SlideControllerComponent = __webpack_require__(7);

var _SlideControllerComponent2 = _interopRequireDefault(_SlideControllerComponent);

var _main = __webpack_require__(14);

var _main2 = _interopRequireDefault(_main);

var _grimoirejs = __webpack_require__(8);

var _grimoirejs2 = _interopRequireDefault(_grimoirejs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __VERSION__ = "0.0.18";
var __NAME__ = "grimoirejs-slide-system";

var __EXPOSE__ = {
    "Components": {
        "RenderSlideComponent": _RenderSlideComponent2.default,
        "RenderSlideHitareaComponent": _RenderSlideHitareaComponent2.default,
        "SlideComponent": _SlideComponent2.default,
        "SlideControllerComponent": _SlideControllerComponent2.default
    }
};

_grimoirejs2.default.notifyRegisteringPlugin(__NAME__);
var __BASE__ = (0, _main2.default)();
Object.assign(__EXPOSE__, {
    __VERSION__: __VERSION__,
    __NAME__: __NAME__
});
Object.assign(__BASE__ || {}, __EXPOSE__);
window["GrimoireJS"].lib.slide_system = __EXPOSE__;
exports.default = __BASE__;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value: true});
exports.default=window.GrimoireJS&&window.GrimoireJS.lib.fundamental?window.GrimoireJS.lib.fundamental.Components.CameraComponent:undefined;


/***/ }),
/* 11 */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value: true});
exports.default=window.GrimoireJS&&window.GrimoireJS.lib.fundamental?window.GrimoireJS.lib.fundamental.Components.MaterialComponent:undefined;


/***/ }),
/* 12 */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value: true});
exports.default=window.GrimoireJS&&window.GrimoireJS.lib.fundamental?window.GrimoireJS.lib.fundamental.Util.MeshIndexCalculator:undefined;


/***/ }),
/* 13 */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value: true});
exports.default=window.GrimoireJS&&window.GrimoireJS.lib.fundamental?window.GrimoireJS.lib.fundamental.Util.TextureSizeCalculator:undefined;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _grimoirejs = __webpack_require__(8);

var _grimoirejs2 = _interopRequireDefault(_grimoirejs);

var _RenderSlideComponent = __webpack_require__(0);

var _RenderSlideComponent2 = _interopRequireDefault(_RenderSlideComponent);

var _SlideComponent = __webpack_require__(2);

var _SlideComponent2 = _interopRequireDefault(_SlideComponent);

var _SlideControllerComponent = __webpack_require__(7);

var _SlideControllerComponent2 = _interopRequireDefault(_SlideControllerComponent);

var _RenderSlideHitareaComponent = __webpack_require__(6);

var _RenderSlideHitareaComponent2 = _interopRequireDefault(_RenderSlideHitareaComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

exports.default = function () {
    _grimoirejs2.default.register(function () {
        return __awaiter(undefined, void 0, void 0, regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _grimoirejs2.default.registerComponent("RenderSlide", _RenderSlideComponent2.default);
                            _grimoirejs2.default.registerComponent("RenderSlideHitarea", _RenderSlideHitareaComponent2.default);
                            _grimoirejs2.default.registerComponent("Slide", _SlideComponent2.default);
                            _grimoirejs2.default.registerComponent("SlideController", _SlideControllerComponent2.default);
                            _grimoirejs2.default.registerNode("render-slide", ["RenderSlide"]);
                            _grimoirejs2.default.registerNode("scene-slide", ["Slide"], {}, "fundamental.scene");

                        case 6:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));
    });
};

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(18);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(20)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/stylus-loader/index.js!./index.styl", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/stylus-loader/index.js!./index.styl");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)(undefined);
// imports


// module
exports.push([module.i, ".slide-container {\n  position: fixed;\n  left: 0px;\n  right: 0px;\n  top: 0px;\n  bottom: 0px;\n  overflow: scroll;\n}\n.markdown-container {\n  color: #fff;\n  text-shadow: 1px 1px 2px #000;\n}\n.markdown-container h1 {\n  font-size: 5vw;\n}\n.markdown-container li {\n  font-size: 2vw;\n  margin: 10px 0px;\n}\n.markdown-container strong {\n  color: #ff0;\n  text-shadow: 1px 1px 2px #000;\n}\n.slide-md-container {\n  margin: 3vw;\n}\n.slide-md-container h1 {\n  margin: 0px;\n  font-size: 6vw;\n}\n.slide-md-container li {\n  margin-left: 3vw;\n  margin-bottom: 2vh;\n  font-size: 3vw;\n}\n.title-markdown p {\n  font-size: 3vw;\n}\n.stat-image {\n  width: 40vw !important;\n}\nimg[alt=\"big-image\"] {\n  height: 50vh;\n}\nhtml,\nbody {\n  margin: 0px;\n  padding: 0px;\n  height: 100%;\n  background-color: #000;\n}\n#canvas-container {\n  position: absolute;\n  left: 0px;\n  right: 0px;\n  top: 0px;\n  bottom: 0px;\n}\n#model-source {\n  display: flex;\n  justify-content: space-around;\n  flex-direction: column;\n  height: 100%;\n}\n#editor-root {\n  z-index: 10;\n  position: absolute;\n  left: 0px;\n  right: 0px;\n  top: 0px;\n  bottom: 0px;\n  pointer-events: none;\n}\n#editor-root .single-editor-container-outer {\n  position: absolute;\n  top: 5%;\n  bottom: 5%;\n  left: 10%;\n  right: 10%;\n  pointer-events: all;\n}\n#editor-root .single-editor-container {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  opacity: 0.3;\n}\n#editor-root .single-editor-container:hover {\n  opacity: 0.9;\n}\n#editor-root .actual-editor-container {\n  flex: 1;\n}\n#editor-root .button-container {\n  display: flex;\n  justify-content: flex-end;\n}\n#editor-root .button-container .button-inner-container {\n  width: 120px;\n  text-align: center;\n  border: 4px #f00 solid;\n}\n#editor-root .button-container .button-inner-container:hover {\n  background-color: rgba(255,255,255,0.8);\n  cursor: pointer;\n}\n#editor-root .button-container .button-inner-container p {\n  color: #f00;\n  font-weight: 600;\n}\ndiv#paragraph-root {\n  pointer-events: none;\n  position: absolute;\n  z-index: 10;\n  left: 0px;\n  right: 0px;\n  top: 0px;\n  bottom: 0px;\n}\n#intro-container {\n  position: absolute;\n  left: 0px;\n  right: 0px;\n  top: 0px;\n  bottom: 0px;\n  display: flex;\n}\n#intro-container>div {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n#intro-container .intro-inner {\n  background-color: rgba(255,255,255,0.08);\n  margin: 0 auto;\n  padding: 3vh 5vw;\n}\n#intro-container .intro-inner>img {\n  width: 30%;\n  margin: 30px auto;\n  display: block;\n}\n#intro-container .intro-inner>p {\n  text-align: center;\n  font-size: 2em;\n  color: #fff;\n  text-shadow: 1px 1px 2px #000;\n}\n.title-text {\n  color: #9c8c69;\n  font-size: 36px;\n  text-align: center;\n  bottom: 120px;\n  position: absolute;\n  left: 0px;\n  right: 0px;\n}\n.align-right {\n  text-align: right;\n}\n.vertical-center {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  position: absolute;\n  left: 0px;\n  right: 0px;\n  top: 0px;\n  bottom: 0px;\n  text-align: center;\n}\n.center-text {\n  font-size: 7em;\n  color: #fff;\n  text-shadow: 1px 1px 2px #000;\n  opacity: 0.7;\n}\n.center-text-black {\n  font-size: 7em;\n  color: #000;\n  text-shadow: 1px 1px 2px #000;\n  opacity: 0.7;\n}\n.fullscreen-video {\n  width: 100%;\n  height: 100%;\n}\n.fullscreen-container {\n  position: absolute;\n  left: 0px;\n  right: 0px;\n  top: 0px;\n  bottom: 0px;\n}\n.describe-logo {\n  width: 512px;\n  margin: 0 auto;\n}\n.describe-container {\n  display: flex;\n  position: absolute;\n  left: 0px;\n  right: 0px;\n  top: 0px;\n  bottom: 0px;\n  justify-content: space-between;\n}\n.describe-container .describe-inner-container {\n  display: flex;\n  flex-direction: column;\n  width: 33%;\n  text-align: center;\n  padding: 50px 0px 0px 0px;\n}\n.describe-container .describe-inner-container.bottom-align {\n  flex-direction: column-reverse;\n  padding: 0px 0px 50px 0px;\n}\n.describe-container .describe-inner-container img {\n  width: 40%;\n}\n.future-container>div {\n  margin: 0 auto;\n}\n.future-container img {\n  position: absolute;\n  width: 512px;\n  margin: 0 auto;\n  display: block;\n  transform: translate(-50%, -50%);\n}\n.future-container img.bigger {\n  width: 60%;\n}\n.fusion-root {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0px;\n  right: 0px;\n  top: 0px;\n  bottom: 0px;\n}\n.fusion-root .logo-root {\n  position: absolute;\n  right: 0px;\n  left: 0px;\n  top: 0px;\n  bottom: 0px;\n}\n.fusion-root .logo-root .logo-inner {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n}\n.fusion-root .fusion-logo {\n  width: 350px;\n  height: 350px;\n}\n.fusion-root .fusion-subtitle {\n  color: #000;\n  text-shadow: 0 1px 3px #fff;\n  font-size: 45px;\n}\n.fusion-root .fusion-root-child {\n  width: 50%;\n  height: 100%;\n  padding: 20px;\n}\n.fusion-root .fusion-root-child img {\n  width: 350px;\n}\n.medium {\n  font-size: 5em;\n}\n", ""]);

// exports


/***/ }),
/* 19 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(21);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 21 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _ContainerComponent2 = __webpack_require__(0);

var _ContainerComponent3 = _interopRequireDefault(_ContainerComponent2);

var _marked = __webpack_require__(23);

var _SlideComponent = __webpack_require__(25);

var _SlideComponent2 = _interopRequireDefault(_SlideComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImageComponent = function (_ContainerComponent) {
    _inherits(ImageComponent, _ContainerComponent);

    function ImageComponent() {
        _classCallCheck(this, ImageComponent);

        var _this = _possibleConstructorReturn(this, (ImageComponent.__proto__ || Object.getPrototypeOf(ImageComponent)).apply(this, arguments));

        _this.currentIndex = -1;
        return _this;
    }

    _createClass(ImageComponent, [{
        key: "$mount",
        value: function $mount() {
            var _this2 = this;

            _get(ImageComponent.prototype.__proto__ || Object.getPrototypeOf(ImageComponent.prototype), "$mount", this).call(this);
            var div = this.targetElement;
            var xhr = new XMLHttpRequest();
            xhr.onload = function () {
                var md = (0, _marked.parse)(xhr.responseText);
                var splitted = md.split("<h1");
                console.log(splitted);
                splitted = splitted.filter(function (s) {
                    return s.length > 0;
                }).map(function (s) {
                    return "<h1" + s;
                });
                console.log(splitted);
                _this2.parsedMarkedowns = splitted;
                if (_this2.getAttribute("reflectBuildCount")) {
                    var slide = _this2.node.getComponentInAncestor(_SlideComponent2.default);
                    slide.setAttribute("build", _this2.getAttribute("inBuild") + splitted.length);
                    if (_this2.currentIndex !== -1) {
                        _this2._updateIndex(_this2.currentIndex);
                    }
                }
            };
            xhr.open("GET", this.getAttribute("src"), false);
            xhr.send();
        }
    }, {
        key: "$buildStart",
        value: function $buildStart(buildIndex) {
            _get(ImageComponent.prototype.__proto__ || Object.getPrototypeOf(ImageComponent.prototype), "$buildStart", this).call(this, buildIndex);
            this._updateIndex(buildIndex);
        }
    }, {
        key: "generateTag",
        value: function generateTag() {
            return document.createElement("div");
        }
    }, {
        key: "_updateIndex",
        value: function _updateIndex(index) {
            this.currentIndex = index;
            var mdIndex = index - this.getAttribute("inBuild");
            this.targetElement.innerHTML = this.parsedMarkedowns[mdIndex] || "";
            var h1s = this.targetElement.getElementsByTagName("h1");
            for (var i = 0; i < h1s.length; i++) {
                var h1 = h1s.item(i);
                if (h1.innerText === "SKIP") {
                    h1.style.display = "none";
                }
            }
        }
    }, {
        key: "defaultClasses",
        get: function get() {
            return ["markdown-container"];
        }
    }]);

    return ImageComponent;
}(_ContainerComponent3.default);

exports.default = ImageComponent;

ImageComponent.attributes = {
    src: {
        default: "",
        converter: "String"
    },
    inBuild: {
        converter: "Number",
        default: 0
    },
    outBuild: {
        converter: "Number",
        default: Number.MAX_SAFE_INTEGER
    },
    reflectBuildCount: {
        converter: "Boolean",
        default: true
    },
    defaultContainer: {
        converter: "String",
        default: "div#paragraph-root"
    }
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * marked - a markdown parser
 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/chjj/marked
 */

;(function() {

/**
 * Block-Level Grammar
 */

var block = {
  newline: /^\n+/,
  code: /^( {4}[^\n]+\n*)+/,
  fences: noop,
  hr: /^( *[-*_]){3,} *(?:\n+|$)/,
  heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
  nptable: noop,
  lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
  blockquote: /^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,
  list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
  html: /^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,
  table: noop,
  paragraph: /^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,
  text: /^[^\n]+/
};

block.bullet = /(?:[*+-]|\d+\.)/;
block.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/;
block.item = replace(block.item, 'gm')
  (/bull/g, block.bullet)
  ();

block.list = replace(block.list)
  (/bull/g, block.bullet)
  ('hr', '\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))')
  ('def', '\\n+(?=' + block.def.source + ')')
  ();

block.blockquote = replace(block.blockquote)
  ('def', block.def)
  ();

block._tag = '(?!(?:'
  + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code'
  + '|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo'
  + '|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b';

block.html = replace(block.html)
  ('comment', /<!--[\s\S]*?-->/)
  ('closed', /<(tag)[\s\S]+?<\/\1>/)
  ('closing', /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)
  (/tag/g, block._tag)
  ();

block.paragraph = replace(block.paragraph)
  ('hr', block.hr)
  ('heading', block.heading)
  ('lheading', block.lheading)
  ('blockquote', block.blockquote)
  ('tag', '<' + block._tag)
  ('def', block.def)
  ();

/**
 * Normal Block Grammar
 */

block.normal = merge({}, block);

/**
 * GFM Block Grammar
 */

block.gfm = merge({}, block.normal, {
  fences: /^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,
  paragraph: /^/,
  heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
});

block.gfm.paragraph = replace(block.paragraph)
  ('(?!', '(?!'
    + block.gfm.fences.source.replace('\\1', '\\2') + '|'
    + block.list.source.replace('\\1', '\\3') + '|')
  ();

/**
 * GFM + Tables Block Grammar
 */

block.tables = merge({}, block.gfm, {
  nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
  table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
});

/**
 * Block Lexer
 */

function Lexer(options) {
  this.tokens = [];
  this.tokens.links = {};
  this.options = options || marked.defaults;
  this.rules = block.normal;

  if (this.options.gfm) {
    if (this.options.tables) {
      this.rules = block.tables;
    } else {
      this.rules = block.gfm;
    }
  }
}

/**
 * Expose Block Rules
 */

Lexer.rules = block;

/**
 * Static Lex Method
 */

Lexer.lex = function(src, options) {
  var lexer = new Lexer(options);
  return lexer.lex(src);
};

/**
 * Preprocessing
 */

Lexer.prototype.lex = function(src) {
  src = src
    .replace(/\r\n|\r/g, '\n')
    .replace(/\t/g, '    ')
    .replace(/\u00a0/g, ' ')
    .replace(/\u2424/g, '\n');

  return this.token(src, true);
};

/**
 * Lexing
 */

Lexer.prototype.token = function(src, top, bq) {
  var src = src.replace(/^ +$/gm, '')
    , next
    , loose
    , cap
    , bull
    , b
    , item
    , space
    , i
    , l;

  while (src) {
    // newline
    if (cap = this.rules.newline.exec(src)) {
      src = src.substring(cap[0].length);
      if (cap[0].length > 1) {
        this.tokens.push({
          type: 'space'
        });
      }
    }

    // code
    if (cap = this.rules.code.exec(src)) {
      src = src.substring(cap[0].length);
      cap = cap[0].replace(/^ {4}/gm, '');
      this.tokens.push({
        type: 'code',
        text: !this.options.pedantic
          ? cap.replace(/\n+$/, '')
          : cap
      });
      continue;
    }

    // fences (gfm)
    if (cap = this.rules.fences.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'code',
        lang: cap[2],
        text: cap[3] || ''
      });
      continue;
    }

    // heading
    if (cap = this.rules.heading.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'heading',
        depth: cap[1].length,
        text: cap[2]
      });
      continue;
    }

    // table no leading pipe (gfm)
    if (top && (cap = this.rules.nptable.exec(src))) {
      src = src.substring(cap[0].length);

      item = {
        type: 'table',
        header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
        cells: cap[3].replace(/\n$/, '').split('\n')
      };

      for (i = 0; i < item.align.length; i++) {
        if (/^ *-+: *$/.test(item.align[i])) {
          item.align[i] = 'right';
        } else if (/^ *:-+: *$/.test(item.align[i])) {
          item.align[i] = 'center';
        } else if (/^ *:-+ *$/.test(item.align[i])) {
          item.align[i] = 'left';
        } else {
          item.align[i] = null;
        }
      }

      for (i = 0; i < item.cells.length; i++) {
        item.cells[i] = item.cells[i].split(/ *\| */);
      }

      this.tokens.push(item);

      continue;
    }

    // lheading
    if (cap = this.rules.lheading.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'heading',
        depth: cap[2] === '=' ? 1 : 2,
        text: cap[1]
      });
      continue;
    }

    // hr
    if (cap = this.rules.hr.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'hr'
      });
      continue;
    }

    // blockquote
    if (cap = this.rules.blockquote.exec(src)) {
      src = src.substring(cap[0].length);

      this.tokens.push({
        type: 'blockquote_start'
      });

      cap = cap[0].replace(/^ *> ?/gm, '');

      // Pass `top` to keep the current
      // "toplevel" state. This is exactly
      // how markdown.pl works.
      this.token(cap, top, true);

      this.tokens.push({
        type: 'blockquote_end'
      });

      continue;
    }

    // list
    if (cap = this.rules.list.exec(src)) {
      src = src.substring(cap[0].length);
      bull = cap[2];

      this.tokens.push({
        type: 'list_start',
        ordered: bull.length > 1
      });

      // Get each top-level item.
      cap = cap[0].match(this.rules.item);

      next = false;
      l = cap.length;
      i = 0;

      for (; i < l; i++) {
        item = cap[i];

        // Remove the list item's bullet
        // so it is seen as the next token.
        space = item.length;
        item = item.replace(/^ *([*+-]|\d+\.) +/, '');

        // Outdent whatever the
        // list item contains. Hacky.
        if (~item.indexOf('\n ')) {
          space -= item.length;
          item = !this.options.pedantic
            ? item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '')
            : item.replace(/^ {1,4}/gm, '');
        }

        // Determine whether the next list item belongs here.
        // Backpedal if it does not belong in this list.
        if (this.options.smartLists && i !== l - 1) {
          b = block.bullet.exec(cap[i + 1])[0];
          if (bull !== b && !(bull.length > 1 && b.length > 1)) {
            src = cap.slice(i + 1).join('\n') + src;
            i = l - 1;
          }
        }

        // Determine whether item is loose or not.
        // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
        // for discount behavior.
        loose = next || /\n\n(?!\s*$)/.test(item);
        if (i !== l - 1) {
          next = item.charAt(item.length - 1) === '\n';
          if (!loose) loose = next;
        }

        this.tokens.push({
          type: loose
            ? 'loose_item_start'
            : 'list_item_start'
        });

        // Recurse.
        this.token(item, false, bq);

        this.tokens.push({
          type: 'list_item_end'
        });
      }

      this.tokens.push({
        type: 'list_end'
      });

      continue;
    }

    // html
    if (cap = this.rules.html.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: this.options.sanitize
          ? 'paragraph'
          : 'html',
        pre: !this.options.sanitizer
          && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
        text: cap[0]
      });
      continue;
    }

    // def
    if ((!bq && top) && (cap = this.rules.def.exec(src))) {
      src = src.substring(cap[0].length);
      this.tokens.links[cap[1].toLowerCase()] = {
        href: cap[2],
        title: cap[3]
      };
      continue;
    }

    // table (gfm)
    if (top && (cap = this.rules.table.exec(src))) {
      src = src.substring(cap[0].length);

      item = {
        type: 'table',
        header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
        cells: cap[3].replace(/(?: *\| *)?\n$/, '').split('\n')
      };

      for (i = 0; i < item.align.length; i++) {
        if (/^ *-+: *$/.test(item.align[i])) {
          item.align[i] = 'right';
        } else if (/^ *:-+: *$/.test(item.align[i])) {
          item.align[i] = 'center';
        } else if (/^ *:-+ *$/.test(item.align[i])) {
          item.align[i] = 'left';
        } else {
          item.align[i] = null;
        }
      }

      for (i = 0; i < item.cells.length; i++) {
        item.cells[i] = item.cells[i]
          .replace(/^ *\| *| *\| *$/g, '')
          .split(/ *\| */);
      }

      this.tokens.push(item);

      continue;
    }

    // top-level paragraph
    if (top && (cap = this.rules.paragraph.exec(src))) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'paragraph',
        text: cap[1].charAt(cap[1].length - 1) === '\n'
          ? cap[1].slice(0, -1)
          : cap[1]
      });
      continue;
    }

    // text
    if (cap = this.rules.text.exec(src)) {
      // Top-level should never reach here.
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'text',
        text: cap[0]
      });
      continue;
    }

    if (src) {
      throw new
        Error('Infinite loop on byte: ' + src.charCodeAt(0));
    }
  }

  return this.tokens;
};

/**
 * Inline-Level Grammar
 */

var inline = {
  escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
  autolink: /^<([^ >]+(@|:\/)[^ >]+)>/,
  url: noop,
  tag: /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,
  link: /^!?\[(inside)\]\(href\)/,
  reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
  nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,
  strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
  em: /^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
  code: /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
  br: /^ {2,}\n(?!\s*$)/,
  del: noop,
  text: /^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/
};

inline._inside = /(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/;
inline._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/;

inline.link = replace(inline.link)
  ('inside', inline._inside)
  ('href', inline._href)
  ();

inline.reflink = replace(inline.reflink)
  ('inside', inline._inside)
  ();

/**
 * Normal Inline Grammar
 */

inline.normal = merge({}, inline);

/**
 * Pedantic Inline Grammar
 */

inline.pedantic = merge({}, inline.normal, {
  strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
  em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
});

/**
 * GFM Inline Grammar
 */

inline.gfm = merge({}, inline.normal, {
  escape: replace(inline.escape)('])', '~|])')(),
  url: /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
  del: /^~~(?=\S)([\s\S]*?\S)~~/,
  text: replace(inline.text)
    (']|', '~]|')
    ('|', '|https?://|')
    ()
});

/**
 * GFM + Line Breaks Inline Grammar
 */

inline.breaks = merge({}, inline.gfm, {
  br: replace(inline.br)('{2,}', '*')(),
  text: replace(inline.gfm.text)('{2,}', '*')()
});

/**
 * Inline Lexer & Compiler
 */

function InlineLexer(links, options) {
  this.options = options || marked.defaults;
  this.links = links;
  this.rules = inline.normal;
  this.renderer = this.options.renderer || new Renderer;
  this.renderer.options = this.options;

  if (!this.links) {
    throw new
      Error('Tokens array requires a `links` property.');
  }

  if (this.options.gfm) {
    if (this.options.breaks) {
      this.rules = inline.breaks;
    } else {
      this.rules = inline.gfm;
    }
  } else if (this.options.pedantic) {
    this.rules = inline.pedantic;
  }
}

/**
 * Expose Inline Rules
 */

InlineLexer.rules = inline;

/**
 * Static Lexing/Compiling Method
 */

InlineLexer.output = function(src, links, options) {
  var inline = new InlineLexer(links, options);
  return inline.output(src);
};

/**
 * Lexing/Compiling
 */

InlineLexer.prototype.output = function(src) {
  var out = ''
    , link
    , text
    , href
    , cap;

  while (src) {
    // escape
    if (cap = this.rules.escape.exec(src)) {
      src = src.substring(cap[0].length);
      out += cap[1];
      continue;
    }

    // autolink
    if (cap = this.rules.autolink.exec(src)) {
      src = src.substring(cap[0].length);
      if (cap[2] === '@') {
        text = cap[1].charAt(6) === ':'
          ? this.mangle(cap[1].substring(7))
          : this.mangle(cap[1]);
        href = this.mangle('mailto:') + text;
      } else {
        text = escape(cap[1]);
        href = text;
      }
      out += this.renderer.link(href, null, text);
      continue;
    }

    // url (gfm)
    if (!this.inLink && (cap = this.rules.url.exec(src))) {
      src = src.substring(cap[0].length);
      text = escape(cap[1]);
      href = text;
      out += this.renderer.link(href, null, text);
      continue;
    }

    // tag
    if (cap = this.rules.tag.exec(src)) {
      if (!this.inLink && /^<a /i.test(cap[0])) {
        this.inLink = true;
      } else if (this.inLink && /^<\/a>/i.test(cap[0])) {
        this.inLink = false;
      }
      src = src.substring(cap[0].length);
      out += this.options.sanitize
        ? this.options.sanitizer
          ? this.options.sanitizer(cap[0])
          : escape(cap[0])
        : cap[0]
      continue;
    }

    // link
    if (cap = this.rules.link.exec(src)) {
      src = src.substring(cap[0].length);
      this.inLink = true;
      out += this.outputLink(cap, {
        href: cap[2],
        title: cap[3]
      });
      this.inLink = false;
      continue;
    }

    // reflink, nolink
    if ((cap = this.rules.reflink.exec(src))
        || (cap = this.rules.nolink.exec(src))) {
      src = src.substring(cap[0].length);
      link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
      link = this.links[link.toLowerCase()];
      if (!link || !link.href) {
        out += cap[0].charAt(0);
        src = cap[0].substring(1) + src;
        continue;
      }
      this.inLink = true;
      out += this.outputLink(cap, link);
      this.inLink = false;
      continue;
    }

    // strong
    if (cap = this.rules.strong.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.strong(this.output(cap[2] || cap[1]));
      continue;
    }

    // em
    if (cap = this.rules.em.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.em(this.output(cap[2] || cap[1]));
      continue;
    }

    // code
    if (cap = this.rules.code.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.codespan(escape(cap[2], true));
      continue;
    }

    // br
    if (cap = this.rules.br.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.br();
      continue;
    }

    // del (gfm)
    if (cap = this.rules.del.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.del(this.output(cap[1]));
      continue;
    }

    // text
    if (cap = this.rules.text.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.text(escape(this.smartypants(cap[0])));
      continue;
    }

    if (src) {
      throw new
        Error('Infinite loop on byte: ' + src.charCodeAt(0));
    }
  }

  return out;
};

/**
 * Compile Link
 */

InlineLexer.prototype.outputLink = function(cap, link) {
  var href = escape(link.href)
    , title = link.title ? escape(link.title) : null;

  return cap[0].charAt(0) !== '!'
    ? this.renderer.link(href, title, this.output(cap[1]))
    : this.renderer.image(href, title, escape(cap[1]));
};

/**
 * Smartypants Transformations
 */

InlineLexer.prototype.smartypants = function(text) {
  if (!this.options.smartypants) return text;
  return text
    // em-dashes
    .replace(/---/g, '\u2014')
    // en-dashes
    .replace(/--/g, '\u2013')
    // opening singles
    .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018')
    // closing singles & apostrophes
    .replace(/'/g, '\u2019')
    // opening doubles
    .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201c')
    // closing doubles
    .replace(/"/g, '\u201d')
    // ellipses
    .replace(/\.{3}/g, '\u2026');
};

/**
 * Mangle Links
 */

InlineLexer.prototype.mangle = function(text) {
  if (!this.options.mangle) return text;
  var out = ''
    , l = text.length
    , i = 0
    , ch;

  for (; i < l; i++) {
    ch = text.charCodeAt(i);
    if (Math.random() > 0.5) {
      ch = 'x' + ch.toString(16);
    }
    out += '&#' + ch + ';';
  }

  return out;
};

/**
 * Renderer
 */

function Renderer(options) {
  this.options = options || {};
}

Renderer.prototype.code = function(code, lang, escaped) {
  if (this.options.highlight) {
    var out = this.options.highlight(code, lang);
    if (out != null && out !== code) {
      escaped = true;
      code = out;
    }
  }

  if (!lang) {
    return '<pre><code>'
      + (escaped ? code : escape(code, true))
      + '\n</code></pre>';
  }

  return '<pre><code class="'
    + this.options.langPrefix
    + escape(lang, true)
    + '">'
    + (escaped ? code : escape(code, true))
    + '\n</code></pre>\n';
};

Renderer.prototype.blockquote = function(quote) {
  return '<blockquote>\n' + quote + '</blockquote>\n';
};

Renderer.prototype.html = function(html) {
  return html;
};

Renderer.prototype.heading = function(text, level, raw) {
  return '<h'
    + level
    + ' id="'
    + this.options.headerPrefix
    + raw.toLowerCase().replace(/[^\w]+/g, '-')
    + '">'
    + text
    + '</h'
    + level
    + '>\n';
};

Renderer.prototype.hr = function() {
  return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
};

Renderer.prototype.list = function(body, ordered) {
  var type = ordered ? 'ol' : 'ul';
  return '<' + type + '>\n' + body + '</' + type + '>\n';
};

Renderer.prototype.listitem = function(text) {
  return '<li>' + text + '</li>\n';
};

Renderer.prototype.paragraph = function(text) {
  return '<p>' + text + '</p>\n';
};

Renderer.prototype.table = function(header, body) {
  return '<table>\n'
    + '<thead>\n'
    + header
    + '</thead>\n'
    + '<tbody>\n'
    + body
    + '</tbody>\n'
    + '</table>\n';
};

Renderer.prototype.tablerow = function(content) {
  return '<tr>\n' + content + '</tr>\n';
};

Renderer.prototype.tablecell = function(content, flags) {
  var type = flags.header ? 'th' : 'td';
  var tag = flags.align
    ? '<' + type + ' style="text-align:' + flags.align + '">'
    : '<' + type + '>';
  return tag + content + '</' + type + '>\n';
};

// span level renderer
Renderer.prototype.strong = function(text) {
  return '<strong>' + text + '</strong>';
};

Renderer.prototype.em = function(text) {
  return '<em>' + text + '</em>';
};

Renderer.prototype.codespan = function(text) {
  return '<code>' + text + '</code>';
};

Renderer.prototype.br = function() {
  return this.options.xhtml ? '<br/>' : '<br>';
};

Renderer.prototype.del = function(text) {
  return '<del>' + text + '</del>';
};

Renderer.prototype.link = function(href, title, text) {
  if (this.options.sanitize) {
    try {
      var prot = decodeURIComponent(unescape(href))
        .replace(/[^\w:]/g, '')
        .toLowerCase();
    } catch (e) {
      return '';
    }
    if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0) {
      return '';
    }
  }
  var out = '<a href="' + href + '"';
  if (title) {
    out += ' title="' + title + '"';
  }
  out += '>' + text + '</a>';
  return out;
};

Renderer.prototype.image = function(href, title, text) {
  var out = '<img src="' + href + '" alt="' + text + '"';
  if (title) {
    out += ' title="' + title + '"';
  }
  out += this.options.xhtml ? '/>' : '>';
  return out;
};

Renderer.prototype.text = function(text) {
  return text;
};

/**
 * Parsing & Compiling
 */

function Parser(options) {
  this.tokens = [];
  this.token = null;
  this.options = options || marked.defaults;
  this.options.renderer = this.options.renderer || new Renderer;
  this.renderer = this.options.renderer;
  this.renderer.options = this.options;
}

/**
 * Static Parse Method
 */

Parser.parse = function(src, options, renderer) {
  var parser = new Parser(options, renderer);
  return parser.parse(src);
};

/**
 * Parse Loop
 */

Parser.prototype.parse = function(src) {
  this.inline = new InlineLexer(src.links, this.options, this.renderer);
  this.tokens = src.reverse();

  var out = '';
  while (this.next()) {
    out += this.tok();
  }

  return out;
};

/**
 * Next Token
 */

Parser.prototype.next = function() {
  return this.token = this.tokens.pop();
};

/**
 * Preview Next Token
 */

Parser.prototype.peek = function() {
  return this.tokens[this.tokens.length - 1] || 0;
};

/**
 * Parse Text Tokens
 */

Parser.prototype.parseText = function() {
  var body = this.token.text;

  while (this.peek().type === 'text') {
    body += '\n' + this.next().text;
  }

  return this.inline.output(body);
};

/**
 * Parse Current Token
 */

Parser.prototype.tok = function() {
  switch (this.token.type) {
    case 'space': {
      return '';
    }
    case 'hr': {
      return this.renderer.hr();
    }
    case 'heading': {
      return this.renderer.heading(
        this.inline.output(this.token.text),
        this.token.depth,
        this.token.text);
    }
    case 'code': {
      return this.renderer.code(this.token.text,
        this.token.lang,
        this.token.escaped);
    }
    case 'table': {
      var header = ''
        , body = ''
        , i
        , row
        , cell
        , flags
        , j;

      // header
      cell = '';
      for (i = 0; i < this.token.header.length; i++) {
        flags = { header: true, align: this.token.align[i] };
        cell += this.renderer.tablecell(
          this.inline.output(this.token.header[i]),
          { header: true, align: this.token.align[i] }
        );
      }
      header += this.renderer.tablerow(cell);

      for (i = 0; i < this.token.cells.length; i++) {
        row = this.token.cells[i];

        cell = '';
        for (j = 0; j < row.length; j++) {
          cell += this.renderer.tablecell(
            this.inline.output(row[j]),
            { header: false, align: this.token.align[j] }
          );
        }

        body += this.renderer.tablerow(cell);
      }
      return this.renderer.table(header, body);
    }
    case 'blockquote_start': {
      var body = '';

      while (this.next().type !== 'blockquote_end') {
        body += this.tok();
      }

      return this.renderer.blockquote(body);
    }
    case 'list_start': {
      var body = ''
        , ordered = this.token.ordered;

      while (this.next().type !== 'list_end') {
        body += this.tok();
      }

      return this.renderer.list(body, ordered);
    }
    case 'list_item_start': {
      var body = '';

      while (this.next().type !== 'list_item_end') {
        body += this.token.type === 'text'
          ? this.parseText()
          : this.tok();
      }

      return this.renderer.listitem(body);
    }
    case 'loose_item_start': {
      var body = '';

      while (this.next().type !== 'list_item_end') {
        body += this.tok();
      }

      return this.renderer.listitem(body);
    }
    case 'html': {
      var html = !this.token.pre && !this.options.pedantic
        ? this.inline.output(this.token.text)
        : this.token.text;
      return this.renderer.html(html);
    }
    case 'paragraph': {
      return this.renderer.paragraph(this.inline.output(this.token.text));
    }
    case 'text': {
      return this.renderer.paragraph(this.parseText());
    }
  }
};

/**
 * Helpers
 */

function escape(html, encode) {
  return html
    .replace(!encode ? /&(?!#?\w+;)/g : /&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function unescape(html) {
	// explicitly match decimal, hex, and named HTML entities 
  return html.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/g, function(_, n) {
    n = n.toLowerCase();
    if (n === 'colon') return ':';
    if (n.charAt(0) === '#') {
      return n.charAt(1) === 'x'
        ? String.fromCharCode(parseInt(n.substring(2), 16))
        : String.fromCharCode(+n.substring(1));
    }
    return '';
  });
}

function replace(regex, opt) {
  regex = regex.source;
  opt = opt || '';
  return function self(name, val) {
    if (!name) return new RegExp(regex, opt);
    val = val.source || val;
    val = val.replace(/(^|[^\[])\^/g, '$1');
    regex = regex.replace(name, val);
    return self;
  };
}

function noop() {}
noop.exec = noop;

function merge(obj) {
  var i = 1
    , target
    , key;

  for (; i < arguments.length; i++) {
    target = arguments[i];
    for (key in target) {
      if (Object.prototype.hasOwnProperty.call(target, key)) {
        obj[key] = target[key];
      }
    }
  }

  return obj;
}


/**
 * Marked
 */

function marked(src, opt, callback) {
  if (callback || typeof opt === 'function') {
    if (!callback) {
      callback = opt;
      opt = null;
    }

    opt = merge({}, marked.defaults, opt || {});

    var highlight = opt.highlight
      , tokens
      , pending
      , i = 0;

    try {
      tokens = Lexer.lex(src, opt)
    } catch (e) {
      return callback(e);
    }

    pending = tokens.length;

    var done = function(err) {
      if (err) {
        opt.highlight = highlight;
        return callback(err);
      }

      var out;

      try {
        out = Parser.parse(tokens, opt);
      } catch (e) {
        err = e;
      }

      opt.highlight = highlight;

      return err
        ? callback(err)
        : callback(null, out);
    };

    if (!highlight || highlight.length < 3) {
      return done();
    }

    delete opt.highlight;

    if (!pending) return done();

    for (; i < tokens.length; i++) {
      (function(token) {
        if (token.type !== 'code') {
          return --pending || done();
        }
        return highlight(token.text, token.lang, function(err, code) {
          if (err) return done(err);
          if (code == null || code === token.text) {
            return --pending || done();
          }
          token.text = code;
          token.escaped = true;
          --pending || done();
        });
      })(tokens[i]);
    }

    return;
  }
  try {
    if (opt) opt = merge({}, marked.defaults, opt);
    return Parser.parse(Lexer.lex(src, opt), opt);
  } catch (e) {
    e.message += '\nPlease report this to https://github.com/chjj/marked.';
    if ((opt || marked.defaults).silent) {
      return '<p>An error occured:</p><pre>'
        + escape(e.message + '', true)
        + '</pre>';
    }
    throw e;
  }
}

/**
 * Options
 */

marked.options =
marked.setOptions = function(opt) {
  merge(marked.defaults, opt);
  return marked;
};

marked.defaults = {
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  sanitizer: null,
  mangle: true,
  smartLists: false,
  silent: false,
  highlight: null,
  langPrefix: 'lang-',
  smartypants: false,
  headerPrefix: '',
  renderer: new Renderer,
  xhtml: false
};

/**
 * Expose
 */

marked.Parser = Parser;
marked.parser = Parser.parse;

marked.Renderer = Renderer;

marked.Lexer = Lexer;
marked.lexer = Lexer.lex;

marked.InlineLexer = InlineLexer;
marked.inlineLexer = InlineLexer.output;

marked.parse = marked;

if (true) {
  module.exports = marked;
} else if (typeof define === 'function' && define.amd) {
  define(function() { return marked; });
} else {
  this.marked = marked;
}

}).call(function() {
  return this || (typeof window !== 'undefined' ? window : global);
}());

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(24)))

/***/ }),
/* 24 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 25 */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value: true});
exports.default=window.GrimoireJS&&window.GrimoireJS.lib.slide_system?window.GrimoireJS.lib.slide_system.Components.SlideComponent:undefined;


/***/ })
/******/ ]);
});
//# sourceMappingURL=grimoire-sc-slide.js.map