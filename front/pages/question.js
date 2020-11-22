import Head from "next/head";
import Header from "../components/Header";
import Answer from "../components/Answer";

export default function Question() {
  return (
    <>
      <Head>
        <title>La FAQ</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <Header />
      <Answer />
    </>
  );
}
