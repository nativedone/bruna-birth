import { useState, useEffect } from "react";

import styles from "../../styles/True.module.css";
import { useRouter } from "next/router";
import { useLocalStorage } from "react-use";

import { RoughNotation } from "react-rough-notation";

import Link from "next/link";

import { data } from "../../data";

import { SEO } from "../../components/seo";

export default function Details() {
  const [show, setShow] = useState(false);
  const [value, setValue] = useLocalStorage("bruna-seen-items-bird", {});

  const router = useRouter();
  const { slug } = router.query;
  const content = data[slug];

  useEffect(() => {
    setShow(true);

    if (!slug) {
      return;
    }

    const newValue = { ...value, [slug]: slug };

    setValue(newValue);
  }, [setValue, slug, value]);

  if (!content) {
    return null;
  }

  return (
    <>
      <div className={styles.container}>
        <SEO
          title={`Bruna is ${content.title?.toLowerCase()} by God`}
          description={content.title?.toLowerCase()}
        />

        <main className={styles.main}>
          <h1 className={styles.title}>
            Bruna is{" "}
            <RoughNotation type="highlight" show={show} color="#c8094c">
              <span style={{ color: show ? "white" : "black" }}>
                {content.title?.toLowerCase()}
              </span>
            </RoughNotation>{" "}
            by God
          </h1>

          <p className={styles.description}>{content.subtitle}</p>

          <div className={styles.grid}>
            <a
              href={content.verse.link}
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>{content.verse.content}</h2>
              <p>{content.verse.reference} &#x2197;</p>
            </a>
          </div>

          <Link href="/">
            <a className={styles.backHome}>&larr; Back home</a>
          </Link>
        </main>
      </div>
    </>
  );
}
