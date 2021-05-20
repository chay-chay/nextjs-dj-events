import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";

export default function EventPage({ evt }) {
  // const router = useRouter()

  return (
    <Layout>
      <h1>{evt.name}</h1>

      {/* <h3>{router.query.slug}</h3>
    <button onClick={() => router.push('/')}>Click</button> */}
    </Layout>
  );
}

export async function getStaticPaths() {
    const res = await fetch(`${API_URL}/api/events`)
    const events = await res.json()
    console.log(events)
    const paths = events.map(evt => ({
        params: {slug: evt.slug }
    }))
  return {
      paths,
      fallback: true
  };
}


export async function getStaticProps({  params: { slug }} ) {
  console.log(slug);
  const res = await fetch(`${API_URL}/api/events/${slug}`);
    const events = await res.json();
 

  return {
    props: {
      evt: events[0],
      },
      revalidate: 1
  };
}

// export async function getServerSslugeProps({ query: { slug } }) {
//     console.log(slug)
//     const res = await fetch(`${API_URL}/api/events/${slug}`)
//     const events = await res.json()

//     return {
//         props: {
//             evt: events[0]
//         }
//     }

// }
