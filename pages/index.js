import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

import { data } from "../data";

import { SEO } from '../components/seo'

export default function Home() {
  return (
    <div className={styles.container}>
      <SEO />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Happy birthday <div>Bruna &#127881;</div>
        </h1>

        <p className={styles.description}>
          Always remember what is <code className={styles.code}>true</code>{" "}
          about you:
        </p>

        <div className={styles.grid}>
          {Object.values(data)
            .filter((item) => !item.hide)
            .map((item) => (
              <Link key={item.slug} href={item.slug}>
                <a className={styles.card}>
                  <h2>{item.title}&rarr;</h2>
                  <p>{item.teaser}</p>
                </a>
              </Link>
            ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <Link href={data.unchanged.slug}>
          <a>
            <div className="highlight">Powered by <span>JESUS</span></div>
            <br />
            <div>
              {data.unchanged.teaser} &rarr;
            </div>
          </a>
        </Link>
      </footer>
    </div>
  );
}
