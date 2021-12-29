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
          <div>
            <img src="images/will-russo-headshot.jpg" />
            <span id="credit">
              Photo credit:{" "}
              <a target="_blank" href="https://www.yaylala.com/">
                Yalie Kamara
              </a>
            </span>
          </div>

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
          </div>
        </div>
      </div>
      <style jsx>{`
        .main-content {
          display: flex;
          align-items: center;
          flex-direction: column;
        }
        img {
          object-fit: cover;
          width: 100%;
          display: block;
        }

        #credit {
          display: block;
          margin-top: 0.5rem;
          font-size: 0.9rem;
        }

        #bio {
          margin-top: 1rem;
          line-height: 1.2;
          font-size: 1.2rem;
          max-width: 500px;
        }
        #bio * + * {
          margin-top: 0.75rem;
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
            margin: 0 4rem;
            display: grid;
            grid-template-columns: 3fr 5fr;
          }

          h1 {
            font-size: 3rem;
          }
          h2 {
            font-size: 2.25rem;
          }

          #bio * + * {
            margin-top: 1rem;
          }

          #bio {
            margin-left: 4.5rem;
            margin-top: 0;
            font-size: 1.2rem;
            max-width: 700px;
          }
        }
      `}</style>
    </Layout>
  );
}
