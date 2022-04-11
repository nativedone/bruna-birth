import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/True.module.css";
import { useRouter } from "next/router";

import Link from "next/link";

import { data } from "../../data";

import { SEO } from "../../components/seo";

export default function Home() {
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
          title={`Bruna is {content.title?.toLowerCase()} by God`}
          description={`Bruna is {content.title?.toLowerCase()}`}
        />

        <main className={styles.main}>
          <h1 className={styles.title}>
            Bruna is <span>{content.title?.toLowerCase()}</span> by God
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
              <p>{content.verse.reference} &#8599;&#65039;</p>
            </a>
          </div>

          <Link href="/">
            <a className={styles.backHome}>&#11013; Back home</a>
          </Link>
        </main>
      </div>
    </>
  );
}
