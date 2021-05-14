import { container, title } from "styles/jss/nextjs-material-kit.js";

const pillsStyle = {
  section: {
    padding: "70px 0",
  },
  container,
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
  },
};

export default pillsStyle;
