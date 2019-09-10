const docRoutes = [
  {
    name: "Getting started",
    path: "/documentation/tutorial",
    routes: [
      {
        path: "/documentation/tutorial",
        name: "Tutorial"
      },
      { path: "/documentation/styles", name: "Styles" },
      {
        path: "/documentation/lintcommands",
        name: "Lint Commands"
      },
      {
        path: "/documentation/buildtools",
        name: "Build Tools"
      }
    ]
  },
  {
    name: "Components",
    path: "/documentation/badges",
    routes: [
      { path: "/documentation/badges", name: "Badges" },
      { path: "/documentation/buttons", name: "Buttons" },
      { path: "/documentation/cards", name: "Cards" },
      {
        path: "/documentation/checkboxradioswitch",
        name: "Checkbox Radio Switch"
      },
      {
        path: "/documentation/clearfix",
        name: "Clearfix"
      },
      {
        path: "/documentation/dropdown",
        name: "Dropdown"
      },
      { path: "/documentation/footer", name: "Footer" },
      { path: "/documentation/grid", name: "Grid" },
      { path: "/documentation/icons", name: "Icons" },
      {
        path: "/documentation/infoarea",
        name: "InfoAreas"
      },
      { path: "/documentation/inputs", name: "Inputs" },
      {
        path: "/documentation/linearprogress",
        name: "Linear Progress"
      },
      { path: "/documentation/modal", name: "Modals" },
      {
        path: "/documentation/navigation",
        name: "Navigation"
      },
      {
        path: "/documentation/navpills",
        name: "NavPills"
      },
      {
        path: "/documentation/notifications",
        name: "Notifications"
      },
      {
        path: "/documentation/pagination",
        name: "Pagination"
      },
      {
        path: "/documentation/parallax",
        name: "Parallax"
      },
      {
        path: "/documentation/popovers",
        name: "Popovers"
      },
      { path: "/documentation/tabs", name: "Tabs" },
      {
        path: "/documentation/tooltips",
        name: "Tooltips"
      },
      {
        path: "/documentation/typography",
        name: "Typography"
      }
    ]
  },
  {
    name: "Plugins",
    path: "/documentation/carousel",
    routes: [
      {
        path: "/documentation/carousel",
        name: "Carousel"
      },
      {
        path: "/documentation/datetimepicker",
        name: "Date Picker"
      },
      { path: "/documentation/sliders", name: "Sliders" }
    ]
  }
];

export default docRoutes;
