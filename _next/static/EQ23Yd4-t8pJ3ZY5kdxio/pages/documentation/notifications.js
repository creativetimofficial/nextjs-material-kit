(window.webpackJsonp = window.webpackJsonp || []).push([
  [23],
  {
    "5rCv": function(e, n, a) {
      "use strict";
      var t = a("TqRt");
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.default = void 0);
      var o = t(a("q1tI")),
        r = (0, t(a("8/g6")).default)(
          o.default.createElement("path", {
            d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
          }),
          "Check"
        );
      n.default = r;
    },
    "8/g6": function(e, n, a) {
      "use strict";
      var t = a("TqRt");
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.default = function(e, n) {
          var a = r.default.memo(
            r.default.forwardRef(function(n, a) {
              return r.default.createElement(
                i.default,
                (0, o.default)({ ref: a }, n),
                e
              );
            })
          );
          0;
          return (a.muiName = i.default.muiName), a;
        });
      var o = t(a("pVnL")),
        r = t(a("q1tI")),
        i = t(a("UJJ5"));
    },
    AqyA: function(e, n, a) {
      "use strict";
      var t = a("wx14"),
        o = a("Ff2n"),
        r = a("q1tI"),
        i = a.n(r),
        l = (a("17x9"), a("iuhU")),
        c = a("H2TA"),
        s = a("mVKy"),
        d = i.a.forwardRef(function(e, n) {
          var a = e.classes,
            r = e.className,
            c = e.color,
            d = void 0 === c ? "inherit" : c,
            u = e.component,
            f = void 0 === u ? "span" : u,
            p = e.fontSize,
            m = void 0 === p ? "default" : p,
            b = Object(o.a)(e, [
              "classes",
              "className",
              "color",
              "component",
              "fontSize"
            ]);
          return i.a.createElement(
            f,
            Object(t.a)(
              {
                className: Object(l.a)(
                  "material-icons",
                  a.root,
                  r,
                  "inherit" !== d && a["color".concat(Object(s.a)(d))],
                  "default" !== m && a["fontSize".concat(Object(s.a)(m))]
                ),
                "aria-hidden": !0,
                ref: n
              },
              b
            )
          );
        });
      (d.muiName = "Icon"),
        (n.a = Object(c.a)(
          function(e) {
            return {
              root: {
                userSelect: "none",
                fontSize: e.typography.pxToRem(24),
                width: "1em",
                height: "1em",
                overflow: "hidden",
                flexShrink: 0
              },
              colorPrimary: { color: e.palette.primary.main },
              colorSecondary: { color: e.palette.secondary.main },
              colorAction: { color: e.palette.action.active },
              colorError: { color: e.palette.error.main },
              colorDisabled: { color: e.palette.action.disabled },
              fontSizeInherit: { fontSize: "inherit" },
              fontSizeSmall: { fontSize: e.typography.pxToRem(20) },
              fontSizeLarge: { fontSize: e.typography.pxToRem(36) }
            };
          },
          { name: "MuiIcon" }
        )(d));
    },
    BaT1: function(e, n, a) {
      "use strict";
      a.d(n, "a", function() {
        return c;
      });
      var t = a("q1tI"),
        o = a.n(t),
        r = a("R/WZ"),
        i = o.a.createElement,
        l = Object(r.a)({
          clearfix: {
            "&:after,&:before": { display: "table", content: '" "' },
            "&:after": { clear: "both" }
          }
        });
      function c() {
        var e = l();
        return i("div", { className: e.clearfix });
      }
    },
    FoiA: function(e, n, a) {
      "use strict";
      var t = a("doui"),
        o = a("q1tI"),
        r = a.n(o),
        i = a("17x9"),
        l = a.n(i),
        c = a("R/WZ"),
        s = a("wx14"),
        d = a("Ff2n"),
        u = a("rePB"),
        f = a("iuhU"),
        p = a("H2TA"),
        m = a("kKAo"),
        b = a("ofer"),
        g = a("ye/S"),
        h = r.a.forwardRef(function(e, n) {
          var a = e.action,
            t = e.classes,
            o = e.className,
            i = e.message,
            l = Object(d.a)(e, ["action", "classes", "className", "message"]);
          return r.a.createElement(
            m.a,
            Object(s.a)(
              {
                component: b.a,
                variant: "body2",
                variantMapping: { body1: "div", body2: "div" },
                role: "alertdialog",
                square: !0,
                elevation: 6,
                className: Object(f.a)(t.root, o),
                ref: n
              },
              l
            ),
            r.a.createElement("div", { className: t.message }, i),
            a ? r.a.createElement("div", { className: t.action }, a) : null
          );
        }),
        v = Object(p.a)(
          function(e) {
            var n = "light" === e.palette.type ? 0.8 : 0.98,
              a = Object(g.b)(e.palette.background.default, n);
            return {
              root: Object(u.a)(
                {
                  color: e.palette.getContrastText(a),
                  backgroundColor: a,
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  padding: "6px 16px",
                  borderRadius: e.shape.borderRadius,
                  flexGrow: 1
                },
                e.breakpoints.up("sm"),
                { flexGrow: "initial", minWidth: 288 }
              ),
              message: { padding: "8px 0" },
              action: {
                display: "flex",
                alignItems: "center",
                marginLeft: "auto",
                paddingLeft: 16,
                marginRight: -8
              }
            };
          },
          { name: "MuiSnackbarContent" }
        )(h),
        y = a("PsDL"),
        x = a("AqyA"),
        k = a("ZPUd"),
        j = a.n(k),
        O = a("zrwo"),
        S = a("eDSW"),
        R = {
          root: Object(O.a)({}, S.j, {
            position: "relative",
            padding: "20px 15px",
            lineHeight: "20px",
            marginBottom: "20px",
            fontSize: "14px",
            backgroundColor: "white",
            color: "#555555",
            borderRadius: "0px",
            maxWidth: "100%",
            minWidth: "auto",
            boxShadow:
              "0 12px 20px -10px rgba(255, 255, 255, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 255, 255, 0.2)"
          }),
          info: Object(O.a)(
            { backgroundColor: "#00d3ee", color: "#ffffff" },
            S.m
          ),
          success: Object(O.a)(
            { backgroundColor: "#5cb860", color: "#ffffff" },
            S.u
          ),
          warning: Object(O.a)(
            { backgroundColor: "#ffa21a", color: "#ffffff" },
            S.z
          ),
          danger: Object(O.a)(
            { backgroundColor: "#f55a4e", color: "#ffffff" },
            S.g
          ),
          primary: Object(O.a)(
            { backgroundColor: "#af2cc5", color: "#ffffff" },
            S.p
          ),
          message: {
            padding: "0",
            display: "block",
            maxWidth: "89%",
            "&,& *": { letterSpacing: "normal" }
          },
          close: { width: "14px", height: "14px" },
          iconButton: {
            width: "24px",
            height: "24px",
            float: "right",
            fontSize: "1.5rem",
            fontWeight: "500",
            lineHeight: "1",
            position: "absolute",
            right: "-4px",
            top: "0",
            padding: "0"
          },
          icon: { display: "block", float: "left", marginRight: "1.071rem" },
          container: Object(O.a)({}, S.f, { position: "relative" })
        };
      a.d(n, "a", function() {
        return T;
      });
      var C = r.a.createElement,
        w = Object(c.a)(R);
      function T(e) {
        var n = e.message,
          a = e.color,
          o = e.close,
          i = e.icon,
          l = w(),
          c = [];
        void 0 !== o &&
          (c = [
            C(
              y.a,
              {
                className: l.iconButton,
                key: "close",
                "aria-label": "Close",
                color: "inherit",
                onClick: function() {
                  p(null);
                }
              },
              C(j.a, { className: l.close })
            )
          ]);
        var s = null;
        switch (typeof i) {
          case "object":
            s = C(e.icon, { className: l.icon });
            break;
          case "string":
            s = C(x.a, { className: l.icon }, e.icon);
            break;
          default:
            s = null;
        }
        var d = r.a.useState(
            C(v, {
              message: C("div", null, s, n, void 0 !== o ? c : null),
              classes: {
                root: l.root + " " + l[a],
                message: l.message + " " + l.container
              }
            })
          ),
          u = Object(t.a)(d, 2),
          f = u[0],
          p = u[1];
        return f;
      }
      T.propTypes = {
        message: l.a.node.isRequired,
        color: l.a.oneOf(["info", "success", "warning", "danger", "primary"]),
        close: l.a.bool,
        icon: l.a.oneOfType([l.a.object, l.a.string])
      };
    },
    "Hk+Y": function(e, n, a) {
      "use strict";
      var t = a("TqRt");
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.default = void 0);
      var o = t(a("pVnL")),
        r = a("04ZO"),
        i = t(a("HWkK"));
      var l = function(e, n) {
        return (0, r.withStyles)(
          e,
          (0, o.default)({ defaultTheme: i.default }, n)
        );
      };
      n.default = l;
    },
    LXx7: function(e, n, a) {
      "use strict";
      a.r(n);
      var t = a("0iUn"),
        o = a("sLSF"),
        r = a("MI3g"),
        i = a("a7VT"),
        l = a("Tit0"),
        c = a("q1tI"),
        s = a.n(c),
        d = a("pzeu"),
        u = a("zR9M"),
        f = a("Hk+Y"),
        p = a.n(f),
        m = a("5rCv"),
        b = a.n(m),
        g = a("xV1m"),
        h = a.n(g),
        v = a("FoiA"),
        y = a("BaT1"),
        x = a("Oref"),
        k = s.a.createElement,
        j = (function(e) {
          function n() {
            return (
              Object(t.a)(this, n),
              Object(r.a)(this, Object(i.a)(n).apply(this, arguments))
            );
          }
          return (
            Object(l.a)(n, e),
            Object(o.a)(n, [
              {
                key: "render",
                value: function() {
                  var e = this.props.classes;
                  return k(
                    x.a,
                    null,
                    k("h1", null, "Notifications / Snackbars"),
                    k("h2", null, "Styles"),
                    k(
                      "p",
                      null,
                      "You will find all the styles for these components in",
                      k("br", null),
                      k(
                        "code",
                        null,
                        "src/assets/jss/nextjs-material-kit/components/snackbarContentStyle.js"
                      ),
                      "."
                    ),
                    k(
                      "p",
                      null,
                      "We restyled the classic Material UI SnackbarContent and gave it a more attractive look."
                    ),
                    k(
                      "div",
                      { className: e.bdExample },
                      k(v.a, {
                        message: k(
                          "span",
                          null,
                          k("b", null, "INFO ALERT:"),
                          " You've got some friends nearby, stop looking at your phone and find them..."
                        ),
                        close: !0,
                        color: "info",
                        icon: "info_outline"
                      }),
                      k(v.a, {
                        message: k(
                          "span",
                          null,
                          k("b", null, "SUCCESS ALERT:"),
                          " You've got some friends nearby, stop looking at your phone and find them..."
                        ),
                        close: !0,
                        color: "success",
                        icon: b.a
                      }),
                      k(v.a, {
                        message: k(
                          "span",
                          null,
                          k("b", null, "WARNING ALERT:"),
                          " You've got some friends nearby, stop looking at your phone and find them..."
                        ),
                        close: !0,
                        color: "warning",
                        icon: h.a
                      }),
                      k(v.a, {
                        message: k(
                          "span",
                          null,
                          k("b", null, "DANGER ALERT:"),
                          " You've got some friends nearby, stop looking at your phone and find them..."
                        ),
                        close: !0,
                        color: "danger",
                        icon: "info_outline"
                      }),
                      k(y.a, null)
                    ),
                    k(
                      d.a,
                      { language: "jsx", style: u.prism },
                      'import React from "react";\n// @material-ui/icons\nimport Check from "@material-ui/icons/Check";\nimport Warning from "@material-ui/icons/Warning";\n// core components\nimport SnackbarContent from "components/Snackbar/SnackbarContent.js";\nimport Clearfix from "components/Clearfix/Clearfix.js";\n\nexport default function Notifications(){\n  return (\n    <div>\n      <SnackbarContent\n        message={\n            <span>\n              <b>INFO ALERT:</b> You\'ve got some friends nearby, stop looking\n              at your phone and find them...\n            </span>\n        }\n        close\n        color="info"\n        icon="info_outline"\n      />\n      <SnackbarContent\n        message={\n          <span>\n            <b>SUCCESS ALERT:</b> You\'ve got some friends nearby, stop looking\n            at your phone and find them...\n          </span>\n        }\n        close\n        color="success"\n        icon={Check}\n      />\n      <SnackbarContent\n        message={\n          <span>\n            <b>WARNING ALERT:</b> You\'ve got some friends nearby, stop looking\n            at your phone and find them...\n          </span>\n        }\n        close\n        color="warning"\n        icon={Warning}\n      />\n      <SnackbarContent\n        message={\n          <span>\n            <b>DANGER ALERT:</b> You\'ve got some friends nearby, stop looking\n            at your phone and find them...\n          </span>\n        }\n        close\n        color="danger"\n        icon="info_outline"\n      />\n      <Clearfix />\n    </div>\n  );\n}'
                    ),
                    k("h2", null, "Props"),
                    k(
                      d.a,
                      { language: "jsx", style: u.prism },
                      'SnackbarContent.propTypes = {\n  message: PropTypes.node.isRequired,\n  color: PropTypes.oneOf(["info", "success", "warning", "danger", "primary"]),\n  close: PropTypes.bool,\n  icon: PropTypes.func\n};'
                    ),
                    k(
                      "p",
                      null,
                      "Beside these props, you can check out the",
                      " ",
                      k(
                        "a",
                        {
                          href:
                            "https://material-ui-next.com/demos/snackbars/?ref=creativetim",
                          target: "_blank"
                        },
                        "official material-ui documentation"
                      ),
                      "."
                    )
                  );
                }
              }
            ]),
            n
          );
        })(s.a.Component);
      n.default = p()({
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
      })(j);
    },
    PsDL: function(e, n, a) {
      "use strict";
      var t = a("wx14"),
        o = a("Ff2n"),
        r = a("q1tI"),
        i = a.n(r),
        l = (a("17x9"), a("iuhU")),
        c = a("H2TA"),
        s = a("ye/S"),
        d = a("VD++"),
        u = a("mVKy"),
        f = i.a.forwardRef(function(e, n) {
          var a = e.edge,
            r = void 0 !== a && a,
            c = e.children,
            s = e.classes,
            f = e.className,
            p = e.color,
            m = void 0 === p ? "default" : p,
            b = e.disabled,
            g = void 0 !== b && b,
            h = e.disableFocusRipple,
            v = void 0 !== h && h,
            y = e.size,
            x = void 0 === y ? "medium" : y,
            k = Object(o.a)(e, [
              "edge",
              "children",
              "classes",
              "className",
              "color",
              "disabled",
              "disableFocusRipple",
              "size"
            ]);
          return i.a.createElement(
            d.a,
            Object(t.a)(
              {
                className: Object(l.a)(
                  s.root,
                  f,
                  "default" !== m && s["color".concat(Object(u.a)(m))],
                  g && s.disabled,
                  { small: s["size".concat(Object(u.a)(x))] }[x],
                  { start: s.edgeStart, end: s.edgeEnd }[r]
                ),
                centerRipple: !0,
                focusRipple: !v,
                disabled: g,
                ref: n
              },
              k
            ),
            i.a.createElement("span", { className: s.label }, c)
          );
        });
      n.a = Object(c.a)(
        function(e) {
          return {
            root: {
              textAlign: "center",
              flex: "0 0 auto",
              fontSize: e.typography.pxToRem(24),
              padding: 12,
              borderRadius: "50%",
              overflow: "visible",
              color: e.palette.action.active,
              transition: e.transitions.create("background-color", {
                duration: e.transitions.duration.shortest
              }),
              "&:hover": {
                backgroundColor: Object(s.c)(
                  e.palette.action.active,
                  e.palette.action.hoverOpacity
                ),
                "@media (hover: none)": { backgroundColor: "transparent" }
              },
              "&$disabled": {
                backgroundColor: "transparent",
                color: e.palette.action.disabled
              }
            },
            edgeStart: { marginLeft: -12, "$sizeSmall&": { marginLeft: -3 } },
            edgeEnd: { marginRight: -12, "$sizeSmall&": { marginRight: -3 } },
            colorInherit: { color: "inherit" },
            colorPrimary: {
              color: e.palette.primary.main,
              "&:hover": {
                backgroundColor: Object(s.c)(
                  e.palette.primary.main,
                  e.palette.action.hoverOpacity
                ),
                "@media (hover: none)": { backgroundColor: "transparent" }
              }
            },
            colorSecondary: {
              color: e.palette.secondary.main,
              "&:hover": {
                backgroundColor: Object(s.c)(
                  e.palette.secondary.main,
                  e.palette.action.hoverOpacity
                ),
                "@media (hover: none)": { backgroundColor: "transparent" }
              }
            },
            disabled: {},
            sizeSmall: { padding: 3, fontSize: e.typography.pxToRem(18) },
            label: {
              width: "100%",
              display: "flex",
              alignItems: "inherit",
              justifyContent: "inherit"
            }
          };
        },
        { name: "MuiIconButton" }
      )(f);
    },
    UJJ5: function(e, n, a) {
      "use strict";
      a.r(n);
      var t = a("HR5l");
      a.d(n, "default", function() {
        return t.a;
      });
    },
    ZPUd: function(e, n, a) {
      "use strict";
      var t = a("TqRt");
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.default = void 0);
      var o = t(a("q1tI")),
        r = (0, t(a("8/g6")).default)(
          o.default.createElement("path", {
            d:
              "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
          }),
          "Close"
        );
      n.default = r;
    },
    doui: function(e, n, a) {
      "use strict";
      var t = a("p0XB"),
        o = a.n(t);
      var r = a("XXOK"),
        i = a.n(r);
      function l(e, n) {
        return (
          (function(e) {
            if (o()(e)) return e;
          })(e) ||
          (function(e, n) {
            var a = [],
              t = !0,
              o = !1,
              r = void 0;
            try {
              for (
                var l, c = i()(e);
                !(t = (l = c.next()).done) &&
                (a.push(l.value), !n || a.length !== n);
                t = !0
              );
            } catch (s) {
              (o = !0), (r = s);
            } finally {
              try {
                t || null == c.return || c.return();
              } finally {
                if (o) throw r;
              }
            }
            return a;
          })(e, n) ||
          (function() {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance"
            );
          })()
        );
      }
      a.d(n, "a", function() {
        return l;
      });
    },
    rkaR: function(e, n, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/documentation/notifications",
        function() {
          var e = a("LXx7");
          return { page: e.default || e };
        }
      ]);
    },
    xV1m: function(e, n, a) {
      "use strict";
      var t = a("TqRt");
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.default = void 0);
      var o = t(a("q1tI")),
        r = (0, t(a("8/g6")).default)(
          o.default.createElement("path", {
            d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"
          }),
          "Warning"
        );
      n.default = r;
    }
  },
  [["rkaR", 1, 0]]
]);
