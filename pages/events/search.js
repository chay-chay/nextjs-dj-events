// import Link from "next/link";
// import Head from "next/head";
import Layout from "@/components/Layout";
import EventItem from '@/components/EventItem'
import { API_URL } from "@/config/index";

export default function searchPage({events}) {
  console.log(events);

  return (
    <Layout>
      <h1>Events</h1>
      {events.length === 0 && <h3>No events to show</h3>}

      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}
      
    </Layout>
  );
}

export async function getServerSideProps({query: term}) {
  const res = await fetch(`${API_URL}/api/events?name_contains=${term}`);
    // we want to be able to set routes when we search = http://localhost:3000/events/search?term=manny
  const events = await res.json();

  // console.log(events)
  // if we do console.log here, it's going to show data in terminal here not on client side (localhost)

  return {
    props: { events } // no ned revalidate because we don't use static
  };
}
