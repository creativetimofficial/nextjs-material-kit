(window.webpackJsonp = window.webpackJsonp || []).push([
  [9],
  {
    "3xJs": function(e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/documentation/carousel",
        function() {
          var e = n("hDiz");
          return { page: e.default || e };
        }
      ]);
    },
    "8//2": function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r = l(n("q1tI")),
        i = n("ueNE"),
        o = l(n("pIsd")),
        a = l(n("BBPU")),
        s = n("x9Za");
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function c(e) {
        return (c =
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
      function u() {
        return (u =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function d(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function f(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? d(n, !0).forEach(function(t) {
                g(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : d(n).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function p(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function h(e) {
        return (h = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function v(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function y(e, t) {
        return (y =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function g(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      }
      var b = (0, s.canUseDOM)() && n("jpXb"),
        m = (function(e) {
          function t(e) {
            var n;
            return (
              (function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
              (n = (function(e, t) {
                return !t || ("object" !== c(t) && "function" !== typeof t)
                  ? v(e)
                  : t;
              })(this, h(t).call(this, e))),
              g(v(n), "innerSliderRefHandler", function(e) {
                return (n.innerSlider = e);
              }),
              g(v(n), "slickPrev", function() {
                return n.innerSlider.slickPrev();
              }),
              g(v(n), "slickNext", function() {
                return n.innerSlider.slickNext();
              }),
              g(v(n), "slickGoTo", function(e) {
                var t =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1];
                return n.innerSlider.slickGoTo(e, t);
              }),
              g(v(n), "slickPause", function() {
                return n.innerSlider.pause("paused");
              }),
              g(v(n), "slickPlay", function() {
                return n.innerSlider.autoPlay("play");
              }),
              (n.state = { breakpoint: null }),
              (n._responsiveMediaHandlers = []),
              n
            );
          }
          var n, l, d;
          return (
            (function(e, t) {
              if ("function" !== typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 }
              })),
                t && y(e, t);
            })(t, r["default"].Component),
            (n = t),
            (l = [
              {
                key: "media",
                value: function(e, t) {
                  b.register(e, t),
                    this._responsiveMediaHandlers.push({
                      query: e,
                      handler: t
                    });
                }
              },
              {
                key: "UNSAFE_componentWillMount",
                value: function() {
                  var e = this;
                  if (this.props.responsive) {
                    var t = this.props.responsive.map(function(e) {
                      return e.breakpoint;
                    });
                    t.sort(function(e, t) {
                      return e - t;
                    }),
                      t.forEach(function(n, r) {
                        var i;
                        (i =
                          0 === r
                            ? (0, o.default)({ minWidth: 0, maxWidth: n })
                            : (0, o.default)({
                                minWidth: t[r - 1] + 1,
                                maxWidth: n
                              })),
                          (0, s.canUseDOM)() &&
                            e.media(i, function() {
                              e.setState({ breakpoint: n });
                            });
                      });
                    var n = (0, o.default)({ minWidth: t.slice(-1)[0] });
                    (0, s.canUseDOM)() &&
                      this.media(n, function() {
                        e.setState({ breakpoint: null });
                      });
                  }
                }
              },
              {
                key: "componentWillUnmount",
                value: function() {
                  this._responsiveMediaHandlers.forEach(function(e) {
                    b.unregister(e.query, e.handler);
                  });
                }
              },
              {
                key: "render",
                value: function() {
                  var e,
                    t,
                    n = this;
                  (e = this.state.breakpoint
                    ? "unslick" ===
                      (t = this.props.responsive.filter(function(e) {
                        return e.breakpoint === n.state.breakpoint;
                      }))[0].settings
                      ? "unslick"
                      : f({}, a.default, {}, this.props, {}, t[0].settings)
                    : f({}, a.default, {}, this.props)).centerMode &&
                    (e.slidesToScroll, (e.slidesToScroll = 1)),
                    e.fade &&
                      (e.slidesToShow,
                      e.slidesToScroll,
                      (e.slidesToShow = 1),
                      (e.slidesToScroll = 1));
                  var o = r.default.Children.toArray(this.props.children);
                  (o = o.filter(function(e) {
                    return "string" === typeof e ? !!e.trim() : !!e;
                  })),
                    e.variableWidth &&
                      (e.rows > 1 || e.slidesPerRow > 1) &&
                      (console.warn(
                        "variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"
                      ),
                      (e.variableWidth = !1));
                  for (
                    var s = [], l = null, c = 0;
                    c < o.length;
                    c += e.rows * e.slidesPerRow
                  ) {
                    for (
                      var d = [], p = c;
                      p < c + e.rows * e.slidesPerRow;
                      p += e.slidesPerRow
                    ) {
                      for (
                        var h = [], v = p;
                        v < p + e.slidesPerRow &&
                        (e.variableWidth &&
                          o[v].props.style &&
                          (l = o[v].props.style.width),
                        !(v >= o.length));
                        v += 1
                      )
                        h.push(
                          r.default.cloneElement(o[v], {
                            key: 100 * c + 10 * p + v,
                            tabIndex: -1,
                            style: {
                              width: "".concat(100 / e.slidesPerRow, "%"),
                              display: "inline-block"
                            }
                          })
                        );
                      d.push(
                        r.default.createElement("div", { key: 10 * c + p }, h)
                      );
                    }
                    e.variableWidth
                      ? s.push(
                          r.default.createElement(
                            "div",
                            { key: c, style: { width: l } },
                            d
                          )
                        )
                      : s.push(r.default.createElement("div", { key: c }, d));
                  }
                  if ("unslick" === e) {
                    var y = "regular slider " + (this.props.className || "");
                    return r.default.createElement("div", { className: y }, s);
                  }
                  return (
                    s.length <= e.slidesToShow && (e.unslick = !0),
                    r.default.createElement(
                      i.InnerSlider,
                      u(
                        {
                          style: this.props.style,
                          ref: this.innerSliderRefHandler
                        },
                        e
                      ),
                      s
                    )
                  );
                }
              }
            ]) && p(n.prototype, l),
            d && p(n, d),
            t
          );
        })();
      t.default = m;
    },
    "8/g6": function(e, t, n) {
      "use strict";
      var r = n("TqRt");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function(e, t) {
          var n = o.default.memo(
            o.default.forwardRef(function(t, n) {
              return o.default.createElement(
                a.default,
                (0, i.default)({ ref: n }, t),
                e
              );
            })
          );
          0;
          return (n.muiName = a.default.muiName), n;
        });
      var i = r(n("pVnL")),
        o = r(n("q1tI")),
        a = r(n("UJJ5"));
    },
    "9/5/": function(e, t, n) {
      (function(t) {
        var n = "Expected a function",
          r = NaN,
          i = "[object Symbol]",
          o = /^\s+|\s+$/g,
          a = /^[-+]0x[0-9a-f]+$/i,
          s = /^0b[01]+$/i,
          l = /^0o[0-7]+$/i,
          c = parseInt,
          u = "object" == typeof t && t && t.Object === Object && t,
          d = "object" == typeof self && self && self.Object === Object && self,
          f = u || d || Function("return this")(),
          p = Object.prototype.toString,
          h = Math.max,
          v = Math.min,
          y = function() {
            return f.Date.now();
          };
        function g(e) {
          var t = typeof e;
          return !!e && ("object" == t || "function" == t);
        }
        function b(e) {
          if ("number" == typeof e) return e;
          if (
            (function(e) {
              return (
                "symbol" == typeof e ||
                ((function(e) {
                  return !!e && "object" == typeof e;
                })(e) &&
                  p.call(e) == i)
              );
            })(e)
          )
            return r;
          if (g(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = g(t) ? t + "" : t;
          }
          if ("string" != typeof e) return 0 === e ? e : +e;
          e = e.replace(o, "");
          var n = s.test(e);
          return n || l.test(e) ? c(e.slice(2), n ? 2 : 8) : a.test(e) ? r : +e;
        }
        e.exports = function(e, t, r) {
          var i,
            o,
            a,
            s,
            l,
            c,
            u = 0,
            d = !1,
            f = !1,
            p = !0;
          if ("function" != typeof e) throw new TypeError(n);
          function m(t) {
            var n = i,
              r = o;
            return (i = o = void 0), (u = t), (s = e.apply(r, n));
          }
          function w(e) {
            var n = e - c;
            return void 0 === c || n >= t || n < 0 || (f && e - u >= a);
          }
          function S() {
            var e = y();
            if (w(e)) return O(e);
            l = setTimeout(
              S,
              (function(e) {
                var n = t - (e - c);
                return f ? v(n, a - (e - u)) : n;
              })(e)
            );
          }
          function O(e) {
            return (l = void 0), p && i ? m(e) : ((i = o = void 0), s);
          }
          function k() {
            var e = y(),
              n = w(e);
            if (((i = arguments), (o = this), (c = e), n)) {
              if (void 0 === l)
                return (function(e) {
                  return (u = e), (l = setTimeout(S, t)), d ? m(e) : s;
                })(c);
              if (f) return (l = setTimeout(S, t)), m(c);
            }
            return void 0 === l && (l = setTimeout(S, t)), s;
          }
          return (
            (t = b(t) || 0),
            g(r) &&
              ((d = !!r.leading),
              (a = (f = "maxWait" in r) ? h(b(r.maxWait) || 0, t) : a),
              (p = "trailing" in r ? !!r.trailing : p)),
            (k.cancel = function() {
              void 0 !== l && clearTimeout(l),
                (u = 0),
                (i = c = o = l = void 0);
            }),
            (k.flush = function() {
              return void 0 === l ? s : O(y());
            }),
            k
          );
        };
      }.call(this, n("3r9c")));
    },
    A2So: function(e, t, n) {
      "use strict";
      var r = n("kOwS"),
        i = n("vYYK"),
        o = n("qNsG"),
        a = n("q1tI"),
        s = n.n(a),
        l = n("TSYQ"),
        c = n.n(l),
        u = n("R/WZ"),
        d = {
          card: {
            border: "0",
            marginBottom: "30px",
            marginTop: "30px",
            borderRadius: "6px",
            color: "rgba(0, 0, 0, 0.87)",
            background: "#fff",
            width: "100%",
            boxShadow:
              "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            minWidth: "0",
            wordWrap: "break-word",
            fontSize: ".875rem",
            transition: "all 300ms linear"
          },
          cardPlain: { background: "transparent", boxShadow: "none" },
          cardCarousel: { overflow: "hidden" }
        };
      n.d(t, "a", function() {
        return h;
      });
      var f = s.a.createElement,
        p = Object(u.a)(d);
      function h(e) {
        var t,
          n = p(),
          a = e.className,
          s = e.children,
          l = e.plain,
          u = e.carousel,
          d = Object(o.a)(e, ["className", "children", "plain", "carousel"]),
          h = c()(
            ((t = {}),
            Object(i.a)(t, n.card, !0),
            Object(i.a)(t, n.cardPlain, l),
            Object(i.a)(t, n.cardCarousel, u),
            Object(i.a)(t, a, void 0 !== a),
            t)
          );
        return f("div", Object(r.a)({ className: h }, d), s);
      }
    },
    BBPU: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r,
        i = (r = n("q1tI")) && r.__esModule ? r : { default: r };
      var o = {
        accessibility: !0,
        adaptiveHeight: !1,
        afterChange: null,
        appendDots: function(e) {
          return i.default.createElement(
            "ul",
            { style: { display: "block" } },
            e
          );
        },
        arrows: !0,
        autoplay: !1,
        autoplaySpeed: 3e3,
        beforeChange: null,
        centerMode: !1,
        centerPadding: "50px",
        className: "",
        cssEase: "ease",
        customPaging: function(e) {
          return i.default.createElement("button", null, e + 1);
        },
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        edgeFriction: 0.35,
        fade: !1,
        focusOnSelect: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: null,
        nextArrow: null,
        onEdge: null,
        onInit: null,
        onLazyLoadError: null,
        onReInit: null,
        pauseOnDotsHover: !1,
        pauseOnFocus: !1,
        pauseOnHover: !0,
        prevArrow: null,
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: "div",
        slidesPerRow: 1,
        slidesToScroll: 1,
        slidesToShow: 1,
        speed: 500,
        swipe: !0,
        swipeEvent: null,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        waitForAnimate: !0
      };
      t.default = o;
    },
    BJfS: function(e, t) {
      e.exports = function(e) {
        return e
          .replace(/[A-Z]/g, function(e) {
            return "-" + e.toLowerCase();
          })
          .toLowerCase();
      };
    },
    IX3V: function(e, t) {
      e.exports = {
        isFunction: function(e) {
          return "function" === typeof e;
        },
        isArray: function(e) {
          return "[object Array]" === Object.prototype.toString.apply(e);
        },
        each: function(e, t) {
          for (var n = 0, r = e.length; n < r && !1 !== t(e[n], n); n++);
        }
      };
    },
    KOnL: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.NextArrow = t.PrevArrow = void 0);
      var r = a(n("q1tI")),
        i = a(n("TSYQ")),
        o = n("x9Za");
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function s(e) {
        return (s =
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
      function l() {
        return (l =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function c(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? c(n, !0).forEach(function(t) {
                d(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : c(n).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function d(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      }
      function f(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function p(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function h(e, t, n) {
        return t && p(e.prototype, t), n && p(e, n), e;
      }
      function v(e, t) {
        return !t || ("object" !== s(t) && "function" !== typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function y(e) {
        return (y = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function g(e, t) {
        if ("function" !== typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 }
        })),
          t && b(e, t);
      }
      function b(e, t) {
        return (b =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var m = (function(e) {
        function t() {
          return f(this, t), v(this, y(t).apply(this, arguments));
        }
        return (
          g(t, r["default"].PureComponent),
          h(t, [
            {
              key: "clickHandler",
              value: function(e, t) {
                t && t.preventDefault(), this.props.clickHandler(e, t);
              }
            },
            {
              key: "render",
              value: function() {
                var e = { "slick-arrow": !0, "slick-prev": !0 },
                  t = this.clickHandler.bind(this, { message: "previous" });
                !this.props.infinite &&
                  (0 === this.props.currentSlide ||
                    this.props.slideCount <= this.props.slidesToShow) &&
                  ((e["slick-disabled"] = !0), (t = null));
                var n = {
                    key: "0",
                    "data-role": "none",
                    className: (0, i.default)(e),
                    style: { display: "block" },
                    onClick: t
                  },
                  o = {
                    currentSlide: this.props.currentSlide,
                    slideCount: this.props.slideCount
                  };
                return this.props.prevArrow
                  ? r.default.cloneElement(
                      this.props.prevArrow,
                      u({}, n, {}, o)
                    )
                  : r.default.createElement(
                      "button",
                      l({ key: "0", type: "button" }, n),
                      " ",
                      "Previous"
                    );
              }
            }
          ]),
          t
        );
      })();
      t.PrevArrow = m;
      var w = (function(e) {
        function t() {
          return f(this, t), v(this, y(t).apply(this, arguments));
        }
        return (
          g(t, r["default"].PureComponent),
          h(t, [
            {
              key: "clickHandler",
              value: function(e, t) {
                t && t.preventDefault(), this.props.clickHandler(e, t);
              }
            },
            {
              key: "render",
              value: function() {
                var e = { "slick-arrow": !0, "slick-next": !0 },
                  t = this.clickHandler.bind(this, { message: "next" });
                (0, o.canGoNext)(this.props) ||
                  ((e["slick-disabled"] = !0), (t = null));
                var n = {
                    key: "1",
                    "data-role": "none",
                    className: (0, i.default)(e),
                    style: { display: "block" },
                    onClick: t
                  },
                  a = {
                    currentSlide: this.props.currentSlide,
                    slideCount: this.props.slideCount
                  };
                return this.props.nextArrow
                  ? r.default.cloneElement(
                      this.props.nextArrow,
                      u({}, n, {}, a)
                    )
                  : r.default.createElement(
                      "button",
                      l({ key: "1", type: "button" }, n),
                      " ",
                      "Next"
                    );
              }
            }
          ]),
          t
        );
      })();
      t.NextArrow = w;
    },
    OS56: function(e, t, n) {
      "use strict";
      var r;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var i = ((r = n("8//2")) && r.__esModule ? r : { default: r }).default;
      t.default = i;
    },
    UJJ5: function(e, t, n) {
      "use strict";
      n.r(t);
      var r = n("HR5l");
      n.d(t, "default", function() {
        return r.a;
      });
    },
    "UZv/": function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.Track = void 0);
      var r = a(n("q1tI")),
        i = a(n("TSYQ")),
        o = n("x9Za");
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function s(e) {
        return (s =
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
      function l() {
        return (l =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function c(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function u(e, t) {
        return !t || ("object" !== s(t) && "function" !== typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function d(e) {
        return (d = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function f(e, t) {
        return (f =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function p(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function h(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? p(n, !0).forEach(function(t) {
                v(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : p(n).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function v(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      }
      var y = function(e) {
          var t, n, r, i, o;
          return (
            (r =
              (o = e.rtl ? e.slideCount - 1 - e.index : e.index) < 0 ||
              o >= e.slideCount),
            e.centerMode
              ? ((i = Math.floor(e.slidesToShow / 2)),
                (n = (o - e.currentSlide) % e.slideCount === 0),
                o > e.currentSlide - i - 1 &&
                  o <= e.currentSlide + i &&
                  (t = !0))
              : (t =
                  e.currentSlide <= o && o < e.currentSlide + e.slidesToShow),
            {
              "slick-slide": !0,
              "slick-active": t,
              "slick-center": n,
              "slick-cloned": r,
              "slick-current": o === e.currentSlide
            }
          );
        },
        g = function(e, t) {
          return e.key || t;
        },
        b = function(e) {
          var t,
            n = [],
            a = [],
            s = [],
            l = r.default.Children.count(e.children),
            c = (0, o.lazyStartIndex)(e),
            u = (0, o.lazyEndIndex)(e);
          return (
            r.default.Children.forEach(e.children, function(d, f) {
              var p,
                v = {
                  message: "children",
                  index: f,
                  slidesToScroll: e.slidesToScroll,
                  currentSlide: e.currentSlide
                };
              p =
                !e.lazyLoad || (e.lazyLoad && e.lazyLoadedList.indexOf(f) >= 0)
                  ? d
                  : r.default.createElement("div", null);
              var b = (function(e) {
                  var t = {};
                  return (
                    (void 0 !== e.variableWidth && !1 !== e.variableWidth) ||
                      (t.width = e.slideWidth),
                    e.fade &&
                      ((t.position = "relative"),
                      e.vertical
                        ? (t.top = -e.index * parseInt(e.slideHeight))
                        : (t.left = -e.index * parseInt(e.slideWidth)),
                      (t.opacity = e.currentSlide === e.index ? 1 : 0),
                      (t.transition =
                        "opacity " +
                        e.speed +
                        "ms " +
                        e.cssEase +
                        ", visibility " +
                        e.speed +
                        "ms " +
                        e.cssEase),
                      (t.WebkitTransition =
                        "opacity " +
                        e.speed +
                        "ms " +
                        e.cssEase +
                        ", visibility " +
                        e.speed +
                        "ms " +
                        e.cssEase)),
                    t
                  );
                })(h({}, e, { index: f })),
                m = p.props.className || "",
                w = y(h({}, e, { index: f }));
              if (
                (n.push(
                  r.default.cloneElement(p, {
                    key: "original" + g(p, f),
                    "data-index": f,
                    className: (0, i.default)(w, m),
                    tabIndex: "-1",
                    "aria-hidden": !w["slick-active"],
                    style: h({ outline: "none" }, p.props.style || {}, {}, b),
                    onClick: function(t) {
                      p.props && p.props.onClick && p.props.onClick(t),
                        e.focusOnSelect && e.focusOnSelect(v);
                    }
                  })
                ),
                e.infinite && !1 === e.fade)
              ) {
                var S = l - f;
                S <= (0, o.getPreClones)(e) &&
                  l !== e.slidesToShow &&
                  ((t = -S) >= c && (p = d),
                  (w = y(h({}, e, { index: t }))),
                  a.push(
                    r.default.cloneElement(p, {
                      key: "precloned" + g(p, t),
                      "data-index": t,
                      tabIndex: "-1",
                      className: (0, i.default)(w, m),
                      "aria-hidden": !w["slick-active"],
                      style: h({}, p.props.style || {}, {}, b),
                      onClick: function(t) {
                        p.props && p.props.onClick && p.props.onClick(t),
                          e.focusOnSelect && e.focusOnSelect(v);
                      }
                    })
                  )),
                  l !== e.slidesToShow &&
                    ((t = l + f) < u && (p = d),
                    (w = y(h({}, e, { index: t }))),
                    s.push(
                      r.default.cloneElement(p, {
                        key: "postcloned" + g(p, t),
                        "data-index": t,
                        tabIndex: "-1",
                        className: (0, i.default)(w, m),
                        "aria-hidden": !w["slick-active"],
                        style: h({}, p.props.style || {}, {}, b),
                        onClick: function(t) {
                          p.props && p.props.onClick && p.props.onClick(t),
                            e.focusOnSelect && e.focusOnSelect(v);
                        }
                      })
                    ));
              }
            }),
            e.rtl ? a.concat(n, s).reverse() : a.concat(n, s)
          );
        },
        m = (function(e) {
          function t() {
            return (
              (function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
              u(this, d(t).apply(this, arguments))
            );
          }
          var n, i, o;
          return (
            (function(e, t) {
              if ("function" !== typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 }
              })),
                t && f(e, t);
            })(t, r["default"].PureComponent),
            (n = t),
            (i = [
              {
                key: "render",
                value: function() {
                  var e = b(this.props),
                    t = this.props,
                    n = {
                      onMouseEnter: t.onMouseEnter,
                      onMouseOver: t.onMouseOver,
                      onMouseLeave: t.onMouseLeave
                    };
                  return r.default.createElement(
                    "div",
                    l(
                      {
                        className: "slick-track",
                        style: this.props.trackStyle
                      },
                      n
                    ),
                    e
                  );
                }
              }
            ]) && c(n.prototype, i),
            o && c(n, o),
            t
          );
        })();
      t.Track = m;
    },
    XKhj: function(e, t) {
      e.exports =
        "/nextjs-material-kit/_next/static/images/bg3-e76de24b6d8ab5e920bb4d49241ad15f.jpg";
    },
    aaW0: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.Dots = void 0);
      var r = o(n("q1tI")),
        i = o(n("TSYQ"));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function a(e) {
        return (a =
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
      function s(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function l(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      }
      function c(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function u(e, t) {
        return !t || ("object" !== a(t) && "function" !== typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function d(e) {
        return (d = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function f(e, t) {
        return (f =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var p = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            u(this, d(t).apply(this, arguments))
          );
        }
        var n, o, a;
        return (
          (function(e, t) {
            if ("function" !== typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              t && f(e, t);
          })(t, r["default"].PureComponent),
          (n = t),
          (o = [
            {
              key: "clickHandler",
              value: function(e, t) {
                t.preventDefault(), this.props.clickHandler(e);
              }
            },
            {
              key: "render",
              value: function() {
                var e,
                  t = this,
                  n = (e = {
                    slideCount: this.props.slideCount,
                    slidesToScroll: this.props.slidesToScroll,
                    slidesToShow: this.props.slidesToShow,
                    infinite: this.props.infinite
                  }).infinite
                    ? Math.ceil(e.slideCount / e.slidesToScroll)
                    : Math.ceil(
                        (e.slideCount - e.slidesToShow) / e.slidesToScroll
                      ) + 1,
                  o = this.props,
                  a = {
                    onMouseEnter: o.onMouseEnter,
                    onMouseOver: o.onMouseOver,
                    onMouseLeave: o.onMouseLeave
                  },
                  c = Array.apply(
                    null,
                    Array(n + 1)
                      .join("0")
                      .split("")
                  ).map(function(e, n) {
                    var o = n * t.props.slidesToScroll,
                      a =
                        n * t.props.slidesToScroll +
                        (t.props.slidesToScroll - 1),
                      s = (0, i.default)({
                        "slick-active":
                          t.props.currentSlide >= o && t.props.currentSlide <= a
                      }),
                      l = {
                        message: "dots",
                        index: n,
                        slidesToScroll: t.props.slidesToScroll,
                        currentSlide: t.props.currentSlide
                      },
                      c = t.clickHandler.bind(t, l);
                    return r.default.createElement(
                      "li",
                      { key: n, className: s },
                      r.default.cloneElement(t.props.customPaging(n), {
                        onClick: c
                      })
                    );
                  });
                return r.default.cloneElement(
                  this.props.appendDots(c),
                  (function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var n = null != arguments[t] ? arguments[t] : {};
                      t % 2
                        ? s(n, !0).forEach(function(t) {
                            l(e, t, n[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            e,
                            Object.getOwnPropertyDescriptors(n)
                          )
                        : s(n).forEach(function(t) {
                            Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(n, t)
                            );
                          });
                    }
                    return e;
                  })({ className: this.props.dotsClass }, a)
                );
              }
            }
          ]) && c(n.prototype, o),
          a && c(n, a),
          t
        );
      })();
      t.Dots = p;
    },
    bdgK: function(e, t, n) {
      "use strict";
      n.r(t),
        function(e) {
          var n = (function() {
              if ("undefined" !== typeof Map) return Map;
              function e(e, t) {
                var n = -1;
                return (
                  e.some(function(e, r) {
                    return e[0] === t && ((n = r), !0);
                  }),
                  n
                );
              }
              return (function() {
                function t() {
                  this.__entries__ = [];
                }
                return (
                  Object.defineProperty(t.prototype, "size", {
                    get: function() {
                      return this.__entries__.length;
                    },
                    enumerable: !0,
                    configurable: !0
                  }),
                  (t.prototype.get = function(t) {
                    var n = e(this.__entries__, t),
                      r = this.__entries__[n];
                    return r && r[1];
                  }),
                  (t.prototype.set = function(t, n) {
                    var r = e(this.__entries__, t);
                    ~r
                      ? (this.__entries__[r][1] = n)
                      : this.__entries__.push([t, n]);
                  }),
                  (t.prototype.delete = function(t) {
                    var n = this.__entries__,
                      r = e(n, t);
                    ~r && n.splice(r, 1);
                  }),
                  (t.prototype.has = function(t) {
                    return !!~e(this.__entries__, t);
                  }),
                  (t.prototype.clear = function() {
                    this.__entries__.splice(0);
                  }),
                  (t.prototype.forEach = function(e, t) {
                    void 0 === t && (t = null);
                    for (var n = 0, r = this.__entries__; n < r.length; n++) {
                      var i = r[n];
                      e.call(t, i[1], i[0]);
                    }
                  }),
                  t
                );
              })();
            })(),
            r =
              "undefined" !== typeof window &&
              "undefined" !== typeof document &&
              window.document === document,
            i =
              "undefined" !== typeof e && e.Math === Math
                ? e
                : "undefined" !== typeof self && self.Math === Math
                ? self
                : "undefined" !== typeof window && window.Math === Math
                ? window
                : Function("return this")(),
            o =
              "function" === typeof requestAnimationFrame
                ? requestAnimationFrame.bind(i)
                : function(e) {
                    return setTimeout(function() {
                      return e(Date.now());
                    }, 1e3 / 60);
                  },
            a = 2;
          var s = 20,
            l = [
              "top",
              "right",
              "bottom",
              "left",
              "width",
              "height",
              "size",
              "weight"
            ],
            c = "undefined" !== typeof MutationObserver,
            u = (function() {
              function e() {
                (this.connected_ = !1),
                  (this.mutationEventsAdded_ = !1),
                  (this.mutationsObserver_ = null),
                  (this.observers_ = []),
                  (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
                  (this.refresh = (function(e, t) {
                    var n = !1,
                      r = !1,
                      i = 0;
                    function s() {
                      n && ((n = !1), e()), r && c();
                    }
                    function l() {
                      o(s);
                    }
                    function c() {
                      var e = Date.now();
                      if (n) {
                        if (e - i < a) return;
                        r = !0;
                      } else (n = !0), (r = !1), setTimeout(l, t);
                      i = e;
                    }
                    return c;
                  })(this.refresh.bind(this), s));
              }
              return (
                (e.prototype.addObserver = function(e) {
                  ~this.observers_.indexOf(e) || this.observers_.push(e),
                    this.connected_ || this.connect_();
                }),
                (e.prototype.removeObserver = function(e) {
                  var t = this.observers_,
                    n = t.indexOf(e);
                  ~n && t.splice(n, 1),
                    !t.length && this.connected_ && this.disconnect_();
                }),
                (e.prototype.refresh = function() {
                  this.updateObservers_() && this.refresh();
                }),
                (e.prototype.updateObservers_ = function() {
                  var e = this.observers_.filter(function(e) {
                    return e.gatherActive(), e.hasActive();
                  });
                  return (
                    e.forEach(function(e) {
                      return e.broadcastActive();
                    }),
                    e.length > 0
                  );
                }),
                (e.prototype.connect_ = function() {
                  r &&
                    !this.connected_ &&
                    (document.addEventListener(
                      "transitionend",
                      this.onTransitionEnd_
                    ),
                    window.addEventListener("resize", this.refresh),
                    c
                      ? ((this.mutationsObserver_ = new MutationObserver(
                          this.refresh
                        )),
                        this.mutationsObserver_.observe(document, {
                          attributes: !0,
                          childList: !0,
                          characterData: !0,
                          subtree: !0
                        }))
                      : (document.addEventListener(
                          "DOMSubtreeModified",
                          this.refresh
                        ),
                        (this.mutationEventsAdded_ = !0)),
                    (this.connected_ = !0));
                }),
                (e.prototype.disconnect_ = function() {
                  r &&
                    this.connected_ &&
                    (document.removeEventListener(
                      "transitionend",
                      this.onTransitionEnd_
                    ),
                    window.removeEventListener("resize", this.refresh),
                    this.mutationsObserver_ &&
                      this.mutationsObserver_.disconnect(),
                    this.mutationEventsAdded_ &&
                      document.removeEventListener(
                        "DOMSubtreeModified",
                        this.refresh
                      ),
                    (this.mutationsObserver_ = null),
                    (this.mutationEventsAdded_ = !1),
                    (this.connected_ = !1));
                }),
                (e.prototype.onTransitionEnd_ = function(e) {
                  var t = e.propertyName,
                    n = void 0 === t ? "" : t;
                  l.some(function(e) {
                    return !!~n.indexOf(e);
                  }) && this.refresh();
                }),
                (e.getInstance = function() {
                  return (
                    this.instance_ || (this.instance_ = new e()), this.instance_
                  );
                }),
                (e.instance_ = null),
                e
              );
            })(),
            d = function(e, t) {
              for (var n = 0, r = Object.keys(t); n < r.length; n++) {
                var i = r[n];
                Object.defineProperty(e, i, {
                  value: t[i],
                  enumerable: !1,
                  writable: !1,
                  configurable: !0
                });
              }
              return e;
            },
            f = function(e) {
              return (e && e.ownerDocument && e.ownerDocument.defaultView) || i;
            },
            p = m(0, 0, 0, 0);
          function h(e) {
            return parseFloat(e) || 0;
          }
          function v(e) {
            for (var t = [], n = 1; n < arguments.length; n++)
              t[n - 1] = arguments[n];
            return t.reduce(function(t, n) {
              return t + h(e["border-" + n + "-width"]);
            }, 0);
          }
          function y(e) {
            var t = e.clientWidth,
              n = e.clientHeight;
            if (!t && !n) return p;
            var r = f(e).getComputedStyle(e),
              i = (function(e) {
                for (
                  var t = {}, n = 0, r = ["top", "right", "bottom", "left"];
                  n < r.length;
                  n++
                ) {
                  var i = r[n],
                    o = e["padding-" + i];
                  t[i] = h(o);
                }
                return t;
              })(r),
              o = i.left + i.right,
              a = i.top + i.bottom,
              s = h(r.width),
              l = h(r.height);
            if (
              ("border-box" === r.boxSizing &&
                (Math.round(s + o) !== t && (s -= v(r, "left", "right") + o),
                Math.round(l + a) !== n && (l -= v(r, "top", "bottom") + a)),
              !(function(e) {
                return e === f(e).document.documentElement;
              })(e))
            ) {
              var c = Math.round(s + o) - t,
                u = Math.round(l + a) - n;
              1 !== Math.abs(c) && (s -= c), 1 !== Math.abs(u) && (l -= u);
            }
            return m(i.left, i.top, s, l);
          }
          var g =
            "undefined" !== typeof SVGGraphicsElement
              ? function(e) {
                  return e instanceof f(e).SVGGraphicsElement;
                }
              : function(e) {
                  return (
                    e instanceof f(e).SVGElement &&
                    "function" === typeof e.getBBox
                  );
                };
          function b(e) {
            return r
              ? g(e)
                ? (function(e) {
                    var t = e.getBBox();
                    return m(0, 0, t.width, t.height);
                  })(e)
                : y(e)
              : p;
          }
          function m(e, t, n, r) {
            return { x: e, y: t, width: n, height: r };
          }
          var w = (function() {
              function e(e) {
                (this.broadcastWidth = 0),
                  (this.broadcastHeight = 0),
                  (this.contentRect_ = m(0, 0, 0, 0)),
                  (this.target = e);
              }
              return (
                (e.prototype.isActive = function() {
                  var e = b(this.target);
                  return (
                    (this.contentRect_ = e),
                    e.width !== this.broadcastWidth ||
                      e.height !== this.broadcastHeight
                  );
                }),
                (e.prototype.broadcastRect = function() {
                  var e = this.contentRect_;
                  return (
                    (this.broadcastWidth = e.width),
                    (this.broadcastHeight = e.height),
                    e
                  );
                }),
                e
              );
            })(),
            S = (function() {
              return function(e, t) {
                var n = (function(e) {
                  var t = e.x,
                    n = e.y,
                    r = e.width,
                    i = e.height,
                    o =
                      "undefined" !== typeof DOMRectReadOnly
                        ? DOMRectReadOnly
                        : Object,
                    a = Object.create(o.prototype);
                  return (
                    d(a, {
                      x: t,
                      y: n,
                      width: r,
                      height: i,
                      top: n,
                      right: t + r,
                      bottom: i + n,
                      left: t
                    }),
                    a
                  );
                })(t);
                d(this, { target: e, contentRect: n });
              };
            })(),
            O = (function() {
              function e(e, t, r) {
                if (
                  ((this.activeObservations_ = []),
                  (this.observations_ = new n()),
                  "function" !== typeof e)
                )
                  throw new TypeError(
                    "The callback provided as parameter 1 is not a function."
                  );
                (this.callback_ = e),
                  (this.controller_ = t),
                  (this.callbackCtx_ = r);
              }
              return (
                (e.prototype.observe = function(e) {
                  if (!arguments.length)
                    throw new TypeError(
                      "1 argument required, but only 0 present."
                    );
                  if (
                    "undefined" !== typeof Element &&
                    Element instanceof Object
                  ) {
                    if (!(e instanceof f(e).Element))
                      throw new TypeError(
                        'parameter 1 is not of type "Element".'
                      );
                    var t = this.observations_;
                    t.has(e) ||
                      (t.set(e, new w(e)),
                      this.controller_.addObserver(this),
                      this.controller_.refresh());
                  }
                }),
                (e.prototype.unobserve = function(e) {
                  if (!arguments.length)
                    throw new TypeError(
                      "1 argument required, but only 0 present."
                    );
                  if (
                    "undefined" !== typeof Element &&
                    Element instanceof Object
                  ) {
                    if (!(e instanceof f(e).Element))
                      throw new TypeError(
                        'parameter 1 is not of type "Element".'
                      );
                    var t = this.observations_;
                    t.has(e) &&
                      (t.delete(e),
                      t.size || this.controller_.removeObserver(this));
                  }
                }),
                (e.prototype.disconnect = function() {
                  this.clearActive(),
                    this.observations_.clear(),
                    this.controller_.removeObserver(this);
                }),
                (e.prototype.gatherActive = function() {
                  var e = this;
                  this.clearActive(),
                    this.observations_.forEach(function(t) {
                      t.isActive() && e.activeObservations_.push(t);
                    });
                }),
                (e.prototype.broadcastActive = function() {
                  if (this.hasActive()) {
                    var e = this.callbackCtx_,
                      t = this.activeObservations_.map(function(e) {
                        return new S(e.target, e.broadcastRect());
                      });
                    this.callback_.call(e, t, e), this.clearActive();
                  }
                }),
                (e.prototype.clearActive = function() {
                  this.activeObservations_.splice(0);
                }),
                (e.prototype.hasActive = function() {
                  return this.activeObservations_.length > 0;
                }),
                e
              );
            })(),
            k = "undefined" !== typeof WeakMap ? new WeakMap() : new n(),
            _ = (function() {
              return function e(t) {
                if (!(this instanceof e))
                  throw new TypeError("Cannot call a class as a function.");
                if (!arguments.length)
                  throw new TypeError(
                    "1 argument required, but only 0 present."
                  );
                var n = u.getInstance(),
                  r = new O(t, n, this);
                k.set(this, r);
              };
            })();
          ["observe", "unobserve", "disconnect"].forEach(function(e) {
            _.prototype[e] = function() {
              var t;
              return (t = k.get(this))[e].apply(t, arguments);
            };
          });
          var T =
            "undefined" !== typeof i.ResizeObserver ? i.ResizeObserver : _;
          t.default = T;
        }.call(this, n("3r9c"));
    },
    gRsC: function(e, t) {
      e.exports =
        "/nextjs-material-kit/_next/static/images/bg-e52419719dd0c4c8b172136f0b625008.jpg";
    },
    hDiz: function(e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "default", function() {
          return T;
        });
      var r = n("q1tI"),
        i = n.n(r),
        o = n("pzeu"),
        a = n("zR9M"),
        s = n("OS56"),
        l = n.n(s),
        c = n("R/WZ"),
        u = n("r2we"),
        d = n.n(u),
        f = n("mtPR"),
        p = n("i4t8"),
        h = n("A2So"),
        v = n("gRsC"),
        y = n.n(v),
        g = n("pC0U"),
        b = n.n(g),
        m = n("XKhj"),
        w = n.n(m),
        S = n("Oref"),
        O = i.a.createElement,
        k =
          'import React from "react";\n// react component for creating beautiful carousel\nimport Carousel from "react-slick";\n// material-ui components\n// @material-ui/icons\nimport LocationOn from "@material-ui/icons/LocationOn";\n// core components\nimport GridContainer from "components/Grid/GridContainer.js";\nimport GridItem from "components/Grid/GridItem.js";\nimport Card from "components/Card/Card.js";\n\nimport image1 from "assets/img/bg.jpg";\nimport image2 from "assets/img/bg2.jpg";\nimport image3 from "assets/img/bg3.jpg";\n\nexport default function SectionCarousel(){\n  const settings = {\n    dots: true,\n    infinite: true,\n    speed: 500,\n    slidesToShow: 1,\n    slidesToScroll: 1,\n    autoplay: true\n  };\n  return (\n    <GridContainer>\n      <GridItem xs={12} sm={12} md={8}>\n        <Card>\n          <Carousel {...settings}>\n            <div>\n              <img\n                src={image1}\n                alt="First slide"\n                className="slick-image"\n              />\n              <div className="slick-caption">\n                <h4>\n                  <LocationOn className="slick-icons" />Yellowstone\n                  National Park, United States\n                </h4>\n              </div>\n            </div>\n            <div>\n              <img\n                src={image2}\n                alt="Second slide"\n                className="slick-image"\n              />\n              <div className="slick-caption">\n                <h4>\n                  <LocationOn className="slick-icons" />Somewhere Beyond,\n                  United States\n                </h4>\n              </div>\n            </div>\n            <div>\n              <img\n                src={image3}\n                alt="Third slide"\n                className="slick-image"\n              />\n              <div className="slick-caption">\n                <h4>\n                  <LocationOn className="slick-icons" />Yellowstone\n                  National Park, United States\n                </h4>\n              </div>\n            </div>\n          </Carousel>\n        </Card>\n      </GridItem>\n    </GridContainer>\n  );\n}',
        _ = Object(c.a)({
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
        });
      function T() {
        var e = _();
        return O(
          S.a,
          null,
          O("h1", null, "React Slick 0.24.0"),
          O("h2", null, "Styles"),
          O(
            "p",
            null,
            "You will find the styles for this component in",
            O("br", null),
            O("code", null, "src/assets/scss/plugins/_plugin-react-slick.scss"),
            "."
          ),
          O("h2", null, "Example"),
          O(
            "div",
            { className: e.bdExample },
            O(
              f.a,
              null,
              O(
                p.a,
                { xs: 12, sm: 12, md: 8 },
                O(
                  h.a,
                  null,
                  O(
                    l.a,
                    {
                      dots: !0,
                      infinite: !0,
                      speed: 500,
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      autoplay: !0
                    },
                    O(
                      "div",
                      null,
                      O("img", {
                        src: y.a,
                        alt: "First slide",
                        className: "slick-image"
                      }),
                      O(
                        "div",
                        { className: "slick-caption" },
                        O(
                          "h4",
                          null,
                          O(d.a, { className: "slick-icons" }),
                          "Yellowstone National Park, United States"
                        )
                      )
                    ),
                    O(
                      "div",
                      null,
                      O("img", {
                        src: b.a,
                        alt: "Second slide",
                        className: "slick-image"
                      }),
                      O(
                        "div",
                        { className: "slick-caption" },
                        O(
                          "h4",
                          null,
                          O(d.a, { className: "slick-icons" }),
                          "Somewhere Beyond, United States"
                        )
                      )
                    ),
                    O(
                      "div",
                      null,
                      O("img", {
                        src: w.a,
                        alt: "Third slide",
                        className: "slick-image"
                      }),
                      O(
                        "div",
                        { className: "slick-caption" },
                        O(
                          "h4",
                          null,
                          O(d.a, { className: "slick-icons" }),
                          "Yellowstone National Park, United States"
                        )
                      )
                    )
                  )
                )
              )
            )
          ),
          O(o.a, { language: "jsx", style: a.prism }, k),
          O("h2", null, "Props"),
          O(
            "p",
            null,
            "We've added some extra classes to the default ones from",
            " ",
            O(
              "a",
              {
                href: "https://react-slick.neostack.com/?ref=creativetim",
                target: "_blank"
              },
              "react-slick"
            ),
            "."
          ),
          O(
            "p",
            null,
            "These are ",
            O("code", null, ".slick-image"),
            " for the image of the slide,",
            " ",
            O("code", null, ".slick-caption"),
            ", the text that appears over the image and",
            " ",
            O("code", null, ".slick-icons"),
            ", used for the icon that goes along with the text."
          ),
          O(
            "p",
            null,
            "For more details please refer to",
            " ",
            O(
              "a",
              {
                href:
                  "https://react-slick.neostack.com/docs/get-started?ref=creativetim",
                target: "_blank"
              },
              "react-slick's official docs"
            ),
            "."
          )
        );
      }
    },
    jpXb: function(e, t, n) {
      var r = n("wZXL");
      e.exports = new r();
    },
    kCCV: function(e, t) {
      function n(e) {
        (this.options = e), !e.deferSetup && this.setup();
      }
      (n.prototype = {
        constructor: n,
        setup: function() {
          this.options.setup && this.options.setup(), (this.initialised = !0);
        },
        on: function() {
          !this.initialised && this.setup(),
            this.options.match && this.options.match();
        },
        off: function() {
          this.options.unmatch && this.options.unmatch();
        },
        destroy: function() {
          this.options.destroy ? this.options.destroy() : this.off();
        },
        equals: function(e) {
          return this.options === e || this.options.match === e;
        }
      }),
        (e.exports = n);
    },
    pC0U: function(e, t) {
      e.exports =
        "/nextjs-material-kit/_next/static/images/bg2-843781834b1db2908f08d921c6460c81.jpg";
    },
    pIsd: function(e, t, n) {
      var r = n("BJfS"),
        i = function(e) {
          var t = "",
            n = Object.keys(e);
          return (
            n.forEach(function(i, o) {
              var a = e[i];
              (function(e) {
                return /[height|width]$/.test(e);
              })((i = r(i))) &&
                "number" === typeof a &&
                (a += "px"),
                (t +=
                  !0 === a
                    ? i
                    : !1 === a
                    ? "not " + i
                    : "(" + i + ": " + a + ")"),
                o < n.length - 1 && (t += " and ");
            }),
            t
          );
        };
      e.exports = function(e) {
        var t = "";
        return "string" === typeof e
          ? e
          : e instanceof Array
          ? (e.forEach(function(n, r) {
              (t += i(n)), r < e.length - 1 && (t += ", ");
            }),
            t)
          : i(e);
      };
    },
    r2we: function(e, t, n) {
      "use strict";
      var r = n("TqRt");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var i = r(n("q1tI")),
        o = (0, r(n("8/g6")).default)(
          i.default.createElement("path", {
            d:
              "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
          }),
          "LocationOn"
        );
      t.default = o;
    },
    rxal: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r = {
        animating: !1,
        autoplaying: null,
        currentDirection: 0,
        currentLeft: null,
        currentSlide: 0,
        direction: 1,
        dragging: !1,
        edgeDragged: !1,
        initialized: !1,
        lazyLoadedList: [],
        listHeight: null,
        listWidth: null,
        scrolling: !1,
        slideCount: null,
        slideHeight: null,
        slideWidth: null,
        swipeLeft: null,
        swiped: !1,
        swiping: !1,
        touchObject: { startX: 0, startY: 0, curX: 0, curY: 0 },
        trackStyle: {},
        trackWidth: 0
      };
      t.default = r;
    },
    ueNE: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.InnerSlider = void 0);
      var r = p(n("q1tI")),
        i = p(n("i8i4")),
        o = p(n("rxal")),
        a = p(n("9/5/")),
        s = p(n("TSYQ")),
        l = n("x9Za"),
        c = n("UZv/"),
        u = n("aaW0"),
        d = n("KOnL"),
        f = p(n("bdgK"));
      function p(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function h() {
        return (h =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function v(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function(e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              o = Object.keys(e);
            for (r = 0; r < o.length; r++)
              (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
        }
        return i;
      }
      function y(e) {
        return (y =
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
      function g(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function b(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? g(n, !0).forEach(function(t) {
                O(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : g(n).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function m(e) {
        return (m = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function w(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function S(e, t) {
        return (S =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function O(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      }
      var k = (function(e) {
        function t(e) {
          var n;
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            (n = (function(e, t) {
              return !t || ("object" !== y(t) && "function" !== typeof t)
                ? w(e)
                : t;
            })(this, m(t).call(this, e))),
            O(w(n), "listRefHandler", function(e) {
              return (n.list = e);
            }),
            O(w(n), "trackRefHandler", function(e) {
              return (n.track = e);
            }),
            O(w(n), "adaptHeight", function() {
              if (n.props.adaptiveHeight && n.list) {
                var e = n.list.querySelector(
                  '[data-index="'.concat(n.state.currentSlide, '"]')
                );
                n.list.style.height = (0, l.getHeight)(e) + "px";
              }
            }),
            O(w(n), "UNSAFE_componentWillMount", function() {
              if (
                (n.ssrInit(),
                n.props.onInit && n.props.onInit(),
                n.props.lazyLoad)
              ) {
                var e = (0, l.getOnDemandLazySlides)(
                  b({}, n.props, {}, n.state)
                );
                e.length > 0 &&
                  (n.setState(function(t) {
                    return { lazyLoadedList: t.lazyLoadedList.concat(e) };
                  }),
                  n.props.onLazyLoad && n.props.onLazyLoad(e));
              }
            }),
            O(w(n), "componentDidMount", function() {
              var e = b({ listRef: n.list, trackRef: n.track }, n.props);
              n.updateState(e, !0, function() {
                n.adaptHeight(), n.props.autoplay && n.autoPlay("update");
              }),
                "progressive" === n.props.lazyLoad &&
                  (n.lazyLoadTimer = setInterval(n.progressiveLazyLoad, 1e3)),
                (n.ro = new f.default(function() {
                  n.state.animating
                    ? (n.onWindowResized(!1),
                      n.callbackTimers.push(
                        setTimeout(function() {
                          return n.onWindowResized();
                        }, n.props.speed)
                      ))
                    : n.onWindowResized();
                })),
                n.ro.observe(n.list),
                Array.prototype.forEach.call(
                  document.querySelectorAll(".slick-slide"),
                  function(e) {
                    (e.onfocus = n.props.pauseOnFocus ? n.onSlideFocus : null),
                      (e.onblur = n.props.pauseOnFocus ? n.onSlideBlur : null);
                  }
                ),
                window &&
                  (window.addEventListener
                    ? window.addEventListener("resize", n.onWindowResized)
                    : window.attachEvent("onresize", n.onWindowResized));
            }),
            O(w(n), "componentWillUnmount", function() {
              n.animationEndCallback && clearTimeout(n.animationEndCallback),
                n.lazyLoadTimer && clearInterval(n.lazyLoadTimer),
                n.callbackTimers.length &&
                  (n.callbackTimers.forEach(function(e) {
                    return clearTimeout(e);
                  }),
                  (n.callbackTimers = [])),
                window.addEventListener
                  ? window.removeEventListener("resize", n.onWindowResized)
                  : window.detachEvent("onresize", n.onWindowResized),
                n.autoplayTimer && clearInterval(n.autoplayTimer);
            }),
            O(w(n), "UNSAFE_componentWillReceiveProps", function(e) {
              for (
                var t = b(
                    { listRef: n.list, trackRef: n.track },
                    e,
                    {},
                    n.state
                  ),
                  i = !1,
                  o = 0,
                  a = Object.keys(n.props);
                o < a.length;
                o++
              ) {
                var s = a[o];
                if (!e.hasOwnProperty(s)) {
                  i = !0;
                  break;
                }
                if (
                  "object" !== y(e[s]) &&
                  "function" !== typeof e[s] &&
                  e[s] !== n.props[s]
                ) {
                  i = !0;
                  break;
                }
              }
              n.updateState(t, i, function() {
                n.state.currentSlide >= r.default.Children.count(e.children) &&
                  n.changeSlide({
                    message: "index",
                    index:
                      r.default.Children.count(e.children) - e.slidesToShow,
                    currentSlide: n.state.currentSlide
                  }),
                  e.autoplay ? n.autoPlay("update") : n.pause("paused");
              });
            }),
            O(w(n), "componentDidUpdate", function() {
              if (
                (n.checkImagesLoad(),
                n.props.onReInit && n.props.onReInit(),
                n.props.lazyLoad)
              ) {
                var e = (0, l.getOnDemandLazySlides)(
                  b({}, n.props, {}, n.state)
                );
                e.length > 0 &&
                  (n.setState(function(t) {
                    return { lazyLoadedList: t.lazyLoadedList.concat(e) };
                  }),
                  n.props.onLazyLoad && n.props.onLazyLoad(e));
              }
              n.adaptHeight();
            }),
            O(w(n), "onWindowResized", function(e) {
              n.debouncedResize && n.debouncedResize.cancel(),
                (n.debouncedResize = (0, a.default)(function() {
                  return n.resizeWindow(e);
                }, 50)),
                n.debouncedResize();
            }),
            O(w(n), "resizeWindow", function() {
              var e =
                !(arguments.length > 0 && void 0 !== arguments[0]) ||
                arguments[0];
              if (i.default.findDOMNode(n.track)) {
                var t = b(
                  { listRef: n.list, trackRef: n.track },
                  n.props,
                  {},
                  n.state
                );
                n.updateState(t, e, function() {
                  n.props.autoplay ? n.autoPlay("update") : n.pause("paused");
                }),
                  n.setState({ animating: !1 }),
                  clearTimeout(n.animationEndCallback),
                  delete n.animationEndCallback;
              }
            }),
            O(w(n), "updateState", function(e, t, i) {
              var o = (0, l.initializedState)(e);
              (e = b({}, e, {}, o, { slideIndex: o.currentSlide })),
                (e = b({}, e, { left: (0, l.getTrackLeft)(e) }));
              var a = (0, l.getTrackCSS)(e);
              (t ||
                r.default.Children.count(n.props.children) !==
                  r.default.Children.count(e.children)) &&
                (o.trackStyle = a),
                n.setState(o, i);
            }),
            O(w(n), "ssrInit", function() {
              if (n.props.variableWidth) {
                var e = 0,
                  t = 0,
                  i = [],
                  o = (0, l.getPreClones)(
                    b({}, n.props, {}, n.state, {
                      slideCount: n.props.children.length
                    })
                  ),
                  a = (0, l.getPostClones)(
                    b({}, n.props, {}, n.state, {
                      slideCount: n.props.children.length
                    })
                  );
                n.props.children.forEach(function(t) {
                  i.push(t.props.style.width), (e += t.props.style.width);
                });
                for (var s = 0; s < o; s++)
                  (t += i[i.length - 1 - s]), (e += i[i.length - 1 - s]);
                for (var c = 0; c < a; c++) e += i[c];
                for (var u = 0; u < n.state.currentSlide; u++) t += i[u];
                var d = { width: e + "px", left: -t + "px" };
                if (n.props.centerMode) {
                  var f = "".concat(i[n.state.currentSlide], "px");
                  d.left = "calc("
                    .concat(d.left, " + (100% - ")
                    .concat(f, ") / 2 ) ");
                }
                n.setState({ trackStyle: d });
              } else {
                var p = r.default.Children.count(n.props.children),
                  h = b({}, n.props, {}, n.state, { slideCount: p }),
                  v = (0, l.getPreClones)(h) + (0, l.getPostClones)(h) + p,
                  y = (100 / n.props.slidesToShow) * v,
                  g = 100 / v,
                  m =
                    (-g * ((0, l.getPreClones)(h) + n.state.currentSlide) * y) /
                    100;
                n.props.centerMode && (m += (100 - (g * y) / 100) / 2);
                var w = { width: y + "%", left: m + "%" };
                n.setState({ slideWidth: g + "%", trackStyle: w });
              }
            }),
            O(w(n), "checkImagesLoad", function() {
              var e = document.querySelectorAll(".slick-slide img"),
                t = e.length,
                r = 0;
              Array.prototype.forEach.call(e, function(e) {
                var i = function() {
                  return ++r && r >= t && n.onWindowResized();
                };
                if (e.onclick) {
                  var o = e.onclick;
                  e.onclick = function() {
                    o(), e.parentNode.focus();
                  };
                } else
                  e.onclick = function() {
                    return e.parentNode.focus();
                  };
                e.onload ||
                  (n.props.lazyLoad
                    ? (e.onload = function() {
                        n.adaptHeight(),
                          n.callbackTimers.push(
                            setTimeout(n.onWindowResized, n.props.speed)
                          );
                      })
                    : ((e.onload = i),
                      (e.onerror = function() {
                        i(),
                          n.props.onLazyLoadError && n.props.onLazyLoadError();
                      })));
              });
            }),
            O(w(n), "progressiveLazyLoad", function() {
              for (
                var e = [],
                  t = b({}, n.props, {}, n.state),
                  r = n.state.currentSlide;
                r < n.state.slideCount + (0, l.getPostClones)(t);
                r++
              )
                if (n.state.lazyLoadedList.indexOf(r) < 0) {
                  e.push(r);
                  break;
                }
              for (
                var i = n.state.currentSlide - 1;
                i >= -(0, l.getPreClones)(t);
                i--
              )
                if (n.state.lazyLoadedList.indexOf(i) < 0) {
                  e.push(i);
                  break;
                }
              e.length > 0
                ? (n.setState(function(t) {
                    return { lazyLoadedList: t.lazyLoadedList.concat(e) };
                  }),
                  n.props.onLazyLoad && n.props.onLazyLoad(e))
                : n.lazyLoadTimer &&
                  (clearInterval(n.lazyLoadTimer), delete n.lazyLoadTimer);
            }),
            O(w(n), "slideHandler", function(e) {
              var t =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                r = n.props,
                i = r.asNavFor,
                o = r.beforeChange,
                a = r.onLazyLoad,
                s = r.speed,
                c = r.afterChange,
                u = n.state.currentSlide,
                d = (0, l.slideHandler)(
                  b({ index: e }, n.props, {}, n.state, {
                    trackRef: n.track,
                    useCSS: n.props.useCSS && !t
                  })
                ),
                f = d.state,
                p = d.nextState;
              if (f) {
                o && o(u, f.currentSlide);
                var h = f.lazyLoadedList.filter(function(e) {
                  return n.state.lazyLoadedList.indexOf(e) < 0;
                });
                a && h.length > 0 && a(h),
                  n.setState(f, function() {
                    i && i.innerSlider.slideHandler(e),
                      p &&
                        (n.animationEndCallback = setTimeout(function() {
                          var e = p.animating,
                            t = v(p, ["animating"]);
                          n.setState(t, function() {
                            n.callbackTimers.push(
                              setTimeout(function() {
                                return n.setState({ animating: e });
                              }, 10)
                            ),
                              c && c(f.currentSlide),
                              delete n.animationEndCallback;
                          });
                        }, s));
                  });
              }
            }),
            O(w(n), "changeSlide", function(e) {
              var t =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                r = b({}, n.props, {}, n.state),
                i = (0, l.changeSlide)(r, e);
              (0 === i || i) &&
                (!0 === t ? n.slideHandler(i, t) : n.slideHandler(i));
            }),
            O(w(n), "clickHandler", function(e) {
              !1 === n.clickable && (e.stopPropagation(), e.preventDefault()),
                (n.clickable = !0);
            }),
            O(w(n), "keyHandler", function(e) {
              var t = (0, l.keyHandler)(e, n.props.accessibility, n.props.rtl);
              "" !== t && n.changeSlide({ message: t });
            }),
            O(w(n), "selectHandler", function(e) {
              n.changeSlide(e);
            }),
            O(w(n), "disableBodyScroll", function() {
              window.ontouchmove = function(e) {
                (e = e || window.event).preventDefault && e.preventDefault(),
                  (e.returnValue = !1);
              };
            }),
            O(w(n), "enableBodyScroll", function() {
              window.ontouchmove = null;
            }),
            O(w(n), "swipeStart", function(e) {
              n.props.verticalSwiping && n.disableBodyScroll();
              var t = (0, l.swipeStart)(e, n.props.swipe, n.props.draggable);
              "" !== t && n.setState(t);
            }),
            O(w(n), "swipeMove", function(e) {
              var t = (0, l.swipeMove)(
                e,
                b({}, n.props, {}, n.state, {
                  trackRef: n.track,
                  listRef: n.list,
                  slideIndex: n.state.currentSlide
                })
              );
              t && (t.swiping && (n.clickable = !1), n.setState(t));
            }),
            O(w(n), "swipeEnd", function(e) {
              var t = (0, l.swipeEnd)(
                e,
                b({}, n.props, {}, n.state, {
                  trackRef: n.track,
                  listRef: n.list,
                  slideIndex: n.state.currentSlide
                })
              );
              if (t) {
                var r = t.triggerSlideHandler;
                delete t.triggerSlideHandler,
                  n.setState(t),
                  void 0 !== r &&
                    (n.slideHandler(r),
                    n.props.verticalSwiping && n.enableBodyScroll());
              }
            }),
            O(w(n), "slickPrev", function() {
              n.callbackTimers.push(
                setTimeout(function() {
                  return n.changeSlide({ message: "previous" });
                }, 0)
              );
            }),
            O(w(n), "slickNext", function() {
              n.callbackTimers.push(
                setTimeout(function() {
                  return n.changeSlide({ message: "next" });
                }, 0)
              );
            }),
            O(w(n), "slickGoTo", function(e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              if (((e = Number(e)), isNaN(e))) return "";
              n.callbackTimers.push(
                setTimeout(function() {
                  return n.changeSlide(
                    {
                      message: "index",
                      index: e,
                      currentSlide: n.state.currentSlide
                    },
                    t
                  );
                }, 0)
              );
            }),
            O(w(n), "play", function() {
              var e;
              if (n.props.rtl)
                e = n.state.currentSlide - n.props.slidesToScroll;
              else {
                if (!(0, l.canGoNext)(b({}, n.props, {}, n.state))) return !1;
                e = n.state.currentSlide + n.props.slidesToScroll;
              }
              n.slideHandler(e);
            }),
            O(w(n), "autoPlay", function(e) {
              n.autoplayTimer && clearInterval(n.autoplayTimer);
              var t = n.state.autoplaying;
              if ("update" === e) {
                if ("hovered" === t || "focused" === t || "paused" === t)
                  return;
              } else if ("leave" === e) {
                if ("paused" === t || "focused" === t) return;
              } else if ("blur" === e && ("paused" === t || "hovered" === t))
                return;
              (n.autoplayTimer = setInterval(
                n.play,
                n.props.autoplaySpeed + 50
              )),
                n.setState({ autoplaying: "playing" });
            }),
            O(w(n), "pause", function(e) {
              n.autoplayTimer &&
                (clearInterval(n.autoplayTimer), (n.autoplayTimer = null));
              var t = n.state.autoplaying;
              "paused" === e
                ? n.setState({ autoplaying: "paused" })
                : "focused" === e
                ? ("hovered" !== t && "playing" !== t) ||
                  n.setState({ autoplaying: "focused" })
                : "playing" === t && n.setState({ autoplaying: "hovered" });
            }),
            O(w(n), "onDotsOver", function() {
              return n.props.autoplay && n.pause("hovered");
            }),
            O(w(n), "onDotsLeave", function() {
              return (
                n.props.autoplay &&
                "hovered" === n.state.autoplaying &&
                n.autoPlay("leave")
              );
            }),
            O(w(n), "onTrackOver", function() {
              return n.props.autoplay && n.pause("hovered");
            }),
            O(w(n), "onTrackLeave", function() {
              return (
                n.props.autoplay &&
                "hovered" === n.state.autoplaying &&
                n.autoPlay("leave")
              );
            }),
            O(w(n), "onSlideFocus", function() {
              return n.props.autoplay && n.pause("focused");
            }),
            O(w(n), "onSlideBlur", function() {
              return (
                n.props.autoplay &&
                "focused" === n.state.autoplaying &&
                n.autoPlay("blur")
              );
            }),
            O(w(n), "render", function() {
              var e,
                t,
                i,
                o = (0, s.default)("slick-slider", n.props.className, {
                  "slick-vertical": n.props.vertical,
                  "slick-initialized": !0
                }),
                a = b({}, n.props, {}, n.state),
                f = (0, l.extractObject)(a, [
                  "fade",
                  "cssEase",
                  "speed",
                  "infinite",
                  "centerMode",
                  "focusOnSelect",
                  "currentSlide",
                  "lazyLoad",
                  "lazyLoadedList",
                  "rtl",
                  "slideWidth",
                  "slideHeight",
                  "listHeight",
                  "vertical",
                  "slidesToShow",
                  "slidesToScroll",
                  "slideCount",
                  "trackStyle",
                  "variableWidth",
                  "unslick",
                  "centerPadding"
                ]),
                p = n.props.pauseOnHover;
              if (
                ((f = b({}, f, {
                  onMouseEnter: p ? n.onTrackOver : null,
                  onMouseLeave: p ? n.onTrackLeave : null,
                  onMouseOver: p ? n.onTrackOver : null,
                  focusOnSelect: n.props.focusOnSelect ? n.selectHandler : null
                })),
                !0 === n.props.dots &&
                  n.state.slideCount >= n.props.slidesToShow)
              ) {
                var v = (0, l.extractObject)(a, [
                    "dotsClass",
                    "slideCount",
                    "slidesToShow",
                    "currentSlide",
                    "slidesToScroll",
                    "clickHandler",
                    "children",
                    "customPaging",
                    "infinite",
                    "appendDots"
                  ]),
                  y = n.props.pauseOnDotsHover;
                (v = b({}, v, {
                  clickHandler: n.changeSlide,
                  onMouseEnter: y ? n.onDotsLeave : null,
                  onMouseOver: y ? n.onDotsOver : null,
                  onMouseLeave: y ? n.onDotsLeave : null
                })),
                  (e = r.default.createElement(u.Dots, v));
              }
              var g = (0, l.extractObject)(a, [
                "infinite",
                "centerMode",
                "currentSlide",
                "slideCount",
                "slidesToShow",
                "prevArrow",
                "nextArrow"
              ]);
              (g.clickHandler = n.changeSlide),
                n.props.arrows &&
                  ((t = r.default.createElement(d.PrevArrow, g)),
                  (i = r.default.createElement(d.NextArrow, g)));
              var m = null;
              n.props.vertical && (m = { height: n.state.listHeight });
              var w = null;
              !1 === n.props.vertical
                ? !0 === n.props.centerMode &&
                  (w = { padding: "0px " + n.props.centerPadding })
                : !0 === n.props.centerMode &&
                  (w = { padding: n.props.centerPadding + " 0px" });
              var S = b({}, m, {}, w),
                O = n.props.touchMove,
                k = {
                  className: "slick-list",
                  style: S,
                  onClick: n.clickHandler,
                  onMouseDown: O ? n.swipeStart : null,
                  onMouseMove: n.state.dragging && O ? n.swipeMove : null,
                  onMouseUp: O ? n.swipeEnd : null,
                  onMouseLeave: n.state.dragging && O ? n.swipeEnd : null,
                  onTouchStart: O ? n.swipeStart : null,
                  onTouchMove: n.state.dragging && O ? n.swipeMove : null,
                  onTouchEnd: O ? n.swipeEnd : null,
                  onTouchCancel: n.state.dragging && O ? n.swipeEnd : null,
                  onKeyDown: n.props.accessibility ? n.keyHandler : null
                },
                _ = { className: o, dir: "ltr", style: n.props.style };
              return (
                n.props.unslick &&
                  ((k = { className: "slick-list" }), (_ = { className: o })),
                r.default.createElement(
                  "div",
                  _,
                  n.props.unslick ? "" : t,
                  r.default.createElement(
                    "div",
                    h({ ref: n.listRefHandler }, k),
                    r.default.createElement(
                      c.Track,
                      h({ ref: n.trackRefHandler }, f),
                      n.props.children
                    )
                  ),
                  n.props.unslick ? "" : i,
                  n.props.unslick ? "" : e
                )
              );
            }),
            (n.list = null),
            (n.track = null),
            (n.state = b({}, o.default, {
              currentSlide: n.props.initialSlide,
              slideCount: r.default.Children.count(n.props.children)
            })),
            (n.callbackTimers = []),
            (n.clickable = !0),
            (n.debouncedResize = null),
            n
          );
        }
        return (
          (function(e, t) {
            if ("function" !== typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              t && S(e, t);
          })(t, r["default"].Component),
          t
        );
      })();
      t.InnerSlider = k;
    },
    "vPd/": function(e, t, n) {
      var r = n("kCCV"),
        i = n("IX3V").each;
      function o(e, t) {
        (this.query = e),
          (this.isUnconditional = t),
          (this.handlers = []),
          (this.mql = window.matchMedia(e));
        var n = this;
        (this.listener = function(e) {
          (n.mql = e.currentTarget || e), n.assess();
        }),
          this.mql.addListener(this.listener);
      }
      (o.prototype = {
        constuctor: o,
        addHandler: function(e) {
          var t = new r(e);
          this.handlers.push(t), this.matches() && t.on();
        },
        removeHandler: function(e) {
          var t = this.handlers;
          i(t, function(n, r) {
            if (n.equals(e)) return n.destroy(), !t.splice(r, 1);
          });
        },
        matches: function() {
          return this.mql.matches || this.isUnconditional;
        },
        clear: function() {
          i(this.handlers, function(e) {
            e.destroy();
          }),
            this.mql.removeListener(this.listener),
            (this.handlers.length = 0);
        },
        assess: function() {
          var e = this.matches() ? "on" : "off";
          i(this.handlers, function(t) {
            t[e]();
          });
        }
      }),
        (e.exports = o);
    },
    wZXL: function(e, t, n) {
      var r = n("vPd/"),
        i = n("IX3V"),
        o = i.each,
        a = i.isFunction,
        s = i.isArray;
      function l() {
        if (!window.matchMedia)
          throw new Error(
            "matchMedia not present, legacy browsers require a polyfill"
          );
        (this.queries = {}),
          (this.browserIsIncapable = !window.matchMedia("only all").matches);
      }
      (l.prototype = {
        constructor: l,
        register: function(e, t, n) {
          var i = this.queries,
            l = n && this.browserIsIncapable;
          return (
            i[e] || (i[e] = new r(e, l)),
            a(t) && (t = { match: t }),
            s(t) || (t = [t]),
            o(t, function(t) {
              a(t) && (t = { match: t }), i[e].addHandler(t);
            }),
            this
          );
        },
        unregister: function(e, t) {
          var n = this.queries[e];
          return (
            n && (t ? n.removeHandler(t) : (n.clear(), delete this.queries[e])),
            this
          );
        }
      }),
        (e.exports = l);
    },
    x9Za: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.canUseDOM = t.slidesOnLeft = t.slidesOnRight = t.siblingDirection = t.getTotalSlides = t.getPostClones = t.getPreClones = t.getTrackLeft = t.getTrackAnimateCSS = t.getTrackCSS = t.checkSpecKeys = t.getSlideCount = t.checkNavigable = t.getNavigableIndexes = t.swipeEnd = t.swipeMove = t.swipeStart = t.keyHandler = t.changeSlide = t.slideHandler = t.initializedState = t.extractObject = t.canGoNext = t.getSwipeDirection = t.getHeight = t.getWidth = t.lazySlidesOnRight = t.lazySlidesOnLeft = t.lazyEndIndex = t.lazyStartIndex = t.getRequiredLazySlides = t.getOnDemandLazySlides = void 0);
      var r = o(n("q1tI")),
        i = o(n("i8i4"));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function a(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? a(n, !0).forEach(function(t) {
                l(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : a(n).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function l(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      }
      var c = function(e) {
        for (var t = [], n = u(e), r = d(e), i = n; i < r; i++)
          e.lazyLoadedList.indexOf(i) < 0 && t.push(i);
        return t;
      };
      t.getOnDemandLazySlides = c;
      t.getRequiredLazySlides = function(e) {
        for (var t = [], n = u(e), r = d(e), i = n; i < r; i++) t.push(i);
        return t;
      };
      var u = function(e) {
        return e.currentSlide - f(e);
      };
      t.lazyStartIndex = u;
      var d = function(e) {
        return e.currentSlide + p(e);
      };
      t.lazyEndIndex = d;
      var f = function(e) {
        return e.centerMode
          ? Math.floor(e.slidesToShow / 2) +
              (parseInt(e.centerPadding) > 0 ? 1 : 0)
          : 0;
      };
      t.lazySlidesOnLeft = f;
      var p = function(e) {
        return e.centerMode
          ? Math.floor((e.slidesToShow - 1) / 2) +
              1 +
              (parseInt(e.centerPadding) > 0 ? 1 : 0)
          : e.slidesToShow;
      };
      t.lazySlidesOnRight = p;
      var h = function(e) {
        return (e && e.offsetWidth) || 0;
      };
      t.getWidth = h;
      var v = function(e) {
        return (e && e.offsetHeight) || 0;
      };
      t.getHeight = v;
      var y = function(e) {
        var t,
          n,
          r,
          i,
          o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return (
          (t = e.startX - e.curX),
          (n = e.startY - e.curY),
          (r = Math.atan2(n, t)),
          (i = Math.round((180 * r) / Math.PI)) < 0 && (i = 360 - Math.abs(i)),
          (i <= 45 && i >= 0) || (i <= 360 && i >= 315)
            ? "left"
            : i >= 135 && i <= 225
            ? "right"
            : !0 === o
            ? i >= 35 && i <= 135
              ? "up"
              : "down"
            : "vertical"
        );
      };
      t.getSwipeDirection = y;
      var g = function(e) {
        var t = !0;
        return (
          e.infinite ||
            (e.centerMode && e.currentSlide >= e.slideCount - 1
              ? (t = !1)
              : (e.slideCount <= e.slidesToShow ||
                  e.currentSlide >= e.slideCount - e.slidesToShow) &&
                (t = !1)),
          t
        );
      };
      t.canGoNext = g;
      t.extractObject = function(e, t) {
        var n = {};
        return (
          t.forEach(function(t) {
            return (n[t] = e[t]);
          }),
          n
        );
      };
      t.initializedState = function(e) {
        var t,
          n = r.default.Children.count(e.children),
          o = Math.ceil(h(i.default.findDOMNode(e.listRef))),
          a = Math.ceil(h(i.default.findDOMNode(e.trackRef)));
        if (e.vertical) t = o;
        else {
          var s = e.centerMode && 2 * parseInt(e.centerPadding);
          "string" === typeof e.centerPadding &&
            "%" === e.centerPadding.slice(-1) &&
            (s *= o / 100),
            (t = Math.ceil((o - s) / e.slidesToShow));
        }
        var l =
            i.default.findDOMNode(e.listRef) &&
            v(
              i.default.findDOMNode(e.listRef).querySelector('[data-index="0"]')
            ),
          u = l * e.slidesToShow,
          d = void 0 === e.currentSlide ? e.initialSlide : e.currentSlide;
        e.rtl && void 0 === e.currentSlide && (d = n - 1 - e.initialSlide);
        var f = e.lazyLoadedList || [],
          p = c({ currentSlide: d, lazyLoadedList: f });
        f.concat(p);
        var y = {
          slideCount: n,
          slideWidth: t,
          listWidth: o,
          trackWidth: a,
          currentSlide: d,
          slideHeight: l,
          listHeight: u,
          lazyLoadedList: f
        };
        return (
          null === e.autoplaying && e.autoplay && (y.autoplaying = "playing"), y
        );
      };
      t.slideHandler = function(e) {
        var t = e.waitForAnimate,
          n = e.animating,
          r = e.fade,
          i = e.infinite,
          o = e.index,
          a = e.slideCount,
          l = e.lazyLoadedList,
          u = e.lazyLoad,
          d = e.currentSlide,
          f = e.centerMode,
          p = e.slidesToScroll,
          h = e.slidesToShow,
          v = e.useCSS;
        if (t && n) return {};
        var y,
          b,
          m,
          w = o,
          S = {},
          T = {};
        if (r) {
          if (!i && (o < 0 || o >= a)) return {};
          o < 0 ? (w = o + a) : o >= a && (w = o - a),
            u && l.indexOf(w) < 0 && l.push(w),
            (S = { animating: !0, currentSlide: w, lazyLoadedList: l }),
            (T = { animating: !1 });
        } else
          (y = w),
            w < 0
              ? ((y = w + a), i ? a % p !== 0 && (y = a - (a % p)) : (y = 0))
              : !g(e) && w > d
              ? (w = y = d)
              : f && w >= a
              ? ((w = i ? a : a - 1), (y = i ? 0 : a - 1))
              : w >= a &&
                ((y = w - a), i ? a % p !== 0 && (y = 0) : (y = a - h)),
            (b = _(s({}, e, { slideIndex: w }))),
            (m = _(s({}, e, { slideIndex: y }))),
            i || (b === m && (w = y), (b = m)),
            u && l.concat(c(s({}, e, { currentSlide: w }))),
            v
              ? ((S = {
                  animating: !0,
                  currentSlide: y,
                  trackStyle: k(s({}, e, { left: b })),
                  lazyLoadedList: l
                }),
                (T = {
                  animating: !1,
                  currentSlide: y,
                  trackStyle: O(s({}, e, { left: m })),
                  swipeLeft: null
                }))
              : (S = {
                  currentSlide: y,
                  trackStyle: O(s({}, e, { left: m })),
                  lazyLoadedList: l
                });
        return { state: S, nextState: T };
      };
      t.changeSlide = function(e, t) {
        var n,
          r,
          i,
          o,
          a = e.slidesToScroll,
          l = e.slidesToShow,
          c = e.slideCount,
          u = e.currentSlide,
          d = e.lazyLoad,
          f = e.infinite;
        if (((n = c % a !== 0 ? 0 : (c - u) % a), "previous" === t.message))
          (o = u - (i = 0 === n ? a : l - n)),
            d && !f && (o = -1 === (r = u - i) ? c - 1 : r);
        else if ("next" === t.message)
          (o = u + (i = 0 === n ? a : n)), d && !f && (o = ((u + a) % c) + n);
        else if ("dots" === t.message) {
          if ((o = t.index * t.slidesToScroll) === t.currentSlide) return null;
        } else if ("children" === t.message) {
          if ((o = t.index) === t.currentSlide) return null;
          if (f) {
            var p = E(s({}, e, { targetSlide: o }));
            o > t.currentSlide && "left" === p
              ? (o -= c)
              : o < t.currentSlide && "right" === p && (o += c);
          }
        } else if (
          "index" === t.message &&
          (o = Number(t.index)) === t.currentSlide
        )
          return null;
        return o;
      };
      t.keyHandler = function(e, t, n) {
        return e.target.tagName.match("TEXTAREA|INPUT|SELECT") || !t
          ? ""
          : 37 === e.keyCode
          ? n
            ? "next"
            : "previous"
          : 39 === e.keyCode
          ? n
            ? "previous"
            : "next"
          : "";
      };
      t.swipeStart = function(e, t, n) {
        return (
          "IMG" === e.target.tagName && e.preventDefault(),
          !t || (!n && -1 !== e.type.indexOf("mouse"))
            ? ""
            : {
                dragging: !0,
                touchObject: {
                  startX: e.touches ? e.touches[0].pageX : e.clientX,
                  startY: e.touches ? e.touches[0].pageY : e.clientY,
                  curX: e.touches ? e.touches[0].pageX : e.clientX,
                  curY: e.touches ? e.touches[0].pageY : e.clientY
                }
              }
        );
      };
      t.swipeMove = function(e, t) {
        var n = t.scrolling,
          r = t.animating,
          i = t.vertical,
          o = t.swipeToSlide,
          a = t.verticalSwiping,
          l = t.rtl,
          c = t.currentSlide,
          u = t.edgeFriction,
          d = t.edgeDragged,
          f = t.onEdge,
          p = t.swiped,
          h = t.swiping,
          v = t.slideCount,
          b = t.slidesToScroll,
          m = t.infinite,
          w = t.touchObject,
          S = t.swipeEvent,
          k = t.listHeight,
          T = t.listWidth;
        if (!n) {
          if (r) return e.preventDefault();
          i && o && a && e.preventDefault();
          var x,
            j = {},
            E = _(t);
          (w.curX = e.touches ? e.touches[0].pageX : e.clientX),
            (w.curY = e.touches ? e.touches[0].pageY : e.clientY),
            (w.swipeLength = Math.round(
              Math.sqrt(Math.pow(w.curX - w.startX, 2))
            ));
          var P = Math.round(Math.sqrt(Math.pow(w.curY - w.startY, 2)));
          if (!a && !h && P > 10) return { scrolling: !0 };
          a && (w.swipeLength = P);
          var L = (l ? -1 : 1) * (w.curX > w.startX ? 1 : -1);
          a && (L = w.curY > w.startY ? 1 : -1);
          var M = Math.ceil(v / b),
            C = y(t.touchObject, a),
            z = w.swipeLength;
          return (
            m ||
              (((0 === c && "right" === C) ||
                (c + 1 >= M && "left" === C) ||
                (!g(t) && "left" === C)) &&
                ((z = w.swipeLength * u),
                !1 === d && f && (f(C), (j.edgeDragged = !0)))),
            !p && S && (S(C), (j.swiped = !0)),
            (x = i ? E + z * (k / T) * L : l ? E - z * L : E + z * L),
            a && (x = E + z * L),
            (j = s({}, j, {
              touchObject: w,
              swipeLeft: x,
              trackStyle: O(s({}, t, { left: x }))
            })),
            Math.abs(w.curX - w.startX) < 0.8 * Math.abs(w.curY - w.startY)
              ? j
              : (w.swipeLength > 10 && ((j.swiping = !0), e.preventDefault()),
                j)
          );
        }
      };
      t.swipeEnd = function(e, t) {
        var n = t.dragging,
          r = t.swipe,
          i = t.touchObject,
          o = t.listWidth,
          a = t.touchThreshold,
          l = t.verticalSwiping,
          c = t.listHeight,
          u = t.currentSlide,
          d = t.swipeToSlide,
          f = t.scrolling,
          p = t.onSwipe;
        if (!n) return r && e.preventDefault(), {};
        var h = l ? c / a : o / a,
          v = y(i, l),
          g = {
            dragging: !1,
            edgeDragged: !1,
            scrolling: !1,
            swiping: !1,
            swiped: !1,
            swipeLeft: null,
            touchObject: {}
          };
        if (f) return g;
        if (!i.swipeLength) return g;
        if (i.swipeLength > h) {
          var b, S;
          switch ((e.preventDefault(), p && p(v), v)) {
            case "left":
            case "up":
              (S = u + w(t)), (b = d ? m(t, S) : S), (g.currentDirection = 0);
              break;
            case "right":
            case "down":
              (S = u - w(t)), (b = d ? m(t, S) : S), (g.currentDirection = 1);
              break;
            default:
              b = u;
          }
          g.triggerSlideHandler = b;
        } else {
          var O = _(t);
          g.trackStyle = k(s({}, t, { left: O }));
        }
        return g;
      };
      var b = function(e) {
        for (
          var t = e.infinite ? 2 * e.slideCount : e.slideCount,
            n = e.infinite ? -1 * e.slidesToShow : 0,
            r = e.infinite ? -1 * e.slidesToShow : 0,
            i = [];
          n < t;

        )
          i.push(n),
            (n = r + e.slidesToScroll),
            (r += Math.min(e.slidesToScroll, e.slidesToShow));
        return i;
      };
      t.getNavigableIndexes = b;
      var m = function(e, t) {
        var n = b(e),
          r = 0;
        if (t > n[n.length - 1]) t = n[n.length - 1];
        else
          for (var i in n) {
            if (t < n[i]) {
              t = r;
              break;
            }
            r = n[i];
          }
        return t;
      };
      t.checkNavigable = m;
      var w = function(e) {
        var t = e.centerMode
          ? e.slideWidth * Math.floor(e.slidesToShow / 2)
          : 0;
        if (e.swipeToSlide) {
          var n,
            r = i.default
              .findDOMNode(e.listRef)
              .querySelectorAll(".slick-slide");
          if (
            (Array.from(r).every(function(r) {
              if (e.vertical) {
                if (r.offsetTop + v(r) / 2 > -1 * e.swipeLeft)
                  return (n = r), !1;
              } else if (r.offsetLeft - t + h(r) / 2 > -1 * e.swipeLeft) return (n = r), !1;
              return !0;
            }),
            !n)
          )
            return 0;
          var o = !0 === e.rtl ? e.slideCount - e.currentSlide : e.currentSlide;
          return Math.abs(n.dataset.index - o) || 1;
        }
        return e.slidesToScroll;
      };
      t.getSlideCount = w;
      var S = function(e, t) {
        return t.reduce(function(t, n) {
          return t && e.hasOwnProperty(n);
        }, !0)
          ? null
          : console.error("Keys Missing:", e);
      };
      t.checkSpecKeys = S;
      var O = function(e) {
        var t, n;
        S(e, [
          "left",
          "variableWidth",
          "slideCount",
          "slidesToShow",
          "slideWidth"
        ]);
        var r = e.slideCount + 2 * e.slidesToShow;
        e.vertical ? (n = r * e.slideHeight) : (t = j(e) * e.slideWidth);
        var i = { opacity: 1, transition: "", WebkitTransition: "" };
        e.useTransform
          ? (i = s({}, i, {
              WebkitTransform: e.vertical
                ? "translate3d(0px, " + e.left + "px, 0px)"
                : "translate3d(" + e.left + "px, 0px, 0px)",
              transform: e.vertical
                ? "translate3d(0px, " + e.left + "px, 0px)"
                : "translate3d(" + e.left + "px, 0px, 0px)",
              msTransform: e.vertical
                ? "translateY(" + e.left + "px)"
                : "translateX(" + e.left + "px)"
            }))
          : e.vertical
          ? (i.top = e.left)
          : (i.left = e.left);
        return (
          e.fade && (i = { opacity: 1 }),
          t && (i.width = t),
          n && (i.height = n),
          window &&
            !window.addEventListener &&
            window.attachEvent &&
            (e.vertical
              ? (i.marginTop = e.left + "px")
              : (i.marginLeft = e.left + "px")),
          i
        );
      };
      t.getTrackCSS = O;
      var k = function(e) {
        S(e, [
          "left",
          "variableWidth",
          "slideCount",
          "slidesToShow",
          "slideWidth",
          "speed",
          "cssEase"
        ]);
        var t = O(e);
        return (
          e.useTransform
            ? ((t.WebkitTransition =
                "-webkit-transform " + e.speed + "ms " + e.cssEase),
              (t.transition = "transform " + e.speed + "ms " + e.cssEase))
            : e.vertical
            ? (t.transition = "top " + e.speed + "ms " + e.cssEase)
            : (t.transition = "left " + e.speed + "ms " + e.cssEase),
          t
        );
      };
      t.getTrackAnimateCSS = k;
      var _ = function(e) {
        if (e.unslick) return 0;
        S(e, [
          "slideIndex",
          "trackRef",
          "infinite",
          "centerMode",
          "slideCount",
          "slidesToShow",
          "slidesToScroll",
          "slideWidth",
          "listWidth",
          "variableWidth",
          "slideHeight"
        ]);
        var t,
          n,
          r = e.slideIndex,
          o = e.trackRef,
          a = e.infinite,
          s = e.centerMode,
          l = e.slideCount,
          c = e.slidesToShow,
          u = e.slidesToScroll,
          d = e.slideWidth,
          f = e.listWidth,
          p = e.variableWidth,
          h = e.slideHeight,
          v = e.fade,
          y = e.vertical;
        if (v || 1 === e.slideCount) return 0;
        var g = 0;
        if (
          (a
            ? ((g = -T(e)),
              l % u !== 0 && r + u > l && (g = -(r > l ? c - (r - l) : l % u)),
              s && (g += parseInt(c / 2)))
            : (l % u !== 0 && r + u > l && (g = c - (l % u)),
              s && (g = parseInt(c / 2))),
          (t = y ? r * h * -1 + g * h : r * d * -1 + g * d),
          !0 === p)
        ) {
          var b,
            m = i.default.findDOMNode(o);
          if (
            ((b = r + T(e)),
            (t = (n = m && m.childNodes[b]) ? -1 * n.offsetLeft : 0),
            !0 === s)
          ) {
            (b = a ? r + T(e) : r), (n = m && m.children[b]), (t = 0);
            for (var w = 0; w < b; w++)
              t -= m && m.children[w] && m.children[w].offsetWidth;
            (t -= parseInt(e.centerPadding)),
              (t += n && (f - n.offsetWidth) / 2);
          }
        }
        return t;
      };
      t.getTrackLeft = _;
      var T = function(e) {
        return e.unslick || !e.infinite
          ? 0
          : e.variableWidth
          ? e.slideCount
          : e.slidesToShow + (e.centerMode ? 1 : 0);
      };
      t.getPreClones = T;
      var x = function(e) {
        return e.unslick || !e.infinite ? 0 : e.slideCount;
      };
      t.getPostClones = x;
      var j = function(e) {
        return 1 === e.slideCount ? 1 : T(e) + e.slideCount + x(e);
      };
      t.getTotalSlides = j;
      var E = function(e) {
        return e.targetSlide > e.currentSlide
          ? e.targetSlide > e.currentSlide + P(e)
            ? "left"
            : "right"
          : e.targetSlide < e.currentSlide - L(e)
          ? "right"
          : "left";
      };
      t.siblingDirection = E;
      var P = function(e) {
        var t = e.slidesToShow,
          n = e.centerMode,
          r = e.rtl,
          i = e.centerPadding;
        if (n) {
          var o = (t - 1) / 2 + 1;
          return parseInt(i) > 0 && (o += 1), r && t % 2 === 0 && (o += 1), o;
        }
        return r ? 0 : t - 1;
      };
      t.slidesOnRight = P;
      var L = function(e) {
        var t = e.slidesToShow,
          n = e.centerMode,
          r = e.rtl,
          i = e.centerPadding;
        if (n) {
          var o = (t - 1) / 2 + 1;
          return parseInt(i) > 0 && (o += 1), r || t % 2 !== 0 || (o += 1), o;
        }
        return r ? t - 1 : 0;
      };
      t.slidesOnLeft = L;
      t.canUseDOM = function() {
        return !(
          "undefined" === typeof window ||
          !window.document ||
          !window.document.createElement
        );
      };
    }
  },
  [["3xJs", 1, 0]]
]);
