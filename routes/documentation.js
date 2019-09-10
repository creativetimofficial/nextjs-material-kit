/*!

=========================================================
* Material Kit React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// Getting started
import Tutorial from "../components/Documentation/Sections/Tutorial.js";
import Styles from "../components/Documentation/Sections/Styles.js";
import LintCommands from "../components/Documentation/Sections/LintCommands.js";
import BuildTools from "../components/Documentation/Sections/BuildTools.js";

// Components
import Badges from "../components/Documentation/Sections/Badges.js";
import Buttons from "../components/Documentation/Sections/Buttons.js";
import Cards from "../components/Documentation/Sections/Cards.js";
import CheckboxRadioSwitch from "../components/Documentation/Sections/CheckboxRadioSwitch.js";
import Clearfix from "../components/Documentation/Sections/Clearfix.js";
import Dropdown from "../components/Documentation/Sections/Dropdown.js";
import Footer from "../components/Documentation/Sections/Footer.js";
import Grid from "../components/Documentation/Sections/Grid.js";
import Icons from "../components/Documentation/Sections/Icons.js";
import InfoAreas from "../components/Documentation/Sections/InfoArea.js";
import Inputs from "../components/Documentation/Sections/Inputs.js";
import LinearProgress from "../components/Documentation/Sections/LinearProgress.js";
import Modal from "../components/Documentation/Sections/Modal.js";
import Navigation from "../components/Documentation/Sections/Navigation.js";
import NavPill from "../components/Documentation/Sections/NavPills.js";
import Notifications from "../components/Documentation/Sections/Notifications.js";
import Pagination from "../components/Documentation/Sections/Pagination.js";
import Parallax from "../components/Documentation/Sections/Parallax.js";
import Popovers from "../components/Documentation/Sections/Popovers.js";
import Tabs from "../components/Documentation/Sections/Tabs.js";
import Tooltips from "../components/Documentation/Sections/Tooltips.js";
import Typography from "../components/Documentation/Sections/Typography.js";

// Plugins
import Carousel from "../components/Documentation/Sections/Carousel.js";
import DateTimePicker from "../components/Documentation/Sections/DateTimePicker.js";
import Sliders from "../components/Documentation/Sections/Sliders.js";

const docRoutes = [
  {
    name: "Getting started",
    path: "/documentation/tutorial",
    routes: [
      {
        path: "/documentation/tutorial",
        name: "Tutorial",
        component: Tutorial
      },
      { path: "/documentation/styles", name: "Styles", component: Styles },
      {
        path: "/documentation/lint-commands",
        name: "Lint Commands",
        component: LintCommands
      },
      {
        path: "/documentation/build-tools",
        name: "Build Tools",
        component: BuildTools
      }
    ]
  },
  {
    name: "Components",
    path: "/documentation/badges",
    routes: [
      { path: "/documentation/badges", name: "Badges", component: Badges },
      { path: "/documentation/buttons", name: "Buttons", component: Buttons },
      { path: "/documentation/cards", name: "Cards", component: Cards },
      {
        path: "/documentation/checkbox-radio",
        name: "CheckboxRadioSwitch",
        component: CheckboxRadioSwitch
      },
      {
        path: "/documentation/clear-fix",
        name: "Clearfix",
        component: Clearfix
      },
      {
        path: "/documentation/dropdown",
        name: "Dropdown",
        component: Dropdown
      },
      { path: "/documentation/footer", name: "Footer", component: Footer },
      { path: "/documentation/grid", name: "Grid", component: Grid },
      { path: "/documentation/icons", name: "Icons", component: Icons },
      {
        path: "/documentation/info-areas",
        name: "InfoAreas",
        component: InfoAreas
      },
      { path: "/documentation/inputs", name: "Inputs", component: Inputs },
      {
        path: "/documentation/linear-progress",
        name: "Linear Progress",
        component: LinearProgress
      },
      { path: "/documentation/modals", name: "Modals", component: Modal },
      {
        path: "/documentation/navigation",
        name: "Navigation",
        component: Navigation
      },
      {
        path: "/documentation/nav-pills",
        name: "NavPills",
        component: NavPill
      },
      {
        path: "/documentation/notifications",
        name: "Notifications",
        component: Notifications
      },
      {
        path: "/documentation/pagination",
        name: "Pagination",
        component: Pagination
      },
      {
        path: "/documentation/parallax",
        name: "Parallax",
        component: Parallax
      },
      {
        path: "/documentation/popovers",
        name: "Popovers",
        component: Popovers
      },
      { path: "/documentation/tabs", name: "Tabs", component: Tabs },
      {
        path: "/documentation/tooltips",
        name: "Tooltips",
        component: Tooltips
      },
      {
        path: "/documentation/typography",
        name: "Typography",
        component: Typography
      }
    ]
  },
  {
    name: "Plugins",
    path: "/documentation/carousel",
    routes: [
      {
        path: "/documentation/carousel",
        name: "Carousel",
        component: Carousel
      },
      {
        path: "/documentation/date-time-picker",
        name: "DateTimePicker",
        component: DateTimePicker
      },
      { path: "/documentation/sliders", name: "Sliders", component: Sliders }
    ]
  }
];

export default docRoutes;
