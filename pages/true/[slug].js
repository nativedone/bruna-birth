import { useState, useEffect } from "react";

import styles from "../../styles/True.module.css";
import { useRouter } from "next/router";

import { RoughNotation } from "react-rough-notation";

import Link from "next/link";

import { data } from "../../data";

import { SEO } from "../../components/seo";

export default function Home() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);
  const router = useRouter();
  const { slug } = router.query;
  const content = data[slug];

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
