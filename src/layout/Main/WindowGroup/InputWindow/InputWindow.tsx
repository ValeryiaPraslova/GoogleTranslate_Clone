import { IconButton } from "../../../../components/IconButton";
import {
  DeleteIcon,
  SelectInputMethodIcon,
  TranslationOfSpeech,
  TurnOnTheKeyboard,
  ListenIcon,
} from "../../../../icons";
import { WindowContainer } from "../WindowContainer";
import styles from "./InputWindow.module.css";

export const InputWindow = () => (
  <WindowContainer backgroundColor='white'>
    <div className={styles.bottomLeft}>
      <IconButton icon={<TranslationOfSpeech />} title='Начать перевод речи' />
      <IconButton icon={<ListenIcon />} title='Прослушать' />
    </div>

    <div className={styles.topRight}>
      <IconButton icon={<DeleteIcon />} title='Удалить исходный текст' />
    </div>

    <div className={styles.bottomRight}>
      <span className='textVolume buttonText'>0/5000</span>
      <IconButton icon={<TurnOnTheKeyboard />} title='Включить виртуальную клавиатуру' />
      <IconButton icon={<SelectInputMethodIcon />} title='Выбрать способ ввода' />
    </div>
  </WindowContainer>
);
