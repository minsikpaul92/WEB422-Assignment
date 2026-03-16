(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/assignment1/node_modules/react-bootstrap/esm/ThemeProvider.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_BREAKPOINTS",
    ()=>DEFAULT_BREAKPOINTS,
    "DEFAULT_MIN_BREAKPOINT",
    ()=>DEFAULT_MIN_BREAKPOINT,
    "ThemeConsumer",
    ()=>Consumer,
    "createBootstrapComponent",
    ()=>createBootstrapComponent,
    "default",
    ()=>__TURBOPACK__default__export__,
    "useBootstrapBreakpoints",
    ()=>useBootstrapBreakpoints,
    "useBootstrapMinBreakpoint",
    ()=>useBootstrapMinBreakpoint,
    "useBootstrapPrefix",
    ()=>useBootstrapPrefix,
    "useIsRTL",
    ()=>useIsRTL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
"use client";
;
;
;
const DEFAULT_BREAKPOINTS = [
    'xxl',
    'xl',
    'lg',
    'md',
    'sm',
    'xs'
];
const DEFAULT_MIN_BREAKPOINT = 'xs';
const ThemeContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createContext"]({
    prefixes: {},
    breakpoints: DEFAULT_BREAKPOINTS,
    minBreakpoint: DEFAULT_MIN_BREAKPOINT
});
const { Consumer, Provider } = ThemeContext;
function ThemeProvider({ prefixes = {}, breakpoints = DEFAULT_BREAKPOINTS, minBreakpoint = DEFAULT_MIN_BREAKPOINT, dir, children }) {
    const contextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ThemeProvider.useMemo[contextValue]": ()=>({
                prefixes: {
                    ...prefixes
                },
                breakpoints,
                minBreakpoint,
                dir
            })
    }["ThemeProvider.useMemo[contextValue]"], [
        prefixes,
        breakpoints,
        minBreakpoint,
        dir
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(Provider, {
        value: contextValue,
        children: children
    });
}
function useBootstrapPrefix(prefix, defaultPrefix) {
    const { prefixes } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"])(ThemeContext);
    return prefix || prefixes[defaultPrefix] || defaultPrefix;
}
function useBootstrapBreakpoints() {
    const { breakpoints } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"])(ThemeContext);
    return breakpoints;
}
function useBootstrapMinBreakpoint() {
    const { minBreakpoint } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"])(ThemeContext);
    return minBreakpoint;
}
function useIsRTL() {
    const { dir } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"])(ThemeContext);
    return dir === 'rtl';
}
function createBootstrapComponent(Component, opts) {
    if (typeof opts === 'string') opts = {
        prefix: opts
    };
    const isClassy = Component.prototype && Component.prototype.isReactComponent;
    // If it's a functional component make sure we don't break it with a ref
    const { prefix, forwardRefAs = isClassy ? 'ref' : 'innerRef' } = opts;
    const Wrapped = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["forwardRef"](({ ...props }, ref)=>{
        props[forwardRefAs] = ref;
        const bsPrefix = useBootstrapPrefix(props.bsPrefix, prefix);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(Component, {
            ...props,
            bsPrefix: bsPrefix
        });
    });
    Wrapped.displayName = `Bootstrap(${Component.displayName || Component.name})`;
    return Wrapped;
}
;
const __TURBOPACK__default__export__ = ThemeProvider;
}),
"[project]/assignment1/node_modules/react-bootstrap/esm/Container.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/classnames/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react-bootstrap/esm/ThemeProvider.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
"use client";
;
;
;
;
const Container = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["forwardRef"](({ bsPrefix, fluid = false, // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = 'div', className, ...props }, ref)=>{
    const prefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useBootstrapPrefix"])(bsPrefix, 'container');
    const suffix = typeof fluid === 'string' ? `-${fluid}` : '-fluid';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(Component, {
        ref: ref,
        ...props,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(className, fluid ? `${prefix}${suffix}` : prefix)
    });
});
Container.displayName = 'Container';
const __TURBOPACK__default__export__ = Container;
}),
"[project]/assignment1/node_modules/react-bootstrap/esm/Container.js [client] (ecmascript) <export default as Container>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Container",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Container$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Container$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react-bootstrap/esm/Container.js [client] (ecmascript)");
}),
"[project]/assignment1/node_modules/react-bootstrap/esm/PageItem.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Ellipsis",
    ()=>Ellipsis,
    "First",
    ()=>First,
    "Last",
    ()=>Last,
    "Next",
    ()=>Next,
    "Prev",
    ()=>Prev,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/classnames/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f40$restart$2f$ui$2f$esm$2f$Anchor$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/@restart/ui/esm/Anchor.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
