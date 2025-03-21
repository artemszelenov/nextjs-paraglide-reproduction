import Link from "next/link";
import { localizeHref } from '@/paraglide/runtime'
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main>
        <em style={{ display: 'block', marginBottom: 10 }}>Server side link component: </em>
        <Link href={localizeHref('/test-link', { locale: 'ru' })} style={{ textDecoration: 'underline' }}>Go to test page</Link>
      </main>
    </div>
  );
}
