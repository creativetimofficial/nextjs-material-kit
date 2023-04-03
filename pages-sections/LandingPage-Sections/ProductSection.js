import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import InfoArea from "/components/InfoArea/InfoArea.js";

import styles from "/styles/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justifyContent="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Добро пожаловать!</h2>
          <h5 className={classes.description}>
            На нашем сайте вы можете приобрести подписки на <strong>VPN</strong>{" "}
            по технологиям <strong>OpenVPN</strong> и <strong>PPTP</strong>{" "}
            сроком от 2х недель и более. Вы также можете получить{" "}
            <strong>бесплатный тестовый</strong> доступ к любому нашему серверу{" "}
            <strong>VPN на 20 минут.</strong>
          </h5>
          <h5 className={classes.description}>
            С дополнительными вопросами обращайтесь к нашей поддержке.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Временно не доступна оплата на сайте"
              description="Уважаемые клиенты,
оплата на сайте временно не доступна. Для оплаты, обращайтесь в чат поддержки на сайте."
              icon={AnnouncementIcon}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Verified Users"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Новый релиз OpenVPN Portable"
              description="Уважаемые клиенты, доступа новая версия решения OpenVPN Portable"
              icon={VpnKeyIcon}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
