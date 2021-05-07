import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/about">About</Link>
      {/* we don't want <a></a> because we want everything happens on client side
      <a href='/about'>About</a> */}
    </div>
  );
}
