import React from "react";
import classes from "../styles/globals.css";
import { Layout } from "../components";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
