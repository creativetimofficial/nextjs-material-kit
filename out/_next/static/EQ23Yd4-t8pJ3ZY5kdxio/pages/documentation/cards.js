(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
    "2zww": function(e, t, a) {
      "use strict";
      var n = a("kOwS"),
        r = a("vYYK"),
        s = a("qNsG"),
        o = a("q1tI"),
        l = a.n(o),
        i = a("TSYQ"),
        d = a.n(i),
        c = a("R/WZ"),
        m = a("eDSW"),
        p = {
          cardHeader: {
            borderRadius: "3px",
            padding: "1rem 15px",
            marginLeft: "15px",
            marginRight: "15px",
            marginTop: "-30px",
            border: "0",
            marginBottom: "0"
          },
          cardHeaderPlain: { marginLeft: "0px", marginRight: "0px" },
          warningCardHeader: m.A,
          successCardHeader: m.v,
          dangerCardHeader: m.h,
          infoCardHeader: m.n,
          primaryCardHeader: m.q
        };
      a.d(t, "a", function() {
        return C;
      });
      var u = l.a.createElement,
        g = Object(c.a)(p);
      function C(e) {
        var t,
          a = g(),
          o = e.className,
          l = e.children,
          i = e.color,
          c = e.plain,
          m = Object(s.a)(e, ["className", "children", "color", "plain"]),
          p = d()(
            ((t = {}),
            Object(r.a)(t, a.cardHeader, !0),
            Object(r.a)(t, a[i + "CardHeader"], i),
            Object(r.a)(t, a.cardHeaderPlain, c),
            Object(r.a)(t, o, void 0 !== o),
            t)
          );
        return u("div", Object(n.a)({ className: p }, m), l);
      }
    },
    "4A1H": function(e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, "default", function() {
          return F;
        });
      var n = a("zrwo"),
        r = a("q1tI"),
        s = a.n(r),
        o = a("pzeu"),
        l = a("zR9M"),
        i = a("R/WZ"),
        d = a("A2So"),
        c = a("UsYt"),
        m = a("2zww"),
        p = a("5LSk"),
        u = a("Kg+a"),
        g = a("aIa2"),
        C = a("Oref"),
        h = a("Ilpk"),
        y = a("eDSW"),
        x = s.a.createElement,
        f = Object(n.a)({}, h.a, {
          cardTitle: y.d,
          cardLink: y.b,
          cardSubtitle: y.c,
          textCenter: { textAlign: "center" },
          textMuted: { color: "#6c757d" },
          bdExample: {
            padding: "1.5rem",
            margin: "1rem -15px",
            position: "relative",
            marginRight: "0",
            marginBottom: "-8px",
            marginLeft: "0",
            borderWidth: ".2rem",
            border: "solid rgb(245, 242, 240)"
          },
          textRight: { textAlign: "right" }
        }),
        b =
          'import React from "react";\n// material-ui components\nimport { makeStyles } from "@material-ui/core/styles";\n// core components\nimport Card from "components/Card/Card.js";\nimport CardBody from "components/Card/CardBody.js";\nimport Button from "components/CustomButtons/Button.js";\n\nimport imagesStyles from "assets/jss/nextjs-material-kit/imagesStyles.js";\n\nimport { cardTitle } from "assets/jss/nextjs-material-kit.js";\n\nconst styles = {\n  ...imagesStyles,\n  cardTitle,\n};\n\nconst useStyles = makeStyles(styles);\n\nexport default function Cards() {\n  const classes = useStyles();\n  return (\n    <Card style={{width: "20rem"}}>\n      <img\n        style={{height: "180px", width: "100%", display: "block"}}\n        className={classes.imgCardTop}\n        src="..."\n        alt="Card-img-cap"\n      />\n      <CardBody>\n        <h4 className={classes.cardTitle}>Card title</h4>\n        <p>Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>\n        <Button color="primary">Do something</Button>\n      </CardBody>\n    </Card>\n  );\n}',
        w =
          "<Card>\n  <CardBody>\n    This is some text within a card body.\n  </CardBody>\n</Card>",
        j =
          'import React from "react";\n// material-ui components\nimport { makeStyles } from "@material-ui/core/styles";\n// core components\nimport Card from "components/Card/Card.js";\nimport CardBody from "components/Card/CardBody.js";\n\nimport { cardTitle, cardLink, cardSubtitle } from "assets/jss/nextjs-material-kit.js";\n\nconst styles = {\n  ...imagesStyles,\n  cardTitle,\n  cardLink,\n  cardSubtitle\n};\n\nconst useStyles = makeStyles(styles);\n\nexport default function Cards() {\n  const classes = useStyles();\n  return (\n    <Card style={{width: "20rem"}}>\n      <CardBody>\n        <h4 className={classes.cardTitle}>Card Title</h4>\n        <h6 className={classes.cardSubtitle}>Card Subtitle</h6>\n        <p>\n          Some quick example text to build on the card title and\n          make up the bulk of the card\'s content.\n        </p>\n        <a\n          href="#pablo"\n          className={classes.cardLink}\n          onClick={(e) => e.preventDefault()}>\n          Card link\n        </a>\n        <a\n          href="#pablo"\n          className={classes.cardLink}\n          onClick={(e) => e.preventDefault()}>\n          Another link\n        </a>\n      </CardBody>\n    </Card>\n  );\n}',
        T =
          'import React from "react";\n// material-ui components\nimport { makeStyles } from "@material-ui/core/styles";\n// core components\nimport Card from "components/Card/Card.js";\nimport CardBody from "components/Card/CardBody.js";\nimport CardHeader from "components/Card/CardHeader.js";\nimport Button from "components/CustomButtons/Button.js";\n\nimport { cardTitle } from "assets/jss/nextjs-material-kit.js";\n\nconst styles = {\n  cardTitle,\n};\n\nconst useStyles = makeStyles(styles);\n\nexport default function Cards() {\n  const classes = useStyles();\n  return (\n    <Card style={{width: "20rem"}}>\n      <CardHeader color="warning">Featured</CardHeader>\n      <CardBody>\n        <h4 className={classes.cardTitle}>Special title treatment</h4>\n        <p>\n          With supporting text below as a\n          natural lead-in to additional content.\n        </p>\n        <Button color="primary">Do something</Button>\n      </CardBody>\n    </Card>\n  );\n}',
        B =
          'import React from "react";\n// core components\nimport Card from "components/Card/Card.js";\nimport CardBody from "components/Card/CardBody.js";\nimport CardHeader from "components/Card/CardHeader.js";\nimport Quote from "components/Typography/Quote.js";\n\nexport default function Cards() {\n  return (\n    <Card>\n      <CardHeader color="success">Quote</CardHeader>\n      <CardBody>\n        <Quote\n          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."\n          author="Someone famous in Source Title"\n        />\n      </CardBody>\n    </Card>\n  );\n}\n\nexport default Cards;',
        S =
          'import React from "react";\n// material-ui components\nimport { makeStyles } from "@material-ui/core/styles";\n// core components\nimport Card from "components/Card/Card.js";\nimport CardBody from "components/Card/CardBody.js";\nimport CardHeader from "components/Card/CardHeader.js";\nimport CardFooter from "components/Card/CardFooter.js";\nimport Button from "components/CustomButtons/Button.js";\n\nimport { cardTitle } from "assets/jss/nextjs-material-kit.js";\n\nconst styles = {\n  cardTitle,\n  textCenter: {\n    textAlign: "center"\n  },\n  textMuted: {\n    color: "#6c757d"\n  },\n};\n\nconst useStyles = makeStyles(styles);\n\nexport default function Cards() {\n  const classes = useStyles();\n  return (\n    <Card className={classes.textCenter}>\n      <CardHeader color="danger">Featured</CardHeader>\n      <CardBody>\n        <h4 className={classes.cardTitle}>Special title treatment</h4>\n        <p>\n          With supporting text below as a\n          natural lead-in to additional content.\n        </p>\n        <Button color="primary">Do something</Button>\n      </CardBody>\n      <CardFooter className={classes.textMuted}>\n        2 days ago\n      </CardFooter>\n    </Card>\n  );\n}',
        v =
          'import React from "react";\n// material-ui components\nimport { makeStyles } from "@material-ui/core/styles";\n// core components\nimport Card from "components/Card/Card.js";\nimport CardBody from "components/Card/CardBody.js";\nimport Button from "components/CustomButtons/Button.js";\n\nimport { cardTitle } from "assets/jss/nextjs-material-kit.js";\n\nconst styles = {\n  cardTitle,\n  textCenter: {\n    textAlign: "center"\n  },\n  textRight: {\n    textAlign: "right"\n  }\n};\n\nconst useStyles = makeStyles(styles);\n\nexport default function Cards() {\n  const classes = useStyles();\n  return(\n    <div>\n      <Card style={{width: "20rem"}}>\n        <CardBody>\n          <h4 className={classes.cardTitle}>Special title treatment</h4>\n          <p>\n            With supporting text below as a\n            natural lead-in to additional content.\n          </p>\n          <Button color="primary">Do something</Button>\n        </CardBody>\n      </Card>\n      <Card className={classes.textCenter} style={{width: "20rem"}}>\n        <CardBody>\n          <h4 className={classes.cardTitle}>Special title treatment</h4>\n          <p>\n            With supporting text below as a\n            natural lead-in to additional content.\n          </p>\n          <Button color="primary">Do something</Button>\n        </CardBody>\n      </Card>\n      <Card className={classes.textRight} style={{width: "20rem"}}>\n        <CardBody>\n          <h4 className={classes.cardTitle}>Special title treatment</h4>\n          <p>\n            With supporting text below as a\n            natural lead-in to additional content.\n          </p>\n          <Button color="primary">Do something</Button>\n        </CardBody>\n      </Card>\n    </div>\n  );\n  }',
        N =
          'import React from "react";\n// material-ui components\nimport { makeStyles } from "@material-ui/core/styles";\n// core components\nimport Card from "components/Card/Card.js";\nimport CardBody from "components/Card/CardBody.js";\n\nimport imagesStyles from "assets/jss/nextjs-material-kit/imagesStyles.js";\n\nimport { cardTitle } from "assets/jss/nextjs-material-kit.js";\n\nconst styles = {\n  ...imagesStyles,\n  cardTitle,\n  textMuted: {\n    color: "#6c757d"\n  },\n};\n\nconst useStyles = makeStyles(styles);\n\nexport default function Cards() {\n  const classes = useStyles();\n  return(\n    <div>\n      <Card>\n        <img className={classes.imgCardTop} src="..." alt="Card-img-cap" />\n        <CardBody>\n          <h4 className={classes.cardTitle}>Card title</h4>\n          <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\n          <p><small className={classes.textMuted}>Last updated 3 mins ago</small></p>\n        </CardBody>\n      </Card>\n      <Card>\n        <CardBody>\n          <h4 className={classes.cardTitle}>Card title</h4>\n          <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\n          <p><small className={classes.textMuted}>Last updated 3 mins ago</small></p>\n        </CardBody>\n        <img className={classes.imgCardBottom} src="..." alt="Card-img-cap" />\n      </Card>\n    </div>\n  );\n};',
        k =
          'import React from "react";\n// material-ui components\nimport { makeStyles } from "@material-ui/core/styles";\n// core components\nimport Card from "components/Card/Card.js";\n\nimport imagesStyles from "assets/jss/nextjs-material-kit/imagesStyles.js";\n\nimport { cardTitle } from "assets/jss/nextjs-material-kit.js";\n\nconst styles = {\n  ...imagesStyles,\n  cardTitle,\n};\n\nconst useStyles = makeStyles(styles);\n\nexport default function Cards() {\n  const classes = useStyles();\n  return(\n    <Card>\n      <img className={classes.imgCard} src="..." alt="Card-img" />\n      <div className={classes.imgCardOverlay}>\n        <h4 className={classes.cardTitle}>Card title</h4>\n        <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\n        <p>Last updated 3 mins ago</p>\n      </div>\n    </Card>\n  );\n}',
        E =
          'Card.propTypes = {\n  className: PropTypes.string,\n  plain: PropTypes.bool,\n  carousel: PropTypes.bool\n};\n\nCardBody.propTypes = {\n  className: PropTypes.string\n};\n\nCardFooter.propTypes = {\n  className: PropTypes.string\n};\n\nCardHeader.propTypes = {\n  className: PropTypes.string,\n  color: PropTypes.oneOf(["warning", "success", "danger", "info", "primary"]),\n  plain: PropTypes.bool\n};',
        D = Object(i.a)(f);
      function F() {
        var e = D();
        return x(
          C.a,
          null,
          x("h1", null, "Cards"),
          x("h2", null, "Styles"),
          x(
            "p",
            null,
            "You will find the styles for these components in",
            x("br", null),
            x(
              "code",
              null,
              "src/assets/jss/nextjs-material-kit/components/cardStyle.js"
            ),
            x("br", null),
            x(
              "code",
              null,
              "src/assets/jss/nextjs-material-kit/components/cardHeaderStyle.js"
            ),
            x("br", null),
            x(
              "code",
              null,
              "src/assets/jss/nextjs-material-kit/components/cardBodyStyle.js"
            ),
            x("br", null),
            x(
              "code",
              null,
              "src/assets/jss/nextjs-material-kit/components/cardFooterStyle.js"
            ),
            "."
          ),
          x("h2", null, "Example"),
          x(
            "p",
            null,
            "Below is an example of a basic card with mixed content and a fixed width. Cards have no fixed width to start, so they\u2019ll naturally fill the full width of its parent element."
          ),
          x(
            "div",
            { className: e.bdExample },
            x(
              d.a,
              { style: { width: "20rem" } },
              x("img", {
                style: { height: "180px", width: "100%", display: "block" },
                className: e.imgCardTop,
                src:
                  "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22320%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20320%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_163015186ee%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_163015186ee%22%3E%3Crect%20width%3D%22320%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22119.0859375%22%20y%3D%2297.35%22%3E320x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
                alt: "Card-img-cap"
              }),
              x(
                c.a,
                null,
                x("h4", { className: e.cardTitle }, "Card title"),
                x(
                  "p",
                  null,
                  "Some quick example text to build on the card title and make up the bulk of the card's content."
                ),
                x(u.a, { color: "primary" }, "Do something")
              )
            )
          ),
          x(o.a, { language: "jsx", style: l.prism }, b),
          x("h2", null, "Content types"),
          x(
            "p",
            null,
            "Cards support a wide variety of content, including images, text, list groups, links, and more. Below are examples of what\u2019s supported."
          ),
          x("h3", null, "Body"),
          x(
            "p",
            null,
            "The building block of a card is the CardBody. Use it whenever you need a padded section within a card."
          ),
          x(
            "div",
            { className: e.bdExample },
            x(d.a, null, x(c.a, null, "This is some text within a card body."))
          ),
          x(o.a, { language: "jsx", style: l.prism }, w),
          x("h3", null, "Titles, text, and links"),
          x(
            "p",
            null,
            "Card titles are used by adding ",
            x("code", null, "classes.cardTitle"),
            " to a",
            " ",
            x("code", null, "<h*>"),
            " tag. In the same way, links are added and placed next to each other by adding ",
            x("code", null, "classes.cardLink"),
            " to an",
            " ",
            x("code", null, "<a>"),
            " tag."
          ),
          x(
            "div",
            { className: e.bdExample },
            x(
              d.a,
              { style: { width: "20rem" } },
              x(
                c.a,
                null,
                x("h4", { className: e.cardTitle }, "Card Title"),
                x("h6", { className: e.cardSubtitle }, "Card Subtitle"),
                x(
                  "p",
                  null,
                  "Some quick example text to build on the card title and make up the bulk of the card's content."
                ),
                x(
                  "a",
                  {
                    href: "#pablo",
                    className: e.cardLink,
                    onClick: function(e) {
                      return e.preventDefault();
                    }
                  },
                  "Card link"
                ),
                x(
                  "a",
                  {
                    href: "#pablo",
                    className: e.cardLink,
                    onClick: function(e) {
                      return e.preventDefault();
                    }
                  },
                  "Another link"
                )
              )
            )
          ),
          x(o.a, { language: "jsx", style: l.prism }, j),
          x("h3", null, "Header and Footer"),
          x(
            "div",
            { className: e.bdExample },
            x(
              d.a,
              { style: { width: "20rem" } },
              x(m.a, { color: "warning" }, "Featured"),
              x(
                c.a,
                null,
                x("h4", { className: e.cardTitle }, "Special title treatment"),
                x(
                  "p",
                  null,
                  "With supporting text below as a natural lead-in to additional content."
                ),
                x(u.a, { color: "primary" }, "Do something")
              )
            )
          ),
          x(o.a, { language: "jsx", style: l.prism }, T),
          x(
            "div",
            { className: e.bdExample },
            x(
              d.a,
              null,
              x(m.a, { color: "success" }, "Quote"),
              x(
                c.a,
                null,
                x(g.a, {
                  text:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
                  author: "Someone famous in Source Title"
                })
              )
            )
          ),
          x(o.a, { language: "jsx", style: l.prism }, B),
          x(
            "div",
            { className: e.bdExample },
            x(
              d.a,
              { className: e.textCenter },
              x(m.a, { color: "danger" }, "Featured"),
              x(
                c.a,
                null,
                x("h4", { className: e.cardTitle }, "Special title treatment"),
                x(
                  "p",
                  null,
                  "With supporting text below as a natural lead-in to additional content."
                ),
                x(u.a, { color: "primary" }, "Do something")
              ),
              x(p.a, { className: e.textMuted }, "2 days ago")
            )
          ),
          x(o.a, { language: "jsx", style: l.prism }, S),
          x("h2", null, "Text alignment"),
          x(
            "div",
            { className: e.bdExample },
            x(
              d.a,
              { style: { width: "20rem" } },
              x(
                c.a,
                null,
                x("h4", { className: e.cardTitle }, "Special title treatment"),
                x(
                  "p",
                  null,
                  "With supporting text below as a natural lead-in to additional content."
                ),
                x(u.a, { color: "primary" }, "Do something")
              )
            ),
            x(
              d.a,
              { className: e.textCenter, style: { width: "20rem" } },
              x(
                c.a,
                null,
                x("h4", { className: e.cardTitle }, "Special title treatment"),
                x(
                  "p",
                  null,
                  "With supporting text below as a natural lead-in to additional content."
                ),
                x(u.a, { color: "primary" }, "Do something")
              )
            ),
            x(
              d.a,
              { className: e.textRight, style: { width: "20rem" } },
              x(
                c.a,
                null,
                x("h4", { className: e.cardTitle }, "Special title treatment"),
                x(
                  "p",
                  null,
                  "With supporting text below as a natural lead-in to additional content."
                ),
                x(u.a, { color: "primary" }, "Do something")
              )
            )
          ),
          x(o.a, { language: "jsx", style: l.prism }, v),
          x("h2", null, "Images"),
          x(
            "p",
            null,
            "Cards include a few options for working with images. Choose from appending \u201cimage caps\u201d at either end of a card, overlaying images with card content, or simply embedding the image in a card."
          ),
          x("h3", null, "Image caps"),
          x(
            "p",
            null,
            "Similar to headers and footers, cards can include top and bottom \u201cimage caps\u201d\u2014images at the top or bottom of a card."
          ),
          x(
            "div",
            { className: e.bdExample },
            x(
              d.a,
              null,
              x("img", {
                className: e.imgCardTop,
                src:
                  "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22843%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20843%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16302226ee9%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A42pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16302226ee9%22%3E%3Crect%20width%3D%22843%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22314.0703125%22%20y%3D%22109.35%22%3E843x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
                alt: "Card-img-cap"
              }),
              x(
                c.a,
                null,
                x("h4", { className: e.cardTitle }, "Card title"),
                x(
                  "p",
                  null,
                  "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
                ),
                x(
                  "p",
                  null,
                  x(
                    "small",
                    { className: e.textMuted },
                    "Last updated 3 mins ago"
                  )
                )
              )
            ),
            x(
              d.a,
              null,
              x(
                c.a,
                null,
                x("h4", { className: e.cardTitle }, "Card title"),
                x(
                  "p",
                  null,
                  "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
                ),
                x(
                  "p",
                  null,
                  x(
                    "small",
                    { className: e.textMuted },
                    "Last updated 3 mins ago"
                  )
                )
              ),
              x("img", {
                className: e.imgCardBottom,
                src:
                  "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22843%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20843%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16302226eea%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A42pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16302226eea%22%3E%3Crect%20width%3D%22843%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22314.0703125%22%20y%3D%22109.35%22%3E843x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
                alt: "Card-img-cap"
              })
            )
          ),
          x(o.a, { language: "jsx", style: l.prism }, N),
          x("h3", null, "Image overlays"),
          x(
            "p",
            null,
            "Turn an image into a card background and overlay your card\u2019s text. Depending on the image, you may or may not need additional styles or utilities."
          ),
          x(
            "div",
            { className: e.bdExample },
            x(
              d.a,
              null,
              x("img", {
                className: e.imgCard,
                src:
                  "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22843%22%20height%3D%22270%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20843%20270%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16302226eeb%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A42pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16302226eeb%22%3E%3Crect%20width%3D%22843%22%20height%3D%22270%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22314.0703125%22%20y%3D%22154.35%22%3E843x270%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
                alt: "Card-img"
              }),
              x(
                "div",
                { className: e.imgCardOverlay },
                x("h4", { className: e.cardTitle }, "Card title"),
                x(
                  "p",
                  null,
                  "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
                ),
                x("p", null, "Last updated 3 mins ago")
              )
            )
          ),
          x(o.a, { language: "jsx", style: l.prism }, k),
          x("h2", null, "Props"),
          x(o.a, { language: "jsx", style: l.prism }, E)
        );
      }
    },
    "5FiG": function(e, t, a) {
      "use strict";
      var n = a("zrwo"),
        r = a("eDSW"),
        s = {
          defaultFontStyle: Object(n.a)({}, r.j, { fontSize: "14px" }),
          defaultHeaderMargins: { marginTop: "20px", marginBottom: "10px" },
          quote: {
            padding: "10px 20px",
            margin: "0 0 20px",
            fontSize: "17.5px",
            borderLeft: "5px solid #eee"
          },
          quoteText: { margin: "0 0 10px", fontStyle: "italic" },
          quoteAuthor: {
            display: "block",
            fontSize: "80%",
            lineHeight: "1.42857143",
            color: "#777"
          },
          mutedText: { color: "#777" },
          primaryText: { color: r.r },
          infoText: { color: r.o },
          successText: { color: r.w },
          warningText: { color: r.B },
          dangerText: { color: r.i },
          smallText: {
            fontSize: "65%",
            fontWeight: "400",
            lineHeight: "1",
            color: "#777"
          }
        };
      t.a = s;
    },
    "5LSk": function(e, t, a) {
      "use strict";
      var n = a("kOwS"),
        r = a("vYYK"),
        s = a("qNsG"),
        o = a("q1tI"),
        l = a.n(o),
        i = a("TSYQ"),
        d = a.n(i),
        c = a("R/WZ"),
        m = {
          cardFooter: {
            display: "flex",
            alignItems: "center",
            backgroundColor: "transparent",
            padding: "0.9375rem 1.875rem"
          }
        };
      a.d(t, "a", function() {
        return g;
      });
      var p = l.a.createElement,
        u = Object(c.a)(m);
      function g(e) {
        var t,
          a = u(),
          o = e.className,
          l = e.children,
          i = Object(s.a)(e, ["className", "children"]),
          c = d()(
            ((t = {}),
            Object(r.a)(t, a.cardFooter, !0),
            Object(r.a)(t, o, void 0 !== o),
            t)
          );
        return p("div", Object(n.a)({ className: c }, i), l);
      }
    },
    A2So: function(e, t, a) {
      "use strict";
      var n = a("kOwS"),
        r = a("vYYK"),
        s = a("qNsG"),
        o = a("q1tI"),
        l = a.n(o),
        i = a("TSYQ"),
        d = a.n(i),
        c = a("R/WZ"),
        m = {
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
      a.d(t, "a", function() {
        return g;
      });
      var p = l.a.createElement,
        u = Object(c.a)(m);
      function g(e) {
        var t,
          a = u(),
          o = e.className,
          l = e.children,
          i = e.plain,
          c = e.carousel,
          m = Object(s.a)(e, ["className", "children", "plain", "carousel"]),
          g = d()(
            ((t = {}),
            Object(r.a)(t, a.card, !0),
            Object(r.a)(t, a.cardPlain, i),
            Object(r.a)(t, a.cardCarousel, c),
            Object(r.a)(t, o, void 0 !== o),
            t)
          );
        return p("div", Object(n.a)({ className: g }, m), l);
      }
    },
    Ilpk: function(e, t, a) {
      "use strict";
      t.a = {
        imgFluid: { maxWidth: "100%", height: "auto" },
        imgRounded: { borderRadius: "6px !important" },
        imgRoundedCircle: { borderRadius: "50% !important" },
        imgRaised: {
          boxShadow:
            "0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
        },
        imgGallery: { width: "100%", marginBottom: "2.142rem" },
        imgCardTop: {
          width: "100%",
          borderTopLeftRadius: "calc(.25rem - 1px)",
          borderTopRightRadius: "calc(.25rem - 1px)"
        },
        imgCardBottom: {
          width: "100%",
          borderBottomLeftRadius: "calc(.25rem - 1px)",
          borderBottomRightRadius: "calc(.25rem - 1px)"
        },
        imgCard: { width: "100%", borderRadius: "calc(.25rem - 1px)" },
        imgCardOverlay: {
          position: "absolute",
          top: "0",
          right: "0",
          bottom: "0",
          left: "0",
          padding: "1.25rem"
        }
      };
    },
    UsYt: function(e, t, a) {
      "use strict";
      var n = a("kOwS"),
        r = a("vYYK"),
        s = a("qNsG"),
        o = a("q1tI"),
        l = a.n(o),
        i = a("TSYQ"),
        d = a.n(i),
        c = a("R/WZ"),
        m = { cardBody: { padding: "0.9375rem 1.875rem", flex: "1 1 auto" } };
      a.d(t, "a", function() {
        return g;
      });
      var p = l.a.createElement,
        u = Object(c.a)(m);
      function g(e) {
        var t,
          a = u(),
          o = e.className,
          l = e.children,
          i = Object(s.a)(e, ["className", "children"]),
          c = d()(
            ((t = {}),
            Object(r.a)(t, a.cardBody, !0),
            Object(r.a)(t, o, void 0 !== o),
            t)
          );
        return p("div", Object(n.a)({ className: c }, i), l);
      }
    },
    aIa2: function(e, t, a) {
      "use strict";
      a.d(t, "a", function() {
        return d;
      });
      var n = a("q1tI"),
        r = a.n(n),
        s = a("R/WZ"),
        o = a("5FiG"),
        l = r.a.createElement,
        i = Object(s.a)(o.a);
      function d(e) {
        var t = e.text,
          a = e.author,
          n = i();
        return l(
          "blockquote",
          { className: n.defaultFontStyle + " " + n.quote },
          l("p", { className: n.quoteText }, t),
          l("small", { className: n.quoteAuthor }, a)
        );
      }
    },
    m8xT: function(e, t, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/documentation/cards",
        function() {
          var e = a("4A1H");
          return { page: e.default || e };
        }
      ]);
    }
  },
  [["m8xT", 1, 0]]
]);
