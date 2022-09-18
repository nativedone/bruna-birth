import { useState, useEffect } from "react";

import styles from "../../styles/True.module.css";
import { useRouter } from "next/router";
import { usePersistedState } from "../../hooks/usePersistedState";

import { RoughNotation } from "react-rough-notation";

import Link from "next/link";

import { data } from "../../data";

import { SEO } from "../../components/seo";

import Script from "next/script";

export default function Details() {
  const [show, setShow] = useState(false);
  const [showBible, setShowBible] = useState(false);
  const [color, setColor] = useState("#c8094c");
  const [_, setValue] = usePersistedState();

  const router = useRouter();
  const { slug } = router.query;
  const content = data[slug];

  useEffect(() => {
    setShow(true);

    setTimeout(() => {
      setColor("white");
    }, 800);

    if (!slug) {
      return;
    }

    setValue(slug);
  }, [setValue, slug]);

  if (!content) {
    return null;
  }

  return (
    <>
      <SEO
        title={`Bruna is ${content.title?.toLowerCase()} by God`}
        description={content.title?.toLowerCase()}
      />

      <Script
        id={`GLOBALBIBLE-js${new Date()}`}
        src="https://bibles.org/static/widget/v2/widget.js"
        onLoad={() => {
          GLOBALBIBLE.init({
            url: "https://bibles.org",
            bible: "78a9f6124f344018-01",
          });
        }}
      />

      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Bruna is{" "}
            <RoughNotation type="highlight" show={show} color="#c8094c">
              <span style={{ color, transition: "color 0.5s ease" }}>
                {content.title?.toLowerCase()}
              </span>
            </RoughNotation>{" "}
            by God
          </h1>

          <p className={styles.description}>{content.subtitle}</p>

          <div className={styles.grid}>
            <a onClick={() => setShowBible(!showBible)} className={styles.card}>
              <h2>{content.verse.content}</h2>
              <p>{content.verse.reference}</p>
              <div className={styles.toggleFullChapter}>
                {!showBible ? "Reval" : "Hide"} full chapter{" "}
                {!showBible && <span>&#x2198;</span>}
              </div>
            </a>
         
            <div
              style={{ display: showBible ? "block" : "none" }}
              data-gb-widget="passage"
              data-passage={content.verse.link}
              className={styles.fullChapterPassage}
              key={content.verse.content}
            >
               <a onClick={() => setShowBible(!showBible)} className={styles.toggleFullChapter}>
                Hide full chapter
              </a>
            </div>
          </div>

          <Link href="/">
            <a className={styles.backHome}>&larr; Back home</a>
          </Link>
        </main>
      </div>
    </>
  );
}
