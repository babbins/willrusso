import Link from "next/link";
import { useRouter } from "next/router";

export default function Navigation() {
  const router = useRouter();
  return (
    <>
      <div className={"nav-content"}>
        <Link href="/">
          <a>
            <h1>Will Russo</h1>
          </a>
        </Link>
        <ul>
          <li>
            <Link href="/">
              <a className={router.pathname === "/" ? "active" : null}>About</a>
            </Link>
          </li>
          <li>
            <Link href="/work">
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
            <Link href="/contact">
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
          h1 {
            font-size: 1.5rem;
            color: #051e38;
            text-transform: uppercase;
            margin-bottom: 0;
          }
          .nav-content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          ul {
            padding: 0;
            list-style: none;
            display: flex;
            justify-content: space-around;
            gap: 10px;
          }

          li {
            font-weight: bold;
            font-size: 1rem;
            text-transform: uppercase;
            font-family: "Tenor Sans", sans-serif;
            position: relative;
            transition: all 0.3s ease;
          }
          li:hover {
            transform: translate(0px, -2px);
          }
          @media (min-width: 769px) {
            .nav-content {
              flex-direction: row;
              justify-content: space-between;
            }

            h1 {
              font-size: 1.75em;
            }
            ul {
              gap: 20px;
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
