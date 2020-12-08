import React, { useState } from "react";
import ReactDOM from "react-dom";
import styles from "../styles/Modal.module.css";
import { toast } from "react-toastify";
import Link from "next/link";
import * as FaIcons from "react-icons/fa";

export default function Modal({ isShowing, hide }) {
  const [form, setForm] = useState({
    pseudo: null,
    titre: null,
    contenu: null,
  });
  const notify = (msg) => toast(msg);
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
        res.status === 201 ? notify("Message envoyé") : notify("Problème")
      );
  };

  return isShowing
    ? ReactDOM.createPortal(
        <>
          <div className={styles.overlay} onClick={hide}></div>
          <div className={styles.modalPost}>

            <div className={styles.leftwrap}>
              <div className={styles.topwrap}>
              </div>
              <div className={styles.midwrap}>
                <span className={styles.bigtittle}>LES</span>
                <span className={styles.bigtittle}>FREELANCES</span>
                <span className={styles.bigtittle}>LYONNAIS</span>
                <span className={styles.spanslug}> Rejoignez la plus grande communauté lyonnaise de Freelances.</span>
                <span>Posez votre question, un(e) expert(e) de la communauté y répondra et vous serez notifié</span>
                <span>par mail lorsque la réponse sera en ligne.</span>
              </div>
              <div className={styles.botwrap}>
                <span> Retrouvez-nous sur : </span>
                <ul className={styles.socialicons}>
              <li><Link href="https://facebook.com"><div><FaIcons.FaFacebookF/></div></Link></li>
              <li><Link href="https://linkedin.com"><div><FaIcons.FaLinkedin/></div></Link></li>
              <li><Link href="https://discord.com"><div><FaIcons.FaDiscord/></div></Link></li>
              <li><Link href="https://github.com"><div><FaIcons.FaGithub/></div></Link></li>
            </ul>
              </div>

            </div>
            <div className={styles.rightwrap}>
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
          </div>
        </>,
        document.body
      )
    : null;
}
