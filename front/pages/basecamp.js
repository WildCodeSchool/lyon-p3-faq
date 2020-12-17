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
              <img src="/questionlist.png" className={styles.screenimg} alt="screenshot app"/>
              <img src="/question.png" className={styles.screenimg2} alt="screenshot app"/>
            </div>
            <div className={styles.versionmaj}>
              <span>
                <em>A venir dans la v 1.5.0</em>
              </span>
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

      <section className={styles.thirdsection}>
        <div className={styles.middleleftwrap}>
            <span className={styles.heroparagraph}>Des technologies fiables pour un gain de temps
                maximal ! 🦾
            </span>
            <div className={styles.midbuttonwrap}>
                <div className={styles.customempbut}><span>Lire la documentation</span>
                <p className={styles.workinprogress}> En cours de rédaction ✍🏻</p>
                </div>
                <div className={styles.customfilbut}>
                    <span>Guide de démarrage</span>
                    <p className={styles.workinprogress}>👷 En construction 👷</p>
                </div>
            </div>
        </div>
        <div className={styles.middlerightwrap}>
        </div>
      </section>

      <section className={styles.fourthsection}>
        <span className={styles.mediumheadline}>Renforcez votre communauté </span>
        <div className={styles.buttonwrapfs}>
        <Link href="https://github.com/WildCodeSchool/lyon-p3-faq">
                <button className={styles.githubbutton}>
                  <FaIcons.FaGithub className={styles.icons2} />
                  <span>Aller sur Github</span>
                </button>
              </Link>
              <Link href="/">
                <button className={styles.freelancel}>
                  <img src="/logoFL.svg" className={styles.icons3} />
                  <span>Freelance Lyonnais FAQ Démo</span>
                </button>
              </Link>
        </div>
      </section>
      <section className={styles.footer}>
        <div className={styles.creditswrap}>
        <span className={styles.spanfooter}>OpenFAQ est un projet open source réalisé par : </span>
        <ul className={styles.ulfooter}>
          <Link href="https://github.com/Tradou">
            <li className={styles.authordev}>Trad AIDOUD</li>
          </Link>
          <Link href="https://github.com/Myst3k69">
            <li className={styles.authordev}>Aurélien CHIREN</li>
          </Link>
          <Link href="https://github.com/IamNiters">
            <li className={styles.authordev}>Ismaël BERNARD</li>
          </Link>
        </ul>
        </div>
        <Link href="https://www.wildcodeschool.com/fr-FR">
        <span className={styles.spanwild}>WildCodeSchool 2020 </span>
        </Link>
      </section>
    </>
  );
}