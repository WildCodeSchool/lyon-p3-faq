import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../styles/Answer.module.css";
import Error from "./Error";

export default function Answer(props) {
  const [QA, setQA] = useState({});
  useEffect(() => {
    props.questionAnswered.users != null
      ? setQA(props.questionAnswered.users["res"][0])
      : setQA(props.questionAnswered.users);
  }, []);
  console.log(props.questionAnswered.users);
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        {props.questionAnswered.error && <Error />}
        {!props.questionAnswered.error && props.questionAnswered.users && (
          <div className={styles.box}>
            <div className={styles.question}>
              <Link as="/" href="/">
                <button className={styles.buttonQuestion}>
                  <a>
                    <span>
                      <img
                        src="/leftarrowwhite.png"
                        height="25px"
                        width="25x"
                        alt="left white arrow"
                      />
                    </span>
                  </a>
                </button>
              </Link>
              <h2 className={styles.h2}>{QA["titre"]}</h2>
              <p className={styles.p}>{QA["contenu"]}</p>
              <span>
                <p className={styles.author}> {QA["asker"]}</p>
              </span>
            </div>
            <div className={styles.answer}>
              {QA["reponse"]}
              <p></p>
              <span className={styles.author}>
                <p> {QA["replyer"]}</p>
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
