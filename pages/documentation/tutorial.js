/*eslint-disable*/
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";
// layout for page
import Documentation from "layouts/Documentation.js";

const files = `nextjs-material-kit
.
├── CHANGELOG.md
├── ISSUE_TEMPLATE.md
├── LICENSE.md
├── README.md
├── next.config.js
├── package.json
├── Documentation
│   ├── assets
│   └── tutorial-components.html
├── assets
│   ├── css
│   ├── img
│   │   ├── examples
│   │   └── faces
│   ├── jss
│   │   ├── nextjs-material-kit
│   │   │   ├── components
│   │   │   └── pages
│   │   │       ├── componentsSections
│   │   │       └── landingPageSections
│   │   └── nextjs-material-kit.js
│   └── scss
│       ├── core
│       │   ├── mixins
│       │   └── variables
│       ├── plugins
│       └── nextjs-material-kit.scss
├── pages
│   ├── _app.js
│   ├── _document.js
│   ├── _error.js
│   ├── components.js
│   ├── landingpage.js
│   ├── loginpage.js
│   └── profilepage.js
├── components
│   ├── Badge
│   │   └── Badge.js
│   ├── Card
│   │   ├── Card.js
│   │   ├── CardBody.js
│   │   ├── CardFooter.js
│   │   └── CardHeader.js
│   ├── Clearfix
│   │   └── Clearfix.js
│   ├── CustomButtons
│   │   └── Button.js
│   ├── CustomDropdown
│   │   └── CustomDropdown.js
│   ├── CustomInput
│   │   └── CustomInput.js
│   ├── CustomLinearProgress
│   │   └── CustomLinearProgress.js
│   ├── CustomTabs
│   │   └── CustomTabs.js
│   ├── Footer
│   │   └── Footer.js
│   ├── Grid
│   │   ├── GridContainer.js
│   │   └── GridItem.js
│   ├── Header
│   │   ├── Header.js
│   │   └── HeaderLinks.js
│   ├── InfoArea
│   │   └── InfoArea.js
│   ├── NavPills
│   │   └── NavPills.js
│   ├── PageChange
│   │   └── PageChange.js
│   ├── Pagination
│   │   └── Pagination.js
│   ├── Parallax
│   │   └── Parallax.js
│   ├── Snackbar
│   │   └── SnackbarContent.js
│   └── Typography
│       ├── Danger.js
│       ├── Info.js
│       ├── Muted.js
│       ├── Primary.js
│       ├── Quote.js
│       ├── Small.js
│       ├── Success.js
│       └── Warning.js
└── pages-sections
    ├── Components-Sections
    │   ├── SectionBasics.js
    │   ├── SectionCarousel.js
    │   ├── SectionCompletedExamples.js
    │   ├── SectionDownload.js
    │   ├── SectionExamples.js
    │   ├── SectionJavascript.js
    │   ├── SectionLogin.js
    │   ├── SectionNavbars.js
    │   ├── SectionNotifications.js
    │   ├── SectionPills.js
    │   ├── SectionTabs.js
    │   └── SectionTypography.js
    └── LandingPage-Sections
        ├── ProductSection.js
        ├── TeamSection.js
        └── WorkSection.js`;

