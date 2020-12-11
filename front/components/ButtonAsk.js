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
              <div className={styles.topwrap}></div>
              <div className={styles.midwrap}>
                <span className={styles.bigtittle}>LES</span>
                <span className={styles.bigtittle}>FREELANCES</span>
                <span className={styles.bigtittle}>LYONNAIS</span>
                <span className={styles.spanslug}>
                  {" "}
                  Rejoins la plus grande Communauté lyonnaise de Freelances.
                </span>
                <p>
                  Viens retrouver d'autres freelances / indépendant.e.s pendant
                  des rencontres mensuelles ou lors de workshops thématiques,
                  afin d'échanger autour de nos métiers et répondre ensemble aux
                  questions que nous nous posons !
                  Pour qui ? Les freelances du grand Lyon ! Tous les métiers
                  sont acceptés : du web, de l'image, créatifs, conseil, etc.
                  Alors rejoins-nous vite !
                </p>
              </div>
              <div className={styles.botwrap}>
                <span className={styles.sociallist}> Retrouvez-nous sur : </span>
                <ul className={styles.socialicons}>
                  <li>
                    <Link href="https://facebook.com">
                      <div>
                        <FaIcons.FaFacebookF />
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://linkedin.com">
                      <div>
                        <FaIcons.FaLinkedin />
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://discord.com">
                      <div>
                        <FaIcons.FaDiscord />
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://github.com">
                      <div>
                        <FaIcons.FaGithub />
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className={styles.rightwrap}>
              <button
                className={styles.quitbutton}
                type="button"
                onClick={hide}
              >
                <span>&times;</span>
              </button>
              <div className={styles.formwrap}>
                <div className={styles.topwrappara}>
                  <h4 className={styles.mediumtitle}>Pose ta question</h4>
                  <p className={styles.paraform}>
                    Et obtiens une réponse validée et approuvée par une
                    communauté d'experts de la région lyonnaise.
                  </p>
                </div>
                <form onSubmit={handleSubmit}>
                  <div>
                    <label className={styles.labelform}>Ton Pseudo</label>
                    <input
                      placeholder="John Doe"
                      type="text"
                      name="pseudo"
                      required
                      onChange={(e) =>
                        setForm({ ...form, pseudo: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className={styles.labelform}> Titre de ta question</label>
                    <input
                      placeholder="Votre question"
                      type="text"
                      name="title"
                      required
                      onChange={(e) =>
                        setForm({ ...form, titre: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className={styles.labelform}> Question complète</label>
                    <textarea 
                      name="contenu"
                      type="text"
                      placeholder="Explicitez ta question"
                      required
                      onChange={(e) =>
                        setForm({ ...form, contenu: e.target.value })
                      }
                    ></textarea>
                  </div>

                  <input className={styles.buttonsubmit} id="submit" type="submit" value="Envoyer" />
          
                </form>
              </div>
            </div>
          </div>
        </>,
        document.body
      )
    : null;
}
