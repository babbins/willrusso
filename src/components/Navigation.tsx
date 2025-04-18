import Link from "next/link";
import { useRouter } from "next/router";
import Hamburger from "../assets/hamburger.svg";
import NoSSR from "react-no-ssr";
import Close from "../assets/close.svg";
import { useMediaQuery } from "../lib/use-media-query";
import { useState, useEffect } from "react";

export default function Navigation() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const [_, forceRender] = useState(null);
  const [isLargeViewport, isServer] = useMediaQuery(769);

  useEffect(() => {
    forceRender(Math.random());
  }, []);

  return (
    <>
      <div className={"nav-content"}>
        <Link legacyBehavior href="/">
          <a id="name">
            <h1>Will Russo</h1>
          </a>
        </Link>
        {/* <NoSSR> */}
        {/*   {isLargeViewport ? null : isMenuOpen ? ( */}
        {/*     <div className="menu"> */}
        {/*       <Close */}
        {/*         fill="#032746" */}
        {/*         width={30} */}
        {/*         height={30} */}
        {/*         onClick={() => setIsMenuOpen(false)} */}
        {/*       /> */}
        {/*     </div> */}
        {/*   ) : ( */}
        {/*     <div className="menu"> */}
        {/*       <Hamburger */}
        {/*         width={30} */}
        {/*         height={30} */}
        {/*         fill="#032746" */}
        {/*         onClick={() => setIsMenuOpen(true)} */}
        {/*       /> */}
        {/*     </div> */}
        {/*   )} */}
        {/* </NoSSR> */}
        <ul className={isMenuOpen ? "is-open-mobile" : undefined}>
          <li>
            <Link legacyBehavior href="/work">
              <a
                className={
                  router.pathname.startsWith("/work") ? "active" : null
                }
              >
                Work
              </a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/contact">
              <a
                className={
                  router.pathname.startsWith("/contact") ? "active" : null
                }
              >
                Contact
              </a>
            </Link>
          </li>
        </ul>
        <style jsx>{`
          #name:hover {
            transform: none;
          }
          a {
            color: #032746;
          }
          h1 {
            color: #032746;
            font-size: 1.5rem;
            text-transform: uppercase;
            margin: 0;
          }

          .nav-content {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: baseline;
          }

          .menu {
            margin: 0.5rem 0;
          }

          ul {
            gap: 10px;
            justify-content: space-around;
            flex-direction: row;
            max-height: none;
            list-style: none;
            display: flex;
            padding: 0;
          }

          li {
            font-weight: bold;
            font-size: 1rem;
            text-transform: uppercase;
            font-family: "Tenor Sans", sans-serif;
            position: relative;
            transition: all 0.3s ease;
          }

          @media (min-width: 769px) {
            h1 {
              font-size: 1.75em;
            }
            ul {
              gap: 20px;
              justify-content: space-around;
              flex-direction: row;
              max-height: none;
              display: flex;
            }
            li {
              font-size: 1rem;
            }
          }
        `}</style>
      </div>
    </>
  );
}
