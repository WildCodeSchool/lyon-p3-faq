import React, { useState } from "react";
import ReactDOM from "react-dom";
import styles from "../styles/Modal.module.css";
export default function Modal({ isShowing, hide }) {
  const [form, setForm] = useState({
    pseudo: null,
    titre: null,
    contenu: null,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/front", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ form }),
    })
      .then(function (response) {
        return response;
      })
      .then((res) =>
        res.status === 201 ? alert("Message envoyé") : alert("Problème")
      );
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
                  name="pseudo"
                  required
                  onChange={(e) => setForm({ ...form, pseudo: e.target.value })}
                />
              </div>
              <div>
                <input
                  placeholder="Votre question"
                  type="text"
                  name="title"
                  required
                  onChange={(e) => setForm({ ...form, titre: e.target.value })}
                />
              </div>
              <div>
                <textarea
                  name="contenu"
                  type="text"
                  placeholder="Explicitez votre question"
                  required
                  onChange={(e) =>
                    setForm({ ...form, contenu: e.target.value })
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
