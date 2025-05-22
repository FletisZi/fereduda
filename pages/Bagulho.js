import Image from "next/image";
import styles from "../styles/teste_Home.module.css";


export default function Bagulho() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <p className={styles.saveTheDate}>
          SAVE <span>the</span> DATE
        </p>

        <div className={styles.imageWrapper}>
          <Image
            src="/casal.jpeg"
            alt="Casal"
            layout="fill"
            objectFit="cover"
            className={styles.image}
          />
        </div>

        <h1 className={styles.date}>30 · 03 · 2024</h1>
        <h2 className={styles.names}>Eduarda e Felipe</h2>
        <p className={styles.location}>Olimpia — São Paulo</p>
        <p className={styles.note}>
          Mais informações no convite oficial que será enviado em breve.
        </p>
      </div>
    </div>
  );
}
