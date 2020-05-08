(window.webpackJsonp = window.webpackJsonp || []).push([
  [27],
  {
    "6foH": function(t, e, r) {
      var n, i, o;
      (i = []),
        void 0 ===
          (o =
            "function" ===
            typeof (n = function() {
              "use strict";
              var t = "14.0.2";
              function e(t) {
                t.parentElement.removeChild(t);
              }
              function r(t) {
                return null !== t && void 0 !== t;
              }
              function n(t) {
                t.preventDefault();
              }
              function i(t) {
                return "number" === typeof t && !isNaN(t) && isFinite(t);
              }
              function o(t, e, r) {
                r > 0 &&
                  (u(t, e),
                  setTimeout(function() {
                    c(t, e);
                  }, r));
              }
              function a(t) {
                return Math.max(Math.min(t, 100), 0);
              }
              function s(t) {
                return Array.isArray(t) ? t : [t];
              }
              function l(t) {
                var e = (t = String(t)).split(".");
                return e.length > 1 ? e[1].length : 0;
              }
              function u(t, e) {
                t.classList ? t.classList.add(e) : (t.className += " " + e);
              }
              function c(t, e) {
                t.classList
                  ? t.classList.remove(e)
                  : (t.className = t.className.replace(
                      new RegExp(
                        "(^|\\b)" + e.split(" ").join("|") + "(\\b|$)",
                        "gi"
                      ),
                      " "
                    ));
              }
              function p(t) {
                var e = void 0 !== window.pageXOffset,
                  r = "CSS1Compat" === (t.compatMode || ""),
                  n = e
                    ? window.pageXOffset
                    : r
                    ? t.documentElement.scrollLeft
                    : t.body.scrollLeft,
                  i = e
                    ? window.pageYOffset
                    : r
                    ? t.documentElement.scrollTop
                    : t.body.scrollTop;
                return { x: n, y: i };
              }
              function f(t, e) {
                return 100 / (e - t);
              }
              function d(t, e) {
                return (100 * e) / (t[1] - t[0]);
              }
              function m(t, e) {
                for (var r = 1; t >= e[r]; ) r += 1;
                return r;
              }
              function h(t, e, r) {
                if (r >= t.slice(-1)[0]) return 100;
                var n = m(r, t),
                  i = t[n - 1],
                  o = t[n],
                  a = e[n - 1],
                  s = e[n];
                return (
                  a +
                  (function(t, e) {
                    return d(t, t[0] < 0 ? e + Math.abs(t[0]) : e - t[0]);
                  })([i, o], r) /
                    f(a, s)
                );
              }
              function g(t, e, r, n) {
                if (100 === n) return n;
                var i = m(n, t),
                  o = t[i - 1],
                  a = t[i];
                return r
                  ? n - o > (a - o) / 2
                    ? a
                    : o
                  : e[i - 1]
                  ? t[i - 1] +
                    (function(t, e) {
                      return Math.round(t / e) * e;
                    })(n - t[i - 1], e[i - 1])
                  : n;
              }
              function v(e, r, n) {
                var o;
                if (("number" === typeof r && (r = [r]), !Array.isArray(r)))
                  throw new Error(
                    "noUiSlider (" + t + "): 'range' contains invalid value."
                  );
                if (
                  !i(
                    (o = "min" === e ? 0 : "max" === e ? 100 : parseFloat(e))
                  ) ||
                  !i(r[0])
                )
                  throw new Error(
                    "noUiSlider (" + t + "): 'range' value isn't numeric."
                  );
                n.xPct.push(o),
                  n.xVal.push(r[0]),
                  o
                    ? n.xSteps.push(!isNaN(r[1]) && r[1])
                    : isNaN(r[1]) || (n.xSteps[0] = r[1]),
                  n.xHighestCompleteStep.push(0);
              }
              function b(t, e, r) {
                if (e)
                  if (r.xVal[t] !== r.xVal[t + 1]) {
                    r.xSteps[t] =
                      d([r.xVal[t], r.xVal[t + 1]], e) /
                      f(r.xPct[t], r.xPct[t + 1]);
                    var n = (r.xVal[t + 1] - r.xVal[t]) / r.xNumSteps[t],
                      i = Math.ceil(Number(n.toFixed(3)) - 1),
                      o = r.xVal[t] + r.xNumSteps[t] * i;
                    r.xHighestCompleteStep[t] = o;
                  } else r.xSteps[t] = r.xHighestCompleteStep[t] = r.xVal[t];
              }
              function S(t, e, r) {
                var n;
                (this.xPct = []),
                  (this.xVal = []),
                  (this.xSteps = [r || !1]),
                  (this.xNumSteps = [!1]),
                  (this.xHighestCompleteStep = []),
                  (this.snap = e);
                var i = [];
                for (n in t) t.hasOwnProperty(n) && i.push([t[n], n]);
                for (
                  i.length && "object" === typeof i[0][0]
                    ? i.sort(function(t, e) {
                        return t[0][0] - e[0][0];
                      })
                    : i.sort(function(t, e) {
                        return t[0] - e[0];
                      }),
                    n = 0;
                  n < i.length;
                  n++
                )
                  v(i[n][1], i[n][0], this);
                for (
                  this.xNumSteps = this.xSteps.slice(0), n = 0;
                  n < this.xNumSteps.length;
                  n++
                )
                  b(n, this.xNumSteps[n], this);
              }
              (S.prototype.getMargin = function(e) {
                var r = this.xNumSteps[0];
                if (r && (e / r) % 1 !== 0)
                  throw new Error(
                    "noUiSlider (" +
                      t +
                      "): 'limit', 'margin' and 'padding' must be divisible by step."
                  );
                return 2 === this.xPct.length && d(this.xVal, e);
              }),
                (S.prototype.toStepping = function(t) {
                  return (t = h(this.xVal, this.xPct, t));
                }),
                (S.prototype.fromStepping = function(t) {
                  return (function(t, e, r) {
                    if (r >= 100) return t.slice(-1)[0];
                    var n = m(r, e),
                      i = t[n - 1],
                      o = t[n],
                      a = e[n - 1],
                      s = e[n];
                    return (function(t, e) {
                      return (e * (t[1] - t[0])) / 100 + t[0];
                    })([i, o], (r - a) * f(a, s));
                  })(this.xVal, this.xPct, t);
                }),
                (S.prototype.getStep = function(t) {
                  return (t = g(this.xPct, this.xSteps, this.snap, t));
                }),
                (S.prototype.getDefaultStep = function(t, e, r) {
                  var n = m(t, this.xPct);
                  return (
                    (100 === t || (e && t === this.xPct[n - 1])) &&
                      (n = Math.max(n - 1, 1)),
                    (this.xVal[n] - this.xVal[n - 1]) / r
                  );
                }),
                (S.prototype.getNearbySteps = function(t) {
                  var e = m(t, this.xPct);
                  return {
                    stepBefore: {
                      startValue: this.xVal[e - 2],
                      step: this.xNumSteps[e - 2],
                      highestStep: this.xHighestCompleteStep[e - 2]
                    },
                    thisStep: {
                      startValue: this.xVal[e - 1],
                      step: this.xNumSteps[e - 1],
                      highestStep: this.xHighestCompleteStep[e - 1]
                    },
                    stepAfter: {
                      startValue: this.xVal[e],
                      step: this.xNumSteps[e],
                      highestStep: this.xHighestCompleteStep[e]
                    }
                  };
                }),
                (S.prototype.countStepDecimals = function() {
                  var t = this.xNumSteps.map(l);
                  return Math.max.apply(null, t);
                }),
                (S.prototype.convert = function(t) {
                  return this.getStep(this.toStepping(t));
                });
              var w = {
                to: function(t) {
                  return void 0 !== t && t.toFixed(2);
                },
                from: Number
              };
              function x(e) {
                if (
                  (function(t) {
                    return (
                      "object" === typeof t &&
                      "function" === typeof t.to &&
                      "function" === typeof t.from
                    );
                  })(e)
                )
                  return !0;
                throw new Error(
                  "noUiSlider (" +
                    t +
                    "): 'format' requires 'to' and 'from' methods."
                );
              }
              function y(e, r) {
                if (!i(r))
                  throw new Error(
                    "noUiSlider (" + t + "): 'step' is not numeric."
                  );
                e.singleStep = r;
              }
              function E(e, r) {
                if ("object" !== typeof r || Array.isArray(r))
                  throw new Error(
                    "noUiSlider (" + t + "): 'range' is not an object."
                  );
                if (void 0 === r.min || void 0 === r.max)
                  throw new Error(
                    "noUiSlider (" + t + "): Missing 'min' or 'max' in 'range'."
                  );
                if (r.min === r.max)
                  throw new Error(
                    "noUiSlider (" +
                      t +
                      "): 'range' 'min' and 'max' cannot be equal."
                  );
                e.spectrum = new S(r, e.snap, e.singleStep);
              }
              function C(e, r) {
                if (((r = s(r)), !Array.isArray(r) || !r.length))
                  throw new Error(
                    "noUiSlider (" + t + "): 'start' option is incorrect."
                  );
                (e.handles = r.length), (e.start = r);
              }
              function N(e, r) {
                if (((e.snap = r), "boolean" !== typeof r))
                  throw new Error(
                    "noUiSlider (" + t + "): 'snap' option must be a boolean."
                  );
              }
              function U(e, r) {
                if (((e.animate = r), "boolean" !== typeof r))
                  throw new Error(
                    "noUiSlider (" +
                      t +
                      "): 'animate' option must be a boolean."
                  );
              }
              function k(e, r) {
                if (((e.animationDuration = r), "number" !== typeof r))
                  throw new Error(
                    "noUiSlider (" +
                      t +
                      "): 'animationDuration' option must be a number."
                  );
              }
              function P(e, r) {
                var n,
                  i = [!1];
                if (
                  ("lower" === r
                    ? (r = [!0, !1])
                    : "upper" === r && (r = [!1, !0]),
                  !0 === r || !1 === r)
                ) {
                  for (n = 1; n < e.handles; n++) i.push(r);
                  i.push(!1);
                } else {
                  if (
                    !Array.isArray(r) ||
                    !r.length ||
                    r.length !== e.handles + 1
                  )
                    throw new Error(
                      "noUiSlider (" +
                        t +
                        "): 'connect' option doesn't match handle count."
                    );
                  i = r;
                }
                e.connect = i;
              }
              function V(e, r) {
                switch (r) {
                  case "horizontal":
                    e.ort = 0;
                    break;
                  case "vertical":
                    e.ort = 1;
                    break;
                  default:
                    throw new Error(
                      "noUiSlider (" + t + "): 'orientation' option is invalid."
                    );
                }
              }
              function A(e, r) {
                if (!i(r))
                  throw new Error(
                    "noUiSlider (" + t + "): 'margin' option must be numeric."
                  );
                if (
                  0 !== r &&
                  ((e.margin = e.spectrum.getMargin(r)), !e.margin)
                )
                  throw new Error(
                    "noUiSlider (" +
                      t +
                      "): 'margin' option is only supported on linear sliders."
                  );
              }
              function M(e, r) {
                if (!i(r))
                  throw new Error(
                    "noUiSlider (" + t + "): 'limit' option must be numeric."
                  );
                if (
                  ((e.limit = e.spectrum.getMargin(r)),
                  !e.limit || e.handles < 2)
                )
                  throw new Error(
                    "noUiSlider (" +
                      t +
                      "): 'limit' option is only supported on linear sliders with 2 or more handles."
                  );
              }
              function O(e, r) {
                if (!i(r) && !Array.isArray(r))
                  throw new Error(
                    "noUiSlider (" +
                      t +
                      "): 'padding' option must be numeric or array of exactly 2 numbers."
                  );
                if (Array.isArray(r) && 2 !== r.length && !i(r[0]) && !i(r[1]))
                  throw new Error(
                    "noUiSlider (" +
                      t +
                      "): 'padding' option must be numeric or array of exactly 2 numbers."
                  );
                if (0 !== r) {
                  if (
                    (Array.isArray(r) || (r = [r, r]),
                    (e.padding = [
                      e.spectrum.getMargin(r[0]),
                      e.spectrum.getMargin(r[1])
                    ]),
                    !1 === e.padding[0] || !1 === e.padding[1])
                  )
                    throw new Error(
                      "noUiSlider (" +
                        t +
                        "): 'padding' option is only supported on linear sliders."
                    );
                  if (e.padding[0] < 0 || e.padding[1] < 0)
                    throw new Error(
                      "noUiSlider (" +
                        t +
                        "): 'padding' option must be a positive number(s)."
                    );
                  if (e.padding[0] + e.padding[1] > 100)
                    throw new Error(
                      "noUiSlider (" +
                        t +
                        "): 'padding' option must not exceed 100% of the range."
                    );
                }
              }
              function L(e, r) {
                switch (r) {
                  case "ltr":
                    e.dir = 0;
                    break;
                  case "rtl":
                    e.dir = 1;
                    break;
                  default:
                    throw new Error(
                      "noUiSlider (" +
                        t +
                        "): 'direction' option was not recognized."
                    );
                }
              }
              function D(e, r) {
                if ("string" !== typeof r)
                  throw new Error(
                    "noUiSlider (" +
                      t +
                      "): 'behaviour' must be a string containing options."
                  );
                var n = r.indexOf("tap") >= 0,
                  i = r.indexOf("drag") >= 0,
                  o = r.indexOf("fixed") >= 0,
                  a = r.indexOf("snap") >= 0,
                  s = r.indexOf("hover") >= 0,
                  l = r.indexOf("unconstrained") >= 0;
                if (o) {
                  if (2 !== e.handles)
                    throw new Error(
                      "noUiSlider (" +
                        t +
                        "): 'fixed' behaviour must be used with 2 handles"
                    );
                  A(e, e.start[1] - e.start[0]);
                }
                if (l && (e.margin || e.limit))
                  throw new Error(
                    "noUiSlider (" +
                      t +
                      "): 'unconstrained' behaviour cannot be used with margin or limit"
                  );
                e.events = {
                  tap: n || a,
                  drag: i,
                  fixed: o,
                  snap: a,
                  hover: s,
                  unconstrained: l
                };
              }
              function R(e, r) {
                if (!1 !== r)
                  if (!0 === r) {
                    e.tooltips = [];
                    for (var n = 0; n < e.handles; n++) e.tooltips.push(!0);
                  } else {
                    if (((e.tooltips = s(r)), e.tooltips.length !== e.handles))
                      throw new Error(
                        "noUiSlider (" +
                          t +
                          "): must pass a formatter for all handles."
                      );
                    e.tooltips.forEach(function(e) {
                      if (
                        "boolean" !== typeof e &&
                        ("object" !== typeof e || "function" !== typeof e.to)
                      )
                        throw new Error(
                          "noUiSlider (" +
                            t +
                            "): 'tooltips' must be passed a formatter or 'false'."
                        );
                    });
                  }
              }
              function z(t, e) {
                (t.ariaFormat = e), x(e);
              }
              function H(t, e) {
                (t.format = e), x(e);
              }
              function j(e, r) {
                if (((e.keyboardSupport = r), "boolean" !== typeof r))
                  throw new Error(
                    "noUiSlider (" +
                      t +
                      "): 'keyboardSupport' option must be a boolean."
                  );
              }
              function F(t, e) {
                t.documentElement = e;
              }
              function T(e, r) {
                if ("string" !== typeof r && !1 !== r)
                  throw new Error(
                    "noUiSlider (" +
                      t +
                      "): 'cssPrefix' must be a string or `false`."
                  );
                e.cssPrefix = r;
              }
              function B(e, r) {
                if ("object" !== typeof r)
                  throw new Error(
                    "noUiSlider (" + t + "): 'cssClasses' must be an object."
                  );
                if ("string" === typeof e.cssPrefix)
                  for (var n in ((e.cssClasses = {}), r))
                    r.hasOwnProperty(n) &&
                      (e.cssClasses[n] = e.cssPrefix + r[n]);
                else e.cssClasses = r;
              }
              function _(e) {
                var n = {
                    margin: 0,
                    limit: 0,
                    padding: 0,
                    animate: !0,
                    animationDuration: 300,
                    ariaFormat: w,
                    format: w
                  },
                  i = {
                    step: { r: !1, t: y },
                    start: { r: !0, t: C },
                    connect: { r: !0, t: P },
                    direction: { r: !0, t: L },
                    snap: { r: !1, t: N },
                    animate: { r: !1, t: U },
                    animationDuration: { r: !1, t: k },
                    range: { r: !0, t: E },
                    orientation: { r: !1, t: V },
                    margin: { r: !1, t: A },
                    limit: { r: !1, t: M },
                    padding: { r: !1, t: O },
                    behaviour: { r: !0, t: D },
                    ariaFormat: { r: !1, t: z },
                    format: { r: !1, t: H },
                    tooltips: { r: !1, t: R },
                    keyboardSupport: { r: !0, t: j },
                    documentElement: { r: !1, t: F },
                    cssPrefix: { r: !0, t: T },
                    cssClasses: { r: !0, t: B }
                  },
                  o = {
                    connect: !1,
                    direction: "ltr",
                    behaviour: "tap",
                    orientation: "horizontal",
                    keyboardSupport: !0,
                    cssPrefix: "noUi-",
                    cssClasses: {
                      target: "target",
                      base: "base",
                      origin: "origin",
                      handle: "handle",
                      handleLower: "handle-lower",
                      handleUpper: "handle-upper",
                      touchArea: "touch-area",
                      horizontal: "horizontal",
                      vertical: "vertical",
                      background: "background",
                      connect: "connect",
                      connects: "connects",
                      ltr: "ltr",
                      rtl: "rtl",
                      draggable: "draggable",
                      drag: "state-drag",
                      tap: "state-tap",
                      active: "active",
                      tooltip: "tooltip",
                      pips: "pips",
                      pipsHorizontal: "pips-horizontal",
                      pipsVertical: "pips-vertical",
                      marker: "marker",
                      markerHorizontal: "marker-horizontal",
                      markerVertical: "marker-vertical",
                      markerNormal: "marker-normal",
                      markerLarge: "marker-large",
                      markerSub: "marker-sub",
                      value: "value",
                      valueHorizontal: "value-horizontal",
                      valueVertical: "value-vertical",
                      valueNormal: "value-normal",
                      valueLarge: "value-large",
                      valueSub: "value-sub"
                    }
                  };
                e.format && !e.ariaFormat && (e.ariaFormat = e.format),
                  Object.keys(i).forEach(function(a) {
                    if (!r(e[a]) && void 0 === o[a]) {
                      if (i[a].r)
                        throw new Error(
                          "noUiSlider (" + t + "): '" + a + "' is required."
                        );
                      return !0;
                    }
                    i[a].t(n, r(e[a]) ? e[a] : o[a]);
                  }),
                  (n.pips = e.pips);
                var a = document.createElement("div"),
                  s = void 0 !== a.style.msTransform,
                  l = void 0 !== a.style.transform;
                return (
                  (n.transformRule = l
                    ? "transform"
                    : s
                    ? "msTransform"
                    : "webkitTransform"),
                  (n.style = [["left", "top"], ["right", "bottom"]][n.dir][
                    n.ort
                  ]),
                  n
                );
              }
              function I(r, i, l) {
                var f,
                  d,
                  m,
                  h,
                  g,
                  v,
                  b = window.navigator.pointerEnabled
                    ? {
                        start: "pointerdown",
                        move: "pointermove",
                        end: "pointerup"
                      }
                    : window.navigator.msPointerEnabled
                    ? {
                        start: "MSPointerDown",
                        move: "MSPointerMove",
                        end: "MSPointerUp"
                      }
                    : {
                        start: "mousedown touchstart",
                        move: "mousemove touchmove",
                        end: "mouseup touchend"
                      },
                  S =
                    window.CSS &&
                    CSS.supports &&
                    CSS.supports("touch-action", "none"),
                  w =
                    S &&
                    (function() {
                      var t = !1;
                      try {
                        var e = Object.defineProperty({}, "passive", {
                          get: function() {
                            t = !0;
                          }
                        });
                        window.addEventListener("test", null, e);
                      } catch (r) {}
                      return t;
                    })(),
                  x = r,
                  y = i.spectrum,
                  E = [],
                  C = [],
                  N = [],
                  U = 0,
                  k = {},
                  P = r.ownerDocument,
                  V = i.documentElement || P.documentElement,
                  A = P.body,
                  M = -1,
                  O = 0,
                  L = 1,
                  D = 2,
                  R = "rtl" === P.dir || 1 === i.ort ? 0 : 100;
                function z(t, e) {
                  var r = P.createElement("div");
                  return e && u(r, e), t.appendChild(r), r;
                }
                function H(t, e) {
                  var r = z(t, i.cssClasses.origin),
                    n = z(r, i.cssClasses.handle);
                  return (
                    z(n, i.cssClasses.touchArea),
                    n.setAttribute("data-handle", e),
                    i.keyboardSupport &&
                      (n.setAttribute("tabindex", "0"),
                      n.addEventListener("keydown", function(t) {
                        return (function(t, e) {
                          if (T() || B(e)) return !1;
                          var r = ["Left", "Right"],
                            n = ["Down", "Up"];
                          i.dir && !i.ort
                            ? r.reverse()
                            : i.ort && !i.dir && n.reverse();
                          var o = t.key.replace("Arrow", ""),
                            a = o === n[0] || o === r[0],
                            s = o === n[1] || o === r[1];
                          if (!a && !s) return !0;
                          t.preventDefault();
                          var l = a ? 0 : 1,
                            u = gt(e)[l];
                          return (
                            null !== u &&
                            (!1 === u && (u = y.getDefaultStep(C[e], a, 10)),
                            (u = Math.max(u, 1e-7)),
                            (u *= a ? -1 : 1),
                            pt(e, y.toStepping(E[e] + u), !0, !0),
                            ot("slide", e),
                            ot("update", e),
                            ot("change", e),
                            ot("set", e),
                            !1)
                          );
                        })(t, e);
                      })),
                    n.setAttribute("role", "slider"),
                    n.setAttribute(
                      "aria-orientation",
                      i.ort ? "vertical" : "horizontal"
                    ),
                    0 === e
                      ? u(n, i.cssClasses.handleLower)
                      : e === i.handles - 1 && u(n, i.cssClasses.handleUpper),
                    r
                  );
                }
                function j(t, e) {
                  return !!e && z(t, i.cssClasses.connect);
                }
                function F(t, e) {
                  return (
                    !!i.tooltips[e] && z(t.firstChild, i.cssClasses.tooltip)
                  );
                }
                function T() {
                  return x.hasAttribute("disabled");
                }
                function B(t) {
                  var e = d[t];
                  return e.hasAttribute("disabled");
                }
                function I() {
                  g &&
                    (it("update.tooltips"),
                    g.forEach(function(t) {
                      t && e(t);
                    }),
                    (g = null));
                }
                function X() {
                  I(),
                    (g = d.map(F)),
                    nt("update.tooltips", function(t, e, r) {
                      if (g[e]) {
                        var n = t[e];
                        !0 !== i.tooltips[e] && (n = i.tooltips[e].to(r[e])),
                          (g[e].innerHTML = n);
                      }
                    });
                }
                function q(t, e, r) {
                  var n = P.createElement("div"),
                    o = [];
                  (o[O] = i.cssClasses.valueNormal),
                    (o[L] = i.cssClasses.valueLarge),
                    (o[D] = i.cssClasses.valueSub);
                  var a = [];
                  (a[O] = i.cssClasses.markerNormal),
                    (a[L] = i.cssClasses.markerLarge),
                    (a[D] = i.cssClasses.markerSub);
                  var s = [
                      i.cssClasses.valueHorizontal,
                      i.cssClasses.valueVertical
                    ],
                    l = [
                      i.cssClasses.markerHorizontal,
                      i.cssClasses.markerVertical
                    ];
                  function c(t, e) {
                    var r = e === i.cssClasses.value,
                      n = r ? s : l,
                      u = r ? o : a;
                    return e + " " + n[i.ort] + " " + u[t];
                  }
                  return (
                    u(n, i.cssClasses.pips),
                    u(
                      n,
                      0 === i.ort
                        ? i.cssClasses.pipsHorizontal
                        : i.cssClasses.pipsVertical
                    ),
                    Object.keys(t).forEach(function(o) {
                      !(function(t, o, a) {
                        if ((a = e ? e(o, a) : a) !== M) {
                          var s = z(n, !1);
                          (s.className = c(a, i.cssClasses.marker)),
                            (s.style[i.style] = t + "%"),
                            a > O &&
                              (((s = z(n, !1)).className = c(
                                a,
                                i.cssClasses.value
                              )),
                              s.setAttribute("data-value", o),
                              (s.style[i.style] = t + "%"),
                              (s.innerHTML = r.to(o)));
                        }
                      })(o, t[o][0], t[o][1]);
                    }),
                    n
                  );
                }
                function Y() {
                  h && (e(h), (h = null));
                }
                function W(e) {
                  Y();
                  var r = e.mode,
                    n = e.density || 1,
                    i = e.filter || !1,
                    o = e.values || !1,
                    a = e.stepped || !1,
                    s = (function(e, r, n) {
                      if ("range" === e || "steps" === e) return y.xVal;
                      if ("count" === e) {
                        if (r < 2)
                          throw new Error(
                            "noUiSlider (" +
                              t +
                              "): 'values' (>= 2) required for mode 'count'."
                          );
                        var i = r - 1,
                          o = 100 / i;
                        for (r = []; i--; ) r[i] = i * o;
                        r.push(100), (e = "positions");
                      }
                      return "positions" === e
                        ? r.map(function(t) {
                            return y.fromStepping(n ? y.getStep(t) : t);
                          })
                        : "values" === e
                        ? n
                          ? r.map(function(t) {
                              return y.fromStepping(y.getStep(y.toStepping(t)));
                            })
                          : r
                        : void 0;
                    })(r, o, a),
                    l = (function(t, e, r) {
                      var n,
                        i = {},
                        o = y.xVal[0],
                        a = y.xVal[y.xVal.length - 1],
                        s = !1,
                        l = !1,
                        u = 0;
                      return (
                        ((n = r.slice().sort(function(t, e) {
                          return t - e;
                        })),
                        (r = n.filter(function(t) {
                          return !this[t] && (this[t] = !0);
                        }, {})))[0] !== o && (r.unshift(o), (s = !0)),
                        r[r.length - 1] !== a && (r.push(a), (l = !0)),
                        r.forEach(function(n, o) {
                          var a,
                            c,
                            p,
                            f,
                            d,
                            m,
                            h,
                            g,
                            v,
                            b,
                            S = n,
                            w = r[o + 1],
                            x = "steps" === e;
                          if (
                            (x && (a = y.xNumSteps[o]),
                            a || (a = w - S),
                            !1 !== S && void 0 !== w)
                          )
                            for (
                              a = Math.max(a, 1e-7), c = S;
                              c <= w;
                              c = (c + a).toFixed(7) / 1
                            ) {
                              for (
                                g = (d = (f = y.toStepping(c)) - u) / t,
                                  b = d / (v = Math.round(g)),
                                  p = 1;
                                p <= v;
                                p += 1
                              )
                                i[(m = u + p * b).toFixed(5)] = [
                                  y.fromStepping(m),
                                  0
                                ];
                              (h = r.indexOf(c) > -1 ? L : x ? D : O),
                                !o && s && (h = 0),
                                (c === w && l) || (i[f.toFixed(5)] = [c, h]),
                                (u = f);
                            }
                        }),
                        i
                      );
                    })(n, r, s),
                    u = e.format || { to: Math.round };
                  return (h = x.appendChild(q(l, i, u)));
                }
                function $() {
                  var t = f.getBoundingClientRect(),
                    e = "offset" + ["Width", "Height"][i.ort];
                  return 0 === i.ort ? t.width || f[e] : t.height || f[e];
                }
                function J(t, e, r, n) {
                  var o = function(o) {
                      return (
                        !!(o = (function(t, e, r) {
                          var n,
                            i,
                            o = 0 === t.type.indexOf("touch"),
                            a = 0 === t.type.indexOf("mouse"),
                            s = 0 === t.type.indexOf("pointer");
                          if (
                            (0 === t.type.indexOf("MSPointer") && (s = !0), o)
                          ) {
                            var l = function(t) {
                              return t.target === r || r.contains(t.target);
                            };
                            if ("touchstart" === t.type) {
                              var u = Array.prototype.filter.call(t.touches, l);
                              if (u.length > 1) return !1;
                              (n = u[0].pageX), (i = u[0].pageY);
                            } else {
                              var c = Array.prototype.find.call(
                                t.changedTouches,
                                l
                              );
                              if (!c) return !1;
                              (n = c.pageX), (i = c.pageY);
                            }
                          }
                          return (
                            (e = e || p(P)),
                            (a || s) &&
                              ((n = t.clientX + e.x), (i = t.clientY + e.y)),
                            (t.pageOffset = e),
                            (t.points = [n, i]),
                            (t.cursor = a || s),
                            t
                          );
                        })(o, n.pageOffset, n.target || e)) &&
                        !(T() && !n.doNotReject) &&
                        ((a = x),
                        (s = i.cssClasses.tap),
                        !(
                          (a.classList
                            ? a.classList.contains(s)
                            : new RegExp("\\b" + s + "\\b").test(
                                a.className
                              )) && !n.doNotReject
                        ) &&
                          !(
                            t === b.start &&
                            void 0 !== o.buttons &&
                            o.buttons > 1
                          ) &&
                          (!n.hover || !o.buttons) &&
                          (w || o.preventDefault(),
                          (o.calcPoint = o.points[i.ort]),
                          void r(o, n)))
                      );
                      var a, s;
                    },
                    a = [];
                  return (
                    t.split(" ").forEach(function(t) {
                      e.addEventListener(t, o, !!w && { passive: !0 }),
                        a.push([t, o]);
                    }),
                    a
                  );
                }
                function K(t) {
                  var e =
                      t -
                      (function(t, e) {
                        var r = t.getBoundingClientRect(),
                          n = t.ownerDocument,
                          i = n.documentElement,
                          o = p(n);
                        return (
                          /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) &&
                            (o.x = 0),
                          e
                            ? r.top + o.y - i.clientTop
                            : r.left + o.x - i.clientLeft
                        );
                      })(f, i.ort),
                    r = (100 * e) / $();
                  return (r = a(r)), i.dir ? 100 - r : r;
                }
                function Q(t, e) {
                  "mouseout" === t.type &&
                    "HTML" === t.target.nodeName &&
                    null === t.relatedTarget &&
                    Z(t, e);
                }
                function G(t, e) {
                  if (
                    -1 === navigator.appVersion.indexOf("MSIE 9") &&
                    0 === t.buttons &&
                    0 !== e.buttonsProperty
                  )
                    return Z(t, e);
                  var r = (i.dir ? -1 : 1) * (t.calcPoint - e.startCalcPoint),
                    n = (100 * r) / e.baseSize;
                  lt(r > 0, n, e.locations, e.handleNumbers);
                }
                function Z(t, e) {
                  e.handle && (c(e.handle, i.cssClasses.active), (U -= 1)),
                    e.listeners.forEach(function(t) {
                      V.removeEventListener(t[0], t[1]);
                    }),
                    0 === U &&
                      (c(x, i.cssClasses.drag),
                      ct(),
                      t.cursor &&
                        ((A.style.cursor = ""),
                        A.removeEventListener("selectstart", n))),
                    e.handleNumbers.forEach(function(t) {
                      ot("change", t), ot("set", t), ot("end", t);
                    });
                }
                function tt(t, e) {
                  if (e.handleNumbers.some(B)) return !1;
                  var r;
                  if (1 === e.handleNumbers.length) {
                    var o = d[e.handleNumbers[0]];
                    (r = o.children[0]), (U += 1), u(r, i.cssClasses.active);
                  }
                  t.stopPropagation();
                  var a = [],
                    s = J(b.move, V, G, {
                      target: t.target,
                      handle: r,
                      listeners: a,
                      startCalcPoint: t.calcPoint,
                      baseSize: $(),
                      pageOffset: t.pageOffset,
                      handleNumbers: e.handleNumbers,
                      buttonsProperty: t.buttons,
                      locations: C.slice()
                    }),
                    l = J(b.end, V, Z, {
                      target: t.target,
                      handle: r,
                      listeners: a,
                      doNotReject: !0,
                      handleNumbers: e.handleNumbers
                    }),
                    c = J("mouseout", V, Q, {
                      target: t.target,
                      handle: r,
                      listeners: a,
                      doNotReject: !0,
                      handleNumbers: e.handleNumbers
                    });
                  a.push.apply(a, s.concat(l, c)),
                    t.cursor &&
                      ((A.style.cursor = getComputedStyle(t.target).cursor),
                      d.length > 1 && u(x, i.cssClasses.drag),
                      A.addEventListener("selectstart", n, !1)),
                    e.handleNumbers.forEach(function(t) {
                      ot("start", t);
                    });
                }
                function et(t) {
                  t.stopPropagation();
                  var e = K(t.calcPoint),
                    r = (function(t) {
                      var e = 100,
                        r = !1;
                      return (
                        d.forEach(function(n, i) {
                          if (!B(i)) {
                            var o = C[i],
                              a = Math.abs(o - t);
                            (a < e ||
                              (a <= e && t > o) ||
                              (100 === a && 100 === e)) &&
                              ((r = i), (e = a));
                          }
                        }),
                        r
                      );
                    })(e);
                  if (!1 === r) return !1;
                  i.events.snap || o(x, i.cssClasses.tap, i.animationDuration),
                    pt(r, e, !0, !0),
                    ct(),
                    ot("slide", r, !0),
                    ot("update", r, !0),
                    ot("change", r, !0),
                    ot("set", r, !0),
                    i.events.snap && tt(t, { handleNumbers: [r] });
                }
                function rt(t) {
                  var e = K(t.calcPoint),
                    r = y.getStep(e),
                    n = y.fromStepping(r);
                  Object.keys(k).forEach(function(t) {
                    "hover" === t.split(".")[0] &&
                      k[t].forEach(function(t) {
                        t.call(v, n);
                      });
                  });
                }
                function nt(t, e) {
                  (k[t] = k[t] || []),
                    k[t].push(e),
                    "update" === t.split(".")[0] &&
                      d.forEach(function(t, e) {
                        ot("update", e);
                      });
                }
                function it(t) {
                  var e = t && t.split(".")[0],
                    r = e && t.substring(e.length);
                  Object.keys(k).forEach(function(t) {
                    var n = t.split(".")[0],
                      i = t.substring(n.length);
                    (e && e !== n) || (r && r !== i) || delete k[t];
                  });
                }
                function ot(t, e, r) {
                  Object.keys(k).forEach(function(n) {
                    var o = n.split(".")[0];
                    t === o &&
                      k[n].forEach(function(t) {
                        t.call(
                          v,
                          E.map(i.format.to),
                          e,
                          E.slice(),
                          r || !1,
                          C.slice()
                        );
                      });
                  });
                }
                function at(t, e, r, n, o, s) {
                  return (
                    d.length > 1 &&
                      !i.events.unconstrained &&
                      (n && e > 0 && (r = Math.max(r, t[e - 1] + i.margin)),
                      o &&
                        e < d.length - 1 &&
                        (r = Math.min(r, t[e + 1] - i.margin))),
                    d.length > 1 &&
                      i.limit &&
                      (n && e > 0 && (r = Math.min(r, t[e - 1] + i.limit)),
                      o &&
                        e < d.length - 1 &&
                        (r = Math.max(r, t[e + 1] - i.limit))),
                    i.padding &&
                      (0 === e && (r = Math.max(r, i.padding[0])),
                      e === d.length - 1 &&
                        (r = Math.min(r, 100 - i.padding[1]))),
                    !((r = a((r = y.getStep(r)))) === t[e] && !s) && r
                  );
                }
                function st(t, e) {
                  var r = i.ort;
                  return (r ? e : t) + ", " + (r ? t : e);
                }
                function lt(t, e, r, n) {
                  var i = r.slice(),
                    o = [!t, t],
                    a = [t, !t];
                  (n = n.slice()),
                    t && n.reverse(),
                    n.length > 1
                      ? n.forEach(function(t, r) {
                          var n = at(i, t, i[t] + e, o[r], a[r], !1);
                          !1 === n ? (e = 0) : ((e = n - i[t]), (i[t] = n));
                        })
                      : (o = a = [!0]);
                  var s = !1;
                  n.forEach(function(t, n) {
                    s = pt(t, r[t] + e, o[n], a[n]) || s;
                  }),
                    s &&
                      n.forEach(function(t) {
                        ot("update", t), ot("slide", t);
                      });
                }
                function ut(t, e) {
                  return i.dir ? 100 - t - e : t;
                }
                function ct() {
                  N.forEach(function(t) {
                    var e = C[t] > 50 ? -1 : 1,
                      r = 3 + (d.length + e * t);
                    d[t].style.zIndex = r;
                  });
                }
                function pt(t, e, r, n) {
                  return (
                    !1 !== (e = at(C, t, e, r, n, !1)) &&
                    ((function(t, e) {
                      (C[t] = e), (E[t] = y.fromStepping(e));
                      var r =
                        "translate(" + st(10 * (ut(e, 0) - R) + "%", "0") + ")";
                      (d[t].style[i.transformRule] = r), ft(t), ft(t + 1);
                    })(t, e),
                    !0)
                  );
                }
                function ft(t) {
                  if (m[t]) {
                    var e = 0,
                      r = 100;
                    0 !== t && (e = C[t - 1]), t !== m.length - 1 && (r = C[t]);
                    var n = r - e,
                      o = "translate(" + st(ut(e, n) + "%", "0") + ")",
                      a = "scale(" + st(n / 100, "1") + ")";
                    m[t].style[i.transformRule] = o + " " + a;
                  }
                }
                function dt(t, e) {
                  return null === t || !1 === t || void 0 === t
                    ? C[e]
                    : ("number" === typeof t && (t = String(t)),
                      (t = i.format.from(t)),
                      !1 === (t = y.toStepping(t)) || isNaN(t) ? C[e] : t);
                }
                function mt(t, e) {
                  var r = s(t),
                    n = void 0 === C[0];
                  (e = void 0 === e || !!e),
                    i.animate &&
                      !n &&
                      o(x, i.cssClasses.tap, i.animationDuration),
                    N.forEach(function(t) {
                      pt(t, dt(r[t], t), !0, !1);
                    }),
                    N.forEach(function(t) {
                      pt(t, C[t], !0, !0);
                    }),
                    ct(),
                    N.forEach(function(t) {
                      ot("update", t), null !== r[t] && e && ot("set", t);
                    });
                }
                function ht() {
                  var t = E.map(i.format.to);
                  return 1 === t.length ? t[0] : t;
                }
                function gt(t) {
                  var e = C[t],
                    r = y.getNearbySteps(e),
                    n = E[t],
                    o = r.thisStep.step,
                    a = null;
                  if (i.snap)
                    return [
                      n - r.stepBefore.startValue || null,
                      r.stepAfter.startValue - n || null
                    ];
                  !1 !== o &&
                    n + o > r.stepAfter.startValue &&
                    (o = r.stepAfter.startValue - n),
                    (a =
                      n > r.thisStep.startValue
                        ? r.thisStep.step
                        : !1 !== r.stepBefore.step &&
                          n - r.stepBefore.highestStep),
                    100 === e ? (o = null) : 0 === e && (a = null);
                  var s = y.countStepDecimals();
                  return (
                    null !== o && !1 !== o && (o = Number(o.toFixed(s))),
                    null !== a && !1 !== a && (a = Number(a.toFixed(s))),
                    [a, o]
                  );
                }
                return (
                  (function() {
                    var t, e;
                    u((e = x), i.cssClasses.target),
                      0 === i.dir
                        ? u(e, i.cssClasses.ltr)
                        : u(e, i.cssClasses.rtl),
                      0 === i.ort
                        ? u(e, i.cssClasses.horizontal)
                        : u(e, i.cssClasses.vertical),
                      (f = z(e, i.cssClasses.base)),
                      (function(t, e) {
                        var r = z(e, i.cssClasses.connects);
                        (d = []), (m = []).push(j(r, t[0]));
                        for (var n = 0; n < i.handles; n++)
                          d.push(H(e, n)), (N[n] = n), m.push(j(r, t[n + 1]));
                      })(i.connect, f),
                      (t = i.events).fixed ||
                        d.forEach(function(t, e) {
                          J(b.start, t.children[0], tt, { handleNumbers: [e] });
                        }),
                      t.tap && J(b.start, f, et, {}),
                      t.hover && J(b.move, f, rt, { hover: !0 }),
                      t.drag &&
                        m.forEach(function(e, r) {
                          if (!1 !== e && 0 !== r && r !== m.length - 1) {
                            var n = d[r - 1],
                              o = d[r],
                              a = [e];
                            u(e, i.cssClasses.draggable),
                              t.fixed &&
                                (a.push(n.children[0]), a.push(o.children[0])),
                              a.forEach(function(t) {
                                J(b.start, t, tt, {
                                  handles: [n, o],
                                  handleNumbers: [r - 1, r]
                                });
                              });
                          }
                        }),
                      mt(i.start),
                      i.pips && W(i.pips),
                      i.tooltips && X(),
                      nt("update", function(t, e, r, n, o) {
                        N.forEach(function(t) {
                          var e = d[t],
                            n = at(C, t, 0, !0, !0, !0),
                            a = at(C, t, 100, !0, !0, !0),
                            s = o[t],
                            l = i.ariaFormat.to(r[t]);
                          (n = y.fromStepping(n).toFixed(1)),
                            (a = y.fromStepping(a).toFixed(1)),
                            (s = y.fromStepping(s).toFixed(1)),
                            e.children[0].setAttribute("aria-valuemin", n),
                            e.children[0].setAttribute("aria-valuemax", a),
                            e.children[0].setAttribute("aria-valuenow", s),
                            e.children[0].setAttribute("aria-valuetext", l);
                        });
                      });
                  })(),
                  (v = {
                    destroy: function() {
                      for (var t in i.cssClasses)
                        i.cssClasses.hasOwnProperty(t) && c(x, i.cssClasses[t]);
                      for (; x.firstChild; ) x.removeChild(x.firstChild);
                      delete x.noUiSlider;
                    },
                    steps: function() {
                      return N.map(gt);
                    },
                    on: nt,
                    off: it,
                    get: ht,
                    set: mt,
                    setHandle: function(e, r, n) {
                      if (!((e = Number(e)) >= 0 && e < N.length))
                        throw new Error(
                          "noUiSlider (" +
                            t +
                            "): invalid handle number, got: " +
                            e
                        );
                      pt(e, dt(r, e), !0, !0),
                        ot("update", e),
                        n && ot("set", e);
                    },
                    reset: function(t) {
                      mt(i.start, t);
                    },
                    __moveHandles: function(t, e, r) {
                      lt(t, e, C, r);
                    },
                    options: l,
                    updateOptions: function(t, e) {
                      var r = ht(),
                        n = [
                          "margin",
                          "limit",
                          "padding",
                          "range",
                          "animate",
                          "snap",
                          "step",
                          "format",
                          "pips",
                          "tooltips"
                        ];
                      n.forEach(function(e) {
                        void 0 !== t[e] && (l[e] = t[e]);
                      });
                      var o = _(l);
                      n.forEach(function(e) {
                        void 0 !== t[e] && (i[e] = o[e]);
                      }),
                        (y = o.spectrum),
                        (i.margin = o.margin),
                        (i.limit = o.limit),
                        (i.padding = o.padding),
                        i.pips ? W(i.pips) : Y(),
                        i.tooltips ? X() : I(),
                        (C = []),
                        mt(t.start || r, e);
                    },
                    target: x,
                    removePips: Y,
                    removeTooltips: I,
                    pips: W
                  })
                );
              }
              return {
                __spectrum: S,
                version: t,
                create: function(e, r) {
                  if (!e || !e.nodeName)
                    throw new Error(
                      "noUiSlider (" +
                        t +
                        "): create requires a single element, got: " +
                        e
                    );
                  if (e.noUiSlider)
                    throw new Error(
                      "noUiSlider (" + t + "): Slider was already initialized."
                    );
                  var n = _(r),
                    i = I(e, n, r);
                  return (e.noUiSlider = i), i;
                }
              };
            })
              ? n.apply(e, i)
              : n) || (t.exports = o);
    },
    QKRV: function(t, e, r) {
      "use strict";
      r.r(e),
        r.d(e, "default", function() {
          return f;
        });
      var n = r("q1tI"),
        i = r.n(n),
        o = r("pzeu"),
        a = r("zR9M"),
        s = r("6foH"),
        l = r.n(s),
        u = r("Oref"),
        c = i.a.createElement,
        p =
          'import React from "react";\n// plugin that creates slider\nimport Slider from "nouislider";\nexport default function Sliders() {\n  React.useEffect(() => {\n    if (\n      !document\n        .getElementById("sliderRegular")\n        .classList.contains("noUi-target")\n    ) {\n      Slider.create(document.getElementById("sliderRegular"), {\n        start: [40],\n        connect: [true, false],\n        step: 1,\n        range: { min: 0, max: 100 }\n      });\n    }\n    if (\n      !document.getElementById("sliderDouble").classList.contains("noUi-target")\n    ) {\n      Slider.create(document.getElementById("sliderDouble"), {\n        start: [20, 60],\n        connect: [false, true, false],\n        step: 1,\n        range: { min: 0, max: 100 }\n      });\n    }\n    return function cleanup() {};\n  });\n  return (\n    <div>\n      <div className="slider-primary" id="sliderRegular" />\n      <br />\n      <div className="slider-info" id="sliderDouble" />\n    </div>\n  );\n}';
      function f() {
        return (
          i.a.useEffect(function() {
            return (
              document
                .getElementById("sliderRegular")
                .classList.contains("noUi-target") ||
                l.a.create(document.getElementById("sliderRegular"), {
                  start: [40],
                  connect: [!0, !1],
                  step: 1,
                  range: { min: 0, max: 100 }
                }),
              document
                .getElementById("sliderDouble")
                .classList.contains("noUi-target") ||
                l.a.create(document.getElementById("sliderDouble"), {
                  start: [20, 60],
                  connect: [!1, !0, !1],
                  step: 1,
                  range: { min: 0, max: 100 }
                }),
              function() {}
            );
          }),
          c(
            u.a,
            null,
            c("h1", null, "noUiSlider v13.1.5"),
            c("h2", null, c("code", null, "Notice")),
            c(
              "p",
              null,
              "Due to the fact that",
              " ",
              c(
                "a",
                {
                  href:
                    "https://github.com/algolia/react-nouislider?ref=creativetim",
                  target: "_blank"
                },
                c("code", null, "React noUiSlider v2.0.1")
              ),
              " ",
              "was not well maintained, we've dropped the usage of this component, and replaced it with the",
              " ",
              c(
                "a",
                {
                  href: "https://refreshless.com/nouislider/?ref=creativetim",
                  target: "_blank"
                },
                c("code", null, "noUiSlider v12.1.0")
              ),
              " ",
              "component."
            ),
            c(
              "p",
              null,
              "Please refer to",
              " ",
              c(
                "a",
                {
                  href: "https://refreshless.com/nouislider/?ref=creativetim",
                  target: "_blank"
                },
                "noUiSlider documentation"
              ),
              " ",
              "for more information."
            ),
            c("h2", null, "Styles"),
            c(
              "p",
              null,
              "You will find the styles for this component in",
              c("br", null),
              " ",
              c(
                "code",
                null,
                "src/assets/scss/material-dashboard-pro-react/plugins/_plugin-nouislider.scss"
              ),
              "."
            ),
            c("h2", null, "Example"),
            c("div", { className: "slider-primary", id: "sliderRegular" }),
            c("br", null),
            c("div", { className: "slider-info", id: "sliderDouble" }),
            c("br", null),
            c(
              "p",
              null,
              "If you want to add color to your slider you need to add on the",
              " ",
              c("code", null, "div"),
              " a ",
              c("code", null, 'className="slider-$color"'),
              ", where",
              " ",
              c("code", null, "$color"),
              " can be one of ",
              c("code", null, "primary"),
              ",",
              " ",
              c("code", null, "info"),
              ", ",
              c("code", null, "success"),
              ", ",
              c("code", null, "warning"),
              ",",
              " ",
              c("code", null, "danger"),
              "."
            ),
            c(o.a, { language: "jsx", style: a.prism }, p)
          )
        );
      }
    },
    VTWs: function(t, e, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/documentation/sliders",
        function() {
          var t = r("QKRV");
          return { page: t.default || t };
        }
      ]);
    }
  },
  [["VTWs", 1, 0]]
]);
