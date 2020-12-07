import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../styles/Answer.module.css";
import Error from "./Error";
import useModal from "../utils/useModal";
import ReportModal from "./ReportModal";

export default function Answer(props) {
  const { isShowing, toggle } = useModal();
  const [QA, setQA] = useState({});
  useEffect(() => {
    props.questionAnswered.users != null
      ? setQA(props.questionAnswered.users.res[0])
      : setQA(props.questionAnswered.users);
  }, []);
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        {props.questionAnswered.error && <Error />}
        {!props.questionAnswered.error && props.questionAnswered.users && (
          <div className={styles.box}>
            <Link as="/" href="/">
                <button className={styles.buttonQuestion}>
                      <img
                        src="/leftarrowwhite.png"
                        height="25px"
                        width="25px"
                        alt="left white arrow"
                      />
                      <span>
                      Retour à la liste
                    </span>
                </button>
              </Link>
            <div className={styles.question}>
              <h2 className={styles.h2}>{QA.titre}</h2>
              <p className={styles.p}>{QA.contenu}</p>
              <span>
                <p className={styles.author}>{QA.asker}</p>
              </span>
            </div>
            <div className={styles.answer}>
              {QA.reponse}
              <p></p>
              <span className={styles.author}>
                <p>{QA.replyer}</p>
              </span>
              <button onClick={toggle} className={styles.report}>
                Signaler
              </button>
              <ReportModal
                question={props.questionAnswered.users.res[0].question_id}
                isShowing={isShowing}
                hide={toggle}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
