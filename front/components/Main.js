import React, { useEffect, useState } from "react";
import styles from "../styles/Main.module.css";
import Link from "next/link";
import Error from "./Error";


export default function Main(props, search) {

  const [questions, setQuestions] = useState({});
  
  useEffect(() => {
    setQuestions(props.questions.users);
  }, []);


//   console.log(questions.map(i=> [i.titre, i.id]));


//   console.log(myTable.filter(i=>i[0].includes("CA")));


// let myTable = questions.map(i=> [i.titre, i.id]);

// let myTableB = myTable.filter(i=>i[0].includes("CA"));
//  console.log(myTableB);
 
  return (
    <>
      <section className={styles.section}>
        <main className={styles.main}>
          <h2 className={styles.texth2}>Questions récentes</h2>
          <div className={styles.wrapper}>
            {props.questions.error && <Error />}
            {!props.questions.error && props.questions.users && (
              <>
                {Object.entries(questions).map(([key]) => {
                  return (
                    <div key={key} className={styles.question}>
                      <h3>{questions[key].titre}</h3>
                      <p className={styles.p}>{questions[key].contenu}</p>
                      <div className={styles.wrapperAuthor}>
                        <span>
                          <p>
                            <strong>{questions[key].created_by}</strong> à
                            répondu
                          </p>
                        </span>
                        <span>
                          <Link href={"/question-" + questions[key].id}>
                            <a className={styles.RMbutton}>Lire la réponse</a>
                          </Link>
                        </span>
                      </div>
                    </div>
                  );
                })}
              </>
            )}
          </div>
        </main>
      </section>
    </>
  );
}
