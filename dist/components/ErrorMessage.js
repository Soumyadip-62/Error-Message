"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ErrorMessage(_ref) {
  let {
    error,
    success,
    errorStyle,
    messageStyle,
    errorClass,
    messageClass,
    autoRemoveAfter
  } = _ref;
  //  TODO: props : ['styles', 'className', 'Array?{bool}', 'AutoRemove?{bool}',]
  // console.log(
  //   error,
  //   success,
  //   errorStyle,
  //   messageStyle,
  //   errorClass,
  //   messageClass
  // );
  let errormessage = error;
  let message = success; //* if autoremove is true it will b removed from screen afetr a delay

  const [show, setshow] = (0, _react.useState)(true); // if (autoRemoveAfter) {
  //   setTimeout(() => {
  //     setshow(false)
  //   }, autoRemoveAfter);
  // }
  //* if array is true then we will map over the errors, abd nessages otherwise it will be just strings

  let isArray = true;

  if (typeof errormessage === "string") {
    isArray = false;
  } // * if there is no classname or styles the default styles will apply
  //errorMessage style :


  const errStyle = errorStyle ? errorStyle : {
    backgroundColor: "rgba(255, 0, 0, 0.3)",
    color: "#DE210B",
    marginTop: "20px",
    fontSize: "16px",
    marginBottom: "20px",
    padding: "10px",
    borderRadius: "15px",
    display: "block"
  }; //message style :

  const msgStyle = messageStyle ? messageStyle : {
    backgroundColor: "rgba(145, 191, 65)",
    color: "black",
    marginTop: "20px",
    fontSize: "16px",
    marginBottom: "20px",
    padding: "10px",
    borderRadius: "15px",
    display: "block"
  }; // classnames for success or error :

  const errClass = errorClass ? errorClass : "";
  const msgClass = messageClass ? messageClass : "";
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isArray ? errormessage.length > 0 && show ? /*#__PURE__*/_react.default.createElement("ul", {
    style: errClass ? {} : errStyle,
    className: errClass
  }, errormessage.map((error, i) => /*#__PURE__*/_react.default.createElement("p", {
    style: {
      display: "block"
    },
    key: i
  }, error))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, message && show && /*#__PURE__*/_react.default.createElement("ul", {
    style: msgClass ? {} : msgStyle,
    className: msgClass
  }, /*#__PURE__*/_react.default.createElement("p", null, message))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, errormessage.length > 0 && show ? /*#__PURE__*/_react.default.createElement("ul", {
    style: errClass ? {} : errStyle,
    className: errClass
  }, /*#__PURE__*/_react.default.createElement("p", {
    style: {
      display: "block"
    }
  }, errormessage)) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, message && show && /*#__PURE__*/_react.default.createElement("ul", {
    style: msgClass ? {} : msgStyle,
    className: msgClass
  }, /*#__PURE__*/_react.default.createElement("p", null, message)))));
}

var _default = /*#__PURE__*/_react.default.memo(ErrorMessage);

exports.default = _default;