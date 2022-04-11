import Head from "next/head";

export function SEO({
  title = "Happy birthday Bruna",
  description = "Celebrate Bruna's birthday with God",
  author = {
    name: "Jesus",
    twitter: "@nativedone",
  },
  image = {
    url: "https://res.cloudinary.com/godsmile/image/upload/v1649682530/shared.jpg",
    alt: "Banner for Brunas birth.'",
  },
  websiteUrl = "https://bruna-birth.vercel.app/",
  meta = [],
}) {
  const metaData = [
    {
      name: `description`,
      content: description,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: description,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      property: `og:url`,
      content: websiteUrl,
    },
    {
      property: `og:image`,
      content: image.url,
    },
    {
      property: `og:image:alt`,
      content: image.alt,
    },
    {
      property: `og:image:width`,
      content: `1200`,
    },
    {
      property: `og:image:height`,
      content: `630`,
    },
    {
      property: `author`,
      content: author.name,
    },
    {
      name: `twitter:card`,
      content: `summary_large_image`,
    },
    {
      name: `twitter:creator`,
      content: author.twitter,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:image`,
      content: image.url,
    },
    {
      name: `twitter:description`,
      content: description,
    },
  ].concat(meta);
  return (
    <Head>
      <title>{title}</title>
      {metaData.map((values, i) => (
        <meta key={i} {...values} />
      ))}

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ee0000" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" content="#000000" />
    </Head>
  );
}
