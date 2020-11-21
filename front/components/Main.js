import React, { useEffect, useState } from "react";
import styles from "../styles/Main.module.css";
import Link from "next/link";

export default function Main(props) {
  const [test, setTest] = useState({});

  useEffect(() => {
    setTest(props.questions);
  }, []);

  return (
    <>
      <section className={styles.section}>
        <main className={styles.main}>
          <h2 className={styles.texth2}>Questions récentes</h2>
          <div className={styles.wrapper}>
            {Object.entries(test).map(([key]) => {
              return (
                <div className={styles.question}>
                  <h3>{test[key]["titre"]}</h3>
                  <p className={styles.p}>{test[key]["contenu"]}</p>
                  <div className={styles.wrapperAuthor}>
                    <span>
                      <p>
                        <strong>Julien Bord</strong> à répondu
                      </p>
                    </span>
                    <span>
                      <Link as="answer" href="/question">
                        <a className={styles.RMbutton}>Lire la réponse</a>
                      </Link>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      </section>
    </>
  );
}
