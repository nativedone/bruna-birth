import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";

import { RoughNotation } from "react-rough-notation";

import { data } from "../data";

import { SEO } from "../components/seo";

import dynamic from "next/dynamic";

export default function Home() {
  const [show, setShow] = useState(false);
  const [color, setColor] = useState("#c8094c");

  useEffect(() => {
    setShow(true);

    setTimeout(() => {
      setColor("white");
    }, 800);
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
            <span style={{ color, transition: "color 0.5s ease" }}>new</span>
          </RoughNotation>{" "}
          birth <div>Bruna &#127881;</div>
        </h1>

        <p className={styles.description}>
          Always remember what is{" "}
          <RoughNotation type="highlight" show={show} color="#c8094c">
            <code className={styles.code} style={{ color, transition: "color 0.5s ease" }}>
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
                    {item.title}
                  </h2>
                  <p>{item.teaser}</p>

                  <UnseenItem item={item} />
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
