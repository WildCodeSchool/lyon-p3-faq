import React from "react";
import styles from "../styles/Error.module.css";

export default function Error() {
  return (
    <div className={styles.div}>
      <h2 className={styles.title}>Erreur 404</h2>
      <img className={styles.image} src="/teddy.jpg" height="200" />
      <p className={styles.text}>Une erreur interne est survenue</p>
    </div>
  );
}
