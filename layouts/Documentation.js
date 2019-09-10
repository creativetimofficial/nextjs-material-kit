import React from "react";
import { useRouter } from "next/router";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import DocHeader from "components/Documentation/DocHeader/DocHeader.js";
import DocSidebar from "components/Documentation/DocSidebar/DocSidebar.js";
import Tutorial from "components/Documentation/Sections/Tutorial.js";

import docRoutes from "routes/documentation.js";

class Documentation extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: "#FFFFFF" }}>
        <DocHeader />
        <GridContainer>
          <GridItem
            xs={12}
            sm={12}
            md={3}
            lg={2}
            xl={2}
            style={{ marginTop: "75px", marginBottom: "75px" }}
          >
            <DocSidebar routes={docRoutes} {...this.props} />
          </GridItem>
          <GridItem
            xs={12}
            sm={12}
            md={7}
            lg={7}
            xl={5}
            style={{
              marginTop: "75px",
              marginBottom: "75px",
              minHeight: "calc(100vh - 75px)"
            }}
          >
            {this.props.children}
          </GridItem>
          <GridItem
            xs={12}
            sm={12}
            md={2}
            lg={3}
            xl={2}
            style={{ marginTop: "75px" }}
          />
        </GridContainer>
      </div>
    );
  }
}

export default Documentation;
