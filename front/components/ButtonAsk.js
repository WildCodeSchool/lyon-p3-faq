import React from "react";
import ReactDOM from "react-dom";
import styles from "../styles/Modal.module.css";
export default function Modal({ isShowing, hide }) {
  return isShowing
    ? ReactDOM.createPortal(
        <>
          <div className={styles.overlay} onClick={hide}></div>
          <div className={styles.modalPost}>
            <h3>Poser une question</h3>
            <button type="button" onClick={hide}>
              <span>&times;</span>
            </button>
            <form>
              <div>
                <input
                  placeholder="Votre pseudo"
                  type="text"
                  name="name"
                  required
                />
              </div>
              <div>
                <input
                  placeholder="Votre adresse mail"
                  type="email"
                  name="email"
                  required
                />
              </div>
              <div>
                <input
                  placeholder="Votre question"
                  type="text"
                  name="questionTitle"
                  required
                />
              </div>
              <div>
                <textarea
                  name="comment"
                  placeholder="Explicitez votre question"
                  required
                ></textarea>
              </div>
              <input id="submit" type="submit" value="Envoyer" />
            </form>
          </div>
        </>,
        document.body
      )
    : null;
}
