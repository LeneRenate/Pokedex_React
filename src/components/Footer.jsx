import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={`flex flex-row ${styles.wholeFooter}`}>
      <div className={`w-1/4 ${styles.leftDiv}`}>
        <p>Here comes an image</p>
      </div>
      <div className={`w-1/2 ${styles.centerDiv}`}>
        <p></p>
      </div>
      <div className={`w-1/4 ${styles.rightDiv}`}>
        <p>Here comes the API</p>
      </div>
    </footer>
  );
}
