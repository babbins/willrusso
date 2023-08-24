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
      <section className="two-up">
        <div className="left">
          <h1 className="title">Glass Manifesto</h1>
          <div className="summary">{hydrate(summary, { components })}</div>
        </div>
        <div className="img-container">
          <img
            alt="Glass Manifesto cover artwork"
            className="img"
            src={"images/glass-manifesto-cover.jpg"}
          />
        </div>
      </section>
      <section className="body">{hydrate(body, { components })}</section>
      <style jsx>{`
        .two-up {
          display: flex;
          flex-direction: row-reverse;
          gap: 20px;
          margin-bottom: 30px;
          width: 100%;
          justify-content: space-around;
          align-items: flex-start;
          flex-wrap: wrap;
        }
        .title {
          font-family: "Agency FB", sans-serif;
          text-transform: uppercase;
          text-align: center;
          font-size: 48px;
          margin-top: 0;
        }
        .left {
          flex: 1 1 400px;
          max-width: 500px;
          line-height: 1.4;
        }

        .img-container {
          max-width: 300px;
          flex: 1 1 250px;
        }

        @media (min-width: 769px) {
          .title {
            text-align: left;
            font-size: 64px;
          }
          .img-container {
            max-width: 400px;
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
  const body = await renderToString(getMarkdown("glass-manifesto-body.md"), {
    components,
  });
  const summary = await renderToString(
    getMarkdown("glass-manifesto-summary.md"),
    {
      components,
    }
  );
  return {
    props: {
      body,
      summary,
    },
  };
};
