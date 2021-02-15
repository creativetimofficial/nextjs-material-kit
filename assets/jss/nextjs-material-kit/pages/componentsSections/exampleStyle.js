import { containerFluid } from "assets/jss/nextjs-material-kit.js";

import imagesStyle from "assets/jss/nextjs-material-kit/imagesStyles.js";

const exampleStyle = {
  section: {
    padding: "70px 0"
  },
  container: {
    ...containerFluid,
    textAlign: "center !important"
  },
  ...imagesStyle,
  link: {
    textDecoration: "none"
  }
};

export default exampleStyle;
