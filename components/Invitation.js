import Image from "next/image";
import styles from "../styles/Invitation.module.css";
import Slides from "./slide";

export default function Invitation({ casalName }) {
  return (
    <section id="home" className={styles.invitationSection}>
      <div className={styles.descriptionInvitation}>
        Com a bênção de Deus,
        <br />
        Convidamos para o nosso casamento...
      </div>
      <div className={styles.title}>{casalName}</div>
      <Slides />
    </section>
  );
}
