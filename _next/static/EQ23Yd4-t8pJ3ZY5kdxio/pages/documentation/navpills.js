(window.webpackJsonp = window.webpackJsonp || []).push([
  [22],
  {
    "+7Xe": function(e, t) {
      function n(t, r) {
        return (
          (e.exports = n =
            Object.setPrototypeOf ||
            function(e, t) {
              return (e.__proto__ = t), e;
            }),
          n(t, r)
        );
      }
      e.exports = n;
    },
    "21XG": function(e, t, n) {
      "use strict";
      (t.__esModule = !0), (t.default = void 0);
      var r = !(
        "undefined" === typeof window ||
        !window.document ||
        !window.document.createElement
      );
      (t.default = r), (e.exports = t.default);
    },
    "5HhQ": function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r = function(e, t) {
        var n = e % t;
        return n < 0 ? n + t : n;
      };
      t.default = r;
    },
    "7HEc": function(e, t, n) {
      "use strict";
      var r = n("tV5V");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function(e) {
          var t,
            n = e.children,
            r = e.startIndex,
            a = e.startX,
            l = e.pageX,
            s = e.viewLength,
            c = e.resistance,
            u = o.default.Children.count(n) - 1,
            d = r + (a - l) / s;
          c
            ? d < 0
              ? (d = Math.exp(d * i.default.RESISTANCE_COEF) - 1)
              : d > u &&
                (d = u + 1 - Math.exp((u - d) * i.default.RESISTANCE_COEF))
            : d < 0
            ? (t = ((d = 0) - r) * s + l)
            : d > u && (t = ((d = u) - r) * s + l);
          return { index: d, startX: t };
        });
      var o = r(n("q1tI")),
        i = r(n("UlPe"));
    },
    "7VIw": function(e, t, n) {
      "use strict";
      var r = n("OYUV");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = r(n("xZgz")).default;
      t.default = o;
    },
    "8SQk": function(e, t, n) {
      "use strict";
      var r = n("tV5V");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = r(n("q1tI")),
        i = function(e, t) {
          var n = !1,
            r = function(e) {
              return e ? e.key : "empty";
            };
          if (e.children.length && t.children.length) {
            var i = o.default.Children.map(e.children, r)[e.index];
            null !== i &&
              void 0 !== i &&
              i === o.default.Children.map(t.children, r)[t.index] &&
              (n = !0);
          }
          return n;
        };
      t.default = i;
    },
    As0B: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return l;
      });
      var r = n("wx14"),
        o = n("q1tI"),
        i = n.n(o),
        a = n("HR5l");
      function l(e, t) {
        var n = i.a.memo(
          i.a.forwardRef(function(t, n) {
            return i.a.createElement(a.a, Object(r.a)({}, t, { ref: n }), e);
          })
        );
        return (n.muiName = a.a.muiName), n;
      }
    },
    DHks: function(e, t) {
      e.exports = function(e) {
        return e && e.__esModule ? e : { default: e };
      };
    },
    FRve: function(e, t) {
      e.exports = function(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      };
    },
    G2ut: function(e, t) {
      function n() {
        return (
          (e.exports = n =
            Object.assign ||
            function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          n.apply(this, arguments)
        );
      }
      e.exports = n;
    },
    "Hk+Y": function(e, t, n) {
      "use strict";
      var r = n("TqRt");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = r(n("pVnL")),
        i = n("04ZO"),
        a = r(n("HWkK"));
      var l = function(e, t) {
        return (0, i.withStyles)(
          e,
          (0, o.default)({ defaultTheme: a.default }, t)
        );
      };
      t.default = l;
    },
    Hoj9: function(e, t, n) {
      "use strict";
      var r = n("DHks");
      (t.__esModule = !0), (t.default = void 0);
      var o = function() {};
      r(n("21XG")).default &&
        (o = document.addEventListener
          ? function(e, t, n, r) {
              return e.addEventListener(t, n, r || !1);
            }
          : document.attachEvent
          ? function(e, t, n) {
              return e.attachEvent("on" + t, function(t) {
                ((t = t || window.event).target = t.target || t.srcElement),
                  (t.currentTarget = e),
                  n.call(e, t);
              });
            }
          : void 0);
      var i = o;
      (t.default = i), (e.exports = t.default);
    },
    JrkS: function(e, t, n) {
      "use strict";
      var r = n("Ff2n"),
        o = n("rePB"),
        i = n("wx14"),
        a = n("q1tI"),
        l = n.n(a),
        s = (n("17x9"), n("iuhU")),
        c = n("H2TA"),
        u = n("VD++"),
        d = n("mVKy"),
        p = l.a.forwardRef(function(e, t) {
          var n = e.classes,
            o = e.className,
            a = e.disabled,
            c = void 0 !== a && a,
            p = e.disableFocusRipple,
            f = void 0 !== p && p,
            h = e.fullWidth,
            v = e.icon,
            m = e.indicator,
            b = e.label,
            g = e.onChange,
            y = e.onClick,
            x = e.selected,
            w = e.textColor,
            S = void 0 === w ? "inherit" : w,
            C = e.value,
            O = e.wrapped,
            E = void 0 !== O && O,
            T = Object(r.a)(e, [
              "classes",
              "className",
              "disabled",
              "disableFocusRipple",
              "fullWidth",
              "icon",
              "indicator",
              "label",
              "onChange",
              "onClick",
              "selected",
              "textColor",
              "value",
              "wrapped"
            ]);
          return l.a.createElement(
            u.a,
            Object(i.a)(
              {
                focusRipple: !f,
                className: Object(s.a)(
                  n.root,
                  n["textColor".concat(Object(d.a)(S))],
                  o,
                  c && n.disabled,
                  x && n.selected,
                  b && v && n.labelIcon,
                  h && n.fullWidth,
                  E && n.wrapped
                ),
                ref: t,
                role: "tab",
                "aria-selected": x,
                disabled: c,
                onClick: function(e) {
                  g && g(e, C), y && y(e);
                }
              },
              T
            ),
            l.a.createElement("span", { className: n.wrapper }, v, b),
            m
          );
        });
      t.a = Object(c.a)(
        function(e) {
          var t;
          return {
            root: Object(i.a)(
              {},
              e.typography.button,
              ((t = {
                maxWidth: 264,
                minWidth: 72,
                position: "relative",
                boxSizing: "border-box",
                minHeight: 48,
                flexShrink: 0,
                padding: "6px 12px"
              }),
              Object(o.a)(t, e.breakpoints.up("md"), { padding: "6px 24px" }),
              Object(o.a)(t, "overflow", "hidden"),
              Object(o.a)(t, "whiteSpace", "normal"),
              Object(o.a)(t, "textAlign", "center"),
              Object(o.a)(t, e.breakpoints.up("md"), {
                fontSize: e.typography.pxToRem(13),
                minWidth: 160
              }),
              t)
            ),
            labelIcon: {
              minHeight: 72,
              paddingTop: 9,
              "& $wrapper > *:first-child": { marginBottom: 6 }
            },
            textColorInherit: {
              color: "inherit",
              opacity: 0.7,
              "&$selected": { opacity: 1 },
              "&$disabled": { opacity: 0.4 }
            },
            textColorPrimary: {
              color: e.palette.text.secondary,
              "&$selected": { color: e.palette.primary.main },
              "&$disabled": { color: e.palette.text.disabled }
            },
            textColorSecondary: {
              color: e.palette.text.secondary,
              "&$selected": { color: e.palette.secondary.main },
              "&$disabled": { color: e.palette.text.disabled }
            },
            selected: {},
            disabled: {},
            fullWidth: {
              flexShrink: 1,
              flexGrow: 1,
              flexBasis: 0,
              maxWidth: "none"
            },
            wrapped: { fontSize: e.typography.pxToRem(12), lineHeight: 1.5 },
            wrapper: {
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              flexDirection: "column"
            }
          };
        },
        { name: "MuiTab" }
      )(p);
    },
    KJF0: function(e, t, n) {
      "use strict";
      var r = n("tV5V");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "checkIndexBounds", {
          enumerable: !0,
          get: function() {
            return o.default;
          }
        }),
        Object.defineProperty(t, "computeIndex", {
          enumerable: !0,
          get: function() {
            return i.default;
          }
        }),
        Object.defineProperty(t, "constant", {
          enumerable: !0,
          get: function() {
            return a.default;
          }
        }),
        Object.defineProperty(t, "getDisplaySameSlide", {
          enumerable: !0,
          get: function() {
            return l.default;
          }
        }),
        Object.defineProperty(t, "mod", {
          enumerable: !0,
          get: function() {
            return s.default;
          }
        });
      var o = r(n("rRnn")),
        i = r(n("7HEc")),
        a = r(n("UlPe")),
        l = r(n("8SQk")),
        s = r(n("5HhQ"));
    },
    MOn9: function(e, t) {
      e.exports = function(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      };
    },
    NRM5: function(e, t) {
      function n(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      e.exports = function(e, t, r) {
        return t && n(e.prototype, t), r && n(e, r), e;
      };
    },
    OYUV: function(e, t) {
      e.exports = function(e) {
        return e && e.__esModule ? e : { default: e };
      };
    },
    PTHm: function(e, t, n) {
      var r = n("ZZx6");
      e.exports = function(e, t) {
        if (null == e) return {};
        var n,
          o,
          i = r(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (o = 0; o < a.length; o++)
            (n = a[o]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
        }
        return i;
      };
    },
    QJFr: function(e, t, n) {
      "use strict";
      n.r(t);
      var r = n("kOwS"),
        o = n("q1tI"),
        i = n.n(o),
        a = n("pzeu"),
        l = n("zR9M"),
        s = n("Hk+Y"),
        c = n.n(s),
        u = n("SuH/"),
        d = n("Oref"),
        p = i.a.createElement,
        f =
          'import React from \'react\';\n\nimport NavPills from "components/NavPills/NavPills.js";\n\nexport default function Example(){\n  return (\n    <NavPills\n      color="warning"\n      tabs={[\n        {\n          tabButton: "Profile",\n          tabContent: (\n            <span>\n              <p>\n                Collaboratively administrate empowered markets via\n                plug-and-play networks. Dynamically procrastinate\n                B2C users after installed base benefits.\n              </p>\n              <br />\n              <p>\n                Dramatically visualize customer directed convergence\n                without revolutionary ROI. Collaboratively\n                administrate empowered markets via plug-and-play\n                networks. Dynamically procrastinate B2C users after\n                installed base benefits.\n              </p>\n              <br />\n              <p>This is very nice.</p>\n            </span>\n          )\n        },\n        {\n          tabButton: "Settings",\n          tabContent: (\n            <span>\n              <p>\n                Efficiently unleash cross-media information without\n                cross-media value. Quickly maximize timely\n                deliverables for real-time schemas.\n              </p>\n              <br />\n              <p>\n                Dramatically maintain clicks-and-mortar solutions\n                without functional solutions.\n              </p>\n            </span>\n          )\n        },\n        {\n          tabButton: "Options",\n          tabContent: (\n            <span>\n              <p>\n                Completely synergize resource taxing relationships\n                via premier niche markets. Professionally cultivate\n                one-to-one customer service with robust ideas.{" "}\n              </p>\n              <br />\n              <p>\n                Dynamically innovate resource-leveling customer\n                service for state of the art customer service.\n              </p>\n            </span>\n          )\n        }\n      ]}\n    />\n  );\n}',
        h =
          'NavPills.defaultProps = {\n  active: 0,\n  color: "primary"\n};\n\nNavPills.propTypes = {\n  // index of the default active pill\n  active: PropTypes.number,\n  tabs: PropTypes.arrayOf(\n    PropTypes.shape({\n      tabButton: PropTypes.string,\n      tabIcon: PropTypes.func,\n      tabContent: PropTypes.node\n    })\n  ).isRequired,\n  color: PropTypes.oneOf([\n    "primary",\n    "warning",\n    "danger",\n    "success",\n    "info",\n    "rose"\n  ]),\n  direction: PropTypes.string,\n  horizontal: PropTypes.shape({\n    tabsGrid: PropTypes.object,\n    contentGrid: PropTypes.object\n  }),\n  alignCenter: PropTypes.bool\n};';
      t.default = c()({
        bdExample: {
          padding: "1.5rem",
          margin: "1rem -15px",
          position: "relative",
          marginRight: "0",
          marginBottom: "-8px",
          marginLeft: "0",
          borderWidth: ".2rem",
          border: "solid rgb(245, 242, 240)"
        }
      })(function(e) {
        var t = Object(r.a)({}, e).classes;
        return p(
          d.a,
          null,
          p("h1", null, "NavPills"),
          p(
            "p",
            null,
            "This component extends",
            " ",
            p(
              "a",
              {
                href:
                  "https://material-ui-next.com/demos/tabs/?ref=creativetim",
                target: "_blank"
              },
              "material-ui tabs component"
            ),
            ", we've done this to make it more easier for you to use our styles."
          ),
          p("h2", null, "Styles"),
          p(
            "p",
            null,
            "You will find the styles for this component in",
            p("br", null),
            " ",
            p(
              "code",
              null,
              "src/assets/jss/nextjs-material-kit/components/navPillsStyle.js"
            ),
            "."
          ),
          p("h2", null, "Example"),
          p(
            "div",
            { className: t.bdExample },
            p(u.a, {
              color: "warning",
              tabs: [
                {
                  tabButton: "Profile",
                  tabContent: p(
                    "span",
                    null,
                    p(
                      "p",
                      null,
                      "Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."
                    ),
                    p("br", null),
                    p(
                      "p",
                      null,
                      "Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."
                    ),
                    p("br", null),
                    p("p", null, "This is very nice.")
                  )
                },
                {
                  tabButton: "Settings",
                  tabContent: p(
                    "span",
                    null,
                    p(
                      "p",
                      null,
                      "Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas."
                    ),
                    p("br", null),
                    p(
                      "p",
                      null,
                      "Dramatically maintain clicks-and-mortar solutions without functional solutions."
                    )
                  )
                },
                {
                  tabButton: "Options",
                  tabContent: p(
                    "span",
                    null,
                    p(
                      "p",
                      null,
                      "Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.",
                      " "
                    ),
                    p("br", null),
                    p(
                      "p",
                      null,
                      "Dynamically innovate resource-leveling customer service for state of the art customer service."
                    )
                  )
                }
              ]
            })
          ),
          p(a.a, { language: "jsx", style: l.prism }, f),
          p("h2", null, "Props"),
          p(a.a, { language: "jsx", style: l.prism }, h)
        );
      });
    },
    Sq8v: function(e, t) {
      function n(e) {
        return (n =
          "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  "function" === typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function r(t) {
        return (
          "function" === typeof Symbol && "symbol" === n(Symbol.iterator)
            ? (e.exports = r = function(e) {
                return n(e);
              })
            : (e.exports = r = function(e) {
                return e &&
                  "function" === typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : n(e);
              }),
          r(t)
        );
      }
      e.exports = r;
    },
    "SuH/": function(e, t, n) {
      "use strict";
      var r = n("kOwS"),
        o = n("vYYK"),
        i = n("doui"),
        a = n("q1tI"),
        l = n.n(a),
        s = n("TSYQ"),
        c = n.n(s),
        u = n("7VIw"),
        d = n.n(u),
        p = n("R/WZ"),
        f = n("dfam"),
        h = n("JrkS"),
        v = n("mtPR"),
        m = n("i4t8"),
        b = n("eDSW"),
        g = function(e) {
          return {
            root: {
              marginTop: "20px",
              paddingLeft: "0",
              marginBottom: "0",
              overflow: "visible !important",
              lineHeight: "24px",
              textTransform: "uppercase",
              fontSize: "12px",
              fontWeight: "500",
              position: "relative",
              display: "block",
              color: "inherit"
            },
            flexContainer: Object(o.a)({}, e.breakpoints.down("xs"), {
              display: "flex",
              flexWrap: "wrap"
            }),
            displayNone: { display: "none !important" },
            fixed: { overflow: "visible !important" },
            horizontalDisplay: { display: "block" },
            pills: {
              float: "left",
              position: "relative",
              display: "block",
              borderRadius: "30px",
              minWidth: "100px",
              textAlign: "center",
              transition: "all .3s",
              padding: "10px 15px",
              color: "#555555",
              height: "auto",
              opacity: "1",
              maxWidth: "100%",
              margin: "0 5px"
            },
            pillsWithIcons: { borderRadius: "4px" },
            tabIcon: {
              width: "30px",
              height: "30px",
              display: "block",
              margin: "15px 0 !important",
              "&, & *": { letterSpacing: "normal !important" }
            },
            horizontalPills: {
              width: "100%",
              float: "none !important",
              "& + button": { margin: "10px 0" }
            },
            contentWrapper: { marginTop: "20px" },
            primary: {
              "&,&:hover": {
                color: "#FFFFFF",
                backgroundColor: b.r,
                boxShadow:
                  "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(156, 39, 176, 0.4)"
              }
            },
            info: {
              "&,&:hover": {
                color: "#FFFFFF",
                backgroundColor: b.o,
                boxShadow:
                  "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(76, 175, 80, 0.4)"
              }
            },
            success: {
              "&,&:hover": {
                color: "#FFFFFF",
                backgroundColor: b.w,
                boxShadow:
                  "0 2px 2px 0 rgba(76, 175, 80, 0.14), 0 3px 1px -2px rgba(76, 175, 80, 0.2), 0 1px 5px 0 rgba(76, 175, 80, 0.12)"
              }
            },
            warning: {
              "&,&:hover": {
                color: "#FFFFFF",
                backgroundColor: b.B,
                boxShadow:
                  "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(255, 152, 0, 0.4)"
              }
            },
            danger: {
              "&,&:hover": {
                color: "#FFFFFF",
                backgroundColor: b.i,
                boxShadow:
                  "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(255, 152, 0, 0.4)"
              }
            },
            rose: {
              "&,&:hover": {
                color: "#FFFFFF",
                backgroundColor: b.t,
                boxShadow:
                  "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(233, 30, 99, 0.4)"
              }
            },
            alignCenter: { alignItems: "center", justifyContent: "center" },
            tabWrapper: {
              color: "inherit",
              position: "relative",
              fontSize: "12px",
              lineHeight: "24px",
              fontWeight: "500",
              textTransform: "uppercase",
              "&,& *": { letterSpacing: "normal" }
            }
          };
        };
      n.d(t, "a", function() {
        return w;
      });
      var y = l.a.createElement,
        x = Object(p.a)(g);
      function w(e) {
        var t,
          n = l.a.useState(e.active),
          a = Object(i.a)(n, 2),
          s = a[0],
          u = a[1],
          p = x(),
          b = e.tabs,
          g = e.direction,
          w = e.color,
          S = e.horizontal,
          C = e.alignCenter,
          O = c()(
            ((t = {}),
            Object(o.a)(t, p.flexContainer, !0),
            Object(o.a)(t, p.horizontalDisplay, void 0 !== S),
            t)
          ),
          E = y(
            f.a,
            {
              classes: {
                root: p.root,
                fixed: p.fixed,
                flexContainer: O,
                indicator: p.displayNone
              },
              value: s,
              onChange: function(e, t) {
                u(t);
              },
              centered: C
            },
            b.map(function(e, t) {
              var n,
                i = {};
              void 0 !== e.tabIcon &&
                (i.icon = y(e.tabIcon, { className: p.tabIcon }));
              var a = c()(
                ((n = {}),
                Object(o.a)(n, p.pills, !0),
                Object(o.a)(n, p.horizontalPills, void 0 !== S),
                Object(o.a)(n, p.pillsWithIcons, void 0 !== e.tabIcon),
                n)
              );
              return y(
                h.a,
                Object(r.a)({ label: e.tabButton, key: t }, i, {
                  classes: { root: a, selected: p[w], wrapper: p.tabWrapper }
                })
              );
            })
          ),
          T = y(
            "div",
            { className: p.contentWrapper },
            y(
              d.a,
              {
                axis: "rtl" === g ? "x-reverse" : "x",
                index: s,
                onChangeIndex: function(e) {
                  u(e);
                }
              },
              b.map(function(e, t) {
                return y(
                  "div",
                  { className: p.tabContent, key: t },
                  e.tabContent
                );
              })
            )
          );
        return void 0 !== S
          ? y(v.a, null, y(m.a, S.tabsGrid, E), y(m.a, S.contentGrid, T))
          : y("div", null, E, T);
      }
      w.defaultProps = { active: 0, color: "primary" };
    },
    TGjl: function(e, t, n) {
      "use strict";
      var r = n("DHks");
      (t.__esModule = !0),
        (t.default = t.animationEnd = t.animationDelay = t.animationTiming = t.animationDuration = t.animationName = t.transitionEnd = t.transitionDuration = t.transitionDelay = t.transitionTiming = t.transitionProperty = t.transform = void 0);
      var o,
        i,
        a,
        l,
        s,
        c,
        u,
        d,
        p,
        f,
        h,
        v = r(n("21XG")),
        m = "transform";
      if (
        ((t.transform = m),
        (t.animationEnd = a),
        (t.transitionEnd = i),
        (t.transitionDelay = u),
        (t.transitionTiming = c),
        (t.transitionDuration = s),
        (t.transitionProperty = l),
        (t.animationDelay = h),
        (t.animationTiming = f),
        (t.animationDuration = p),
        (t.animationName = d),
        v.default)
      ) {
        var b = (function() {
          for (
            var e,
              t,
              n = document.createElement("div").style,
              r = {
                O: function(e) {
                  return "o" + e.toLowerCase();
                },
                Moz: function(e) {
                  return e.toLowerCase();
                },
                Webkit: function(e) {
                  return "webkit" + e;
                },
                ms: function(e) {
                  return "MS" + e;
                }
              },
              o = Object.keys(r),
              i = "",
              a = 0;
            a < o.length;
            a++
          ) {
            var l = o[a];
            if (l + "TransitionProperty" in n) {
              (i = "-" + l.toLowerCase()),
                (e = r[l]("TransitionEnd")),
                (t = r[l]("AnimationEnd"));
              break;
            }
          }
          !e && "transitionProperty" in n && (e = "transitionend");
          !t && "animationName" in n && (t = "animationend");
          return (n = null), { animationEnd: t, transitionEnd: e, prefix: i };
        })();
        (o = b.prefix),
          (t.transitionEnd = i = b.transitionEnd),
          (t.animationEnd = a = b.animationEnd),
          (t.transform = m = o + "-" + m),
          (t.transitionProperty = l = o + "-transition-property"),
          (t.transitionDuration = s = o + "-transition-duration"),
          (t.transitionDelay = u = o + "-transition-delay"),
          (t.transitionTiming = c = o + "-transition-timing-function"),
          (t.animationName = d = o + "-animation-name"),
          (t.animationDuration = p = o + "-animation-duration"),
          (t.animationTiming = f = o + "-animation-delay"),
          (t.animationDelay = h = o + "-animation-timing-function");
      }
      var g = {
        transform: m,
        end: i,
        property: l,
        timing: c,
        delay: u,
        duration: s
      };
      t.default = g;
    },
    UlPe: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      t.default = { RESISTANCE_COEF: 0.6, UNCERTAINTY_THRESHOLD: 3 };
    },
    VJ99: function(e, t, n) {
      var r = n("Sq8v"),
        o = n("FRve");
      e.exports = function(e, t) {
        return !t || ("object" !== r(t) && "function" !== typeof t) ? o(e) : t;
      };
    },
    ZZx6: function(e, t) {
      e.exports = function(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = {},
          i = Object.keys(e);
        for (r = 0; r < i.length; r++)
          (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o;
      };
    },
    dfam: function(e, t, n) {
      "use strict";
      var r,
        o = n("wx14"),
        i = n("ODXe"),
        a = n("Ff2n"),
        l = n("rePB"),
        s = n("q1tI"),
        c = n.n(s),
        u = (n("17x9"), n("2W6z"), n("iuhU")),
        d = n("l3Wi"),
        p = n("g+pH"),
        f = !(
          "undefined" === typeof window ||
          !window.document ||
          !window.document.createElement
        );
      function h() {
        if (r) return r;
        if (!f || !window.document.body) return "indeterminate";
        var e = window.document.createElement("div");
        return (
          e.appendChild(document.createTextNode("ABCD")),
          (e.dir = "rtl"),
          (e.style.fontSize = "14px"),
          (e.style.width = "4px"),
          (e.style.height = "1px"),
          (e.style.position = "absolute"),
          (e.style.top = "-1000px"),
          (e.style.overflow = "scroll"),
          document.body.appendChild(e),
          (r = "reverse"),
          e.scrollLeft > 0
            ? (r = "default")
            : ((e.scrollLeft = 1), 0 === e.scrollLeft && (r = "negative")),
          document.body.removeChild(e),
          r
        );
      }
      function v(e, t) {
        var n = e.scrollLeft;
        if ("rtl" !== t) return n;
        var r = h();
        if ("indeterminate" === r) return Number.NaN;
        switch (r) {
          case "negative":
            return e.scrollWidth - e.clientWidth + n;
          case "reverse":
            return e.scrollWidth - e.clientWidth - n;
        }
        return n;
      }
      function m(e) {
        return (1 + Math.sin(Math.PI * e - Math.PI / 2)) / 2;
      }
      var b = function(e, t, n) {
          var r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {},
            o =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : function() {},
            i = r.ease,
            a = void 0 === i ? m : i,
            l = r.duration,
            s = void 0 === l ? 300 : l,
            c = null,
            u = t[e],
            d = !1,
            p = function() {
              d = !0;
            };
          return u === n
            ? (o(new Error("Element already at target position")), p)
            : (requestAnimationFrame(function r(i) {
                if (d) o(new Error("Animation cancelled"));
                else {
                  null === c && (c = i);
                  var l = Math.min(1, (i - c) / s);
                  (t[e] = a(l) * (n - u) + u),
                    l >= 1
                      ? requestAnimationFrame(function() {
                          o(null);
                        })
                      : requestAnimationFrame(r);
                }
              }),
              p);
        },
        g = {
          width: 99,
          height: 99,
          position: "absolute",
          top: -9999,
          overflow: "scroll"
        };
      function y(e) {
        var t = e.onChange,
          n = Object(a.a)(e, ["onChange"]),
          r = c.a.useRef(),
          i = c.a.useRef(null),
          l = function() {
            r.current = i.current.offsetHeight - i.current.clientHeight;
          };
        return (
          c.a.useEffect(
            function() {
              var e = Object(d.a)(function() {
                var e = r.current;
                l(), e !== r.current && t(r.current);
              });
              return (
                window.addEventListener("resize", e),
                function() {
                  e.clear(), window.removeEventListener("resize", e);
                }
              );
            },
            [t]
          ),
          c.a.useEffect(
            function() {
              l(), t(r.current);
            },
            [t]
          ),
          c.a.createElement("div", Object(o.a)({ style: g, ref: i }, n))
        );
      }
      var x = n("H2TA"),
        w = n("mVKy"),
        S = c.a.forwardRef(function(e, t) {
          var n = e.classes,
            r = e.className,
            i = e.color,
            l = e.orientation,
            s = Object(a.a)(e, [
              "classes",
              "className",
              "color",
              "orientation"
            ]);
          return c.a.createElement(
            "span",
            Object(o.a)(
              {
                className: Object(u.a)(
                  n.root,
                  n["color".concat(Object(w.a)(i))],
                  r,
                  { vertical: n.vertical }[l]
                ),
                ref: t
              },
              s
            )
          );
        }),
        C = Object(x.a)(
          function(e) {
            return {
              root: {
                position: "absolute",
                height: 2,
                bottom: 0,
                width: "100%",
                transition: e.transitions.create()
              },
              colorPrimary: { backgroundColor: e.palette.primary.main },
              colorSecondary: { backgroundColor: e.palette.secondary.main },
              vertical: { height: "100%", width: 2, right: 0 }
            };
          },
          { name: "PrivateTabIndicator" }
        )(S),
        O = n("As0B"),
        E = Object(O.a)(
          c.a.createElement("path", {
            d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
          }),
          "KeyboardArrowLeft"
        ),
        T = Object(O.a)(
          c.a.createElement("path", {
            d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
          }),
          "KeyboardArrowRight"
        ),
        j = n("VD++"),
        N = c.a.createElement(E, { fontSize: "small" }),
        k = c.a.createElement(T, { fontSize: "small" }),
        M = c.a.forwardRef(function(e, t) {
          var n = e.classes,
            r = e.className,
            i = e.direction,
            l = e.orientation,
            s = e.visible,
            d = Object(a.a)(e, [
              "classes",
              "className",
              "direction",
              "orientation",
              "visible"
            ]),
            p = Object(u.a)(n.root, r, { vertical: n.vertical }[l]);
          return s
            ? c.a.createElement(
                j.a,
                Object(o.a)(
                  {
                    component: "div",
                    className: p,
                    ref: t,
                    role: null,
                    tabIndex: null
                  },
                  d
                ),
                "left" === i ? N : k
              )
            : c.a.createElement("div", { className: p });
        }),
        P = Object(x.a)(
          {
            root: { width: 40, flexShrink: 0 },
            vertical: {
              width: "100%",
              height: 40,
              "& svg": { transform: "rotate(90deg)" }
            }
          },
          { name: "PrivateTabScrollButton" }
        )(M),
        L = n("Ovef"),
        I = c.a.forwardRef(function(e, t) {
          var n = e.action,
            r = e.centered,
            s = void 0 !== r && r,
            f = e.children,
            m = e.classes,
            g = e.className,
            x = e.component,
            w = void 0 === x ? "div" : x,
            S = e.indicatorColor,
            O = void 0 === S ? "secondary" : S,
            E = e.onChange,
            T = e.orientation,
            j = void 0 === T ? "horizontal" : T,
            N = e.ScrollButtonComponent,
            k = void 0 === N ? P : N,
            M = e.scrollButtons,
            I = void 0 === M ? "auto" : M,
            D = e.TabIndicatorProps,
            H = void 0 === D ? {} : D,
            W = e.textColor,
            F = void 0 === W ? "inherit" : W,
            R = e.theme,
            X = e.value,
            _ = e.variant,
            z = void 0 === _ ? "standard" : _,
            B = Object(a.a)(e, [
              "action",
              "centered",
              "children",
              "classes",
              "className",
              "component",
              "indicatorColor",
              "onChange",
              "orientation",
              "ScrollButtonComponent",
              "scrollButtons",
              "TabIndicatorProps",
              "textColor",
              "theme",
              "value",
              "variant"
            ]),
            V = "scrollable" === z,
            A = "rtl" === R.direction,
            Y = "vertical" === j,
            U = Y ? "scrollTop" : "scrollLeft",
            q = Y ? "top" : "left",
            G = Y ? "bottom" : "right",
            K = Y ? "clientHeight" : "clientWidth",
            J = Y ? "height" : "width",
            Q = c.a.useState(!1),
            Z = Object(i.a)(Q, 2),
            $ = Z[0],
            ee = Z[1],
            te = c.a.useState({}),
            ne = Object(i.a)(te, 2),
            re = ne[0],
            oe = ne[1],
            ie = c.a.useState({ start: !1, end: !1 }),
            ae = Object(i.a)(ie, 2),
            le = ae[0],
            se = ae[1],
            ce = c.a.useState({ overflow: "hidden", marginBottom: null }),
            ue = Object(i.a)(ce, 2),
            de = ue[0],
            pe = ue[1],
            fe = new Map(),
            he = c.a.useRef(null),
            ve = c.a.useRef(null),
            me = function() {
              var e,
                t,
                n = he.current;
              if (n) {
                var r = n.getBoundingClientRect();
                e = {
                  clientWidth: n.clientWidth,
                  scrollLeft: n.scrollLeft,
                  scrollTop: n.scrollTop,
                  scrollLeftNormalized: v(n, R.direction),
                  scrollWidth: n.scrollWidth,
                  top: r.top,
                  bottom: r.bottom,
                  left: r.left,
                  right: r.right
                };
              }
              if (n && !1 !== X) {
                var o = ve.current.children;
                if (o.length > 0) {
                  var i = o[fe.get(X)];
                  t = i ? i.getBoundingClientRect() : null;
                }
              }
              return { tabsMeta: e, tabMeta: t };
            },
            be = Object(L.a)(function() {
              var e,
                t = me(),
                n = t.tabsMeta,
                r = t.tabMeta,
                o = 0;
              if (r && n)
                if (Y) o = Math.round(r.top - n.top + n.scrollTop);
                else {
                  var i = A
                    ? n.scrollLeftNormalized + n.clientWidth - n.scrollWidth
                    : n.scrollLeft;
                  o = Math.round(r.left - n.left + i);
                }
              var a =
                ((e = {}),
                Object(l.a)(e, q, o),
                Object(l.a)(e, J, r ? Math.round(r[J]) : 0),
                e);
              (a[q] === re[q] && a[J] === re[J]) ||
                isNaN(a[q]) ||
                isNaN(a[J]) ||
                oe(a);
            }),
            ge = function(e) {
              b(U, he.current, e);
            },
            ye = function(e) {
              var t = he.current[U];
              Y
                ? (t += e)
                : ((t += e * (A ? -1 : 1)),
                  (t *= A && "reverse" === h() ? -1 : 1)),
                ge(t);
            },
            xe = function() {
              ye(-he.current[K]);
            },
            we = function() {
              ye(he.current[K]);
            },
            Se = c.a.useCallback(function(e) {
              pe({ overflow: null, marginBottom: -e });
            }, []),
            Ce = Object(L.a)(function() {
              var e = me(),
                t = e.tabsMeta,
                n = e.tabMeta;
              if (n && t)
                if (n[q] < t[q]) {
                  var r = t[U] + (n[q] - t[q]);
                  ge(r);
                } else if (n[G] > t[G]) {
                  var o = t[U] + (n[G] - t[G]);
                  ge(o);
                }
            }),
            Oe = Object(L.a)(function() {
              if (V && "off" !== I) {
                var e,
                  t,
                  n = he.current,
                  r = n.scrollTop,
                  o = n.scrollHeight,
                  i = n.clientHeight,
                  a = n.scrollWidth,
                  l = n.clientWidth;
                if (Y) (e = r > 1), (t = r < o - i - 1);
                else {
                  var s = v(he.current, R.direction);
                  (e = A ? s < a - l - 1 : s > 1),
                    (t = A ? s > 1 : s < a - l - 1);
                }
                (e === le.start && t === le.end) || se({ start: e, end: t });
              }
            });
          c.a.useEffect(
            function() {
              var e = Object(d.a)(function() {
                  be(), Oe();
                }),
                t = Object(p.a)(he.current);
              return (
                t.addEventListener("resize", e),
                function() {
                  e.clear(), t.removeEventListener("resize", e);
                }
              );
            },
            [be, Oe]
          );
          var Ee = c.a.useCallback(
            Object(d.a)(function() {
              Oe();
            })
          );
          c.a.useEffect(
            function() {
              return function() {
                Ee.clear();
              };
            },
            [Ee]
          ),
            c.a.useEffect(function() {
              ee(!0);
            }, []),
            c.a.useEffect(function() {
              be(), Oe();
            }),
            c.a.useEffect(
              function() {
                Ce();
              },
              [Ce, re]
            ),
            c.a.useImperativeHandle(
              n,
              function() {
                return { updateIndicator: be };
              },
              [be]
            );
          var Te = c.a.createElement(
              C,
              Object(o.a)(
                { className: m.indicator, orientation: j, color: O },
                H,
                { style: Object(o.a)({}, re, {}, H.style) }
              )
            ),
            je = 0,
            Ne = c.a.Children.map(f, function(e) {
              if (!c.a.isValidElement(e)) return null;
              var t = void 0 === e.props.value ? je : e.props.value;
              fe.set(t, je);
              var n = t === X;
              return (
                (je += 1),
                c.a.cloneElement(e, {
                  fullWidth: "fullWidth" === z,
                  indicator: n && !$ && Te,
                  selected: n,
                  onChange: E,
                  textColor: F,
                  value: t
                })
              );
            }),
            ke = (function() {
              var e = {};
              e.scrollbarSizeListener = V
                ? c.a.createElement(y, {
                    className: m.scrollable,
                    onChange: Se
                  })
                : null;
              var t = le.start || le.end,
                n = V && (("auto" === I && t) || "desktop" === I || "on" === I);
              return (
                (e.scrollButtonStart = n
                  ? c.a.createElement(k, {
                      orientation: j,
                      direction: A ? "right" : "left",
                      onClick: xe,
                      visible: le.start,
                      className: Object(u.a)(
                        m.scrollButtons,
                        "on" !== I && m.scrollButtonsDesktop
                      )
                    })
                  : null),
                (e.scrollButtonEnd = n
                  ? c.a.createElement(k, {
                      orientation: j,
                      direction: A ? "left" : "right",
                      onClick: we,
                      visible: le.end,
                      className: Object(u.a)(
                        m.scrollButtons,
                        "on" !== I && m.scrollButtonsDesktop
                      )
                    })
                  : null),
                e
              );
            })();
          return c.a.createElement(
            w,
            Object(o.a)(
              { className: Object(u.a)(m.root, g, Y && m.vertical), ref: t },
              B
            ),
            ke.scrollButtonStart,
            ke.scrollbarSizeListener,
            c.a.createElement(
              "div",
              {
                className: Object(u.a)(m.scroller, V ? m.scrollable : m.fixed),
                style: de,
                ref: he,
                onScroll: Ee
              },
              c.a.createElement(
                "div",
                {
                  className: Object(u.a)(
                    m.flexContainer,
                    Y && m.flexContainerVertical,
                    s && !V && m.centered
                  ),
                  ref: ve,
                  role: "tablist"
                },
                Ne
              ),
              $ && Te
            ),
            ke.scrollButtonEnd
          );
        });
      t.a = Object(x.a)(
        function(e) {
          return {
            root: {
              overflow: "hidden",
              minHeight: 48,
              WebkitOverflowScrolling: "touch",
              display: "flex"
            },
            vertical: { flexDirection: "column" },
            flexContainer: { display: "flex" },
            flexContainerVertical: { flexDirection: "column" },
            centered: { justifyContent: "center" },
            scroller: {
              position: "relative",
              display: "inline-block",
              flex: "1 1 auto",
              whiteSpace: "nowrap"
            },
            fixed: { overflowX: "hidden", width: "100%" },
            scrollable: {
              overflowX: "scroll",
              scrollbarWidth: "none",
              "&::-webkit-scrollbar": { display: "none" }
            },
            scrollButtons: {},
            scrollButtonsDesktop: Object(l.a)({}, e.breakpoints.down("xs"), {
              display: "none"
            }),
            indicator: {}
          };
        },
        { name: "MuiTabs", withTheme: !0 }
      )(I);
    },
    doui: function(e, t, n) {
      "use strict";
      var r = n("p0XB"),
        o = n.n(r);
      var i = n("XXOK"),
        a = n.n(i);
      function l(e, t) {
        return (
          (function(e) {
            if (o()(e)) return e;
          })(e) ||
          (function(e, t) {
            var n = [],
              r = !0,
              o = !1,
              i = void 0;
            try {
              for (
                var l, s = a()(e);
                !(r = (l = s.next()).done) &&
                (n.push(l.value), !t || n.length !== t);
                r = !0
              );
            } catch (c) {
              (o = !0), (i = c);
            } finally {
              try {
                r || null == s.return || s.return();
              } finally {
                if (o) throw i;
              }
            }
            return n;
          })(e, t) ||
          (function() {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance"
            );
          })()
        );
      }
      n.d(t, "a", function() {
        return l;
      });
    },
    "g+pH": function(e, t, n) {
      "use strict";
      var r = n("gk1O");
      t.a = function(e) {
        return Object(r.a)(e).defaultView || window;
      };
    },
    gk1O: function(e, t, n) {
      "use strict";
      t.a = function(e) {
        return (e && e.ownerDocument) || document;
      };
    },
    hR4y: function(e, t) {
      function n(t) {
        return (
          (e.exports = n = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          n(t)
        );
      }
      e.exports = n;
    },
    jhvK: function(e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/documentation/navpills",
        function() {
          var e = n("QJFr");
          return { page: e.default || e };
        }
      ]);
    },
    jiea: function(e, t, n) {
      var r = n("+7Xe");
      e.exports = function(e, t) {
        if ("function" !== typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 }
        })),
          t && r(e, t);
      };
    },
    l3Wi: function(e, t, n) {
      "use strict";
      function r(e) {
        var t,
          n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 166;
        function r() {
          for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
          var a = this;
          clearTimeout(t),
            (t = setTimeout(function() {
              e.apply(a, o);
            }, n));
        }
        return (
          (r.clear = function() {
            clearTimeout(t);
          }),
          r
        );
      }
      n.d(t, "a", function() {
        return r;
      });
    },
    qhz5: function(e, t, n) {
      "use strict";
      var r = n("DHks");
      (t.__esModule = !0), (t.default = void 0);
      var o = function() {};
      r(n("21XG")).default &&
        (o = document.addEventListener
          ? function(e, t, n, r) {
              return e.removeEventListener(t, n, r || !1);
            }
          : document.attachEvent
          ? function(e, t, n) {
              return e.detachEvent("on" + t, n);
            }
          : void 0);
      var i = o;
      (t.default = i), (e.exports = t.default);
    },
    rRnn: function(e, t, n) {
      "use strict";
      var r = n("tV5V");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = r(n("q1tI")),
        i =
          (r(n("2W6z")),
          function(e) {
            e.index;
            var t = e.children;
            o.default.Children.count(t);
          });
      t.default = i;
    },
    tV5V: function(e, t) {
      e.exports = function(e) {
        return e && e.__esModule ? e : { default: e };
      };
    },
    xZgz: function(e, t, n) {
      "use strict";
      var r = n("OYUV");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getDomTreeShapes = O),
        (t.findNativeHandler = T),
        (t.default = void 0);
      var o = r(n("G2ut")),
        i = r(n("PTHm")),
        a = r(n("MOn9")),
        l = r(n("NRM5")),
        s = r(n("VJ99")),
        c = r(n("hR4y")),
        u = r(n("jiea")),
        d = r(n("q1tI")),
        p = r(n("17x9")),
        f = (r(n("2W6z")), r(n("TGjl"))),
        h = r(n("Hoj9")),
        v = r(n("qhz5")),
        m = n("KJF0");
      function b(e, t, n, r) {
        return (
          (0, h.default)(e, t, n, r),
          {
            remove: function() {
              (0, v.default)(e, t, n, r);
            }
          }
        );
      }
      var g = { direction: "ltr", display: "flex", willChange: "transform" },
        y = {
          width: "100%",
          WebkitFlexShrink: 0,
          flexShrink: 0,
          overflow: "auto"
        },
        x = {
          root: {
            x: { overflowX: "hidden" },
            "x-reverse": { overflowX: "hidden" },
            y: { overflowY: "hidden" },
            "y-reverse": { overflowY: "hidden" }
          },
          flexDirection: {
            x: "row",
            "x-reverse": "row-reverse",
            y: "column",
            "y-reverse": "column-reverse"
          },
          transform: {
            x: function(e) {
              return "translate(".concat(-e, "%, 0)");
            },
            "x-reverse": function(e) {
              return "translate(".concat(e, "%, 0)");
            },
            y: function(e) {
              return "translate(0, ".concat(-e, "%)");
            },
            "y-reverse": function(e) {
              return "translate(0, ".concat(e, "%)");
            }
          },
          length: {
            x: "width",
            "x-reverse": "width",
            y: "height",
            "y-reverse": "height"
          },
          rotationMatrix: {
            x: { x: [1, 0], y: [0, 1] },
            "x-reverse": { x: [-1, 0], y: [0, 1] },
            y: { x: [0, 1], y: [1, 0] },
            "y-reverse": { x: [0, -1], y: [1, 0] }
          },
          scrollPosition: {
            x: "scrollLeft",
            "x-reverse": "scrollLeft",
            y: "scrollTop",
            "y-reverse": "scrollTop"
          },
          scrollLength: {
            x: "scrollWidth",
            "x-reverse": "scrollWidth",
            y: "scrollHeight",
            "y-reverse": "scrollHeight"
          },
          clientLength: {
            x: "clientWidth",
            "x-reverse": "clientWidth",
            y: "clientHeight",
            "y-reverse": "clientHeight"
          }
        };
      function w(e, t) {
        var n = t.duration,
          r = t.easeFunction,
          o = t.delay;
        return ""
          .concat(e, " ")
          .concat(n, " ")
          .concat(r, " ")
          .concat(o);
      }
      function S(e, t) {
        var n = x.rotationMatrix[t];
        return {
          pageX: n.x[0] * e.pageX + n.x[1] * e.pageY,
          pageY: n.y[0] * e.pageX + n.y[1] * e.pageY
        };
      }
      function C(e) {
        return (e.touches = [{ pageX: e.pageX, pageY: e.pageY }]), e;
      }
      function O(e, t) {
        for (var n = []; e && e !== t && !e.hasAttribute("data-swipeable"); ) {
          var r = window.getComputedStyle(e);
          "absolute" === r.getPropertyValue("position") ||
          "hidden" === r.getPropertyValue("overflow-x")
            ? (n = [])
            : ((e.clientWidth > 0 && e.scrollWidth > e.clientWidth) ||
                (e.clientHeight > 0 && e.scrollHeight > e.clientHeight)) &&
              n.push({
                element: e,
                scrollWidth: e.scrollWidth,
                scrollHeight: e.scrollHeight,
                clientWidth: e.clientWidth,
                clientHeight: e.clientHeight,
                scrollLeft: e.scrollLeft,
                scrollTop: e.scrollTop
              }),
            (e = e.parentNode);
        }
        return n;
      }
      var E = null;
      function T(e) {
        var t = e.domTreeShapes,
          n = e.pageX,
          r = e.startX,
          o = e.axis;
        return t.some(function(e) {
          var t = n >= r;
          ("x" !== o && "y" !== o) || (t = !t);
          var i = e[x.scrollPosition[o]],
            a = i > 0,
            l = i + e[x.clientLength[o]] < e[x.scrollLength[o]];
          return !!((t && l) || (!t && a)) && ((E = e.element), !0);
        });
      }
      var j = (function(e) {
        function t(e) {
          var n;
          return (
            (0, a.default)(this, t),
            ((n = (0, s.default)(
              this,
              (0, c.default)(t).call(this, e)
            )).rootNode = null),
            (n.containerNode = null),
            (n.ignoreNextScrollEvents = !1),
            (n.viewLength = 0),
            (n.startX = 0),
            (n.lastX = 0),
            (n.vx = 0),
            (n.startY = 0),
            (n.isSwiping = void 0),
            (n.started = !1),
            (n.startIndex = 0),
            (n.transitionListener = null),
            (n.touchMoveListener = null),
            (n.activeSlide = null),
            (n.indexCurrent = null),
            (n.firstRenderTimeout = null),
            (n.setRootNode = function(e) {
              n.rootNode = e;
            }),
            (n.setContainerNode = function(e) {
              n.containerNode = e;
            }),
            (n.setActiveSlide = function(e) {
              (n.activeSlide = e), n.updateHeight();
            }),
            (n.handleSwipeStart = function(e) {
              var t = n.props.axis,
                r = S(e.touches[0], t);
              (n.viewLength = n.rootNode.getBoundingClientRect()[x.length[t]]),
                (n.startX = r.pageX),
                (n.lastX = r.pageX),
                (n.vx = 0),
                (n.startY = r.pageY),
                (n.isSwiping = void 0),
                (n.started = !0);
              var o = window.getComputedStyle(n.containerNode),
                i =
                  o.getPropertyValue("-webkit-transform") ||
                  o.getPropertyValue("transform");
              if (i && "none" !== i) {
                var a = i
                    .split("(")[1]
                    .split(")")[0]
                    .split(","),
                  l = window.getComputedStyle(n.rootNode),
                  s = S(
                    { pageX: parseInt(a[4], 10), pageY: parseInt(a[5], 10) },
                    t
                  );
                n.startIndex =
                  -s.pageX /
                    (n.viewLength -
                      parseInt(l.paddingLeft, 10) -
                      parseInt(l.paddingRight, 10)) || 0;
              }
            }),
            (n.handleSwipeMove = function(e) {
              if (n.started) {
                if (null === E || E === n.rootNode) {
                  var t = n.props,
                    r = t.axis,
                    o = t.children,
                    i = t.ignoreNativeScroll,
                    a = t.onSwitching,
                    l = t.resistance,
                    s = S(e.touches[0], r);
                  if (void 0 === n.isSwiping) {
                    var c = Math.abs(s.pageX - n.startX),
                      u = Math.abs(s.pageY - n.startY),
                      p = c > u && c > m.constant.UNCERTAINTY_THRESHOLD;
                    if (
                      !l &&
                      ("y" === r || "y-reverse" === r) &&
                      ((0 === n.indexCurrent && n.startX < s.pageX) ||
                        (n.indexCurrent ===
                          d.default.Children.count(n.props.children) - 1 &&
                          n.startX > s.pageX))
                    )
                      return void (n.isSwiping = !1);
                    if (
                      (c > u && e.preventDefault(),
                      !0 === p || u > m.constant.UNCERTAINTY_THRESHOLD)
                    )
                      return (n.isSwiping = p), void (n.startX = s.pageX);
                  }
                  if (!0 === n.isSwiping) {
                    e.preventDefault(),
                      (n.vx = 0.5 * n.vx + 0.5 * (s.pageX - n.lastX)),
                      (n.lastX = s.pageX);
                    var f = (0, m.computeIndex)({
                        children: o,
                        resistance: l,
                        pageX: s.pageX,
                        startIndex: n.startIndex,
                        startX: n.startX,
                        viewLength: n.viewLength
                      }),
                      h = f.index,
                      v = f.startX;
                    if (null === E && !i)
                      if (
                        T({
                          domTreeShapes: O(e.target, n.rootNode),
                          startX: n.startX,
                          pageX: s.pageX,
                          axis: r
                        })
                      )
                        return;
                    v ? (n.startX = v) : null === E && (E = n.rootNode),
                      n.setIndexCurrent(h);
                    var b = function() {
                      a && a(h, "move");
                    };
                    (!n.state.displaySameSlide && n.state.isDragging) ||
                      n.setState({ displaySameSlide: !1, isDragging: !0 }, b),
                      b();
                  }
                }
              } else n.handleTouchStart(e);
            }),
            (n.handleSwipeEnd = function() {
              if (
                ((E = null),
                n.started && ((n.started = !1), !0 === n.isSwiping))
              ) {
                var e,
                  t = n.state.indexLatest,
                  r = n.indexCurrent,
                  o = t - r;
                e =
                  Math.abs(n.vx) > n.props.threshold
                    ? n.vx > 0
                      ? Math.floor(r)
                      : Math.ceil(r)
                    : Math.abs(o) > n.props.hysteresis
                    ? o > 0
                      ? Math.floor(r)
                      : Math.ceil(r)
                    : t;
                var i = d.default.Children.count(n.props.children) - 1;
                e < 0 ? (e = 0) : e > i && (e = i),
                  n.setIndexCurrent(e),
                  n.setState({ indexLatest: e, isDragging: !1 }, function() {
                    n.props.onSwitching && n.props.onSwitching(e, "end"),
                      n.props.onChangeIndex &&
                        e !== t &&
                        n.props.onChangeIndex(e, t, { reason: "swipe" }),
                      r === t && n.handleTransitionEnd();
                  });
              }
            }),
            (n.handleTouchStart = function(e) {
              n.props.onTouchStart && n.props.onTouchStart(e),
                n.handleSwipeStart(e);
            }),
            (n.handleTouchEnd = function(e) {
              n.props.onTouchEnd && n.props.onTouchEnd(e), n.handleSwipeEnd(e);
            }),
            (n.handleMouseDown = function(e) {
              n.props.onMouseDown && n.props.onMouseDown(e),
                e.persist(),
                n.handleSwipeStart(C(e));
            }),
            (n.handleMouseUp = function(e) {
              n.props.onMouseUp && n.props.onMouseUp(e), n.handleSwipeEnd(C(e));
            }),
            (n.handleMouseLeave = function(e) {
              n.props.onMouseLeave && n.props.onMouseLeave(e),
                n.started && n.handleSwipeEnd(C(e));
            }),
            (n.handleMouseMove = function(e) {
              n.props.onMouseMove && n.props.onMouseMove(e),
                n.started && n.handleSwipeMove(C(e));
            }),
            (n.handleScroll = function(e) {
              if (
                (n.props.onScroll && n.props.onScroll(e),
                e.target === n.rootNode)
              )
                if (n.ignoreNextScrollEvents) n.ignoreNextScrollEvents = !1;
                else {
                  var t = n.state.indexLatest,
                    r =
                      Math.ceil(e.target.scrollLeft / e.target.clientWidth) + t;
                  (n.ignoreNextScrollEvents = !0),
                    (e.target.scrollLeft = 0),
                    n.props.onChangeIndex &&
                      r !== t &&
                      n.props.onChangeIndex(r, t, { reason: "focus" });
                }
            }),
            (n.updateHeight = function() {
              if (null !== n.activeSlide) {
                var e = n.activeSlide.children[0];
                void 0 !== e &&
                  void 0 !== e.offsetHeight &&
                  n.state.heightLatest !== e.offsetHeight &&
                  n.setState({ heightLatest: e.offsetHeight });
              }
            }),
            (n.state = {
              indexLatest: e.index,
              isDragging: !1,
              renderOnlyActive: !e.disableLazyLoading,
              heightLatest: 0,
              displaySameSlide: !0
            }),
            n.setIndexCurrent(e.index),
            n
          );
        }
        return (
          (0, u.default)(t, e),
          (0, l.default)(t, [
            {
              key: "getChildContext",
              value: function() {
                var e = this;
                return {
                  swipeableViews: {
                    slideUpdateHeight: function() {
                      e.updateHeight();
                    }
                  }
                };
              }
            },
            {
              key: "componentDidMount",
              value: function() {
                var e = this;
                (this.transitionListener = b(
                  this.containerNode,
                  f.default.end,
                  function(t) {
                    t.target === e.containerNode && e.handleTransitionEnd();
                  }
                )),
                  (this.touchMoveListener = b(
                    this.rootNode,
                    "touchmove",
                    function(t) {
                      e.props.disabled || e.handleSwipeMove(t);
                    },
                    { passive: !1 }
                  )),
                  this.props.disableLazyLoading ||
                    (this.firstRenderTimeout = setTimeout(function() {
                      e.setState({ renderOnlyActive: !1 });
                    }, 0)),
                  this.props.action &&
                    this.props.action({ updateHeight: this.updateHeight });
              }
            },
            {
              key: "componentWillReceiveProps",
              value: function(e) {
                var t = e.index;
                "number" === typeof t &&
                  t !== this.props.index &&
                  (this.setIndexCurrent(t),
                  this.setState({
                    displaySameSlide: (0, m.getDisplaySameSlide)(this.props, e),
                    indexLatest: t
                  }));
              }
            },
            {
              key: "componentWillUnmount",
              value: function() {
                this.transitionListener.remove(),
                  this.touchMoveListener.remove(),
                  clearTimeout(this.firstRenderTimeout);
              }
            },
            {
              key: "setIndexCurrent",
              value: function(e) {
                if (
                  (this.props.animateTransitions ||
                    this.indexCurrent === e ||
                    this.handleTransitionEnd(),
                  (this.indexCurrent = e),
                  this.containerNode)
                ) {
                  var t = this.props.axis,
                    n = x.transform[t](100 * e);
                  (this.containerNode.style.WebkitTransform = n),
                    (this.containerNode.style.transform = n);
                }
              }
            },
            {
              key: "handleTransitionEnd",
              value: function() {
                this.props.onTransitionEnd &&
                  (this.state.displaySameSlide ||
                    this.state.isDragging ||
                    this.props.onTransitionEnd());
              }
            },
            {
              key: "render",
              value: function() {
                var e,
                  t,
                  n = this,
                  r = this.props,
                  a = (r.action, r.animateHeight),
                  l = r.animateTransitions,
                  s = r.axis,
                  c = r.children,
                  u = r.containerStyle,
                  p = r.disabled,
                  f = (r.disableLazyLoading, r.enableMouseEvents),
                  h =
                    (r.hysteresis,
                    r.ignoreNativeScroll,
                    r.index,
                    r.onChangeIndex,
                    r.onSwitching,
                    r.onTransitionEnd,
                    r.resistance,
                    r.slideStyle),
                  v = r.slideClassName,
                  m = r.springConfig,
                  b = r.style,
                  S =
                    (r.threshold,
                    (0, i.default)(r, [
                      "action",
                      "animateHeight",
                      "animateTransitions",
                      "axis",
                      "children",
                      "containerStyle",
                      "disabled",
                      "disableLazyLoading",
                      "enableMouseEvents",
                      "hysteresis",
                      "ignoreNativeScroll",
                      "index",
                      "onChangeIndex",
                      "onSwitching",
                      "onTransitionEnd",
                      "resistance",
                      "slideStyle",
                      "slideClassName",
                      "springConfig",
                      "style",
                      "threshold"
                    ])),
                  C = this.state,
                  O = C.displaySameSlide,
                  E = C.heightLatest,
                  T = C.indexLatest,
                  j = C.isDragging,
                  N = C.renderOnlyActive,
                  k = p
                    ? {}
                    : {
                        onTouchStart: this.handleTouchStart,
                        onTouchEnd: this.handleTouchEnd
                      },
                  M =
                    !p && f
                      ? {
                          onMouseDown: this.handleMouseDown,
                          onMouseUp: this.handleMouseUp,
                          onMouseLeave: this.handleMouseLeave,
                          onMouseMove: this.handleMouseMove
                        }
                      : {},
                  P = (0, o.default)({}, y, h);
                if (j || !l || O)
                  (e = "all 0s ease 0s"), (t = "all 0s ease 0s");
                else if (
                  ((e = w("transform", m)),
                  (t = w("-webkit-transform", m)),
                  0 !== E)
                ) {
                  var L = ", ".concat(w("height", m));
                  (e += L), (t += L);
                }
                var I = {
                  height: null,
                  WebkitFlexDirection: x.flexDirection[s],
                  flexDirection: x.flexDirection[s],
                  WebkitTransition: t,
                  transition: e
                };
                if (!N) {
                  var D = x.transform[s](100 * this.indexCurrent);
                  (I.WebkitTransform = D), (I.transform = D);
                }
                return (
                  a && (I.height = E),
                  d.default.createElement(
                    "div",
                    (0, o.default)(
                      {
                        ref: this.setRootNode,
                        style: (0, o.default)({}, x.root[s], b)
                      },
                      S,
                      k,
                      M,
                      { onScroll: this.handleScroll }
                    ),
                    d.default.createElement(
                      "div",
                      {
                        ref: this.setContainerNode,
                        style: (0, o.default)({}, I, g, u),
                        className: "react-swipeable-view-container"
                      },
                      d.default.Children.map(c, function(e, t) {
                        if (N && t !== T) return null;
                        var r,
                          o = !0;
                        return (
                          t === T &&
                            ((o = !1),
                            a &&
                              ((r = n.setActiveSlide),
                              (P.overflowY = "hidden"))),
                          d.default.createElement(
                            "div",
                            {
                              ref: r,
                              style: P,
                              className: v,
                              "aria-hidden": o,
                              "data-swipeable": "true"
                            },
                            e
                          )
                        );
                      })
                    )
                  )
                );
              }
            }
          ]),
          t
        );
      })(d.default.Component);
      (j.displayName = "ReactSwipableView"),
        (j.propTypes = {}),
        (j.defaultProps = {
          animateHeight: !1,
          animateTransitions: !0,
          axis: "x",
          disabled: !1,
          disableLazyLoading: !1,
          enableMouseEvents: !1,
          hysteresis: 0.6,
          ignoreNativeScroll: !1,
          index: 0,
          threshold: 5,
          springConfig: {
            duration: "0.35s",
            easeFunction: "cubic-bezier(0.15, 0.3, 0.25, 1)",
            delay: "0s"
          },
          resistance: !1
        }),
        (j.childContextTypes = {
          swipeableViews: p.default.shape({ slideUpdateHeight: p.default.func })
        });
      var N = j;
      t.default = N;
    }
  },
  [["jhvK", 1, 0]]
]);