class Tutorial extends React.Component {
  render() {
    return (
      <Documentation>
        <h1>Tutorial</h1>
        <h2>License</h2>
        <p>
          <b>MIT LICENSE</b>
        </p>
        <p>
          Copyright (c) {new Date().getFullYear()}{" "}
          <a
            href="https://creative-tim.com/?ref=njsmk-tutorial-section-docs"
            target="_blank"
          >
            Creative Tim
          </a>
          .
        </p>
        <p>
          Permission is hereby granted, free of charge, to any person obtaining
          a copy of this software and associated documentation files (the
          "Software"), to deal in the Software without restriction, including
          without limitation the rights to use, copy, modify, merge, publish,
          distribute, sublicense, and/or sell copies of the Software, and to
          permit persons to whom the Software is furnished to do so, subject to
          the following conditions:
        </p>
        <p>
          The above copyright notice and this permission notice shall be
          included in all copies or substantial portions of the Software.
        </p>
        <p>
          THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
          EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
          IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
          CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
          TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
          SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
        </p>
        <h2>Getting started</h2>
        <p>
          <b>NextJS Material Kit</b> is built on top of{" "}
          <a
            href="https://material-ui-next.com/?ref=creativetim"
            target="_blank"
          >
            Material UI
          </a>{" "}
          and{" "}
          <a
            href="https://www.creative-tim.com/product/material-kit-react?ref=njsmk-tutorial-docs"
            target="_blank"
          >
            Material Kit React
          </a>{" "}
          using{" "}
          <a href="https://nextjs.org?ref=creativetim" target="_blank">
            NextJS
          </a>{" "}
          (at the moment we do not offer support for TypeScript in our React
          themes).
        </p>
        <p>
          Check the{" "}
          <a
            href="https://github.com/creativetimofficial/nextjs-material-kit/blob/master/CHANGELOG.md?ref=creativetim"
            target="_blank"
          >
            CHANGELOG
          </a>{" "}
          to see what version we have used inside this product.
        </p>
        <p>
          You can convert our theme to TypeScript support by{" "}
          <a
            href="https://github.com/creativetimofficial/ct-material-dashboard-pro-react/issues/14?ref=creativetim"
            target="_blank"
          >
            reading this thread
          </a>
          .
        </p>
        <h3>Local development</h3>
        <ul>
          <li>
            Install NodeJs from{" "}
            <a href="https://nodejs.org/en/?ref=creativetim" target="_blank">
              NodeJs Official Page
            </a>
          </li>
          <li>
            Go to{" "}
            <a
              href="https://www.creative-tim.com/?ref=njsmk-tutorial-section-docs"
              target="_blank"
            >
              creative tim website
            </a>{" "}
            and login into your account
          </li>
          <li>
            Go to{" "}
            <a
              href="https://www.creative-tim.com/product/nextjs-material-kit?ref=njsmk-tutorial-section-docs"
              target="_blank"
            >
              NextJS Material Kit
            </a>{" "}
            and press the download button (this will download onto your computer
            a zip file)
          </li>
          <li>Unzip the downloaded file to a folder in your computer</li>
          <li>Open Terminal</li>
          <li>Go to your file project (where you've unzipped the product)</li>
          <li>
            Run in terminal{" "}
            <SyntaxHighlighter
              language="jsx"
              style={prism}
            >{`npm install`}</SyntaxHighlighter>
          </li>
          <li>
            Then run{" "}
            <SyntaxHighlighter
              language="jsx"
              style={prism}
            >{`npm run dev`}</SyntaxHighlighter>
          </li>
          <li>
            Alternatively, if you use a Linux based OS, you can run{" "}
            <SyntaxHighlighter
              language="jsx"
              style={prism}
            >{`npm run install:clean`}</SyntaxHighlighter>{" "}
            which will delete <code>node_modules/</code>,{" "}
            <code>package-lock.json</code>, <code>.next/</code>, automatically
            run <code>install</code> script and <code>run dev</code> script
          </li>
          <li>
            Navigate to <a href="http://localhost:3000" target="_blank">http://localhost:3000</a>
          </li>
          <li>
            More information →{" "}
            <a
              href="https://reactjs.org/docs/installation.html?ref=creativetim"
              target="_blank"
            >
              React
            </a>
          </li>
          <li>
            More information →{" "}
            <a href="https://nextjs.org?ref=creativetim" target="_blank">
              NextJS
            </a>
          </li>
          <li>
            More information →{" "}
            <a href="https://material-ui.com/?ref=creativetim" target="_blank">
              Material-UI
            </a>
          </li>
          <li>
            More information →{" "}
            <a href="https://www.creative-tim.com/product/material-kit-react?ref=njsmk-tutorial-page" target="_blank">
              Material Kit React
            </a>
          </li>
        </ul>
        <h3>Production</h3>
        <p>
          To learn how to deploy a NextJS application you can do the following:
        </p>
        <ul>
          <li>
            Check the live docs of NextJS
            <ul>
              <li>
                <a href="https://nextjs.org?ref=creativetim" target="_blank">
                  NextJS
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/zeit/next.js/wiki/Deploying-a-Next.js-app-into-GitHub-Pages?ref=creativetim"
                  target="_blank"
                >
                  NextJS Tutorial for Deployment
                </a>
              </li>
              <li>
                <a
                  href="https://nextjs.org/learn/basics/deploying-a-nextjs-app?ref=creativetim"
                  target="_blank"
                >
                  NextJS for GitHub Pages
                </a>
              </li>
            </ul>
          </li>
          <li>
            Also, you can check{" "}
            <a
              href="https://stackoverflow.com/search?q=nextjs?ref=creativetim"
              target="_blank"
            >
              StackOverflow
            </a>{" "}
            for more guidelines.
          </li>
        </ul>
        <h3>Observations</h3>
        <p>We've used absolute paths in our product.</p>
        <p>
          Integrating this app, with another NextJS app that does not make use
          of absolute paths will break.
        </p>
        <p>
          Please integrate our next.config.js file with your next.config.js file
          of your application.
        </p>
        <p>
          For more details about absolute paths inside NextJS we've used this{" "}
          <a
            href="https://whoisryosuke.com/blog/2018/nextjs-tip-relative-es6-modules/?ref=creativetim"
            target="_blank"
          >
            tutorial on absolute paths in NextJS
          </a>.
        </p>
        <p>
          The project was started from{" "}
          <a
            href="https://github.com/mui-org/material-ui/tree/master/examples/nextjs?ref=creativetim"
            target="_blank"
          >
            Material UI NextJS example
          </a>{" "}
          and on top of that, we've added{" "}
          <a
            href="https://github.com/mui-org/material-ui/tree/master/examples/nextjs?ref=njsmk-tutorial-docs"
            target="_blank"
          >
            Material Kit React
          </a>.
        </p>
        <h2>Files and Folders structure</h2>
        <SyntaxHighlighter language="terminal" style={prism}>
          {files}
        </SyntaxHighlighter>
      </Documentation>
    );
  }
}

export default Tutorial;
