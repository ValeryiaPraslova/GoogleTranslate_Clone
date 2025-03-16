import { TypeButton } from "../../../components/TypeButton";
import { DocIcon, ImageIcon, LanguageIcon, WebsiteIcon } from "../../../icons";
import styles from "./TranslationTypeGroup.module.css";

export const TranslationTypeGroup = () => (
  <div className={styles.TranslationTypeGroup}>
    <TypeButton icon={<LanguageIcon />}>Текст</TypeButton>
    <TypeButton icon={<ImageIcon />}>Изображение</TypeButton>
    <TypeButton icon={<DocIcon />}>Документы</TypeButton>
    <TypeButton icon={<WebsiteIcon />}>Сайты</TypeButton>
  </div>
);
