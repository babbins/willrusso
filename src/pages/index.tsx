import Layout from "../components/Layout";
import { GoogleAnalytics } from "@next/third-parties/google";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { SocialList } from "../components/SocialList";
import { useEffect, useState } from "react";
import { useMediaQuery } from "../lib/use-media-query";
import Link from "next/link";

export default function Index() {
  const [_, forceRender] = useState(null);
  const isLargeViewport = useMediaQuery(769);

  useEffect(() => {
    forceRender(Math.random());
  }, []);

  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className="container">
        <div className="main-content">
          <div className="pic-n-credit">
            <img src={"images/will-duck.jpg"} />
            <span id="credit">Photo credit: Andy Boehlen</span>
          </div>

          <div id="bio">
            <div>
              Will Russo is a New York-born, Chicago-based poet.
            </div>
            <div>
              He is the author of two chapbooks:{" "}
              <Link className="internal-link" href="/dreamsoak">
                <em>Dreamsoak</em>
              </Link>{" "}
              (Querencia Press, 2023) and{" "}
              <Link className="internal-link" href="/glass-manifesto">
                <em>Glass Manifesto</em>
              </Link>
              , winner of the 2023 Rick Campbell Chapbook Award by Anhinga
              Press.
            </div>
            <div>
              He graduated from Brooklyn Technical High School, received his BA
              from Emory University and his MFA from the School of the Art
              Institute of Chicago.
            </div>
            <div>
              He is poetry editor at <i>Great Lakes Review</i>, poetry
              reviews editor at <i>Another Chicago Magazine</i>, and drummer of The Cessna.
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .main-content {
          display: flex;
          align-items: center;
          flex-direction: column;
        }
        .pic-n-credit {
          width: 75%;
          justify-self: center;
        }
        img {
          object-fit: cover;
          width: 100%;
          display: block;
          border-radius: 8px;
        }

        #credit {
          display: block;
          margin-top: 0.5rem;
          font-size: 0.8rem;
        }

        #credit a:hover {
          transform: none;
        }

        #bio {
          margin-top: 1rem;
          line-height: 1.2;
          font-size: 1rem;
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

          .pic-n-credit {
            width: 100%;
            justify-self: unset;
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
          #credit {
            font-size: 0.9rem;
          }
        }
      `}</style>
      <GoogleAnalytics gaId="G-HQ6VGG77T9" />
    </Layout>
  );
}
