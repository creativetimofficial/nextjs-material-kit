(window.webpackJsonp = window.webpackJsonp || []).push([
  [28],
  {
    rHnQ: function(e, n, t) {
      "use strict";
      t.r(n);
      var s = t("0iUn"),
        a = t("sLSF"),
        o = t("MI3g"),
        r = t("a7VT"),
        l = t("Tit0"),
        i = t("q1tI"),
        u = t.n(i),
        c = t("pzeu"),
        m = t("zR9M"),
        d = t("Oref"),
        h = u.a.createElement,
        p = (function(e) {
          function n() {
            return (
              Object(s.a)(this, n),
              Object(o.a)(this, Object(r.a)(n).apply(this, arguments))
            );
          }
          return (
            Object(l.a)(n, e),
            Object(a.a)(n, [
              {
                key: "render",
                value: function() {
                  return h(
                    d.a,
                    null,
                    h("h1", null, "Styles"),
                    h(
                      "p",
                      null,
                      "Like our friends from",
                      " ",
                      h(
                        "a",
                        {
                          href: "https://material-ui-next.com/?ref=creativetim",
                          target: "_blank"
                        },
                        "Material UI"
                      ),
                      ", we've used JSS syntax to style (restyle) the material ui components."
                    ),
                    h(
                      "p",
                      null,
                      "A useful link about JSS is",
                      " ",
                      h(
                        "a",
                        {
                          href: "https://github.com/cssinjs?ref=creativetim",
                          target: "_blank"
                        },
                        "this one here"
                      ),
                      "."
                    ),
                    h(
                      "p",
                      null,
                      "We've decided to use the ",
                      h("code", null, "makeStyles"),
                      " function from Material-UI to override some of thier styles. This is a React HOOK functions, which means that it can only be called from another React HOOK or a simple function. Read more about it",
                      " ",
                      h(
                        "a",
                        {
                          href:
                            "https://material-ui.com/styles/api/#makestyles-styles-options-hook",
                          target: "_blank"
                        },
                        "here"
                      )
                    ),
                    h(
                      "p",
                      null,
                      "All of the restyled components can be found in",
                      " ",
                      h("code", null, "src/components"),
                      "."
                    ),
                    h(
                      c.a,
                      { language: "jsx", style: m.prism },
                      "\u251c\u2500\u2500 components\n\xa0\xa0 \u251c\u2500\u2500 Badge\n\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 Badge.js\n\xa0\xa0 \u251c\u2500\u2500 Card\n\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 Card.js\n\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 CardBody.js\n\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 CardFooter.js\n\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 CardHeader.js\n\xa0\xa0 \u251c\u2500\u2500 Clearfix\n\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 Clearfix.js\n\xa0\xa0 \u251c\u2500\u2500 CustomButtons\n\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 Button.js\n\xa0\xa0 \u251c\u2500\u2500 CustomDropdown\n\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 CustomDropdown.js\n\xa0\xa0 \u251c\u2500\u2500 CustomInput\n\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 CustomInput.js\n\xa0\xa0 \u251c\u2500\u2500 CustomLinearProgress\n\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 CustomLinearProgress.js\n\xa0\xa0 \u251c\u2500\u2500 CustomTabs\n\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 CustomTabs.js\n\xa0\xa0 \u251c\u2500\u2500 Footer\n\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 Footer.js\n\xa0\xa0 \u251c\u2500\u2500 Grid\n\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 GridContainer.js\n\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 GridItem.js\n\xa0\xa0 \u251c\u2500\u2500 Header\n\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 Header.js\n\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 HeaderLinks.js\n\xa0\xa0 \u251c\u2500\u2500 InfoArea\n\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 InfoArea.js\n\xa0\xa0 \u251c\u2500\u2500 NavPills\n\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 NavPills.js\n\xa0\xa0 \u251c\u2500\u2500 PageChange\n\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 PageChange.js\n\xa0\xa0 \u251c\u2500\u2500 Pagination\n\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 Pagination.js\n\xa0\xa0 \u251c\u2500\u2500 Parallax\n\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 Parallax.js\n\xa0\xa0 \u251c\u2500\u2500 Snackbar\n\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 SnackbarContent.js\n\xa0\xa0 \u2514\u2500\u2500 Typography\n\xa0\xa0     \u251c\u2500\u2500 Danger.js\n\xa0\xa0     \u251c\u2500\u2500 Info.js\n\xa0\xa0     \u251c\u2500\u2500 Muted.js\n\xa0\xa0     \u251c\u2500\u2500 Primary.js\n\xa0\xa0     \u251c\u2500\u2500 Quote.js\n\xa0\xa0     \u251c\u2500\u2500 Small.js\n\xa0\xa0     \u251c\u2500\u2500 Success.js\n\xa0\xa0     \u2514\u2500\u2500 Warning.js"
                    ),
                    h(
                      "p",
                      null,
                      "If you go to any of our components you will see that somewhere at the beginning of the file we import ",
                      h("code", null, "makeStyles"),
                      " from",
                      " ",
                      h("code", null, "material-ui"),
                      ", then we import from",
                      " ",
                      h("code", null, "scr/assets/jss/*"),
                      " the correspondig style for that component and after these imports, we use the ",
                      h("code", null, "makeStyles"),
                      " ",
                      "function alongside our styles to compile them to jss from javascript objects."
                    ),
                    h(
                      "p",
                      null,
                      "For a better way of understanding this variables, please take a look inside the ",
                      h(
                        "code",
                        null,
                        "src/assets/jss/material-dashboard-react"
                      ),
                      ". You will see that all of the styles have a unique name that corresponds with the component name. You will also see that we've used some of that styles for ",
                      h("code", null, "src/views/*"),
                      " as well."
                    )
                  );
                }
              }
            ]),
            n
          );
        })(u.a.Component);
      n.default = p;
    },
    thNZ: function(e, n, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/documentation/styles",
        function() {
          var e = t("rHnQ");
          return { page: e.default || e };
        }
      ]);
    }
  },
  [["thNZ", 1, 0]]
]);
