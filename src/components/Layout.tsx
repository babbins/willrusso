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
        <link
          rel="preload"
          href="/fonts/ladi-gross-400.woff2"
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
