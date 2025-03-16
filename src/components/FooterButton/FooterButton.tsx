import { FC, ReactNode } from "react";

import styles from "./FooterButton.module.css";

interface IFooterButtonProps {
  icon: ReactNode;
  children: string;
}

export const FooterButton: FC<IFooterButtonProps> = ({ icon, children }) => (
  <button className={styles.FooterButton}>
    <a className={styles.link} href=''>
      <div className={styles.iconContainer}>{icon}</div>
      <div className={styles.buttonHistorySave}>{children}</div>
    </a>
  </button>
);
