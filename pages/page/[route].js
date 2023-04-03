import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// import Camera from "@material-ui/icons/Camera";
// import Palette from "@material-ui/icons/Palette";
// import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "/components/Header/Header.js";
import Footer from "/components/Footer/Footer.js";
//import Button from "/components/CustomButtons/Button.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
//import NavPills from "/components/NavPills/NavPills.js";
import Parallax from "/components/Parallax/Parallax.js";
import ReactHtmlParser from "react-html-parser";
import styles from "/styles/jss/nextjs-material-kit/pages/page.js";

const useStyles = makeStyles(styles);

export default function Page(props) {
  const classes = useStyles();
  const {
    data: { page, menu },
    ...rest
  } = props;
  ///console.log("menu===", menu);
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Header
        color="transparent"
        brand="NextJS Material Kit"
        rightLinks={<HeaderLinks menu={menu} />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white",
        }}
        {...rest}
      />
      <Parallax small filter image="/img/profile-bg.jpg" />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justifyContent="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img
                      src="/img/pages/how-it-works.jpg"
                      alt="..."
                      className={imageClasses}
                    />
                  </div>
                  <div className={classes.name}>
                    <h1 className={classes.title}>{page.name}</h1>
                    <h6>интересно</h6>
                    {/* <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-twitter"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-instagram"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-facebook"} />
                    </Button> */}
                  </div>
                </div>
              </GridItem>
            </GridContainer>

            <div className={classes.description}>
              <p>
                Рано или поздно каждый из нас задумывается о вопросах сокрытия
                своей личности в сети Интернет.
              </p>
            </div>
            <GridContainer justifyContent="center">
              <GridItem xs={12} md={6}>
                {ReactHtmlParser(page.content_page)}
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

//Another option using getserversideprops, but must pass {data} to the page
export async function getServerSideProps(context) {
  const { route } = context.query;
  const postData = {
    method: "Post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      route,
    }),
  };
  let res = await fetch(
    `http://localhost:3000/api/getdata-route-page`,
    postData
  );
  const data = await res.json();

  //console.log("process.env.REACT_APP_BASEHOST", process.env.REACT_APP_BASEHOST);
  const getData = {
    method: "Get",
    headers: { "Content-Type": "application/json" },
  };
  res = await fetch(`http://localhost:3000/api/getdata-routes-menu`, getData);
  const data1 = await res.json();

  return { props: { data: { ...data, ...data1 } } };
}
