// import Link from "next/link";
// import Head from "next/head";
import Layout from '../components/Layout'

export default function HomePage() {
  return (
    <Layout>
      <h1>Home</h1>
      {/* <Head>
        <title>DJ Events</title>
        <meta name='description' content='Welcome to DJ Events' />
      </Head> */}

      {/* <Link href="/about">About</Link> */}
      {/* we don't want <a></a> because we want everything happens on client side
      <a href='/about'>About</a> */}
    </Layout>
  );
}
