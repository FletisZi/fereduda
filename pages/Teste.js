import Image from "next/image";
import styles from "../styles/teste_Home.module.css";
import Slides from "../components/slide";
import Hero from "../components/Hero";
import Invitation from "../components/Invitation";
import Information from "../components/Information";
import LinksUtilits from "../components/LinksUtilits";

export default function Teste() {
  return (
    <div>
      <Hero />
      <Invitation casalName="Mariana & Rodrigo" />
      <Information />
      <LinksUtilits />
    </div>
  );
}
