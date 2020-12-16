import Head from "next/head";
import Header from "../components/Header";
import Answer from "../components/Answer";
import { useRouter } from "next/router";
const Fetch = require("../utils/callAPI");
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Question({ data, author }) {
  const router = useRouter();
  const { pid } = router.query;
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
      <Answer questionAnswered={data} asker={author} />
      <ToastContainer />
    </>
  );
}

export async function getServerSideProps({ params }) {
  const data = await Fetch.fetchData(
    process.env.API_URL + `/answered/?id=${params.pid.split("-")[1]}`
  );
  const author = await Fetch.fetchData(
    process.env.API_URL + `/id/?id=${params.pid.split("-")[1]}`
  );
  return { props: { data, author } };
}
