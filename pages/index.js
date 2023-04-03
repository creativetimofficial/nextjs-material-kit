import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "/components/Header/Header.js";
import Footer from "/components/Footer/Footer.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Button from "/components/CustomButtons/Button.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import Parallax from "/components/Parallax/Parallax.js";

import styles from "/styles/jss/nextjs-material-kit/pages/landingPage.js";

// Sections for this page
import ProductSection from "/pages-sections/LandingPage-Sections/ProductSection.js";
import TeamSection from "/pages-sections/LandingPage-Sections/TeamSection.js";
import WorkSection from "/pages-sections/LandingPage-Sections/WorkSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const {
    data: { menu },
    ...rest
  } = props;
  console.log("menu", menu);
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Openvpn.ru"
        rightLinks={<HeaderLinks menu={menu} />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax filter responsive image="/img/landing-bg.jpg">
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Как это работает</h1>
              <h4>
                Рано или поздно каждый из нас задумывается о вопросах сокрытия
                своей личности в сети Интернет.
              </h4>
              <br />
              <Button
                color="danger"
                size="lg"
                href="/how_it_work"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <i className="fas fa-play" />
                 */}
                Узнать больше
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          <TeamSection />
          <WorkSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}

//Another option using getserversideprops, but must pass {data} to the page
export async function getServerSideProps(context) {
  const getData = {
    method: "Get",
    headers: { "Content-Type": "application/json" },
  };
  const res = await fetch(
    `http://localhost:3000/api/getdata-routes-menu`,
    getData
  );
  const data = await res.json();

  return { props: { data } };
}
