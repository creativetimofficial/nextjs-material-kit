import { containerFluid } from "/styles/jss/nextjs-material-kit.js";

import imagesStyle from "/styles/jss/nextjs-material-kit/imagesStyles.js";

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
