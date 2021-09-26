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
          <div>
            <h1>
              Hi, I'm Will Russo.
            </h1>
            <h2>This is a site Ali built for me!</h2>
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
