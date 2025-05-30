import Image from "next/image";
import styles from "../styles/HeroSection.module.css";

export default function Hero() {
  return (
    <section id="home" className={styles.heroSection}>
      <div className={styles.backgroundImage} />
      <div className={styles.gradientOverlay} />

      <div className={styles.content}>
        <h1 className={styles.title}>Eduarda & Felipe</h1>
        <p className={styles.description}>
          "Assim, eles já não são dois, mas sim uma <br /> só carne. Portanto, o
          que Deus uniu, ninguém o separe.”
        </p>
        <p className={styles.versiculo}>Mateus 19:6</p>
      </div>
    </section>
  );
}
