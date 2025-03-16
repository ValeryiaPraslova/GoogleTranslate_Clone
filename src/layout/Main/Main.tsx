import { LanguagesGroup } from "./LanguagesGroup";
import { TranslationTypeGroup } from "./TranslationTypeGroup";
import { WindowGroup } from "./WindowGroup";
import styles from "./Main.module.css";

export const Main = () => (
  <main className={styles.Main}>
    <TranslationTypeGroup />
    <LanguagesGroup />

    <WindowGroup />

    <div className={styles.feedbackContainer}>
      <a className={styles.link} href='#'>
        Отправить отзыв
      </a>
    </div>
  </main>
);
