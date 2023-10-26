import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../../layout/Layout";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Head>
          <title>portfolio_jubin_thomas</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="description"
            content="Portafolio thomas! my projects,contact and learn more about me..."
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
