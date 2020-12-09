import Link from "next/link";
import styles from "../styles/Basecamp.module.css";
import * as FaIcons from "react-icons/fa";


export default function Basecamp() {
    return (
        <>
        <navbar className={styles.mynavbar}>
            <div className={styles.navwrapper}>
                <div className={styles.hwrapper}>
                    <FaIcons.FaComments className={styles.icons}/>
                    <h1>FAQ</h1>
                </div>
                <div className={styles.bwrapper}>
                <Link href="/">
                    <button className={styles.buttonwrap}>
                        <div><FaIcons.FaEye className={styles.icons2}/></div>
                        <span>Accéder</span>
                    </button>
                </Link>
                </div>
            </div>
        </navbar>
        <section className={styles.firstsection}>
            <div className={styles.mainwrapper}>
                <div className={styles.topwrap}>
                    <span className={styles.bigspan}>L'OUTIL pour vos questions</span>
                </div>
                <div>
                    <p className={styles.mainparagraph}> 
                        Que tu fasses partie d'une communauté, d'un groupe scolaire, d'une équipe,
                        d'un groupe d'étudiants, ou simplement une bande de passionnés autour d'un thème varié.
                        FAQ est un outil open source, qui te permettra de trouver et d'apporter des réponses aux membres
                        d'un groupe ou d'une communauté.
                    </p>
                </div>
                <div>
                    <div>
                        <span>Version 1.0.0</span><button>Voir le repo</button>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}