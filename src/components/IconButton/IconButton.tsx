import styles from "./IconButton.module.css";
import { FC, ReactNode } from "react";

interface IIconButtonProps {
  icon: ReactNode;
  title?: string;
  ariaLabel?: string;
}
export const IconButton: FC<IIconButtonProps> = ({ ariaLabel, title, icon }) => (
  <button className={styles.IconButton} title={title} aria-label={ariaLabel}>
    {icon}
  </button>
);
