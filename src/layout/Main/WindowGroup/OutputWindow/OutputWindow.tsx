import { IconButton } from "../../../../components/IconButton";
import {
  CopyTranslationIcon,
  LikeTranslationIcon,
  ListenIcon,
  SaveTranslationIcon,
  SendTranslationIcon,
} from "../../../../icons";
import { WindowContainer } from "../WindowContainer";
import styles from "./OutputWindow.module.css";

export const OutputWindow = () => (
  <WindowContainer backgroundColor='gray'>
    <div className={styles.bottomLeft}>
      <IconButton icon={<ListenIcon />} title='Прослушать' />
      <IconButton icon={<CopyTranslationIcon />} title='Копировать перевод' />
    </div>

    <div className={styles.topRight}>
      <IconButton icon={<SaveTranslationIcon />} title='Сохранить перевод' />
    </div>

    <div className={styles.bottomRight}>
      <IconButton icon={<LikeTranslationIcon />} title='Оцените этот перевод' />

      <IconButton icon={<SendTranslationIcon />} title='Отправить перевод' />
    </div>
  </WindowContainer>
);
