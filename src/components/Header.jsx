import { useEffect, useRef } from "react";
import styles from "../styles/Header.module.css";
import pokedexImg from "../assets/pokedex.png";
import { pokemonTypes } from "../api/testData";
import applyTypeStyles from "../utils/typeStyles";
import capitalize from "../utils/capitalize";

export default function Header() {
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
    <header
      className={`w-full h-32 sticky top-0 px-8 py-4 flex flex-row justify-start items-center ${styles.wholeHeader}`}
    >
      <div className={`h-9/10 ${styles.imgWrapper}`}>
        <img
          src={pokedexImg}
          alt="pokedex from the TV series"
          className={`h-full ${styles.headerImg}`}
        />
      </div>
      <h1 className={`p-4 pl-8 ${styles.pageTitle}`}>PokeDex</h1>
      <ul className={`grid grid-cols-6 gap-3 ${styles.typesKeyList}`}>
        {types.map((type, index) => (
          <li
            key={type}
            ref={(el) => (typeRefs.current[index] = el)}
            className={`p-1 border rounded-md ${styles.typeKeys}`}
          >
            {capitalize(type)}
          </li>
        ))}
      </ul>
    </header>
  );
}
// bg - [--card - bg];
