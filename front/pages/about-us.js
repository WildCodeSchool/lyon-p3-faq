import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
const Fetch = require("../utils/callAPI");
import styles from "../styles/Mention.module.css";
export default function Mentions({ data }) {
  return (
    <>
      <Header displayButton={false} errorHandler={data} />
      <div className={styles.div}>
        <p>Nothing to see here</p>
      </div>
      <Footer displayButton={false} errorHandler={data} />
    </>
  );
}

export async function getServerSideProps() {
  const data = await Fetch.fetchData("http://localhost:3000/front");
  return { props: { data } };
}
