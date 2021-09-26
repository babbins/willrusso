import Link from "next/link";
import { useRouter } from "next/router";
import Burger from "./Burger";
import { useState } from "react";

export default function Navigation() {
  const router = useRouter();
  const [active, setActive] = useState(false);
  return (
    <>
      <Burger active={active} onClick={() => setActive(!active)} />
      <div className={"container " + (active ? "active" : "")}>
        <h1>Will Russo</h1>
        <ul>
          <li>
            <Link href="/">
              <a className={router.pathname === "/" ? "active" : null}>about</a>
            </Link>
          </li>
          <li>
            <Link href="/posts">
              <a
                className={
                  router.pathname.startsWith("/posts") ? "active" : null
                }
              >
                blog
              </a>
            </Link>
          </li>
        </ul>
        <style jsx>
          {`
            h1 {
              display: none;
              font-size: 25px;
              text-align: right; 
            }
            .container {
              width: 0;
              margin-right: 2rem;
            }
            ul {
              opacity: 0;
              width: 100%;
              height: 100vh;
              text-align: right;
              list-style: none;
              margin: 0;
              padding: 0;
              position: fixed;
              top: 0;
              background-color: #fff;
              display: flex;
              flex-direction: column;
              justify-content: center;
              z-index: 1;
              transform: translateY(100%);
              transition: opacity 200ms;
            }
            .active ul {
              opacity: 1;
              transform: translateY(0);
            }
            li {
              margin-bottom: 1rem;
              margin-right: 2rem;
              font-size: 2rem;
              padding: 0 0 0 1.5rem;
            }
            li:last-child {
              margin-bottom: 0;
            }
            .active {
              color: #222;
            }

            @media (min-width: 769px) {
              h1 {
                display: block;
              }
              .container {
                width: 10rem;
                display: block;
              }
              ul {
                opacity: 1;
                width: 10rem;
                top: auto;
                display: block;
                transform: translateY(0);
              }
              li {
                font-size: 1rem;
                padding: 0;
                margin-right: 0;
              }
            }
          `}
        </style>
      </div>
    </>
  );
}
