import { InputWindow } from "./InputWindow";
import { OutputWindow } from "./OutputWindow";
import styles from "./WindowGroup.module.css";

export const WindowGroup = () => (
  <div className={styles.WindowGroup}>
    <InputWindow />
    <OutputWindow />
  </div>
);
