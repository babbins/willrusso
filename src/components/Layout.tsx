import Head from "next/head";
import Navigation from "./Navigation";

type Props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Props) {
  return (
    <div className="root">
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
      </Head>
      <main>{children}</main>
      <style jsx>
        {`
          .root {
            background-color: #fcfbfa;
            max-width: 1100px;
            margin: 0 0.5rem;
            padding: 1.5rem;
            padding-top: 1rem;
          }

          main {
            margin-top: 1rem;
            min-height: 100%;
          }
          @media (min-width: 769px) {
            .root {
              margin: 0 auto;
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
