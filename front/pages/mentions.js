import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Mention.module.css";
const Fetch = require("../utils/callAPI");

export default function Mentions({ data }) {
  return (
    <>
      <Header displayButton={true} errorHandler={data} />
      <div className={styles.div}>
        <p>Nothing to see here</p>
      </div>
      <Footer displayButton={true} errorHandler={data} />
    </>
  );
}

export async function getServerSideProps() {
  const data = await Fetch.fetchData("http://localhost:3000/front");
  return { props: { data } };
}