;
;
;
;
;
const PageItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["forwardRef"](({ active = false, disabled = false, className, style, activeLabel = '(current)', children, linkStyle, linkClassName, as = __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f40$restart$2f$ui$2f$esm$2f$Anchor$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], ...props }, ref)=>{
    const Component = active || disabled ? 'span' : as;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])("li", {
        ref: ref,
        style: style,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(className, 'page-item', {
            active,
            disabled
        }),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxs"])(Component, {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])('page-link', linkClassName),
            style: linkStyle,
            ...props,
            children: [
                children,
                active && activeLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                    className: "visually-hidden",
                    children: activeLabel
                })
            ]
        })
    });
});
PageItem.displayName = 'PageItem';
const __TURBOPACK__default__export__ = PageItem;
function createButton(name, defaultValue, label = name) {
    const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["forwardRef"](({ children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxs"])(PageItem, {
            ...props,
            ref: ref,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                    "aria-hidden": "true",
                    children: children || defaultValue
                }),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                    className: "visually-hidden",
                    children: label
                })
            ]
        }));
    Button.displayName = name;
    return Button;
}
const First = createButton('First', '«');
const Prev = createButton('Prev', '‹', 'Previous');
const Ellipsis = createButton('Ellipsis', '…', 'More');
const Next = createButton('Next', '›');
const Last = createButton('Last', '»');
}),
"[project]/assignment1/node_modules/react-bootstrap/esm/Pagination.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/classnames/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react-bootstrap/esm/ThemeProvider.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$PageItem$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react-bootstrap/esm/PageItem.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
"use client";
;
;
;
;
;
const Pagination = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["forwardRef"](({ bsPrefix, className, size, ...props }, ref)=>{
    const decoratedBsPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useBootstrapPrefix"])(bsPrefix, 'pagination');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])("ul", {
        ref: ref,
        ...props,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(className, decoratedBsPrefix, size && `${decoratedBsPrefix}-${size}`)
    });
});
Pagination.displayName = 'Pagination';
const __TURBOPACK__default__export__ = Object.assign(Pagination, {
    First: __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$PageItem$2e$js__$5b$client$5d$__$28$ecmascript$29$__["First"],
    Prev: __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$PageItem$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Prev"],
    Ellipsis: __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$PageItem$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Ellipsis"],
    Item: __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$PageItem$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"],
    Next: __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$PageItem$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Next"],
    Last: __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$PageItem$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Last"]
});
}),
"[project]/assignment1/node_modules/react-bootstrap/esm/Pagination.js [client] (ecmascript) <export default as Pagination>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Pagination",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Pagination$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Pagination$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react-bootstrap/esm/Pagination.js [client] (ecmascript)");
}),
"[project]/assignment1/node_modules/react-bootstrap/esm/Table.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/classnames/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react-bootstrap/esm/ThemeProvider.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
"use client";
;
;
;
;
const Table = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["forwardRef"](({ bsPrefix, className, striped, bordered, borderless, hover, size, variant, responsive, ...props }, ref)=>{
    const decoratedBsPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useBootstrapPrefix"])(bsPrefix, 'table');
    const classes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(className, decoratedBsPrefix, variant && `${decoratedBsPrefix}-${variant}`, size && `${decoratedBsPrefix}-${size}`, striped && `${decoratedBsPrefix}-${typeof striped === 'string' ? `striped-${striped}` : 'striped'}`, bordered && `${decoratedBsPrefix}-bordered`, borderless && `${decoratedBsPrefix}-borderless`, hover && `${decoratedBsPrefix}-hover`);
    const table = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])("table", {
        ...props,
        className: classes,
        ref: ref
    });
    if (responsive) {
        let responsiveClass = `${decoratedBsPrefix}-responsive`;
        if (typeof responsive === 'string') {
            responsiveClass = `${responsiveClass}-${responsive}`;
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
            className: responsiveClass,
            children: table
        });
    }
    return table;
});
Table.displayName = 'Table';
const __TURBOPACK__default__export__ = Table;
}),
"[project]/assignment1/node_modules/react-bootstrap/esm/Table.js [client] (ecmascript) <export default as Table>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Table",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Table$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Table$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react-bootstrap/esm/Table.js [client] (ecmascript)");
}),
"[project]/assignment1/node_modules/react-bootstrap/esm/CardBody.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/classnames/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react-bootstrap/esm/ThemeProvider.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
"use client";
;
;
;
;
const CardBody = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["forwardRef"](({ className, bsPrefix, as: Component = 'div', ...props }, ref)=>{
    bsPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useBootstrapPrefix"])(bsPrefix, 'card-body');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(Component, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(className, bsPrefix),
        ...props
    });
});
CardBody.displayName = 'CardBody';
const __TURBOPACK__default__export__ = CardBody;
}),
"[project]/assignment1/node_modules/react-bootstrap/esm/CardFooter.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/classnames/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react-bootstrap/esm/ThemeProvider.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
"use client";
;
;
;
;
const CardFooter = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["forwardRef"](({ className, bsPrefix, as: Component = 'div', ...props }, ref)=>{
    bsPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useBootstrapPrefix"])(bsPrefix, 'card-footer');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(Component, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(className, bsPrefix),
        ...props
    });
});
CardFooter.displayName = 'CardFooter';
const __TURBOPACK__default__export__ = CardFooter;
}),
"[project]/assignment1/node_modules/react-bootstrap/esm/CardHeaderContext.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react/index.js [client] (ecmascript)");
"use client";
;
const context = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createContext"](null);
context.displayName = 'CardHeaderContext';
const __TURBOPACK__default__export__ = context;
}),
"[project]/assignment1/node_modules/react-bootstrap/esm/CardHeader.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/classnames/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react-bootstrap/esm/ThemeProvider.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$CardHeaderContext$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react-bootstrap/esm/CardHeaderContext.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
"use client";
;
;
;
;
;
;
const CardHeader = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["forwardRef"](({ bsPrefix, className, // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = 'div', ...props }, ref)=>{
    const prefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useBootstrapPrefix"])(bsPrefix, 'card-header');
    const contextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CardHeader.useMemo[contextValue]": ()=>({
                cardHeaderBsPrefix: prefix
            })
    }["CardHeader.useMemo[contextValue]"], [
        prefix
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$CardHeaderContext$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].Provider, {
        value: contextValue,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(Component, {
            ref: ref,
            ...props,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(className, prefix)
        })
    });
});
CardHeader.displayName = 'CardHeader';
const __TURBOPACK__default__export__ = CardHeader;
}),
"[project]/assignment1/node_modules/react-bootstrap/esm/CardImg.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/classnames/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react-bootstrap/esm/ThemeProvider.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
"use client";
;
;
;
;
const CardImg = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["forwardRef"](// Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
({ bsPrefix, className, variant, as: Component = 'img', ...props }, ref)=>{
    const prefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useBootstrapPrefix"])(bsPrefix, 'card-img');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(Component, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(variant ? `${prefix}-${variant}` : prefix, className),
        ...props
    });
});
CardImg.displayName = 'CardImg';
const __TURBOPACK__default__export__ = CardImg;
}),
"[project]/assignment1/node_modules/react-bootstrap/esm/CardImgOverlay.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/classnames/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react-bootstrap/esm/ThemeProvider.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
"use client";
;
;
;
;
const CardImgOverlay = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["forwardRef"](({ className, bsPrefix, as: Component = 'div', ...props }, ref)=>{
    bsPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useBootstrapPrefix"])(bsPrefix, 'card-img-overlay');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(Component, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(className, bsPrefix),
        ...props
    });
});
CardImgOverlay.displayName = 'CardImgOverlay';
const __TURBOPACK__default__export__ = CardImgOverlay;
}),
"[project]/assignment1/node_modules/react-bootstrap/esm/CardLink.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/classnames/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react-bootstrap/esm/ThemeProvider.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
"use client";
;
;
;
;
const CardLink = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["forwardRef"](({ className, bsPrefix, as: Component = 'a', ...props }, ref)=>{
    bsPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useBootstrapPrefix"])(bsPrefix, 'card-link');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(Component, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(className, bsPrefix),
        ...props
    });
});
CardLink.displayName = 'CardLink';
const __TURBOPACK__default__export__ = CardLink;
}),
"[project]/assignment1/node_modules/react-bootstrap/esm/divWithClassName.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/classnames/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
;
;
;
const __TURBOPACK__default__export__ = (className)=>/*#__PURE__*/ // eslint-disable-next-line react/display-name
    __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["forwardRef"]((p, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
            ...p,
            ref: ref,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(p.className, className)
        }));
}),
"[project]/assignment1/node_modules/react-bootstrap/esm/CardSubtitle.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/classnames/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react-bootstrap/esm/ThemeProvider.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$divWithClassName$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react-bootstrap/esm/divWithClassName.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
"use client";
;
;
;
;
;
const DivStyledAsH6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$divWithClassName$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])('h6');
const CardSubtitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["forwardRef"](({ className, bsPrefix, as: Component = DivStyledAsH6, ...props }, ref)=>{
    bsPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useBootstrapPrefix"])(bsPrefix, 'card-subtitle');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(Component, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(className, bsPrefix),
        ...props
    });
});
CardSubtitle.displayName = 'CardSubtitle';
const __TURBOPACK__default__export__ = CardSubtitle;
}),
"[project]/assignment1/node_modules/react-bootstrap/esm/CardText.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/classnames/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react-bootstrap/esm/ThemeProvider.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
"use client";
;
;
;
;
const CardText = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["forwardRef"](({ className, bsPrefix, as: Component = 'p', ...props }, ref)=>{
    bsPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useBootstrapPrefix"])(bsPrefix, 'card-text');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(Component, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(className, bsPrefix),
        ...props
    });
});
CardText.displayName = 'CardText';
const __TURBOPACK__default__export__ = CardText;
}),
"[project]/assignment1/node_modules/react-bootstrap/esm/CardTitle.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/classnames/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react-bootstrap/esm/ThemeProvider.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$divWithClassName$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react-bootstrap/esm/divWithClassName.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
"use client";
;
;
;
;
;
const DivStyledAsH5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$divWithClassName$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])('h5');
const CardTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["forwardRef"](({ className, bsPrefix, as: Component = DivStyledAsH5, ...props }, ref)=>{
    bsPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useBootstrapPrefix"])(bsPrefix, 'card-title');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(Component, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(className, bsPrefix),
        ...props
    });
});
CardTitle.displayName = 'CardTitle';
const __TURBOPACK__default__export__ = CardTitle;
}),
"[project]/assignment1/node_modules/react-bootstrap/esm/Card.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/classnames/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react-bootstrap/esm/ThemeProvider.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$CardBody$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react-bootstrap/esm/CardBody.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$CardFooter$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react-bootstrap/esm/CardFooter.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$CardHeader$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react-bootstrap/esm/CardHeader.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$CardImg$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react-bootstrap/esm/CardImg.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$CardImgOverlay$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react-bootstrap/esm/CardImgOverlay.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$CardLink$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react-bootstrap/esm/CardLink.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$CardSubtitle$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react-bootstrap/esm/CardSubtitle.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$CardText$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react-bootstrap/esm/CardText.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$CardTitle$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react-bootstrap/esm/CardTitle.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
const Card = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["forwardRef"](({ bsPrefix, className, bg, text, border, body = false, children, // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = 'div', ...props }, ref)=>{
    const prefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useBootstrapPrefix"])(bsPrefix, 'card');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(Component, {
        ref: ref,
        ...props,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(className, prefix, bg && `bg-${bg}`, text && `text-${text}`, border && `border-${border}`),
        children: body ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$CardBody$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
            children: children
        }) : children
    });
});
Card.displayName = 'Card';
const __TURBOPACK__default__export__ = Object.assign(Card, {
    Img: __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$CardImg$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"],
    Title: __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$CardTitle$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"],
    Subtitle: __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$CardSubtitle$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"],
    Body: __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$CardBody$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"],
    Link: __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$CardLink$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"],
    Text: __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$CardText$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"],
    Header: __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$CardHeader$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"],
    Footer: __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$CardFooter$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"],
    ImgOverlay: __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$CardImgOverlay$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
});
}),
"[project]/assignment1/node_modules/react-bootstrap/esm/Card.js [client] (ecmascript) <export default as Card>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react-bootstrap/esm/Card.js [client] (ecmascript)");
}),
"[project]/assignment1/node_modules/react-bootstrap/esm/NavbarContext.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react/index.js [client] (ecmascript)");
"use client";
;
// TODO: check
const context = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createContext"](null);
context.displayName = 'NavbarContext';
const __TURBOPACK__default__export__ = context;
}),
"[project]/assignment1/node_modules/react-bootstrap/esm/NavItem.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/classnames/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react-bootstrap/esm/ThemeProvider.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
"use client";
;
;
;
;
const NavItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["forwardRef"](({ className, bsPrefix, as: Component = 'div', ...props }, ref)=>{
    bsPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useBootstrapPrefix"])(bsPrefix, 'nav-item');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(Component, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(className, bsPrefix),
        ...props
    });
});
NavItem.displayName = 'NavItem';
const __TURBOPACK__default__export__ = NavItem;
}),
"[project]/assignment1/node_modules/react-bootstrap/esm/NavLink.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/classnames/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f40$restart$2f$ui$2f$esm$2f$Anchor$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/@restart/ui/esm/Anchor.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f40$restart$2f$ui$2f$esm$2f$NavItem$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/@restart/ui/esm/NavItem.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f40$restart$2f$ui$2f$esm$2f$SelectableContext$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/@restart/ui/esm/SelectableContext.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react-bootstrap/esm/ThemeProvider.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const NavLink = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["forwardRef"](({ bsPrefix, className, as: Component = __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f40$restart$2f$ui$2f$esm$2f$Anchor$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], active, eventKey, disabled = false, ...props }, ref)=>{
    bsPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useBootstrapPrefix"])(bsPrefix, 'nav-link');
    const [navItemProps, meta] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f40$restart$2f$ui$2f$esm$2f$NavItem$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useNavItem"])({
        key: (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f40$restart$2f$ui$2f$esm$2f$SelectableContext$2e$js__$5b$client$5d$__$28$ecmascript$29$__["makeEventKey"])(eventKey, props.href),
        active,
        disabled,
        ...props
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(Component, {
        ...props,
        ...navItemProps,
        ref: ref,
        disabled: disabled,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(className, bsPrefix, disabled && 'disabled', meta.isActive && 'active')
    });
});
NavLink.displayName = 'NavLink';
const __TURBOPACK__default__export__ = NavLink;
}),
"[project]/assignment1/node_modules/react-bootstrap/esm/Nav.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/classnames/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$uncontrollable$2f$lib$2f$esm$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/assignment1/node_modules/uncontrollable/lib/esm/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$uncontrollable$2f$lib$2f$esm$2f$hook$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useUncontrolled$3e$__ = __turbopack_context__.i("[project]/assignment1/node_modules/uncontrollable/lib/esm/hook.js [client] (ecmascript) <export default as useUncontrolled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f40$restart$2f$ui$2f$esm$2f$Nav$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/@restart/ui/esm/Nav.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react-bootstrap/esm/ThemeProvider.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$NavbarContext$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react-bootstrap/esm/NavbarContext.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$CardHeaderContext$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react-bootstrap/esm/CardHeaderContext.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$NavItem$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react-bootstrap/esm/NavItem.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$NavLink$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react-bootstrap/esm/NavLink.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
const Nav = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["forwardRef"]((uncontrolledProps, ref)=>{
    const { as = 'div', bsPrefix: initialBsPrefix, variant, fill = false, justify = false, navbar, navbarScroll, className, activeKey, ...props } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$uncontrollable$2f$lib$2f$esm$2f$hook$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useUncontrolled$3e$__["useUncontrolled"])(uncontrolledProps, {
        activeKey: 'onSelect'
    });
    const bsPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useBootstrapPrefix"])(initialBsPrefix, 'nav');
    let navbarBsPrefix;
    let cardHeaderBsPrefix;
    let isNavbar = false;
    const navbarContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$NavbarContext$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]);
    const cardHeaderContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$CardHeaderContext$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]);
    if (navbarContext) {
        navbarBsPrefix = navbarContext.bsPrefix;
        isNavbar = navbar == null ? true : navbar;
    } else if (cardHeaderContext) {
        ({ cardHeaderBsPrefix } = cardHeaderContext);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f40$restart$2f$ui$2f$esm$2f$Nav$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
        as: as,
        ref: ref,
        activeKey: activeKey,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(className, {
            [bsPrefix]: !isNavbar,
            [`${navbarBsPrefix}-nav`]: isNavbar,
            [`${navbarBsPrefix}-nav-scroll`]: isNavbar && navbarScroll,
            [`${cardHeaderBsPrefix}-${variant}`]: !!cardHeaderBsPrefix,
            [`${bsPrefix}-${variant}`]: !!variant,
            [`${bsPrefix}-fill`]: fill,
            [`${bsPrefix}-justified`]: justify
        }),
        ...props
    });
});
Nav.displayName = 'Nav';
const __TURBOPACK__default__export__ = Object.assign(Nav, {
    Item: __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$NavItem$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"],
    Link: __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$NavLink$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
});
}),
"[project]/assignment1/node_modules/react-bootstrap/esm/Nav.js [client] (ecmascript) <export default as Nav>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Nav",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Nav$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Nav$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react-bootstrap/esm/Nav.js [client] (ecmascript)");
}),
"[project]/assignment1/node_modules/react-bootstrap/esm/NavbarBrand.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/classnames/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react-bootstrap/esm/ThemeProvider.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
"use client";
;
;
;
;
const NavbarBrand = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["forwardRef"](({ bsPrefix, className, as, ...props }, ref)=>{
    bsPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useBootstrapPrefix"])(bsPrefix, 'navbar-brand');
    const Component = as || (props.href ? 'a' : 'span');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(Component, {
        ...props,
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(className, bsPrefix)
    });
});
NavbarBrand.displayName = 'NavbarBrand';
const __TURBOPACK__default__export__ = NavbarBrand;
}),
"[project]/assignment1/node_modules/react-bootstrap/esm/transitionEndListener.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>transitionEndListener
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$css$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/dom-helpers/esm/css.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$transitionEnd$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/dom-helpers/esm/transitionEnd.js [client] (ecmascript)");
;
;
function parseDuration(node, property) {
    const str = (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$css$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(node, property) || '';
    const mult = str.indexOf('ms') === -1 ? 1000 : 1;
    return parseFloat(str) * mult;
}
function transitionEndListener(element, handler) {
    const duration = parseDuration(element, 'transitionDuration');
    const delay = parseDuration(element, 'transitionDelay');
    const remove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$transitionEnd$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(element, (e)=>{
        if (e.target === element) {
            remove();
            handler(e);
        }
    }, duration + delay);
}
}),
"[project]/assignment1/node_modules/react-bootstrap/esm/createChainedFunction.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
/**
 * Safe chained function
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 *
 * @param {function} functions to chain
 * @returns {function|null}
 */ function createChainedFunction(...funcs) {
    return funcs.filter((f)=>f != null).reduce((acc, f)=>{
        if (typeof f !== 'function') {
            throw new Error('Invalid Argument Type, must only provide functions, undefined, or null.');
        }
        if (acc === null) return f;
        return function chainedFunction(...args) {
            // @ts-expect-error ignore "this" error
            acc.apply(this, args);
            // @ts-expect-error ignore "this" error
            f.apply(this, args);
        };
    }, null);
}
const __TURBOPACK__default__export__ = createChainedFunction;
}),
"[project]/assignment1/node_modules/react-bootstrap/esm/triggerBrowserReflow.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// reading a dimension prop will cause the browser to recalculate,
// which will let our animations work
__turbopack_context__.s([
    "default",
    ()=>triggerBrowserReflow
]);
function triggerBrowserReflow(node) {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    node.offsetHeight;
}
}),
"[project]/assignment1/node_modules/react-bootstrap/esm/safeFindDOMNode.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>safeFindDOMNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$dom$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react-dom/index.js [client] (ecmascript)");
;
function safeFindDOMNode(componentOrElement) {
    if (componentOrElement && 'setState' in componentOrElement) {
        // TODO: Remove in next major.
        // eslint-disable-next-line react/no-find-dom-node
        return __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$dom$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].findDOMNode(componentOrElement);
    }
    return componentOrElement != null ? componentOrElement : null;
}
}),
"[project]/assignment1/node_modules/react-bootstrap/esm/TransitionWrapper.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$Transition$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react-transition-group/esm/Transition.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f40$restart$2f$hooks$2f$esm$2f$useMergedRefs$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/@restart/hooks/esm/useMergedRefs.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$safeFindDOMNode$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react-bootstrap/esm/safeFindDOMNode.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
"use client";
;
;
;
;
;
// Normalizes Transition callbacks when nodeRef is used.
const TransitionWrapper = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].forwardRef(({ onEnter, onEntering, onEntered, onExit, onExiting, onExited, addEndListener, children, childRef, ...props }, ref)=>{
    const nodeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mergedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f40$restart$2f$hooks$2f$esm$2f$useMergedRefs$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(nodeRef, childRef);
    const attachRef = (r)=>{
        mergedRef((0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$safeFindDOMNode$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(r));
    };
    const normalize = (callback)=>(param)=>{
            if (callback && nodeRef.current) {
                callback(nodeRef.current, param);
            }
        };
    const handleEnter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])(normalize(onEnter), [
        onEnter
    ]);
    const handleEntering = (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])(normalize(onEntering), [
        onEntering
    ]);
    const handleEntered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])(normalize(onEntered), [
        onEntered
    ]);
    const handleExit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])(normalize(onExit), [
        onExit
    ]);
    const handleExiting = (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])(normalize(onExiting), [
        onExiting
    ]);
    const handleExited = (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])(normalize(onExited), [
        onExited
    ]);
    const handleAddEndListener = (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])(normalize(addEndListener), [
        addEndListener
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$Transition$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
        ref: ref,
        ...props,
        onEnter: handleEnter,
        onEntered: handleEntered,
        onEntering: handleEntering,
        onExit: handleExit,
        onExited: handleExited,
        onExiting: handleExiting,
        addEndListener: handleAddEndListener,
        nodeRef: nodeRef,
        children: typeof children === 'function' ? (status, innerProps)=>// TODO: Types for RTG missing innerProps, so need to cast.
            children(status, {
                ...innerProps,
                ref: attachRef
            }) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].cloneElement(children, {
            ref: attachRef
        })
    });
});
TransitionWrapper.displayName = 'TransitionWrapper';
const __TURBOPACK__default__export__ = TransitionWrapper;
}),
"[project]/assignment1/node_modules/react-bootstrap/esm/Collapse.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/classnames/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$css$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/dom-helpers/esm/css.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$Transition$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react-transition-group/esm/Transition.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f40$restart$2f$ui$2f$esm$2f$utils$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/@restart/ui/esm/utils.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$transitionEndListener$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react-bootstrap/esm/transitionEndListener.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$createChainedFunction$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react-bootstrap/esm/createChainedFunction.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$triggerBrowserReflow$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react-bootstrap/esm/triggerBrowserReflow.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$TransitionWrapper$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react-bootstrap/esm/TransitionWrapper.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
const MARGINS = {
    height: [
        'marginTop',
        'marginBottom'
    ],
    width: [
        'marginLeft',
        'marginRight'
    ]
};
function getDefaultDimensionValue(dimension, elem) {
    const offset = `offset${dimension[0].toUpperCase()}${dimension.slice(1)}`;
    const value = elem[offset];
    const margins = MARGINS[dimension];
    return value + // @ts-expect-error TODO
    parseInt((0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$css$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(elem, margins[0]), 10) + // @ts-expect-error TODO
    parseInt((0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$css$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(elem, margins[1]), 10);
}
const collapseStyles = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$Transition$2e$js__$5b$client$5d$__$28$ecmascript$29$__["EXITED"]]: 'collapse',
    [__TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$Transition$2e$js__$5b$client$5d$__$28$ecmascript$29$__["EXITING"]]: 'collapsing',
    [__TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$Transition$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ENTERING"]]: 'collapsing',
    [__TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$Transition$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ENTERED"]]: 'collapse show'
};
const Collapse = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].forwardRef(({ onEnter, onEntering, onEntered, onExit, onExiting, className, children, dimension = 'height', in: inProp = false, timeout = 300, mountOnEnter = false, unmountOnExit = false, appear = false, getDimensionValue = getDefaultDimensionValue, ...props }, ref)=>{
    /* Compute dimension */ const computedDimension = typeof dimension === 'function' ? dimension() : dimension;
    /* -- Expanding -- */ const handleEnter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Collapse.useMemo[handleEnter]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$createChainedFunction$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({
                "Collapse.useMemo[handleEnter]": (elem)=>{
                    elem.style[computedDimension] = '0';
                }
            }["Collapse.useMemo[handleEnter]"], onEnter)
    }["Collapse.useMemo[handleEnter]"], [
        computedDimension,
        onEnter
    ]);
    const handleEntering = (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Collapse.useMemo[handleEntering]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$createChainedFunction$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({
                "Collapse.useMemo[handleEntering]": (elem)=>{
                    const scroll = `scroll${computedDimension[0].toUpperCase()}${computedDimension.slice(1)}`;
                    elem.style[computedDimension] = `${elem[scroll]}px`;
                }
            }["Collapse.useMemo[handleEntering]"], onEntering)
    }["Collapse.useMemo[handleEntering]"], [
        computedDimension,
        onEntering
    ]);
    const handleEntered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Collapse.useMemo[handleEntered]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$createChainedFunction$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({
                "Collapse.useMemo[handleEntered]": (elem)=>{
                    elem.style[computedDimension] = null;
                }
            }["Collapse.useMemo[handleEntered]"], onEntered)
    }["Collapse.useMemo[handleEntered]"], [
        computedDimension,
        onEntered
    ]);
    /* -- Collapsing -- */ const handleExit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Collapse.useMemo[handleExit]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$createChainedFunction$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({
                "Collapse.useMemo[handleExit]": (elem)=>{
                    elem.style[computedDimension] = `${getDimensionValue(computedDimension, elem)}px`;
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$triggerBrowserReflow$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(elem);
                }
            }["Collapse.useMemo[handleExit]"], onExit)
    }["Collapse.useMemo[handleExit]"], [
        onExit,
        getDimensionValue,
        computedDimension
    ]);
    const handleExiting = (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Collapse.useMemo[handleExiting]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$createChainedFunction$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({
                "Collapse.useMemo[handleExiting]": (elem)=>{
                    elem.style[computedDimension] = null;
                }
            }["Collapse.useMemo[handleExiting]"], onExiting)
    }["Collapse.useMemo[handleExiting]"], [
        computedDimension,
        onExiting
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$TransitionWrapper$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
        ref: ref,
        addEndListener: __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$transitionEndListener$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"],
        ...props,
        "aria-expanded": props.role ? inProp : null,
        onEnter: handleEnter,
        onEntering: handleEntering,
        onEntered: handleEntered,
        onExit: handleExit,
        onExiting: handleExiting,
        childRef: (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f40$restart$2f$ui$2f$esm$2f$utils$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getChildRef"])(children),
        in: inProp,
        timeout: timeout,
        mountOnEnter: mountOnEnter,
        unmountOnExit: unmountOnExit,
        appear: appear,
        children: (state, innerProps)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].cloneElement(children, {
                ...innerProps,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(className, children.props.className, collapseStyles[state], computedDimension === 'width' && 'collapse-horizontal')
            })
    });
});
Collapse.displayName = 'Collapse';
const __TURBOPACK__default__export__ = Collapse;
}),
"[project]/assignment1/node_modules/react-bootstrap/esm/NavbarCollapse.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Collapse$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react-bootstrap/esm/Collapse.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react-bootstrap/esm/ThemeProvider.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$NavbarContext$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react-bootstrap/esm/NavbarContext.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
"use client";
;
;
;
;
;
;
const NavbarCollapse = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["forwardRef"](({ children, bsPrefix, ...props }, ref)=>{
    bsPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useBootstrapPrefix"])(bsPrefix, 'navbar-collapse');
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$NavbarContext$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Collapse$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
        in: !!(context && context.expanded),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
            ref: ref,
            className: bsPrefix,
            children: children
        })
    });
});
NavbarCollapse.displayName = 'NavbarCollapse';
const __TURBOPACK__default__export__ = NavbarCollapse;
}),
"[project]/assignment1/node_modules/react-bootstrap/esm/NavbarToggle.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/classnames/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f40$restart$2f$hooks$2f$esm$2f$useEventCallback$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/@restart/hooks/esm/useEventCallback.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react-bootstrap/esm/ThemeProvider.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$NavbarContext$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react-bootstrap/esm/NavbarContext.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const NavbarToggle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["forwardRef"](({ bsPrefix, className, children, label = 'Toggle navigation', // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = 'button', onClick, ...props }, ref)=>{
    bsPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useBootstrapPrefix"])(bsPrefix, 'navbar-toggler');
    const { onToggle, expanded } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$NavbarContext$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]) || {};
    const handleClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f40$restart$2f$hooks$2f$esm$2f$useEventCallback$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({
        "NavbarToggle.useEventCallback[handleClick]": (e)=>{
            if (onClick) onClick(e);
            if (onToggle) onToggle();
        }
    }["NavbarToggle.useEventCallback[handleClick]"]);
    if (Component === 'button') {
        props.type = 'button';
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(Component, {
        ...props,
        ref: ref,
        onClick: handleClick,
        "aria-label": label,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(className, bsPrefix, !expanded && 'collapsed'),
        children: children || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
            className: `${bsPrefix}-icon`
        })
    });
});
NavbarToggle.displayName = 'NavbarToggle';
const __TURBOPACK__default__export__ = NavbarToggle;
}),
"[project]/assignment1/node_modules/react-bootstrap/esm/Fade.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/classnames/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$Transition$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react-transition-group/esm/Transition.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f40$restart$2f$ui$2f$esm$2f$utils$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/@restart/ui/esm/utils.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$transitionEndListener$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react-bootstrap/esm/transitionEndListener.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$triggerBrowserReflow$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react-bootstrap/esm/triggerBrowserReflow.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$TransitionWrapper$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react-bootstrap/esm/TransitionWrapper.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
;
;
;
;
;
;
;
;
;
const fadeStyles = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$Transition$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ENTERING"]]: 'show',
    [__TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$Transition$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ENTERED"]]: 'show'
};
const Fade = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["forwardRef"](({ className, children, transitionClasses = {}, onEnter, ...rest }, ref)=>{
    const props = {
        in: false,
        timeout: 300,
        mountOnEnter: false,
        unmountOnExit: false,
        appear: false,
        ...rest
    };
    const handleEnter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Fade.useCallback[handleEnter]": (node, isAppearing)=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$triggerBrowserReflow$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(node);
            onEnter == null || onEnter(node, isAppearing);
        }
    }["Fade.useCallback[handleEnter]"], [
        onEnter
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$TransitionWrapper$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
        ref: ref,
        addEndListener: __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$transitionEndListener$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"],
        ...props,
        onEnter: handleEnter,
        childRef: (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f40$restart$2f$ui$2f$esm$2f$utils$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getChildRef"])(children),
        children: (status, innerProps)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["cloneElement"](children, {
                ...innerProps,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])('fade', className, children.props.className, fadeStyles[status], transitionClasses[status])
            })
    });
});
Fade.displayName = 'Fade';
const __TURBOPACK__default__export__ = Fade;
}),
"[project]/assignment1/node_modules/react-bootstrap/esm/OffcanvasBody.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/classnames/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react-bootstrap/esm/ThemeProvider.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
"use client";
;
;
;
;
const OffcanvasBody = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["forwardRef"](({ className, bsPrefix, as: Component = 'div', ...props }, ref)=>{
    bsPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useBootstrapPrefix"])(bsPrefix, 'offcanvas-body');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(Component, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(className, bsPrefix),
        ...props
    });
});
OffcanvasBody.displayName = 'OffcanvasBody';
const __TURBOPACK__default__export__ = OffcanvasBody;
}),
"[project]/assignment1/node_modules/react-bootstrap/esm/OffcanvasToggling.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/classnames/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$Transition$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react-transition-group/esm/Transition.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f40$restart$2f$ui$2f$esm$2f$utils$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/@restart/ui/esm/utils.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$transitionEndListener$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react-bootstrap/esm/transitionEndListener.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$TransitionWrapper$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react-bootstrap/esm/TransitionWrapper.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react-bootstrap/esm/ThemeProvider.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
const transitionStyles = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$Transition$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ENTERING"]]: 'show',
    [__TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$Transition$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ENTERED"]]: 'show'
};
const OffcanvasToggling = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["forwardRef"](({ bsPrefix, className, children, in: inProp = false, mountOnEnter = false, unmountOnExit = false, appear = false, ...props }, ref)=>{
    bsPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useBootstrapPrefix"])(bsPrefix, 'offcanvas');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$TransitionWrapper$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
        ref: ref,
        addEndListener: __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$transitionEndListener$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"],
        in: inProp,
        mountOnEnter: mountOnEnter,
        unmountOnExit: unmountOnExit,
        appear: appear,
        ...props,
        childRef: (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f40$restart$2f$ui$2f$esm$2f$utils$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getChildRef"])(children),
        children: (status, innerProps)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["cloneElement"](children, {
                ...innerProps,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(className, children.props.className, (status === __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$Transition$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ENTERING"] || status === __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$transition$2d$group$2f$esm$2f$Transition$2e$js__$5b$client$5d$__$28$ecmascript$29$__["EXITING"]) && `${bsPrefix}-toggling`, transitionStyles[status])
            })
    });
});
OffcanvasToggling.displayName = 'OffcanvasToggling';
const __TURBOPACK__default__export__ = OffcanvasToggling;
}),
"[project]/assignment1/node_modules/react-bootstrap/esm/ModalContext.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react/index.js [client] (ecmascript)");
"use client";
;
const ModalContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createContext"]({
    onHide () {}
});
const __TURBOPACK__default__export__ = ModalContext;
}),
"[project]/assignment1/node_modules/react-bootstrap/esm/CloseButton.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/prop-types/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/classnames/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
;
;
;
;
const propTypes = {
    /** An accessible label indicating the relevant information about the Close Button. */ 'aria-label': __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].string,
    /** A callback fired after the Close Button is clicked. */ onClick: __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * Render different color variant for the button.
   *
   * Omitting this will render the default dark color.
   */ variant: __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].oneOf([
        'white'
    ])
};
const CloseButton = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["forwardRef"](({ className, variant, 'aria-label': ariaLabel = 'Close', ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])("button", {
        ref: ref,
        type: "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])('btn-close', variant && `btn-close-${variant}`, className),
        "aria-label": ariaLabel,
        ...props
    }));
