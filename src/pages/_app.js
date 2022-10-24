import Head from "next/head";
import React from "react";
import { DefaultSeo } from "next-seo";
import { useEffect } from "react";
import { useRouter } from "next/router";
import "../styles/globals.css";

import * as ga from "../lib/ga";
import { Layout } from "../components/Layout";

export default function App({ Component, pageProps }) {
  // remove it here
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentNode)
      jssStyles.parentNode.removeChild(jssStyles);
  }, []);

  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="JT0m821Vw6hBS0L6QiNOfP4H2HDDmaePFsD6MCfUqdM"
        />
      </Head>
      <DefaultSeo
        openGraph={{
          site_name: "Best Films",
          url: "https://besftfilms.xyz/",
          images: [
            {
              url: "https://besftfilms.xyz/img/logo_poster.jpg",
              width: 165,
              height: 165,
            },
          ],
          type: "website",
        }}
        description="Site de filmes e series online de graça!!!"
        title="Best Films"
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
