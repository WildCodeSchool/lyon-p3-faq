import Head from 'next/head'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer';



export default function Home() {
  return (
    <div>
      <Head>
        <title>La FAQ</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <Header/>
      <Main/>
      <Footer/>
      
    </div>
  )
}