CloseButton.displayName = 'CloseButton';
CloseButton.propTypes = propTypes;
const __TURBOPACK__default__export__ = CloseButton;
}),
"[project]/assignment1/node_modules/react-bootstrap/esm/AbstractModalHeader.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f40$restart$2f$hooks$2f$esm$2f$useEventCallback$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/@restart/hooks/esm/useEventCallback.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$CloseButton$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react-bootstrap/esm/CloseButton.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ModalContext$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react-bootstrap/esm/ModalContext.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const AbstractModalHeader = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["forwardRef"](({ closeLabel = 'Close', closeVariant, closeButton = false, onHide, children, ...props }, ref)=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ModalContext$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]);
    const handleClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f40$restart$2f$hooks$2f$esm$2f$useEventCallback$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({
        "AbstractModalHeader.useEventCallback[handleClick]": ()=>{
            context == null || context.onHide();
            onHide == null || onHide();
        }
    }["AbstractModalHeader.useEventCallback[handleClick]"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
        ref: ref,
        ...props,
        children: [
            children,
            closeButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$CloseButton$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                "aria-label": closeLabel,
                variant: closeVariant,
                onClick: handleClick
            })
        ]
    });
});
AbstractModalHeader.displayName = 'AbstractModalHeader';
const __TURBOPACK__default__export__ = AbstractModalHeader;
}),
"[project]/assignment1/node_modules/react-bootstrap/esm/OffcanvasHeader.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/classnames/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react-bootstrap/esm/ThemeProvider.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$AbstractModalHeader$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react-bootstrap/esm/AbstractModalHeader.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
"use client";
;
;
;
;
;
const OffcanvasHeader = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["forwardRef"](({ bsPrefix, className, closeLabel = 'Close', closeButton = false, ...props }, ref)=>{
    bsPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useBootstrapPrefix"])(bsPrefix, 'offcanvas-header');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$AbstractModalHeader$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
        ref: ref,
        ...props,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(className, bsPrefix),
        closeLabel: closeLabel,
        closeButton: closeButton
    });
});
OffcanvasHeader.displayName = 'OffcanvasHeader';
const __TURBOPACK__default__export__ = OffcanvasHeader;
}),
"[project]/assignment1/node_modules/react-bootstrap/esm/OffcanvasTitle.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/classnames/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$divWithClassName$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react-bootstrap/esm/divWithClassName.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react-bootstrap/esm/ThemeProvider.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
"use client";
;
;
;
;
;
const DivStyledAsH5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$divWithClassName$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])('h5');
const OffcanvasTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["forwardRef"](({ className, bsPrefix, as: Component = DivStyledAsH5, ...props }, ref)=>{
    bsPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useBootstrapPrefix"])(bsPrefix, 'offcanvas-title');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(Component, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(className, bsPrefix),
        ...props
    });
});
OffcanvasTitle.displayName = 'OffcanvasTitle';
const __TURBOPACK__default__export__ = OffcanvasTitle;
}),
"[project]/assignment1/node_modules/react-bootstrap/esm/BootstrapModalManager.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getSharedManager",
    ()=>getSharedManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$addClass$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/dom-helpers/esm/addClass.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$css$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/dom-helpers/esm/css.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$querySelectorAll$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/dom-helpers/esm/querySelectorAll.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$removeClass$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/dom-helpers/esm/removeClass.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f40$restart$2f$ui$2f$esm$2f$ModalManager$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/@restart/ui/esm/ModalManager.js [client] (ecmascript)");
