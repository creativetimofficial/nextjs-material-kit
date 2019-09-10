import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { List, ListItem, ListItemText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const styles = theme => ({
  list: {
    overflowY: "auto",
    maxHeight: "calc(100vh - 4rem)",
    paddingTop: "40px",
    paddingRight: "10px",
    paddingLeft: "10px",
    paddingBottom: ".25rem",
    borderRight: "1px solid rgba(0,0,0,.1)",
    [theme.breakpoints.up("md")]: {
      position: "fixed",
      paddingTop: "15px"
    }
  },
  innerList: {
    display: "block",
    paddingLeft: "0px",
    flexWrap: "wrap",
    marginBottom: "18px",
    listStyle: "none"
  },
  listItemText: {
    display: "block",
    color: "rgba(0,0,0,.65)",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontWeight: "300",
    lineHeight: "1.5em",
    padding: "0!important"
  },
  listItemTextGroup: {
    fontWeight: "500",
    color: "rgba(0,0,0,.85)",
    fontSize: "1rem"
  },
  active: {
    fontWeight: "500",
    color: "rgba(0,0,0,.85)",
    backgroundColor: "transparent"
  },
  navLink: {
    textDecoration: "none"
  },
  listItem: {
    paddingTop: ".25rem",
    paddingBottom: ".25rem"
  },
  innerListItem: {
    paddingTop: ".25rem",
    paddingBottom: ".25rem",
    paddingRight: "12px",
    paddingLeft: "12px"
  }
});

const useStyles = makeStyles(styles);

export default function DocSidebar({ routes }) {
  const router = useRouter();
  const activeRoute = routeName => {
    return router.pathname.indexOf(routeName) > -1 ? true : false;
  };
  const classes = useStyles();
  return (
    <List className={classes.list}>
      {routes.map((prop, key) => {
        if (prop.redirect) return null;
        return (
          <div key={key}>
            <Link href={prop.path}>
              <a className={classes.navLink}>
                <ListItem className={classes.listItem}>
                  <ListItemText
                    primary={prop.name}
                    disableTypography={true}
                    className={
                      classes.listItemText +
                      " " +
                      classes.listItemTextGroup +
                      " " +
                      (activeRoute(prop.path) ? classes.active : "")
                    }
                  />
                </ListItem>
              </a>
            </Link>
            <List className={classes.innerList}>
              {prop.routes.map((prop, key) => {
                return (
                  <a className={classes.navLink} key={key}>
                    <Link href={prop.path}>
                      <ListItem className={classes.innerListItem}>
                        <ListItemText
                          primary={prop.name}
                          disableTypography={true}
                          className={
                            classes.listItemText +
                            " " +
                            (activeRoute(prop.path) ? classes.active : "")
                          }
                        />
                      </ListItem>
                    </Link>
                  </a>
                );
              })}
            </List>
          </div>
        );
      })}
    </List>
  );
}
