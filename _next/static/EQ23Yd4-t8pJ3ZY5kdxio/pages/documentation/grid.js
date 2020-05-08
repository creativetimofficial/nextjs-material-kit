(window.webpackJsonp = window.webpackJsonp || []).push([
  [15],
  {
    UxSe: function(e, n, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/documentation/grid",
        function() {
          var e = t("alda");
          return { page: e.default || e };
        }
      ]);
    },
    alda: function(e, n, t) {
      "use strict";
      t.r(n);
      var i = t("kOwS"),
        o = t("q1tI"),
        r = t.n(o),
        a = t("pzeu"),
        l = t("zR9M"),
        m = t("Oref"),
        s = r.a.createElement,
        u =
          "// instead of importing the container from material-ui\nimport Grid from 'material-ui/Grid';\n\n// you would import our component like this\nimport GridContainer from \"components/Grid/GridContainer.js\";",
        d =
          "// instead of using the container from material-ui\n<Grid container {...props}>\n  ...\n</Grid container {...props}>\n\n// you would use our component like this\n<GridContainer {...props}>\n  ...\n</GridContainer {...props}>",
        p =
          "// instead of importing the item from material-ui\nimport Grid from 'material-ui/Grid';\n\n// you would import our component like this\nimport GridItem from \"components/Grid/GridItem.js\";",
        c =
          "// instead of using the item from material-ui\n<Grid item {...props}>\n  ...\n</Grid>\n\n// you would use our component like this\n<GridItem {...props}>\n  ...\n</GridItem>";
      n.default = function(e) {
        return (
          Object(i.a)({}, e),
          s(
            m.a,
            null,
            s("h1", null, "Grid"),
            s(
              "p",
              null,
              "We've decided to extend the default ",
              s("code", null, "Grid"),
              " component from",
              " ",
              s(
                "a",
                {
                  href:
                    "https://material-ui-next.com/layout/grid/?ref=creativetim",
                  target: "_blank"
                },
                "Material-UI"
              ),
              "."
            ),
            s(
              "p",
              null,
              "We've done this so we could add some personal styles to them."
            ),
            s("h2", null, "GridContainer"),
            s(
              "p",
              null,
              "It's the same as ",
              s("code", null, "<Grid container>"),
              " component from Material-UI but with some extra styling, to make flow better with our components."
            ),
            s("h3", null, "Usage"),
            s(a.a, { language: "jsx", style: l.prism }, u),
            s(a.a, { language: "jsx", style: l.prism }, d),
            s("h2", null, "GridItem"),
            s(
              "p",
              null,
              "It's the same as ",
              s("code", null, "<Grid item>"),
              " component from Material-UI but with some extra styling, to make flow better with our components."
            ),
            s("h3", null, "Usage"),
            s(a.a, { language: "jsx", style: l.prism }, p),
            s(a.a, { language: "jsx", style: l.prism }, c)
          )
        );
      };
    }
  },
  [["UxSe", 1, 0]]
]);
