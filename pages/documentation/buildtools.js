/*eslint-disable*/
import React from "react";
// layout for page
import Documentation from "/layouts/Documentation.js";

export default function BuildTools() {
  return (
    <Documentation>
      <h1 className="bd-title" id="content">
        Build tools
      </h1>
      <p className="bd-lead">
        Learn how to use NextJS Material Kit to build your website, change
        brand-colors and more.
      </p>
      <h3 id="change-brand-colors">
        <div>Change brand colors</div>
      </h3>
      <ul>
        <li>
          You will find all the branding colors inside{" "}
          <code className="highlighter-rouge">
            assets/scss/core/variables/_colors.scss
          </code>{" "}
          and inside{" "}
          <code className="highlighter-rouge">
            assets/jss/nextjs-material-kit.js
          </code>
          .
        </li>
      </ul>
      <h3 id="compile-scss">
        <div>Available commands</div>
      </h3>
      <div className="bd-example">
        <table>
          <thead>
            <tr>
              <th className="text-center">#</th>
              <th>Name</th>
              <th>Usage</th>
              <th className="text-left">Description</th>
              <th className="text-right">Read more</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center">1</td>
              <td>
                <code className="highlighter-rouge">install</code>
              </td>
              <td>
                <code className="highlighter-rouge">npm install</code>
              </td>
              <td className="text-left">
                This command installs a package, and any packages that it
                depends on.
              </td>
              <td className="text-right">
                <a
                  href="https://docs.npmjs.com/cli/install?ref=creativetim"
                  target="_blank"
                >
                  Read more
                </a>
              </td>
            </tr>
            <tr>
              <td className="text-center">2</td>
              <td>
                <code className="highlighter-rouge">test</code>
              </td>
              <td>
                <code className="highlighter-rouge">npm run test</code>
              </td>
              <td className="text-left">
                Runs the test watcher in an interactive mode. (Note that we have
                not implemented any tests - this command is by default from the
                initialization of package.json)
              </td>
              <td className="text-right">
                <a
                  href="https://github.com/zeit/next.js/issues/1434?ref=creativetim"
                  target="_blank"
                >
                  Read more
                </a>
              </td>
            </tr>
            <tr>
              <td className="text-center">3</td>
              <td>
                <code className="highlighter-rouge">dev</code>
              </td>
              <td>
                <code className="highlighter-rouge">npm run dev</code>
              </td>
              <td className="text-left">
                This will determinate the start of your development server.
              </td>
              <td className="text-right">
                <a
                  href="https://nextjs.org/docs#quick-start?ref=creativetim"
                  target="_blank"
                >
                  Read more
                </a>
              </td>
            </tr>
            <tr>
              <td className="text-center">4</td>
              <td>
                <code className="highlighter-rouge">build</code>
              </td>
              <td>
                <code className="highlighter-rouge">npm run build</code>
              </td>
              <td className="text-left">
                This will create a build directory with a production build of
                your app.
              </td>
              <td className="text-right">
                <a
                  href="https://nextjs.org/docs#quick-start?ref=creativetim"
                  target="_blank"
                >
                  Read more
                </a>
              </td>
            </tr>
            <tr>
              <td className="text-center">5</td>
              <td>
                <code className="highlighter-rouge">start</code>
              </td>
              <td>
                <code className="highlighter-rouge">npm start</code>
              </td>
              <td className="text-left">
                This will determinate the start of your production server.
              </td>
              <td className="text-right">
                <a
                  href="https://nextjs.org/docs#quick-start?ref=creativetim"
                  target="_blank"
                >
                  Read more
                </a>
              </td>
            </tr>
            <tr>
              <td className="text-center">6</td>
              <td>
                <code className="highlighter-rouge">install:clean</code>
              </td>
              <td>
                <code className="highlighter-rouge">npm run install:clean</code>
              </td>
              <td className="text-left">
                This command will remove the{" "}
                <code className="highlighter-rouge">node_modules</code> folder
                and <code className="highlighter-rouge">package_lock.json</code>{" "}
                file, will install a fresh copy of them and will determinate the
                start of your development server.
              </td>
              <td className="text-right" />
            </tr>
          </tbody>
        </table>
      </div>
    </Documentation>
  );
}
