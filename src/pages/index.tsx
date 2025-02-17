/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>"sehyunchung.dev"</title>
        <meta name="description" content="sehyunchung.dev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen p-4 md:p-6 lg:p-8 font-sans bg-white text-black dark:bg-gray-800 dark:text-white">
        <main>
          <h1 className="text-xl">"sehyunchung.dev"</h1>
          <div className="h-8" />
          <article>
            <h2 className="text-lg">Hello, I'm...:</h2>
            <div className="h-4" />
            <ul className="flex flex-col gap-1 list-disc pl-4">
              <li>
                the father of the most 😍 dog in the universe{" "}
                <a
                  className="text-blue-500 underline"
                  href="https://instagram.com/chocho_paju"
                  target="_blank"
                  rel="noreferrer"
                >
                  [link]
                </a>
              </li>
              <li>
                a frontend developer{" "}
                <a
                  className="text-blue-500 underline"
                  href="https://github.com/sehyunchung"
                  target="_blank"
                  rel="noreferrer"
                >
                  [link]
                </a>
              </li>
              <li>
                a DJ/Producer/etc.{" "}
                <a
                  className="text-blue-500 underline"
                  href="https://soundcloud.com/cong_vu"
                  target="_blank"
                  rel="noreferrer"
                >
                  [link]
                </a>
              </li>
            </ul>
          </article>
        </main>
      </div>
    </>
  );
};

export default Home;
