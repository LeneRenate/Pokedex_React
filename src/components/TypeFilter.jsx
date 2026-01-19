import { useEffect, useRef } from "react";
import { pokemonTypes } from "../api/testData";
import styles from "../styles/TypeFilter.module.css";
import applyTypeStyles from "../utils/typeStyles";
import capitalize from "../utils/capitalize";

export default function TypeFilter() {
  const types = pokemonTypes;
  const typeRefs = useRef([]);

  useEffect(() => {
    typeRefs.current.forEach((element, index) => {
      if (element) {
        applyTypeStyles(element, [types[index]]);
      }
    });
  }, [types]);

  return (
    <>
      <section
        className={`flex flex-col w-1/2 px-3 pt-2 pb-4 ${styles.typeFilterSection}`}
      >
        <h3 className={`pb-2 ${styles.typeGridHeading}`}>Filter by types:</h3>
        <ul className={`grid grid-cols-4 gap-3 ${styles.typeGrid}`}>
          {types.map((type, index) => (
            <li
              key={type}
              ref={(el) => (typeRefs.current[index] = el)}
              className={`p-1 border rounded-md ${styles.typesBtns}`}
            >
              {capitalize(type)}
            </li>
          ))}
          <li
            className={`p-1 border rounded-md  bg-[var(--pokeball-light)] border-[var(--pokeball-dark)] ${styles.typesBtns}`}
          >
            Show all
          </li>
        </ul>
      </section>
    </>
  );
}
