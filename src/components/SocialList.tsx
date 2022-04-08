import React from "react";
import Twitter from "../assets/twitter.svg";
import LinkedIn from "../assets/linkedin.svg";
import config from "../lib/config";

export function SocialList({}) {
  return (
    <div className="socialLinks">
      <a
        title="Twitter"
        href={`https://twitter.com/${config.twitter_account}`}
        target="_blank"
        rel="noopener"
      >
        <Twitter width={24} height={24} fill={"#39c3ba"} />
      </a>
      <style jsx>{`
        a,
        a:hover {
          transform: none;
        }
      `}</style>
    </div>
  );
}
