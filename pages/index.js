// import Link from "next/link";
// import Head from "next/head";
import Layout from '@/components/Layout'
import {API_URL} from '@/config/index'

export default function HomePage(events) {
  console.log(events) 
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

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`)
  const events = await res.json()

  // console.log(events)
  // if we do console.log here, it's going to show data in terminal here not on client side (localhost)
  
  return {
    props: { events },
    revalidate: 1 // if it doesn't find it, it will make the request again to find it 1 second delay when the data has changed
  }
}