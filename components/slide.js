import styles from "../styles/slides.module.css";
import Image from "next/image";

export default function Slides() {
  return (
    <div className={styles.tag_list}>
      <div className={styles.inner}>
        <Image
          src="/img1.jpeg"
          alt="Envelope"
          width={400}
          height={600}
          className={styles.images}
        />
        <Image
          src="/img2.jpeg"
          alt="Envelope"
          width={400}
          height={600}
          className={styles.images}
        />
        <Image
          src="/img3.jpeg"
          alt="Envelope"
          width={400}
          height={600}
          className={styles.images}
        />
        <Image
          src="/img1.jpeg"
          alt="Envelope"
          width={400}
          height={600}
          className={styles.images}
        />
        <Image
          src="/img2.jpeg"
          alt="Envelope"
          width={400}
          height={600}
          className={styles.images}
        />
        <Image
          src="/img3.jpeg"
          alt="Envelope"
          width={400}
          height={600}
          className={styles.images}
        />
      </div>

      <div className={styles.fade}></div>
    </div>
  );
}
