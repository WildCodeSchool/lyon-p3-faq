import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "../styles/Modal.module.css";
import { toast } from "react-toastify";

export default function Modal({ question, isShowing, hide }) {
  const [form, setForm] = useState({
    raison: null,
    id: question,
  });

  useEffect(() => {
    setForm({ ...form, id: question });
  }, []);

  const notify = (msg) => toast(msg);
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(process.env.API_URL+"/report", {
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
        res.status === 201
          ? notify("Message envoyé")
          : res.status === 403
          ? notify("Vous avez déjà signalé ce contenu")
          : notify("Problème")
      );
  };

  return isShowing
    ? ReactDOM.createPortal(
        <>
          <div className={styles.overlay} onClick={hide}></div>
          <div className={styles.modalPost}>
            <h3>Signaler</h3>
            <button type="button" onClick={hide}>
              <span>&times;</span>
            </button>
            <form onSubmit={handleSubmit}>
              <div>
                <select
                  required
                  onChange={(e) => setForm({ ...form, raison: e.target.value })}
                >
                  <option value="">Choisissez une raison ci-dessous</option>
                  <option value="insult">Contenu offensant</option>
                  <option value="Answer no longer available">
                    La réponse n'est plus d'actualité
                  </option>
                  <option value="Question no longer available">
                    La question n'est plus d'actualité
                  </option>
                </select>
              </div>
              <input id="submit" type="submit" value="Envoyer" />
            </form>
          </div>
        </>,
        document.body
      )
    : null;
}
