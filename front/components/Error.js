import React from "react";
import styles from "../styles/Error.module.css";

export default function Error() {
  return (
    <div className={styles.div}>
      <img className={styles.image} src="/teddy.jpg" height="200" />
      <p className={styles.text}>Quelque chose à déconné fo kon répare</p>
    </div>
  );
}
