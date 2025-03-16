import { IconButton } from "../../../components/IconButton";
import { TranslationButton } from "../../../components/TranslationButton";
import { ArrowDownIcon, ArrowIcon } from "../../../icons";
import styles from "./LanguagesGroup.module.css";

export const LanguagesGroup = () => (
  <div className={styles.LanguagesGroup}>
    <div className={styles.group}>
      <TranslationButton>Определить язык</TranslationButton>
      <TranslationButton>Английский</TranslationButton>
      <TranslationButton>Польский</TranslationButton>
      <TranslationButton>Русский</TranslationButton>
      <IconButton icon={<ArrowDownIcon />} />
    </div>

    <IconButton
      icon={<ArrowIcon />}
      ariaLabel='Обратный перевод Ctrl + Shift + S'
      title='Обратный перевод Ctrl + Shift + S'
    />
    <div className={styles.group}>
      <TranslationButton>Английский</TranslationButton>
      <TranslationButton>Польский</TranslationButton>
      <TranslationButton>Русский</TranslationButton>
      <IconButton icon={<ArrowDownIcon />} />
    </div>
  </div>
);
