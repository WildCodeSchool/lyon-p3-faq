import React, { useEffect, useState, useRef } from "react";
import styles from "../styles/Main.module.css";
import Link from "next/link";
import Error from "./Error";
import Header from "./Header";
import SearchBar from "./SearchBar";
export default function Main(props) {
  const [questions, setQuestions] = useState({});
  const [search, _setSearch] = useState('');
  const searchRef = useRef(search);
  function setSearch(ref) {
      searchRef.current = ref;
      _setSearch(ref);
  }
  useEffect(() => {
    if (search.length >= 4) {
      fetch(process.env.API_URL + '/search?s='+searchRef.current)
          .then(res => {
              console.log(res);
            if (res.status === 200) {
              return res.json()
            } else if (res.status === 404) {
              console.log('no results');
                setQuestions([]);
            } else {
                setQuestions([]);
            }
          })
          .then(results => {
              let q = results.length > 0 ? results : props.questions.users;
              setQuestions(q);
          })
          .catch((err) => {
            console.log('Error 500');
            console.log(err);
          })
    } else {
        setQuestions(props.questions.users);
    }
  }, [search]);

  useEffect(() => {
    setQuestions(props.questions.users);
  }, []);
  return (
    <>
      <section className={styles.section}>
        <main className={styles.main}>
          <SearchBar setSearch={setSearch} />
          <h2 className={styles.texth2}>Questions récentes</h2>
          <div className={styles.wrapper}>
            {props.questions.error && <Error />}
            {!props.questions.error && props.questions.users && (
              <>
                {questions.length > 0 && Object.entries(questions).map(([key]) =>
                    <div key={key} className={styles.question}>
                      <h3>
                        <strong>{questions[key].titre}</strong>
                      </h3>
                      <p className={styles.p}>{questions[key].contenu}</p>
                      <div className={styles.bottomwrap}>
                        <div className={styles.wrapperhelp}>
                          <span>
                            Cette question à aidé{" "}
                            <strong>{questions[key].voteup}</strong> personnes
                          </span>
                        </div>
                        <div className={styles.wrapperAuthor}>
                          <span>
                            <p className={styles.authorname}>
                              <strong>{questions[key].replyer}</strong> à
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
                    </div>
                )}
              </>
            )}
          </div>
        </main>
      </section>
    </>
  );
}
