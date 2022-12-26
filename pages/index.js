import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h1 className="text-4xl font-bold my-5">
        Join <Link href="/posts/first-post">CASA!</Link>
      </h1>{" "}
      {/* Add this <section> tag below the existing <section> tag */}
      <p>
        Exploring AI, AR, Space, Web3, Movies and Art 🚀<br></br>
        Founder & CEO of @joinmirrorworld @mirror_matrix 🪞<br></br>
        Ex-product @bytedancetalk 🤖<br></br>
        Avid fan of Akira, Future is Primitive 🏍<br></br>
      </p>
      <p>
        This is an experiment - Find out more about me on:{" "}
        <a href="https://twitter.com/Chrizhuu">Twitter</a>.
      </p>
      <section className="text-xl pt-[1px]">
        <h2 className="text-2xl font-bold leading-[1.4] my-4">Blog</h2>
        <ul className="list-none p-0 m-0">
          {allPostsData.map(({ id, date, title }) => (
            <li className="mb-5" key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className="text-gray-400">
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
