import styles from "./page.module.css";
import LocaleSwitcher from "./LocaleSwitcher";

export default function Home() {
  return (
    <div className={styles.page}>
      <main>
        <em style={{ display: "block", marginBottom: 10 }}>
          Server side link component:{" "}
        </em>
        <LocaleSwitcher />
      </main>
    </div>
  );
}
