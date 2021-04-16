"use strict";
exports.__esModule = true;
exports.NavLink = void 0;
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
exports.NavLink = function (_a) {
    var text = _a.text, to = _a.to;
    return (React.createElement(React.Fragment, null,
        React.createElement("li", { id: "mobile-nav" },
            React.createElement(react_router_dom_1.Link, { to: to, className: "nav-link" }, text))));
};
exports["default"] = exports.NavLink;
