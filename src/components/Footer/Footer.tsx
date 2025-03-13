import { HistoryIcon, StarIcon } from "../../icons";
import { FooterButton } from "../FooterButton";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <FooterButton icon={<HistoryIcon />}>История</FooterButton>
      <FooterButton icon={<StarIcon />}>Сохранённые</FooterButton>
    </footer>
  );
};
