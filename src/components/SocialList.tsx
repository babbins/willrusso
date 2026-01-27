import React from "react";
import Bluesky from "../assets/bluesky.svg";
import Instagram from "../assets/instagram.svg";
import config from "../lib/config";

export function SocialList({}) {
  return (
    <div className="socialLinks">
      <a
        title="Instagram"
        href={`https://instagram.com/${config.instagram_account}`}
        target="_blank"
        rel="noopener"
      >
        <Instagram width={24} height={24} fill={"#39c3ba"} />
      </a>
      <a
        title="Bluesky"
        href={`https://bsky.app/profile/${config.bluesky_account}`}
        target="_blank"
        rel="noopener"
      >
        <Bluesky width={24} height={24} fill={"#39c3ba"} />
      </a>
      <style jsx>{`
        .socialLinks {
          display: flex;
          gap: 8px;
        }
        a,
        a:hover {
          transform: none;
        }
      `}</style>
    </div>
  );
}
