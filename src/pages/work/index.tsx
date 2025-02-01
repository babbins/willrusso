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
import Link from "next/link";

const components = {
  InstagramEmbed,
  YouTube,
  TwitterTweetEmbed,
  a: ({ children, href }) => {
    const isInternal = href.startsWith("/");
    console.log({ href, isInternal });
    if (isInternal) {
      return (
        <Link className="internal-link" href={href}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} target="_blank">
        {children}
      </a>
    );
  },
};

export default function Post({ content }: { content: MdxRemote.Source }) {
  return (
    <Layout>
      <div className="container">{hydrate(content, { components })}</div>
      <style jsx>{`
        * {
          line-height: 1.4;
        }
      `}</style>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const source = getMarkdown("work.md");

  const content = await renderToString(source, { components });
  return {
    props: {
      content: content,
    },
  };
};
