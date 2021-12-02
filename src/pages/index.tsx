import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { SocialList } from "../components/SocialList";

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className="container">
        <div className="main-content">
          <img src="images/will-russo-headshot.jpg" />
          <div id="bio">
            <div>
              Will Russo is a poet and editor, born and raised in New York City
              and currently based in Chicago.
            </div>
            <div>
              He graduated from Brooklyn Technical High School, received his BA
              from Emory University and his MFA from the School of the Art
              Institute of Chicago.
            </div>
            <div>
              In 2019, he attended the Kenyon Review Writers Workshop and the
              Bread Loaf Writers' Conference and was nominated for the Pushcart
              Prize.
            </div>
            <div>He serves as Poetry Editor at Great Lakes Review.</div>
            <SocialList />
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1 1 auto;
          padding: 0 1.5rem;
        }
        .main-content {
          display: flex;
          align-items: center;
          flex-direction: column;
        }
        img {
          max-width: 500px;
          width: 100%;
          display: block;
        }
        h1 {
          font-size: 2.5rem;
          margin: 0;
          font-weight: 500;
        }
        h2 {
          font-size: 1.75rem;
          font-weight: 400;
          line-height: 1.25;
        }
        .fancy {
          color: #15847d;
        }
        .handle {
          display: inline-block;
          margin-top: 0.275em;
          color: #9b9b9b;
          letter-spacing: 0.05em;
        }

        @media (min-width: 769px) {
          .main-content {
            display: grid;
            grid-column-gap: 2rem;
            grid-template-columns: 3fr 5fr;
          }

          h1 {
            font-size: 3rem;
          }
          h2 {
            font-size: 2.25rem;
          }
        }
      `}</style>
    </Layout>
  );
}
