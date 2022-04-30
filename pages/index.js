import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";

import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

import { data } from "../data";

import { SEO } from "../components/seo";

import { useLocalStorage } from "react-use";

import dynamic from "next/dynamic";

export default function Home() {
  const [show, setShow] = useState(false);
  const [seenItems] = useLocalStorage("bruna-seen-items-bird", {});

  useEffect(() => {
    setShow(true);
  }, []);

  const UnseenItem = dynamic(() => import("../components/unseen-item"), {
    ssr: false,
  });

  return (
    <div className={styles.container}>
      <SEO />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Happy{" "}
          <RoughNotation type="highlight" show={show} color="#c8094c">
            <span
              style={{ color: show ? "white" : "black" }}
            >
              new
            </span>
          </RoughNotation>{" "}
          birth <div>Bruna &#127881;</div>
        </h1>

        <p className={styles.description}>
          Always remember what is{" "}
          <RoughNotation type="highlight" show={show} color="#c8094c">
            <code
              className={styles.code}
              style={{ color: show ? "white" : "black" }}
            >
              true
            </code>
          </RoughNotation>{" "}
          about you:
        </p>

        <div className={styles.grid}>
          {Object.values(data)
            .filter((item) => !item.hide)
            .map((item) => (
              <Link key={item.slug} href={item.slug}>
                <a className={styles.card}>
                  <h2>
                    {item.title} <span>&rarr;</span>
                  </h2>
                  <p>{item.teaser}</p>
                  {shouldRenderUnseenBadge({ seenItems, item }) && (
                    <span style={{ position: "absolute", top: 10, right: 10 }}>
                      <span style={{ fontSize: 33, position: "relative" }}>
                        🐣
                        <UnseenItem />
                      </span>
                    </span>
                  )}
                </a>
              </Link>
            ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <Link href={data.assured.slug}>
          <a>
            <div className="highlight">
              Powered by <span>JESUS</span>
            </div>
            <br />
            <div>{data.assured.teaser} &rarr;</div>
          </a>
        </Link>
      </footer>
    </div>
  );
}

function shouldRenderUnseenBadge({ seenItems, item }) {
  const value = item.slug.split("/")[1];

  if (!seenItems) {
    return true;
  }

  return !Object.values(seenItems).includes(value);
}
