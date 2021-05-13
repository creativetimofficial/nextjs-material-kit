/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
// core components
import styles from "styles/jss/nextjs-material-kit/pages/componentsSections/downloadStyle.js";

const useStyles = makeStyles(styles);

export default function SectionDownload() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer className={classes.textCenter} justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2>Do you love this UI Kit?</h2>
            <h4>
              Cause if you do, it can be yours for FREE. Hit the buttons below
              to navigate to our website where you can find the kit. We also
              have the Bootstrap 4 version on plain HTML. Start a new project or
              give an old Bootstrap project a new look!
            </h4>
          </GridItem>
          <GridItem xs={12} sm={8} md={6}>
            <Button
              color="primary"
              size="lg"
              href="https://www.creative-tim.com/product/nextjs-material-kit?ref=njsmk-download-section"
              target="_blank"
            >
              Free NextJS Download
            </Button>
            <Button
              color="primary"
              size="lg"
              href="https://www.creative-tim.com/product/material-kit-react?ref=njsmk-download-section"
              target="_blank"
            >
              Free React Downoad
            </Button>
          </GridItem>
        </GridContainer>
        <br />
        <br />
        <GridContainer className={classes.textCenter} justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2>Want more?</h2>
            <h4>
              We've just launched{" "}
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                NextJS Material Kit PRO{" "}
              </a>
              .It has a huge number of components, sections and example pages.
              Start Your Development With A Badass Material-UI and NexJS Kit
              inspired by Material Design.
            </h4>
          </GridItem>
          <GridItem xs={12} sm={8} md={10}>
            <Button
              color="rose"
              size="lg"
              href="https://www.creative-tim.com/product/nextjs-material-kit-pro?ref=njsmk-download-section"
              target="_blank"
            >
              NextJS Material Kit PRO
            </Button>
            <Button
              color="rose"
              size="lg"
              href="https://www.creative-tim.com/product/material-kit-pro-react?ref=njsmk-download-section"
              target="_blank"
            >
              Material Kit PRO React
            </Button>
          </GridItem>
        </GridContainer>
        <div className={classes.textCenter + " " + classes.sharingArea}>
          <GridContainer justify="center">
            <h3>Thank you for supporting us!</h3>
          </GridContainer>
          <Button color="twitter">
            <i className={classes.socials + " fab fa-twitter"} /> Tweet
          </Button>
          <Button color="facebook">
            <i className={classes.socials + " fab fa-facebook-square"} /> Share
          </Button>
          <Button color="google">
            <i className={classes.socials + " fab fa-google-plus-g"} />
            Share
          </Button>
          <Button color="github">
            <i className={classes.socials + " fab fa-github"} /> Star
          </Button>
        </div>
      </div>
    </div>
  );
}