;
;
;
;
;
const Selector = {
    FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
    STICKY_CONTENT: '.sticky-top',
    NAVBAR_TOGGLER: '.navbar-toggler'
};
class BootstrapModalManager extends __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f40$restart$2f$ui$2f$esm$2f$ModalManager$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"] {
    adjustAndStore(prop, element, adjust) {
        const actual = element.style[prop];
        // @ts-expect-error TODO: DOMStringMap and CSSStyleDeclaration aren't strictly compatible
        element.dataset[prop] = actual;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$css$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(element, {
            [prop]: `${parseFloat((0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$css$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(element, prop)) + adjust}px`
        });
    }
    restore(prop, element) {
        const value = element.dataset[prop];
        if (value !== undefined) {
            delete element.dataset[prop];
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$css$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(element, {
                [prop]: value
            });
        }
    }
    setContainerStyle(containerState) {
        super.setContainerStyle(containerState);
        const container = this.getElement();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$addClass$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(container, 'modal-open');
        if (!containerState.scrollBarWidth) return;
        const paddingProp = this.isRTL ? 'paddingLeft' : 'paddingRight';
        const marginProp = this.isRTL ? 'marginLeft' : 'marginRight';
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$querySelectorAll$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(container, Selector.FIXED_CONTENT).forEach((el)=>this.adjustAndStore(paddingProp, el, containerState.scrollBarWidth));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$querySelectorAll$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(container, Selector.STICKY_CONTENT).forEach((el)=>this.adjustAndStore(marginProp, el, -containerState.scrollBarWidth));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$querySelectorAll$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(container, Selector.NAVBAR_TOGGLER).forEach((el)=>this.adjustAndStore(marginProp, el, containerState.scrollBarWidth));
    }
    removeContainerStyle(containerState) {
        super.removeContainerStyle(containerState);
        const container = this.getElement();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$removeClass$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(container, 'modal-open');
        const paddingProp = this.isRTL ? 'paddingLeft' : 'paddingRight';
        const marginProp = this.isRTL ? 'marginLeft' : 'marginRight';
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$querySelectorAll$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(container, Selector.FIXED_CONTENT).forEach((el)=>this.restore(paddingProp, el));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$querySelectorAll$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(container, Selector.STICKY_CONTENT).forEach((el)=>this.restore(marginProp, el));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$querySelectorAll$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(container, Selector.NAVBAR_TOGGLER).forEach((el)=>this.restore(marginProp, el));
    }
}
let sharedManager;
function getSharedManager(options) {
    if (!sharedManager) sharedManager = new BootstrapModalManager(options);
    return sharedManager;
}
const __TURBOPACK__default__export__ = BootstrapModalManager;
}),
"[project]/assignment1/node_modules/react-bootstrap/esm/Offcanvas.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/classnames/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f40$restart$2f$hooks$2f$esm$2f$useBreakpoint$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/@restart/hooks/esm/useBreakpoint.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f40$restart$2f$hooks$2f$esm$2f$useEventCallback$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/@restart/hooks/esm/useEventCallback.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f40$restart$2f$ui$2f$esm$2f$Modal$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/@restart/ui/esm/Modal.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Fade$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react-bootstrap/esm/Fade.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$OffcanvasBody$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react-bootstrap/esm/OffcanvasBody.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$OffcanvasToggling$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react-bootstrap/esm/OffcanvasToggling.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ModalContext$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react-bootstrap/esm/ModalContext.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$OffcanvasHeader$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react-bootstrap/esm/OffcanvasHeader.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$OffcanvasTitle$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react-bootstrap/esm/OffcanvasTitle.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react-bootstrap/esm/ThemeProvider.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$BootstrapModalManager$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react-bootstrap/esm/BootstrapModalManager.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function DialogTransition(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$OffcanvasToggling$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
        ...props
    });
}
function BackdropTransition(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Fade$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
        ...props
    });
}
const Offcanvas = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["forwardRef"](({ bsPrefix, className, children, 'aria-labelledby': ariaLabelledby, placement = 'start', responsive, /* BaseModal props */ show = false, backdrop = true, keyboard = true, scroll = false, onEscapeKeyDown, onShow, onHide, container, autoFocus = true, enforceFocus = true, restoreFocus = true, restoreFocusOptions, onEntered, onExit, onExiting, onEnter, onEntering, onExited, backdropClassName, manager: propsManager, renderStaticNode = false, ...props }, ref)=>{
    const modalManager = (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])();
    bsPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useBootstrapPrefix"])(bsPrefix, 'offcanvas');
    const [showOffcanvas, setShowOffcanvas] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleHide = (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f40$restart$2f$hooks$2f$esm$2f$useEventCallback$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(onHide);
    const hideResponsiveOffcanvas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f40$restart$2f$hooks$2f$esm$2f$useBreakpoint$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(responsive || 'xs', 'up');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Offcanvas.useEffect": ()=>{
            // Handles the case where screen is resized while the responsive
            // offcanvas is shown. If `responsive` not provided, just use `show`.
            setShowOffcanvas(responsive ? show && !hideResponsiveOffcanvas : show);
        }
    }["Offcanvas.useEffect"], [
        show,
        responsive,
        hideResponsiveOffcanvas
    ]);
    const modalContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Offcanvas.useMemo[modalContext]": ()=>({
                onHide: handleHide
            })
    }["Offcanvas.useMemo[modalContext]"], [
        handleHide
    ]);
    function getModalManager() {
        if (propsManager) return propsManager;
        if (scroll) {
            // Have to use a different modal manager since the shared
            // one handles overflow.
            if (!modalManager.current) modalManager.current = new __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$BootstrapModalManager$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]({
                handleContainerOverflow: false
            });
            return modalManager.current;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$BootstrapModalManager$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getSharedManager"])();
    }
    const handleEnter = (node, ...args)=>{
        if (node) node.style.visibility = 'visible';
        onEnter == null || onEnter(node, ...args);
    };
    const handleExited = (node, ...args)=>{
        if (node) node.style.visibility = '';
        onExited == null || onExited(...args);
    };
    const renderBackdrop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Offcanvas.useCallback[renderBackdrop]": (backdropProps)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                ...backdropProps,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(`${bsPrefix}-backdrop`, backdropClassName)
            })
    }["Offcanvas.useCallback[renderBackdrop]"], [
        backdropClassName,
        bsPrefix
    ]);
    const renderDialog = (dialogProps)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
            ...dialogProps,
            ...props,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(className, responsive ? `${bsPrefix}-${responsive}` : bsPrefix, `${bsPrefix}-${placement}`),
            "aria-labelledby": ariaLabelledby,
            children: children
        });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            !showOffcanvas && (responsive || renderStaticNode) && renderDialog({}),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ModalContext$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].Provider, {
                value: modalContext,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f40$restart$2f$ui$2f$esm$2f$Modal$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                    show: showOffcanvas,
                    ref: ref,
                    backdrop: backdrop,
                    container: container,
                    keyboard: keyboard,
                    autoFocus: autoFocus,
                    enforceFocus: enforceFocus && !scroll,
                    restoreFocus: restoreFocus,
                    restoreFocusOptions: restoreFocusOptions,
                    onEscapeKeyDown: onEscapeKeyDown,
                    onShow: onShow,
                    onHide: handleHide,
                    onEnter: handleEnter,
                    onEntering: onEntering,
                    onEntered: onEntered,
                    onExit: onExit,
                    onExiting: onExiting,
                    onExited: handleExited,
                    manager: getModalManager(),
                    transition: DialogTransition,
                    backdropTransition: BackdropTransition,
                    renderBackdrop: renderBackdrop,
                    renderDialog: renderDialog
                })
            })
        ]
    });
});
Offcanvas.displayName = 'Offcanvas';
const __TURBOPACK__default__export__ = Object.assign(Offcanvas, {
    Body: __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$OffcanvasBody$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"],
    Header: __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$OffcanvasHeader$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"],
    Title: __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$OffcanvasTitle$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
});
}),
"[project]/assignment1/node_modules/react-bootstrap/esm/NavbarOffcanvas.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f40$restart$2f$hooks$2f$esm$2f$useEventCallback$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/@restart/hooks/esm/useEventCallback.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Offcanvas$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react-bootstrap/esm/Offcanvas.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$NavbarContext$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react-bootstrap/esm/NavbarContext.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
"use client";
;
;
;
;
;
;
const NavbarOffcanvas = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["forwardRef"](({ onHide, ...props }, ref)=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$NavbarContext$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]);
    const handleHide = (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f40$restart$2f$hooks$2f$esm$2f$useEventCallback$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({
        "NavbarOffcanvas.useEventCallback[handleHide]": ()=>{
            context == null || context.onToggle == null || context.onToggle();
            onHide == null || onHide();
        }
    }["NavbarOffcanvas.useEventCallback[handleHide]"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Offcanvas$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
        ref: ref,
        show: !!(context != null && context.expanded),
        ...props,
        renderStaticNode: true,
        onHide: handleHide
    });
});
NavbarOffcanvas.displayName = 'NavbarOffcanvas';
const __TURBOPACK__default__export__ = NavbarOffcanvas;
}),
"[project]/assignment1/node_modules/react-bootstrap/esm/NavbarText.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/classnames/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react-bootstrap/esm/ThemeProvider.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
"use client";
;
;
;
;
const NavbarText = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["forwardRef"](({ className, bsPrefix, as: Component = 'span', ...props }, ref)=>{
    bsPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useBootstrapPrefix"])(bsPrefix, 'navbar-text');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(Component, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(className, bsPrefix),
        ...props
    });
});
NavbarText.displayName = 'NavbarText';
const __TURBOPACK__default__export__ = NavbarText;
}),
"[project]/assignment1/node_modules/react-bootstrap/esm/Navbar.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/classnames/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f40$restart$2f$ui$2f$esm$2f$SelectableContext$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/@restart/ui/esm/SelectableContext.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$uncontrollable$2f$lib$2f$esm$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/assignment1/node_modules/uncontrollable/lib/esm/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$uncontrollable$2f$lib$2f$esm$2f$hook$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useUncontrolled$3e$__ = __turbopack_context__.i("[project]/assignment1/node_modules/uncontrollable/lib/esm/hook.js [client] (ecmascript) <export default as useUncontrolled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$NavbarBrand$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react-bootstrap/esm/NavbarBrand.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$NavbarCollapse$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react-bootstrap/esm/NavbarCollapse.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$NavbarToggle$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react-bootstrap/esm/NavbarToggle.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$NavbarOffcanvas$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react-bootstrap/esm/NavbarOffcanvas.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react-bootstrap/esm/ThemeProvider.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$NavbarContext$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react-bootstrap/esm/NavbarContext.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$NavbarText$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react-bootstrap/esm/NavbarText.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
const Navbar = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { bsPrefix: initialBsPrefix, expand = true, variant = 'light', bg, fixed, sticky, className, // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component = 'nav', expanded, onToggle, onSelect, collapseOnSelect = false, ...controlledProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$uncontrollable$2f$lib$2f$esm$2f$hook$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useUncontrolled$3e$__["useUncontrolled"])(props, {
        expanded: 'onToggle'
    });
    const bsPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useBootstrapPrefix"])(initialBsPrefix, 'navbar');
    const handleCollapse = (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Navbar.useCallback[handleCollapse]": (...args)=>{
            onSelect == null || onSelect(...args);
            if (collapseOnSelect && expanded) {
                onToggle == null || onToggle(false);
            }
        }
    }["Navbar.useCallback[handleCollapse]"], [
        onSelect,
        collapseOnSelect,
        expanded,
        onToggle
    ]);
    // will result in some false positives but that seems better
    // than false negatives. strict `undefined` check allows explicit
    // "nulling" of the role if the user really doesn't want one
    if (controlledProps.role === undefined && Component !== 'nav') {
        controlledProps.role = 'navigation';
    }
    let expandClass = `${bsPrefix}-expand`;
    if (typeof expand === 'string') expandClass = `${expandClass}-${expand}`;
    const navbarContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Navbar.useMemo[navbarContext]": ()=>({
                onToggle: ({
                    "Navbar.useMemo[navbarContext]": ()=>onToggle == null ? void 0 : onToggle(!expanded)
                })["Navbar.useMemo[navbarContext]"],
                bsPrefix,
                expanded: !!expanded,
                expand
            })
    }["Navbar.useMemo[navbarContext]"], [
        bsPrefix,
        expanded,
        expand,
        onToggle
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$NavbarContext$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].Provider, {
        value: navbarContext,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f40$restart$2f$ui$2f$esm$2f$SelectableContext$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].Provider, {
            value: handleCollapse,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsx"])(Component, {
                ref: ref,
                ...controlledProps,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(className, bsPrefix, expand && expandClass, variant && `${bsPrefix}-${variant}`, bg && `bg-${bg}`, sticky && `sticky-${sticky}`, fixed && `fixed-${fixed}`)
            })
        })
    });
});
Navbar.displayName = 'Navbar';
const __TURBOPACK__default__export__ = Object.assign(Navbar, {
    Brand: __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$NavbarBrand$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"],
    Collapse: __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$NavbarCollapse$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"],
    Offcanvas: __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$NavbarOffcanvas$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"],
    Text: __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$NavbarText$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"],
    Toggle: __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$NavbarToggle$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
});
}),
"[project]/assignment1/node_modules/react-bootstrap/esm/Navbar.js [client] (ecmascript) <export default as Navbar>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navbar",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Navbar$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$assignment1$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Navbar$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assignment1/node_modules/react-bootstrap/esm/Navbar.js [client] (ecmascript)");
}),
]);

//# sourceMappingURL=47163_react-bootstrap_esm_94b65649._.js.map