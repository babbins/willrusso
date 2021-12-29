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
import { getWorkMarkdown } from "../../lib/work";
import Layout from "../../components/Layout";

const components = {
  InstagramEmbed,
  YouTube,
  TwitterTweetEmbed,
  a: ({ children, href }) => {
    return (
      <a href={href} target="_blank">
        {children}
      </a>
    );
  },
};

export default function Post({ content }: { content: MdxRemote.Source }) {
  return <Layout>{hydrate(content, { components })}</Layout>;
}

export const getStaticProps: GetStaticProps = async () => {
  const source = getWorkMarkdown();

  const content = await renderToString(source, { components });
  return {
    props: {
      content: content,
    },
  };
};
