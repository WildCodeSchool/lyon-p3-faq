import Link from "next/link";
import styles from "../styles/Basecamp.module.css";
import * as FaIcons from "react-icons/fa";

export default function Basecamp() {
  return (
    <>
      <nav className={styles.mynavbar}>
        <div className={styles.navwrapper}>
          <div className={styles.hwrapper}>
            <FaIcons.FaComments className={styles.icons} />
            <h1 className={styles.herotitle}>FAQ</h1>
          </div>
          <div className={styles.bwrapper}>
            <Link href="/">
              <button className={styles.buttonwrap}>
                <div>
                  <FaIcons.FaEye className={styles.icons2} />
                </div>
                <span>Accéder</span>
              </button>
            </Link>
          </div>
        </div>
      </nav>

      <section className={styles.firstsection}>
        <div className={styles.mainwrapper}>
          <div className={styles.topwrap}>
            <span className={styles.bigspan}>L'OUTIL pour échanger</span>
          </div>
          <div>
            <p className={styles.mainparagraph}>
              Que tu fasses partie d'une communauté, d'un groupe scolaire, d'une
              équipe, d'un groupe d'étudiants, ou simplement une bande de
              passionnés autour d'un thème varié. FAQ est un outil open source,
              qui te permettra de trouver et d'apporter des réponses aux membres
              d'un groupe ou d'une communauté.
            </p>
          </div>
          <div className={styles.githubwrap}>
            <div className={styles.versionwrap}>
              <span className={styles.versionspan}>Version 1.0.0</span>
              <Link href="https://github.com/WildCodeSchool/lyon-p3-faq">
                <button className={styles.githubbutton}>
                  <FaIcons.FaGithub className={styles.icons2} />
                  <span>Aller sur Github</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.secondsection}>
        <div className={styles.ssmainwrap}>

          <div className={styles.ssinnerleftwrap}>
            <div className={styles.wrapcard}>
              <div className={styles.topcard}></div>
              <div className={styles.botcard}></div>
            </div>
            <div className={styles.versionmaj}>
              <span>A venir dans la v 1.5.0</span>
            </div>
          </div>

          <div className={styles.ssinnerrightwrap}>
            <p className={styles.ssbigparagraph}>
              Un outil libre, qui n'attend que d'être hébergé et déployé.🚀
            </p>
            <p className={styles.ssmediumparagraph}>
              La <strong>FAQ open source </strong> permet de mettre à
              disposition des différentes communautés, un outil facile d'usage
              qui permet aux membres de cette même <strong>communauté </strong>
              d'apporter des questions et réponses à leurs interrogations par
              une réponse unique d'un expert dans le domaine de la question
              posée. Developpé en <em>mobile</em> first pour que vos
              <strong> questions/réponses</strong> soient présentes partout avec{" "}
              <strong>Vous ! </strong>🙏🏼
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
