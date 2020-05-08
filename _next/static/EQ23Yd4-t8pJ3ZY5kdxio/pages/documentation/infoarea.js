(window.webpackJsonp = window.webpackJsonp || []).push([
  [17],
  {
    "8/g6": function(e, n, t) {
      "use strict";
      var r = t("TqRt");
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.default = function(e, n) {
          var t = o.default.memo(
            o.default.forwardRef(function(n, t) {
              return o.default.createElement(
                i.default,
                (0, a.default)({ ref: t }, n),
                e
              );
            })
          );
          0;
          return (t.muiName = i.default.muiName), t;
        });
      var a = r(t("pVnL")),
        o = r(t("q1tI")),
        i = r(t("UJJ5"));
    },
    "Hk+Y": function(e, n, t) {
      "use strict";
      var r = t("TqRt");
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.default = void 0);
      var a = r(t("pVnL")),
        o = t("04ZO"),
        i = r(t("HWkK"));
      var l = function(e, n) {
        return (0, o.withStyles)(
          e,
          (0, a.default)({ defaultTheme: i.default }, n)
        );
      };
      n.default = l;
    },
    TT5w: function(e, n, t) {
      "use strict";
      var r = t("vYYK"),
        a = t("q1tI"),
        o = t.n(a),
        i = t("TSYQ"),
        l = t.n(i),
        c = t("R/WZ"),
        s = t("eDSW"),
        u = {
          infoArea: { maxWidth: "360px", margin: "0 auto", padding: "0px" },
          iconWrapper: {
            float: "left",
            marginTop: "24px",
            marginRight: "10px"
          },
          primary: { color: s.r },
          warning: { color: s.B },
          danger: { color: s.i },
          success: { color: s.w },
          info: { color: s.o },
          rose: { color: s.t },
          gray: { color: s.l },
          icon: { width: "36px", height: "36px" },
          descriptionWrapper: { color: s.l, overflow: "hidden" },
          title: s.x,
          description: {
            color: s.l,
            overflow: "hidden",
            marginTop: "0px",
            fontSize: "14px"
          },
          iconWrapperVertical: { float: "none" },
          iconVertical: { width: "61px", height: "61px" }
        };
      t.d(n, "a", function() {
        return f;
      });
      var p = o.a.createElement,
        d = Object(c.a)(u);
      function f(e) {
        var n,
          t,
          a = d(),
          o = e.title,
          i = e.description,
          c = e.iconColor,
          s = e.vertical,
          u = l()(
            ((n = {}),
            Object(r.a)(n, a.iconWrapper, !0),
            Object(r.a)(n, a[c], !0),
            Object(r.a)(n, a.iconWrapperVertical, s),
            n)
          ),
          f = l()(
            ((t = {}),
            Object(r.a)(t, a.icon, !0),
            Object(r.a)(t, a.iconVertical, s),
            t)
          );
        return p(
          "div",
          { className: a.infoArea },
          p("div", { className: u }, p(e.icon, { className: f })),
          p(
            "div",
            { className: a.descriptionWrapper },
            p("h4", { className: a.title }, o),
            p("p", { className: a.description }, i)
          )
        );
      }
      f.defaultProps = { iconColor: "gray" };
    },
    UJJ5: function(e, n, t) {
      "use strict";
      t.r(n);
      var r = t("HR5l");
      t.d(n, "default", function() {
        return r.a;
      });
    },
    eAon: function(e, n, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/documentation/infoarea",
        function() {
          var e = t("urH/");
          return { page: e.default || e };
        }
      ]);
    },
    gUCY: function(e, n, t) {
      "use strict";
      var r = t("TqRt");
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.default = void 0);
      var a = r(t("q1tI")),
        o = (0, r(t("8/g6")).default)(
          a.default.createElement(
            a.default.Fragment,
            null,
            a.default.createElement(
              "defs",
              null,
              a.default.createElement("path", { id: "a", d: "M0 0h24v24H0V0z" })
            ),
            a.default.createElement("path", {
              d:
                "M23 8c0 1.1-.9 2-2 2-.18 0-.35-.02-.51-.07l-3.56 3.55c.05.16.07.34.07.52 0 1.1-.9 2-2 2s-2-.9-2-2c0-.18.02-.36.07-.52l-2.55-2.55c-.16.05-.34.07-.52.07s-.36-.02-.52-.07l-4.55 4.56c.05.16.07.33.07.51 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.18 0 .35.02.51.07l4.56-4.55C8.02 9.36 8 9.18 8 9c0-1.1.9-2 2-2s2 .9 2 2c0 .18-.02.36-.07.52l2.55 2.55c.16-.05.34-.07.52-.07s.36.02.52.07l3.55-3.56C19.02 8.35 19 8.18 19 8c0-1.1.9-2 2-2s2 .9 2 2z"
            })
          ),
          "Timeline"
        );
      n.default = o;
    },
    "urH/": function(e, n, t) {
      "use strict";
      t.r(n);
      var r = t("kOwS"),
        a = t("q1tI"),
        o = t.n(a),
        i = t("pzeu"),
        l = t("zR9M"),
        c = t("Hk+Y"),
        s = t.n(c),
        u = t("gUCY"),
        p = t.n(u),
        d = t("TT5w"),
        f = t("Oref"),
        m = o.a.createElement,
        g =
          'import React from "react";\n\n// @material-ui/icons\nimport Timeline from "@material-ui/icons/Timeline";\n\n// core components\nimport InfoArea from "components/InfoArea/InfoArea.js";\n\nexport default function Example(){\n  return (\n    <InfoArea\n      title="Marketing"\n      description="We\'ve created the marketing campaign of the website. It was a very interesting collaboration."\n      icon={Timeline}\n      iconColor="rose"\n    />\n  );\n}',
        v =
          'InfoArea.defaultProps = {\n  iconColor: "gray"\n};\n\nInfoArea.propTypes = {\n  icon: PropTypes.func.isRequired,\n  title: PropTypes.string.isRequired,\n  description: PropTypes.string.isRequired,\n  iconColor: PropTypes.oneOf([\n    "primary",\n    "warning",\n    "danger",\n    "success",\n    "info",\n    "rose",\n    "gray"\n  ]),\n  vertical: PropTypes.bool\n};';
      n.default = s()({
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
        var n = Object(r.a)({}, e).classes;
        return m(
          f.a,
          null,
          m("h1", null, "InfoArea"),
          m(
            "p",
            null,
            "This component was made by us to make it a bit more easier for you to render some information."
          ),
          m("h2", null, "Styles"),
          m(
            "p",
            null,
            "You will find the styles for this component in",
            m("br", null),
            " ",
            m(
              "code",
              null,
              "src/assets/jss/nextjs-material-kit/components/infoStyle.js"
            ),
            "."
          ),
          m("h2", null, "Example"),
          m(
            "div",
            { className: n.bdExample },
            m(d.a, {
              title: "Marketing",
              description:
                "We've created the marketing campaign of the website. It was a very interesting collaboration.",
              icon: p.a,
              iconColor: "rose"
            })
          ),
          m(i.a, { language: "jsx", style: l.prism }, g),
          m("h2", null, "Props"),
          m(i.a, { language: "jsx", style: l.prism }, v)
        );
      });
    }
  },
  [["eAon", 1, 0]]
]);
