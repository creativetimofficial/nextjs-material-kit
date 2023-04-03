/*eslint-disable*/
import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons

import AppsIcon from "@material-ui/icons/Apps";
import VpnLockIcon from "@material-ui/icons/VpnLock";
import ReviewsIcon from "@material-ui/icons/RateReview";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import LiveHelpIcon from "@material-ui/icons/LiveHelp";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import ShopIcon from "@material-ui/icons/Shop";

// core components
import CustomDropdown from "/components/CustomDropdown/CustomDropdown.js";
import Button from "/components/CustomButtons/Button.js";

import styles from "/styles/jss/nextjs-material-kit/components/headerLinksStyle.js";
import isEmpty from "../../helpers";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();

  const menu = (pid = 0) =>
    (props.menu || []).filter(
      (item) => item.pid === pid || (pid === 0 && item.pid == null)
    );
  const icons = {
    VpnLockIcon,
    ReviewsIcon,
    ContactSupportIcon,
    LiveHelpIcon,
    ContactMailIcon,
    ShopIcon,
  };

  //console.log("menu", menu());
  return (
    <List className={classes.list}>
      {menu().map((it) => {
        const Icon =
          it.icon != null && icons[it.icon] ? icons[it.icon] : AppsIcon;
        const url = (p) =>
          p.modname === "page" ? `/page/${p.url}` : `/${p.url}`;
        //console.log(it.icon, icons[it.icon]);
        const SubMenu = menu(it.id).map((itt) => (
          <Link href={url(itt)} className={classes.dropdownLink}>
            {itt.name}
          </Link>
        ));
        return !isEmpty(menu(it.id)) ? (
          <ListItem className={classes.listItem} key={it.id}>
            <CustomDropdown
              noLiPadding
              navDropdown
              buttonText={it.name}
              buttonProps={{
                className: classes.navLink,
                color: "transparent",
              }}
              buttonIcon={Icon}
              dropdownList={SubMenu}
            />
          </ListItem>
        ) : (
          <ListItem className={classes.listItem} key={it.id}>
            <Button
              href={url(it)}
              color="transparent"
              //target="_blank"
              className={classes.navLink}
            >
              <Icon className={classes.icons} />
              {it.name}
            </Button>
          </ListItem>
        );
      })}
    </List>
  );
}
