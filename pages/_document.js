import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@material-ui/styles";

class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta name="theme-color" content="#000000" />
          <link rel="shortcut icon" href={require("assets/img/favicon.png")} />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href={require("assets/img/apple-icon.png")}
          />
          {/* Extra details for Live View on GitHub Pages */}
          {/* Canonical SEO */}
          <link
            rel="canonical"
            href="https://www.creative-tim.com/product/nextjs-material-kit"
          />

          {/*  Social tags      */}
          <meta
            name="keywords"
            content="react kit, react template, react material-ui template, react material-ui kit, react kit template, react free, react free kit, react free material-ui kit, free kit template, material-ui kit, material-ui kit template, material-ui template, material-ui kit free, material-ui template free, material-ui free kit template, nextjs, next, next kit, nextjs kit, next material, nextjs material kit, nextjs material-ui, next material-ui"
          />
          <meta
            name="description"
            content="NextJS Material Kit is a Free Material Design Kit made for NextJS version 9.0.5, React version 16.9.0 and Material-UI version 4.3.2."
          />

          {/* Schema.org markup for Google+ */}
          <meta itemProp="name" content="NextJS Material Kit by Creative Tim" />
          <meta
            itemProp="description"
            content="NextJS Material Kit is a Free Material Design Kit made for NextJS version 9.0.5, React version 16.9.0 and Material-UI version 4.3.2."
          />

          <meta
            itemProp="image"
            content="https://s3.amazonaws.com/creativetim_bucket/products/72/opt_nudp_thumbnail.jpg"
          />

          {/* Twitter Card data */}
          <meta name="twitter:card" content="product" />
          <meta name="twitter:site" content="@creativetim" />
          <meta
            name="twitter:title"
            content="NextJS Material Kit by Creative Tim"
          />

          <meta
            name="twitter:description"
            content="NextJS Material Kit is a Free Material Design Kit made for NextJS version 9.0.5, React version 16.9.0 and Material-UI version 4.3.2."
          />
          <meta name="twitter:creator" content="@creativetim" />
          <meta
            name="twitter:image"
            content="https://s3.amazonaws.com/creativetim_bucket/products/72/opt_nudp_thumbnail.jpg"
          />

          {/* Open Graph data */}
          <meta property="fb:app_id" content="655968634437471" />
          <meta
            property="og:title"
            content="NextJS Material Kit by Creative Tim"
          />
          <meta property="og:type" content="article" />
          <meta
            property="og:url"
            content="http://demos.creative-tim.com/nextjs-material-kit/components"
          />
          <meta
            property="og:image"
            content="https://s3.amazonaws.com/creativetim_bucket/products/72/opt_nudp_thumbnail.jpg"
          />
          <meta
            property="og:description"
            content="NextJS Material Kit is a Free Material Design Kit made for NextJS version 9.0.5, React version 16.9.0 and Material-UI version 4.3.2."
          />
          <meta property="og:site_name" content="Creative Tim" />
          {/* Fonts and icons */}
          <link
            rel="stylesheet"
            type="text/css"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons"
          />
          <link
            href="https://use.fontawesome.com/releases/v5.0.10/css/all.css"
            rel="stylesheet"
          />
        </Head>
        <body>
          <div id="page-transition"></div>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

MyDocument.getInitialProps = async ctx => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => sheets.collect(<App {...props} />)
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      <React.Fragment key="styles">
        {initialProps.styles}
        {sheets.getStyleElement()}
      </React.Fragment>
    ]
  };
};

export default MyDocument;
