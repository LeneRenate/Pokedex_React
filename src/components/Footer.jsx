import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.wholeFooter}>
      <div className={`w-1/4 ${styles.leftDiv}`}>{/* image */}</div>
      <div className={`w-1/2 ${styles.centerDiv}`}>
        <p>Copyright Lene Renate D. Rossebø</p>
      </div>
      <div className={`w-1/4 ${styles.rightDiv}`}>{/* API */}</div>
    </footer>
  );
}
