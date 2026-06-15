import { pokemonTypes } from "../api/testData";
import styles from "../styles/Filter.module.css";
import capitalize from "../utils/capitalize";
import getTypeStyles from "../utils/typeStyles";

export default function TypeFilter({ activeType, onTypeChange }) {
  const types = pokemonTypes;

  return (
    <>
      <section className={`flex flex-col p-6 ${styles.typeFilterSection}`}>
        <h3 className={styles.gridHeading}>Filter by type:</h3>
        <ul className={`grid grid-cols-7 gap-3 ${styles.typeGrid}`}>
          {types.map((type) => (
            <li
              key={type}
              style={getTypeStyles([type])}
              className={`max-w-32 py-1 px-2 border rounded-md ${activeType === type ? "ring-2 ring-white" : ""}`}
              onClick={() => {
                onTypeChange(type);
              }}
            >
              {capitalize(type)}
            </li>
          ))}
          <li
            className={`p-1 border rounded-md  bg-(--pokeball-light) border-(--pokeball-dark)`}
            onClick={() => {
              onTypeChange("all");
            }}
          >
            Show all
          </li>
        </ul>
      </section>
    </>
  );
}
