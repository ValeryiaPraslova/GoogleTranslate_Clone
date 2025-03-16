import styles from "./TranslationButton.module.css";
import { FC } from "react";

interface ITranslationButtonProps {
  children: string;
}
export const TranslationButton: FC<ITranslationButtonProps> = ({ children }) => (
  <button className={styles.TranslationButton}>
    <span>{children}</span>
  </button>
);
