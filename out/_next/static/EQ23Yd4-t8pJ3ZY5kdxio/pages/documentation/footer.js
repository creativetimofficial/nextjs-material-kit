(window.webpackJsonp = window.webpackJsonp || []).push([
  [14],
  {
    "/YF/": function(n, o, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/documentation/footer",
        function() {
          var n = t("zWSW");
          return { page: n.default || n };
        }
      ]);
    },
    zWSW: function(n, o, t) {
      "use strict";
      t.r(o);
      var e = t("kOwS"),
        l = t("q1tI"),
        s = t.n(l),
        u = t("pzeu"),
        r = t("zR9M"),
        i = t("Oref"),
        a = s.a.createElement,
        p = "Footer.propTypes = {\n  whiteFont: PropTypes.bool\n};\n";
      o.default = function(n) {
        return (
          Object(e.a)({}, n),
          a(
            i.a,
            null,
            a("h1", null, "Footer"),
            a("p", null, "This is the bottom navigation of our demo app."),
            a("h2", null, "Styles"),
            a(
              "p",
              null,
              "You will find the styles for this component in",
              a("br", null),
              " ",
              a(
                "code",
                null,
                "src/assets/jss/nextjs-material-kit/components/footerStyle.js"
              ),
              "."
            ),
            a("h2", null, "Props"),
            a(u.a, { language: "jsx", style: r.prism }, p)
          )
        );
      };
    }
  },
  [["/YF/", 1, 0]]
]);
