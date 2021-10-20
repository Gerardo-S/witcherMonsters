import Head from "next/head";
import Link from "next/link";
import Layout from "../src/components/layout";

export default function About() {
  return (
    <Layout noHeroImg>
      <Head>
        <title>About</title>
      </Head>
      <main>
        <h1>About Page</h1>
        <h2>
          <Link href="/">
            <a>Back to Home Page</a>
          </Link>
        </h2>
      </main>
    </Layout>
  );
}
