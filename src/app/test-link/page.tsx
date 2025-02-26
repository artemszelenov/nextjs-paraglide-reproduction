import styles from "../page.module.css";
import { m } from '@/paraglide/messages'
import { getLocale } from '@/paraglide/runtime'

export default function TestLink() {
  const lang = getLocale()

  return (
    <div className={styles.page}>
      <h1>Word name in {lang} is {m.name()}</h1>
    </div>
  );
}
