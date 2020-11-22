import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import axios from 'axios'

const fetchData = async () => await axios.get('http://localhost:3000/front')
.then(res => ({
  error: false,
  users: res.data,
}))
.catch(() => ({
    error: true,
    users: null,
  }),
);

export default function Home({ data }) {

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
      <Main questions={data} />
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const data = await fetchData();

  return { props: { data } };
}
