import { IconButton } from "../../components/IconButton";
import { AccountIcon, ApplicationIcon, SettingIcon } from "../../icons";
import styles from "./Header.module.css";
import { LogoContainer } from "./LogoContainer";

export const Header = () => (
  <header className={styles.header}>
    <LogoContainer />
    <div className={styles.AppButtons}>
      <IconButton icon={<SettingIcon />} ariaLabel='Настройки' title='Настройки' />
      <IconButton
        icon={<ApplicationIcon />}
        ariaLabel='Приложения Google'
        title='Приложения Google'
      />
      <IconButton icon={<AccountIcon />} ariaLabel='Аккаунт Google' title='' />
    </div>
  </header>
);
