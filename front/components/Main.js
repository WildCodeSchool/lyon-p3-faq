import React from "react";
import styles from "../styles/Main.module.css";
export default function Main() {
  return (
    <body className={styles.body}>
      <main className={styles.main}>
        <div className={styles.wrapper}>
          <h2>Question récentes</h2>
          <div className={styles.question}>
            <p className={styles.p}>
              Lorstrong ipsum dolor sit amet, consectetur adipiscing elit.
              Mauris a fringilla odio, sed venenatis sapien. Aliquam vehicula
              accumsan odio, a tstrongpor justo egestas sit amet. Nullam sit
              amet mauris tincidunt, pharetra dolor quis, euismod mauris.
              Phasellus venenatis nibh lacus, ut euismod dui aliquam vitae. Duis
              tstrongpor quam at consequat lacinia ?
            </p>
            <span>
              <p>
                <strong>Jules Faber Castell</strong> a répondu
              </p>
              <button className={styles.RMbutton}> Lire la réponse</button>
            </span>
          </div>

          <div className={styles.question}>
            <p className={styles.p}>
              LDuis at tristique lorem, consequat lacinia arcu. Phasellus mollis
              orci ac eleifend gravida. Donec vestibulum nisi congue, egestas
              massa non, molestie nulla. Integer ac sodales justo. In euismod
              consectetur tellus vel congue. Sed nisl nunc, fringilla nec est a,
              rhoncus congue quam. Maecenas porta quam ligula, non tempus est
              accumsan at. Quisque malesuada lorem et magna commodo, vel dictum
              diam faucibus. [...]
            </p>
            <span>
              <p>
                <strong>Jules Faber Castell</strong> à répondu
              </p>
              <button className={styles.RMbutton}> Lire la réponse</button>
            </span>
          </div>

          <div className={styles.question}>
            <p className={styles.p}>
              Lorstrong ipsum dolor sit amet, consectetur adipiscing elit.
              Mauris a fringilla odio, sed venenatis sapien. Aliquam vehicula
              accumsan odio, a tstrongpor justo egestas sit amet. Nullam sit
              amet mauris tincidunt, pharetra dolor quis, euismod mauris.
              Phasellus venenatis nibh lacus, ut euismod dui aliquam vitae. Duis
              tstrongpor quam at consequat lacinia ? 
            </p>
            <span>
              <p>
                <strong>Jules Faber Castell</strong> à répondu
              </p>
              <button className={styles.RMbutton}> Lire la réponse</button>
            </span>
          </div>

          <div className={styles.question}>
            <p className={styles.p}>
			LDuis at tristique lorem, consequat lacinia arcu. Phasellus mollis
              orci ac eleifend gravida. Donec vestibulum nisi congue, egestas
              massa non, molestie nulla. Integer ac sodales justo. In euismod
              consectetur tellus vel congue. Sed nisl nunc, fringilla nec est a,
              rhoncus congue quam. Maecenas porta quam ligula, non tempus est
              accumsan at. Quisque malesuada lorem et magna commodo, vel dictum
              diam faucibus. [...]
            </p>
            <span>
              <p>
                <strong>Jules Faber Castell</strong> à répondu
              </p>
              <button className={styles.RMbutton}> Lire la réponse</button>
            </span>
          </div>
        </div>
      </main>
    </body>
  );
}
