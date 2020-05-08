(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    Iglp: function(e, n, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/documentation/badges",
        function() {
          var e = a("lRcr");
          return { page: e.default || e };
        }
      ]);
    },
    XY9v: function(e, n, a) {
      "use strict";
      var o = a("q1tI"),
        r = a.n(o),
        s = a("R/WZ"),
        l = a("eDSW"),
        t = {
          badge: {
            marginRight: "3px",
            borderRadius: "12px",
            padding: "5px 12px",
            textTransform: "uppercase",
            fontSize: "10px",
            fontWeight: "500",
            lineHeight: "1",
            color: "#fff",
            textAlign: "center",
            whiteSpace: "nowrap",
            verticalAlign: "baseline",
            display: "inline-block"
          },
          primary: { backgroundColor: l.r },
          warning: { backgroundColor: l.B },
          danger: { backgroundColor: l.i },
          success: { backgroundColor: l.w },
          info: { backgroundColor: l.o },
          rose: { backgroundColor: l.t },
          gray: { backgroundColor: "#6c757d" }
        };
      a.d(n, "a", function() {
        return g;
      });
      var i = r.a.createElement,
        c = Object(s.a)(t);
      function g(e) {
        var n = c(),
          a = e.color,
          o = e.children;
        return i("span", { className: n.badge + " " + n[a] }, o);
      }
      g.defaultProps = { color: "gray" };
    },
    lRcr: function(e, n, a) {
      "use strict";
      a.r(n),
        a.d(n, "default", function() {
          return B;
        });
      var o = a("q1tI"),
        r = a.n(o),
        s = a("pzeu"),
        l = a("zR9M"),
        t = a("R/WZ"),
        i = a("Kg+a"),
        c = a("XY9v"),
        g = a("Oref"),
        d = r.a.createElement,
        u = Object(t.a)({
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
        }),
        p = "import Badge from 'components/Badge/Badge.js';",
        m =
          'import badgeStyle from "assets/jss/nextjs-material-kit/components/badgeStyle.js"',
        f =
          '<Button color="primary">Notifications{" "}<Badge>4</Badge></Button>',
        b =
          '<Badge color="primary">primary</Badge>\n<Badge color="info">info</Badge>\n<Badge color="success">success</Badge>\n<Badge color="danger">danger</Badge>\n<Badge color="warning">warning</Badge>\n<Badge color="rose">rose</Badge>',
        y =
          'Badge.defaultProps = {\n  color: "gray"\n};\n\nBadge.propTypes = {\n  classes: PropTypes.object.isRequired,\n  color: PropTypes.oneOf([\n    "primary",\n    "warning",\n    "danger",\n    "success",\n    "info",\n    "rose",\n    "gray"\n  ])\n};';
      function B(e) {
        var n = u();
        return d(
          g.a,
          e,
          d(
            "div",
            null,
            d("h1", null, "Badges"),
            d("h2", null, "Styles"),
            d(
              "p",
              null,
              "You will find the styles for this component in",
              d("br", null),
              " ",
              d(
                "code",
                null,
                "src/assets/jss/nextjs-material-kit/components/badgeStyle.js"
              ),
              "."
            ),
            d("h2", null, "Imports"),
            d("p", null, "If you want to use our predefined components:"),
            d(s.a, { language: "jsx", style: l.prism }, p),
            d("p", null, "If you want to use our styles on something else:"),
            d(s.a, { language: "jsx", style: l.prism }, m),
            d("h2", null, "Example"),
            d(
              "p",
              null,
              "Badges can be used as part of links or buttons to provide a counter."
            ),
            d(
              "div",
              { className: n.bdExample },
              d(i.a, { color: "primary" }, "Notifications ", d(c.a, null, "4"))
            ),
            d(s.a, { language: "jsx", style: l.prism }, f),
            d("h2", null, "Contextual variations"),
            d(
              "div",
              { className: n.bdExample },
              d(c.a, { color: "primary" }, "primary"),
              d(c.a, { color: "info" }, "info"),
              d(c.a, { color: "success" }, "success"),
              d(c.a, { color: "danger" }, "danger"),
              d(c.a, { color: "warning" }, "warning"),
              d(c.a, { color: "rose" }, "rose")
            ),
            d(s.a, { language: "jsx", style: l.prism }, b),
            d("h2", null, "Props"),
            d(s.a, { language: "jsx", style: l.prism }, y)
          )
        );
      }
    }
  },
  [["Iglp", 1, 0]]
]);
