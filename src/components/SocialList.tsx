import React from "react";
import Bluesky from "../assets/bluesky.svg";
import Instagram from "../assets/instagram.svg";
import config from "../lib/config";

export function SocialList({}) {
  return (
    <div className="socialLinks">
      <a
        title="Bluesky"
        href={`https://bsky.app/profile/${config.bluesky_account}`}
        target="_blank"
        rel="noopener"
      >
        <Bluesky width={24} height={24} fill={"#39c3ba"} />
      </a>
      <a
        title="Instagram"
        href={config.instagram_url}
        target="_blank"
        rel="noopener"
      >
        <Instagram width={24} height={24} fill={"#E4405F"} />
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
