import { GetStaticProps, GetStaticPaths } from "next";
import renderToString from "next-mdx-remote/render-to-string";
import { MdxRemote } from "next-mdx-remote/types";
import hydrate from "next-mdx-remote/hydrate";
import matter from "gray-matter";
import fs from "fs";
import yaml from "js-yaml";
import { parseISO } from "date-fns";

import InstagramEmbed from "react-instagram-embed";
import YouTube from "react-youtube";
import { TwitterTweetEmbed } from "react-twitter-embed";
import { getMarkdown } from "../../lib/get-markdown";
import Layout from "../../components/Layout";
import localFont from "next/font/local";

const components = {
  InstagramEmbed,
  YouTube,
  TwitterTweetEmbed,
  a: ({ children, href }) => {
    return (
      <a href={href} target="_blank">
        {children}
        <style jsx>
          {`
            a:active,
            a:hover {
              transform: none;
            }
          `}
        </style>
      </a>
    );
  },
  img: ({ src, alt }) => {
    return (
      <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
        <img src={src} alt={alt} />
      </div>
    );
  },
};

export default function Post({
  body,
  summary,
}: {
  body: MdxRemote.Source;
  summary: MdxRemote.Source;
}) {
  return (
    <Layout>
      <section className="grid">
        <h1 className="title">Dreamsoak</h1>
        <div className="img-container">
          <img
            alt="Dreamsoak cover artwork"
            className="img"
            src={"images/dreamsoak-cover.jpg"}
          />
        </div>
        <div className="summary">{hydrate(summary, { components })}</div>
        <section className="body">{hydrate(body, { components })}</section>
      </section>
      <style jsx>{`
        .grid {
          display: grid;
          margin-bottom: 30px;
          width: 100%;
          grid-template-columns: 1fr;
          grid-column-gap: 32px;
          line-height: 1.4;
        }
        .grid > * {
          justify-self: center;
        }
        .title {
          font-family: "Ladi Weak";
          text-transform: uppercase;
          text-align: center;
          font-size: 48px;
          margin-top: 0;
          margin-bottom: 0;
        }

        .img-container {
          max-width: 300px;
          flex: 1 1 250px;
        }
        img {
          border-radius: 8px;
        }
        .summary {
          align-self: start;
        }
        @media (min-width: 769px) {
          .grid {
            grid-template-columns: 1fr 400px;
          }
          .grid > * {
            justify-self: unset;
          }
          .title {
            text-align: left;
            font-size: 56px;
            margin-bottom: 16px;
          }
          .img-container {
            max-width: 400px;
            grid-column: 2;
            grid-row: span 2;
            justify-self: end;
          }
          .body {
            grid-column: span 2;
          }
        }

        .img {
          width: 100%;
        }
        .body {
          margin-bottom: 30px;
        }
      `}</style>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const body = await renderToString(getMarkdown("dreamsoak-body.md"), {
    components,
  });
  const summary = await renderToString(getMarkdown("dreamsoak-summary.md"), {
    components,
  });
  return {
    props: {
      body,
      summary,
    },
  };
};
