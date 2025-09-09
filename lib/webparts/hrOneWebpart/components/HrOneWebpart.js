import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import styles from './HrOneWebpart.module.scss';
var tiles = [
    { title: 'Our DNA', description: 'Values that drive our journey.', bg: '#D9F0EA' },
    { title: 'Newsroom', description: 'Latest updates and news.', bg: '#FCE8E3' },
    { title: 'Contact Us', description: 'Get in touch with HROne.', bg: '#FFF1C6' },
    { title: 'Partners', description: 'Partner with HROne.', bg: '#EEDCFA' },
    { title: 'Life@HROne', description: 'Culture & careers.', bg: '#E7F1EC' },
    { title: 'Leadership', description: 'Meet our leadership team.', bg: '#F7D4D2' }
];
var HrOneWebpart = function (props) {
    var _a = useState(false), open = _a[0], setOpen = _a[1];
    var wrapperRef = useRef(null);
    useEffect(function () {
        var handler = function (e) {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', handler);
        return function () { return document.removeEventListener('mousedown', handler); };
    }, []);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: styles.wrapper, ref: wrapperRef },
            React.createElement("div", { className: styles.bar },
                React.createElement("div", { className: styles.barInner },
                    React.createElement("div", { className: styles.brand },
                        React.createElement("div", { className: styles.logo }, "HR"),
                        React.createElement("div", { className: styles.brandText }, "One")),
                    React.createElement("ul", { className: styles.menu, role: "menubar", "aria-label": "Main navigation" },
                        React.createElement("li", { className: styles.menuItem, onMouseEnter: function () { return setOpen(function (v) { return !v; }); }, onBlur: function () { return setOpen(false); }, "aria-haspopup": "true", "aria-expanded": open, role: "menuitem", tabIndex: 0, onKeyDown: function (e) { if (e.key === 'Enter' || e.key === ' ')
                                setOpen(function (v) { return !v; }); } },
                            "About HROne ",
                            React.createElement("span", { className: styles.caret }, "\u25BE")),
                        React.createElement("li", { className: styles.menuItem, role: "none" },
                            React.createElement("a", { role: "menuitem", "aria-label": "Products", href: "/products", className: styles.menuLink }, "Products")),
                        React.createElement("li", { className: styles.menuItem, role: "none" },
                            React.createElement("a", { role: "menuitem", "aria-label": "Pricing", href: "/pricing", className: styles.menuLink }, "Pricing")),
                        React.createElement("li", { className: styles.menuItem, role: "none" },
                            React.createElement("a", { role: "menuitem", "aria-label": "Case Study", href: "/case-study", className: styles.menuLink }, "Case Study")),
                        React.createElement("li", { className: styles.menuItem, role: "none" },
                            React.createElement("a", { role: "menuitem", "aria-label": "HR Resources", href: "/hr-resources", className: styles.menuLink }, "HR Resources"))),
                    React.createElement("div", { className: styles.spacer }),
                    React.createElement("a", { className: styles.btnOutline, href: "#", role: "button" }, "Login"),
                    React.createElement("a", { className: styles.btnPrimary, href: "#", role: "button" }, "Get Free Trial")))),
        open && (React.createElement("div", { className: styles.dropdown, role: "menu", "aria-label": "About HROne" },
            React.createElement("div", { className: styles.tiles }, tiles.map(function (t, i) { return (React.createElement("a", { key: t.title + i, className: styles.tile, href: t.href || '#', style: { backgroundColor: t.bg } },
                React.createElement("h4", null, t.title),
                React.createElement("p", null, t.description))); }))))));
};
export default HrOneWebpart;
//# sourceMappingURL=HrOneWebpart.js.map