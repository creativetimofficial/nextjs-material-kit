import { container, title } from "assets/jss/nextjs-material-kit.js";

const notificationsStyles = {
  section: {
    backgroundColor: "#FFFFFF",
    display: "block",
    width: "100%",
    position: "relative",
    padding: "0"
  },
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  container
};

export default notificationsStyles;
