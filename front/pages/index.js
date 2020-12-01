import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
const Fetch = require("../utils/callAPI");
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
      <Header displayButton={true} errorHandler={data} />
      <Main questions={data} />
      <Footer displayButton={true} errorHandler={data} />
      <ToastContainer />
    </>
  );
}

export async function getServerSideProps() {
  const data = await Fetch.fetchData("http://localhost:3000/front");
  return { props: { data } };
}
