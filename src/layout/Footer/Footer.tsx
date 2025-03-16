import { HistoryIcon, StarIcon } from "../../icons";
import { FooterButton } from "../../components/FooterButton";
import styles from "./Footer.module.css";

export const Footer = () => (
  <footer className={styles.footer}>
    <FooterButton icon={<HistoryIcon />}>История</FooterButton>
    <FooterButton icon={<StarIcon />}>Сохранённые</FooterButton>
  </footer>
);
