import Link from "next/link";
import Head from "next/head";

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>DJ Events</title>
      </Head>
      {/* <Link href="/about">About</Link> */}
      {/* we don't want <a></a> because we want everything happens on client side
      <a href='/about'>About</a> */}
    </div>
  );
}
