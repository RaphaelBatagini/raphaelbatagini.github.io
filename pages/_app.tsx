// import "../pages/globals.css";
import "../pages/build.css";
import Layout from "../components/layout";
import { Fragment } from "react";

export default function MyApp({
  Component,
  pageProps,
}: {
  Component: React.JSX.ElementType;
  pageProps: any;
}) {
  return (
    <Fragment>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  );
}
