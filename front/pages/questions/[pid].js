import Head from "next/head";
import Navbar from "../../components/Navbar";
import Answer from "../../components/Answer";
import { useRouter } from "next/router";
const Fetch = require("../../utils/callAPI");

export default function Question({ data }) {
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
      <Navbar />
      <Answer questionAnswered={data} />
    </>
  );
}

export async function getServerSideProps({ params }) {
  const data = await Fetch.fetchData(
    `http://localhost:3000/front/answered/?id=${params.pid}`
  );
  return { props: { data } };
}
