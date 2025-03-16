import styles from "./TypeButton.module.css";
import { FC, ReactNode } from "react";

interface ITypedButtonProps {
  icon: ReactNode;
  children: string;
}
export const TypeButton: FC<ITypedButtonProps> = ({ children, icon }) => (
  <button className={styles.TypeButton}>
    {icon}
    <span>{children}</span>
  </button>
);
