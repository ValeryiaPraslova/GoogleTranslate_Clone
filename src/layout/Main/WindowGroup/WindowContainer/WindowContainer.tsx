import { FC, ReactNode } from "react";
import styles from "./WindowContainer.module.css";

interface IWindowContainerProps {
  children: ReactNode;
  backgroundColor: "white" | "gray";
}

export const WindowContainer: FC<IWindowContainerProps> = ({ backgroundColor, children }) => (
  <div className={`${styles.WindowContainer} ${styles[backgroundColor]}`}>
    <div className={styles.ContentContainer}>{children}</div>
  </div>
);
