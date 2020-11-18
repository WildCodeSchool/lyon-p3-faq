import react from "react";
import Link from "next/link";
import styles from "../styles/Answer.module.css";



const Answer = () => (
<section className={styles.section}>
  <div className={styles.wrapper}>
    <div className={styles.box}>
      <div className={styles.question}>
        <Link as="/" href="/">
        <button className={styles.buttonQuestion}>
        <a>
          <span>
            <img
              src="/leftarrowwhite.png"
              height="25px"
              width="25x"
              alt="left white arrow"
            />
          </span>
          </a>
        </button>
        </Link>
        <h2 className={styles.h2}>Taux horaire débutant</h2>
        <p className={styles.p}>
          Salut à tous, je débute mon activité de freelance et la question que je
          me pose est : comment calculer mon taux horaire ( ou journalier ).
          Quelles sont pour vous les éléments ( techno, frais etc... ) qui font
          fluctuer ce taux?
        </p>
        <span>
          <p className={styles.author}>Mathias</p>
        </span>
      </div>
      <div className={styles.answer}>
        <p>
          Salut Mathias, il n’existe pas de réponse universelle. Regarde les
          tarifs pratiqués dans ta région, ne pratique pas de tarifs trop bas en
          espérant attirer plus de clients. L'astuce Vegan pas banal de
          GoodPlanet : facile la mousse au chocolat vegan en remplaçant les
          oeufs par d'eau des pois chiches. Monter en neige de l'eau de cuisson
          de pois chiches à la place des œufs: 3 cuillères à soupe d'aquafaba =
          1 œuf.
        </p>
        <span className={styles.author}>
          <p>Caroline</p>
        </span>
      </div>
    </div>
  </div>
</section>
);

export default Answer;
