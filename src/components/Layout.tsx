import Head from "next/head";
import Navigation from "./Navigation";

type Props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Props) {
  return (
    <div id="root">
      <nav>
        <Navigation />
      </nav>

      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#fff" />
        <title>Will Russo</title>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.cdnfonts.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          //TODO: Figure out why this is failing in netlify build but not locally
          //@ts-ignore
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cambay&family=Roboto:ital,wght@0,100;0,300;0,500;1,100;1,300;1,500;1,700&family=Tenor+Sans&display=swap"
          rel="stylesheet"
        />

        <link
          rel="preload"
          href="/fonts/ladi-weak-300.woff2"
          as="font"
          crossOrigin="anonymous"
          type="font/woff2"
        />
        <link
          rel="preload"
          href="/fonts/agency-fb-bold.woff2"
          as="font"
          crossOrigin="anonymous"
          type="font/woff2"
        />
      </Head>
      <main>{children}</main>

      <style jsx>
        {`
          #root {
            background-color: #f7f7f7;
            width: 100%;
            max-width: 1100px;
            margin: 0 0.5rem;
            border-radius: 8px;
            height: calc(100% - 1rem);
            padding: 1.5rem;
            padding-top: 1rem;
            position: relative;
            overflow-y: auto;
          }

          main {
            margin-top: 1rem;
          }
          @media (min-width: 769px) {
            #root {
              padding: 5rem;
              padding-top: 3rem;
            }
            main {
              margin-top: 3rem;
            }
          }
        `}
      </style>
    </div>
  );
}
