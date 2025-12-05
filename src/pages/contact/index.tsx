import React from "react";
import Layout from "../../components/Layout";
import { SocialList } from "../../components/SocialList";

export default function Contact() {
  return (
    <Layout>
      <div>
        <p style={{ display: "block" }}>
          Press releases: will (dot) russo (at) outlook (dot) com
          
          Everything else: iamwillrusso (at) gmail (dot) com
        </p>
        <SocialList />
      </div>
      <style jsx>{`
        div {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        p {
          margin-bottom: 4rem;
        }
      `}</style>
    </Layout>
  );
}
