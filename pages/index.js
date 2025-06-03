// pages/index.js
import { useState } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Home from "./Home";

export default function MyApp() {
  const [aberto, setAberto] = useState(false);

  return (
    <>
      <div className={styles.container}>
        {!aberto ? (
          <div className={styles.envelope} onClick={() => setAberto(true)}>
            <Image
              src="/envelope.png"
              alt="Envelope"
              width={400}
              height={600}
              className={styles.image}
            />
          </div>
        ) : (
          <div>
            <Home />
          </div>
        )}
      </div>
    </>
  );
}
