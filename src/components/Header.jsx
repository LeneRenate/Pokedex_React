import styles from "../styles/Header.module.css";
import pokedexImg from "../assets/pokedex.png";

export default function Header() {
  return (
    <header className={`p-6 flex flex-row ${styles.wholeHeader}`}>
      <div className={styles.imgWrapper}>
        <img
          src={pokedexImg}
          alt="pokedex from the TV series"
          className={styles.headerImg}
        />
      </div>
      <h1 className={styles.pageTitle}>PokeDex</h1>
      <ul className={`grid grid-rows-3 gap-3 ${styles.typesKeyList}`}>
        <li className={`${styles.typeKeys}`}></li>
      </ul>
    </header>
  );
}
