import { pokemonTypes } from "../api/testData";
import styles from "../styles/TypeFilter.module.css";

export default function TypeFilter() {
  return (
    <>
      <section className={`flex flex-col ${styles.typeFilterSection}`}>
        <h3 className={styles.typeGridHeader}>Filter by types:</h3>
        <ul className={`grid grid-cols-4 gap-3 ${styles.typeGrid}`}>
          {pokemonTypes.map((types) => (
            <li className={`${styles.typesBtns}`}>{types}</li>
          ))}
          <li>Show all</li>
        </ul>
      </section>
    </>
  );
}
