(window.webpackJsonp = window.webpackJsonp || []).push([
  [24],
  {
    "+DDI": function(o, e, r) {
      "use strict";
      var n = r("vYYK"),
        t = r("q1tI"),
        a = r.n(t),
        i = r("TSYQ"),
        p = r.n(i),
        l = r("R/WZ"),
        s = r("Z3vd"),
        c = r("eDSW"),
        d = {
          pagination: {
            display: "inline-block",
            paddingLeft: "0",
            margin: "0 0 20px 0",
            borderRadius: "4px"
          },
          paginationItem: { display: "inline" },
          paginationLink: {
            ":first-of-type": { marginleft: "0" },
            letterSpacing: "unset",
            border: "0",
            borderRadius: "30px !important",
            transition: "all .3s",
            padding: "0px 11px",
            margin: "0 3px",
            minWidth: "30px",
            height: "30px",
            minHeight: "auto",
            lineHeight: "30px",
            fontWeight: "400",
            fontSize: "12px",
            textTransform: "uppercase",
            background: "transparent",
            position: "relative",
            float: "left",
            textDecoration: "none",
            boxSizing: "border-box",
            "&,&:hover,&:focus": { color: c.l },
            "&:hover,&:focus": {
              zIndex: "3",
              backgroundColor: "#eee",
              borderColor: "#ddd"
            },
            "&:hover": { cursor: "pointer" }
          },
          primary: {
            "&,&:hover,&:focus": {
              backgroundColor: c.r,
              borderColor: c.r,
              color: "#FFFFFF",
              boxShadow:
                "0 4px 5px 0 rgba(156, 39, 176, 0.14), 0 1px 10px 0 rgba(156, 39, 176, 0.12), 0 2px 4px -1px rgba(156, 39, 176, 0.2)"
            },
            "&:hover,&:focus": { zIndex: "2", cursor: "default" }
          },
          info: {
            "&,&:hover,&:focus": {
              backgroundColor: c.o,
              borderColor: c.o,
              color: "#FFFFFF",
              boxShadow:
                "0 4px 5px 0 rgba(0, 188, 212, 0.14), 0 1px 10px 0 rgba(0, 188, 212, 0.12), 0 2px 4px -1px rgba(0, 188, 212, 0.2)"
            },
            "&:hover,&:focus": { zIndex: "2", cursor: "default" }
          },
          success: {
            "&,&:hover,&:focus": {
              backgroundColor: c.w,
              borderColor: c.w,
              color: "#FFFFFF",
              boxShadow:
                "0 4px 5px 0 rgba(76, 175, 80, 0.14), 0 1px 10px 0 rgba(76, 175, 80, 0.12), 0 2px 4px -1px rgba(76, 175, 80, 0.2)"
            },
            "&:hover,&:focus": { zIndex: "2", cursor: "default" }
          },
          warning: {
            "&,&:hover,&:focus": {
              backgroundColor: c.B,
              borderColor: c.B,
              color: "#FFFFFF",
              boxShadow:
                "0 4px 5px 0 rgba(255, 152, 0, 0.14), 0 1px 10px 0 rgba(255, 152, 0, 0.12), 0 2px 4px -1px rgba(255, 152, 0, 0.2)"
            },
            "&:hover,&:focus": { zIndex: "2", cursor: "default" }
          },
          danger: {
            "&,&:hover,&:focus": {
              backgroundColor: c.i,
              borderColor: c.i,
              color: "#FFFFFF",
              boxShadow:
                "0 4px 5px 0 rgba(244, 67, 54, 0.14), 0 1px 10px 0 rgba(244, 67, 54, 0.12), 0 2px 4px -1px rgba(244, 67, 54, 0.2)"
            },
            "&:hover,&:focus": { zIndex: "2", cursor: "default" }
          },
          disabled: {
            "&,&:hover,&:focus": {
              color: "#777",
              cursor: "not-allowed",
              backgroundColor: "#fff",
              borderColor: "#ddd"
            }
          }
        };
      r.d(e, "a", function() {
        return f;
      });
      var u = a.a.createElement,
        x = Object(l.a)(d);
      function f(o) {
        var e = x(),
          r = o.pages,
          t = o.color;
        return u(
          "ul",
          { className: e.pagination },
          r.map(function(o, r) {
            var a,
              i = p()(
                ((a = {}),
                Object(n.a)(a, e.paginationLink, !0),
                Object(n.a)(a, e[t], o.active),
                Object(n.a)(a, e.disabled, o.disabled),
                a)
              );
            return u(
              "li",
              { className: e.paginationItem, key: r },
              void 0 !== o.onClick
                ? u(s.a, { onClick: o.onClick, className: i }, o.text)
                : u(
                    s.a,
                    {
                      onClick: function() {
                        return alert("you've clicked " + o.text);
                      },
                      className: i
                    },
                    o.text
                  )
            );
          })
        );
      }
      f.defaultProps = { color: "primary" };
    },
    "4Pt5": function(o, e, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/documentation/pagination",
        function() {
          var o = r("xhFH");
          return { page: o.default || o };
        }
      ]);
    },
    "Hk+Y": function(o, e, r) {
      "use strict";
      var n = r("TqRt");
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var t = n(r("pVnL")),
        a = r("04ZO"),
        i = n(r("HWkK"));
      var p = function(o, e) {
        return (0, a.withStyles)(
          o,
          (0, t.default)({ defaultTheme: i.default }, e)
        );
      };
      e.default = p;
    },
    xhFH: function(o, e, r) {
      "use strict";
      r.r(e);
      var n = r("kOwS"),
        t = r("q1tI"),
        a = r.n(t),
        i = r("pzeu"),
        p = r("zR9M"),
        l = r("Hk+Y"),
        s = r.n(l),
        c = r("+DDI"),
        d = r("Oref"),
        u = a.a.createElement,
        x =
          'import React from \'react\';\n\nimport Paginations from "components/Pagination/Pagination.js";\n\nexport default function Example(){\n  return (\n    <Paginations\n      pages={[\n        { text: "PREV" },\n        { text: 1 },\n        { text: 2 },\n        { active: true, text: 3 },\n        { text: 4 },\n        { text: 5 },\n        { text: "NEXT" }\n      ]}\n      color="info"\n    />\n  );\n}',
        f =
          'Pagination.defaultProps = {\n  color: "primary"\n};\n\nPagination.propTypes = {\n  pages: PropTypes.arrayOf(\n    PropTypes.shape({\n      active: PropTypes.bool,\n      disabled: PropTypes.bool,\n      text: PropTypes.oneOfType([\n        PropTypes.number,\n        PropTypes.oneOf(["PREV", "NEXT", "..."])\n      ]).isRequired,\n      onClick: PropTypes.func\n    })\n  ).isRequired,\n  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"])\n};';
      e.default = s()({
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
      })(function(o) {
        var e = Object(n.a)({}, o).classes;
        return u(
          d.a,
          null,
          u("h1", null, "Pagination"),
          u(
            "p",
            null,
            "We've created this special component due to the fact that you would have needed to write a lot of code to obtain a small component. So, it was done to make your life easier."
          ),
          u("h2", null, "Styles"),
          u(
            "p",
            null,
            "You will find the styles for this component in",
            u("br", null),
            " ",
            u(
              "code",
              null,
              "src/assets/jss/nextjs-material-kit/components/paginationStyle.js"
            ),
            "."
          ),
          u("h2", null, "Example"),
          u(
            "div",
            { className: e.bdExample },
            u(c.a, {
              pages: [
                { text: "PREV" },
                { text: 1 },
                { text: 2 },
                { active: !0, text: 3 },
                { text: 4 },
                { text: 5 },
                { text: "NEXT" }
              ],
              color: "info"
            })
          ),
          u(i.a, { language: "jsx", style: p.prism }, x),
          u("h2", null, "Props"),
          u(i.a, { language: "jsx", style: p.prism }, f)
        );
      });
    }
  },
  [["4Pt5", 1, 0]]
]);
