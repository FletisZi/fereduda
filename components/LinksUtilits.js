import styles from "../styles/LinksUtilits.module.css";
import Slides from "./slide";
import { CalendarHeart, MapPin, Gift, AppWindow } from "lucide-react";

export default function LinksUtilits() {
  return (
    <section id="home" className={styles.contentLinks}>
      <a
        href="https://noivos.casar.com/eduarda-e-felipe-2025-11-29"
        className={styles.links}
      >
        <AppWindow size={20} color="#848080" />
        Nosso Site
      </a>
      <a
        href="https://noivos.casar.com/eduarda-e-felipe-2025-11-29#/rsvp"
        className={styles.links}
      >
        <CalendarHeart size={20} color="#848080" />
        Confirme Presença
      </a>
      <a
        href="https://www.google.com/maps/place/R.+do+Sabi%C3%A1,+37+-+Conj+Hab+Antonio+Jos%C3%A9+Trindade,+Ol%C3%ADmpia+-+SP,+15400-000,+Brasil/@-20.7388062,-48.8880219,20.25z/data=!4m6!3m5!1s0x94bc6e19ac467127:0x9afcdd8ad30a46f!8m2!3d-20.7386077!4d-48.8879755!16s%2Fg%2F11f__22r1t?hl=pt-BR&entry=ttu"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.links}
      >
        <MapPin size={20} color="#848080" />
        Local
      </a>
      <a
        href="https://noivos.casar.com/eduarda-e-felipe-2025-11-29#/presentes"
        className={styles.links}
      >
        <Gift size={20} color="#848080" />
        Presentear
      </a>
    </section>
  );
}
