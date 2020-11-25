import React, { useState } from "react";
import ReactDOM from "react-dom";
import styles from "../styles/Modal.module.css";
export default function Modal({ isShowing, hide }) {
  const [form, setForm] = useState({
    pseudo: null,
    mail: null,
    titre: null,
    question: null,
  });

  const handleSubmit = (e) => {
    fetch("http://localhost:3000/front", {
      method: "POST",
      body: form,
    }).then(function (response) {
      console.log(response);
      return response;
    });
    e.preventDefault();
  };

  return isShowing
    ? ReactDOM.createPortal(
        <>
          <div className={styles.overlay} onClick={hide}></div>
          <div className={styles.modalPost}>
            <h3>Poser une question</h3>
            <button type="button" onClick={hide}>
              <span>&times;</span>
            </button>
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  placeholder="Votre pseudo"
                  type="text"
                  name="name"
                  required
                  onChange={(e) => setForm({ ...form, pseudo: e.target.value })}
                />
              </div>
              <div>
                <input
                  placeholder="Votre adresse mail"
                  type="email"
                  name="email"
                  required
                  onChange={(e) => setForm({ ...form, mail: e.target.value })}
                />
              </div>
              <div>
                <input
                  placeholder="Votre question"
                  type="text"
                  name="questionTitle"
                  required
                  onChange={(e) => setForm({ ...form, titre: e.target.value })}
                />
              </div>
              <div>
                <textarea
                  name="comment"
                  type="text"
                  placeholder="Explicitez votre question"
                  required
                  onChange={(e) =>
                    setForm({ ...form, question: e.target.value })
                  }
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
