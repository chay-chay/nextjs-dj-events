import { FaPencilAlt, FaTimes } from 'react-icons/fa'
import { useRouter } from "next/router";
import Link from 'next/link'
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import styles from "@/styles/Event.module.css";
import Image from 'next/image'

export default function EventPage({ evt }) {
  // const router = useRouter()
  const deleteEvent = e => {
    console.log('Delete!')
  }
  return (
    <Layout>
      <div className={styles.event}></div>
      <div className={styles.controls}></div>
      <Link href={`/events/edit/${evt.id}`}>
        <a>
          <FaPencilAlt /> Edit Event
        </a>
      </Link>
      <a href='#' className={styles.delete}
        onClick={deleteEvent} > Delete Event </a>
      
      <span>
        {evt.date} at {evt.time}</span>
      {evt.image && (
        <div className={styles.image}>
          <Image src={evt.image} width={960} height={600} />
        </div>
      )}
      
      <h3>Performers: </h3>
      <p>{evt.performers}</p>
      <h3>Description:</h3>
      <p>{ evt.description }</p>
      <h3>Venue:  {evt.venue}</h3>
      <p>{evt.address}</p>
      
      <Link href='/events'>
        <a className={styles.back}> Go Back </a>
      </Link>
      {/* <h1>{evt.name}</h1> */}

      {/* <h3>{router.query.slug}</h3>
    <button onClick={() => router.push('/')}>Click</button> */}
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();
  console.log(events);
  const paths = events.map((evt) => ({
    params: { slug: evt.slug },
  }));
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params: { slug } }) {
  console.log(slug);
  const res = await fetch(`${API_URL}/api/events/${slug}`);
  const events = await res.json();

  return {
    props: {
      evt: events[0],
    },
    revalidate: 1,
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
