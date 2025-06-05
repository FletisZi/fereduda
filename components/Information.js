import Image from "next/image";
import styles from "../styles/Information.module.css";

export default function Information() {
  return (
    <section className={styles.informationSection}>
      <div className={styles.backgroundImageInformation} />
      <div className={styles.gradientOverlayInformation} />
      <div className={styles.contentInformation}>
        <div className={styles.infromationTile}>SÁBADO 19.NOVEMBRO.2025</div>
        <div className={styles.infromationHors}>
          <div>16 HORAS</div>
          <div>CHÁCARA DOS CARVALHOS</div>
          <div className={styles.infromationAddress}>
            R. do Sabiá Nº 37 - <br /> Conj Hab Antonio José Trindade,
            Olimpia-SP
          </div>
        </div>
      </div>
    </section>
  );
}
