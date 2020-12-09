import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
const Fetch = require("../utils/callAPI");
import styles from "../styles/AboutUs.module.css";
import * as FaIcons from "react-icons/fa";

export default function Aboutus({ data }) {
  return (
    <>
      <Header displayButton={true} errorHandler={data} />
      <section className={styles.teamintro}>

        <div className={styles.leftwrapteam}>

          <div className={styles.innerleftupwrap}>
          <span> Meet the Team</span>
          </div>
          <div className={styles.innerleftmidwrap}>
          <span> FAQ </span>
          <span> Project </span>
          </div>
          <div className={styles.innerleftbotwrap}>
          <span> 2020</span>
          </div>

        </div>

        <div className={styles.rightwrapteam}>

          <div className={styles.card}>
            <img className={styles.imgcard} src="/eduardoFlores.jpg" alt="Eduardo Flores"  height="150" width="150"/>
            <div className={styles.description}>
              <h2>Eduardo Flores</h2>
              <h4> Moderator</h4>
            </div>
            <span className={styles.bio}>
              Eduardo Flores is a 35-year-old entrepreneur who enjoys
              reading, football and baking. He is creative and entertaining,
              but can also be very rude and a bit sneaky.
            </span>

            <ul className={styles.social}>
              <li><Link href="https://facebook.com"><div><FaIcons.FaFacebookF/></div></Link></li>
              <li><Link href="https://github.com"><div><FaIcons.FaGithub/></div></Link></li>
              <li><Link href="https://linkedin.com"><div><FaIcons.FaLinkedin/></div></Link></li>
              <li><Link href="https://skype.com"><div><FaIcons.FaSkype/></div></Link></li>
            </ul>
          </div>

          <div className={styles.card}>
            <img className={styles.imgcard} src="/eduardoFlores.jpg" alt="Eduardo Flores"  height="150" width="150"/>
            <div className={styles.description}>
              <h2>Eduardo Flores</h2>
              <h4> Moderator</h4>
            </div>
            <span className={styles.bio}>
              Eduardo Flores is a 35-year-old entrepreneur who enjoys
              reading, football and baking. He is creative and entertaining,
              but can also be very rude and a bit sneaky.
            </span>
            
            <ul className={styles.social}>
              <li><FaIcons.FaFacebookF/></li>
              <li><FaIcons.FaGithub/></li>
              <li><FaIcons.FaLinkedin/></li>
              <li><FaIcons.FaSkype/></li>
            </ul>
          </div>

          <div className={styles.card}>
            <img className={styles.imgcard} src="/eduardoFlores.jpg" alt="Eduardo Flores"  height="150" width="150"/>
            <div className={styles.description}>
              <h2>Eduardo Flores</h2>
              <h4> Moderator</h4>
            </div>
            <span className={styles.bio}>
              Eduardo Flores is a 35-year-old entrepreneur who enjoys
              reading, football and baking. He is creative and entertaining,
              but can also be very rude and a bit sneaky.
            </span>
            
            <ul className={styles.social}>
              <li><FaIcons.FaFacebookF/></li>
              <li><FaIcons.FaGithub/></li>
              <li><FaIcons.FaLinkedin/></li>
              <li><FaIcons.FaSkype/></li>
            </ul>
          </div>

          <div className={styles.card}>
            <img className={styles.imgcard} src="/eduardoFlores.jpg" alt="Eduardo Flores"  height="150" width="150"/>
            <div className={styles.description}>
              <h2>Eduardo Flores</h2>
              <h4> Moderator</h4>
            </div>
            <span className={styles.bio}>
              Eduardo Flores is a 35-year-old entrepreneur who enjoys
              reading, football and baking. He is creative and entertaining,
              but can also be very rude and a bit sneaky.
            </span>
            
            <ul className={styles.social}>
              <li><FaIcons.FaFacebookF/></li>
              <li><FaIcons.FaGithub/></li>
              <li><FaIcons.FaLinkedin/></li>
              <li><FaIcons.FaSkype/></li>
            </ul>
          </div>

          <div className={styles.card}>
            <img className={styles.imgcard} src="/eduardoFlores.jpg" alt="Eduardo Flores"  height="150" width="150"/>
            <div className={styles.description}>
              <h2>Eduardo Flores</h2>
              <h4> Moderator</h4>
            </div>
            <span className={styles.bio}>
              Eduardo Flores is a 35-year-old entrepreneur who enjoys
              reading, football and baking. He is creative and entertaining,
              but can also be very rude and a bit sneaky.
            </span>
            
            <ul className={styles.social}>
              <li><FaIcons.FaFacebookF/></li>
              <li><FaIcons.FaGithub/></li>
              <li><FaIcons.FaLinkedin/></li>
              <li><FaIcons.FaSkype/></li>
            </ul>
          </div>

          <div className={styles.card}>
            <img className={styles.imgcard} src="/eduardoFlores.jpg" alt="Eduardo Flores"  height="150" width="150"/>
            <div className={styles.description}>
              <h2>Eduardo Flores</h2>
              <h4> Moderator</h4>
            </div>
            <span className={styles.bio}>
              Eduardo Flores is a 35-year-old entrepreneur who enjoys
              reading, football and baking. He is creative and entertaining,
              but can also be very rude and a bit sneaky.
            </span>
            
            <ul className={styles.social}>
              <li><FaIcons.FaFacebookF/></li>
              <li><FaIcons.FaGithub/></li>
              <li><FaIcons.FaLinkedin/></li>
              <li><FaIcons.FaSkype/></li>
            </ul>
          </div>

        </div>

      </section>
      <Footer displayButton={true} errorHandler={data} />
    </>
  );
}

export async function getServerSideProps() {
  const data = await Fetch.fetchData("http://localhost:3000/front");
  return { props: { data } };
}
