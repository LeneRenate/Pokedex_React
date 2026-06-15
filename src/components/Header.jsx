import styles from "../styles/Header.module.css";
import pokedexImg from "../assets/pokedex.png";
import { pokemonTypes } from "../api/testData";
import capitalize from "../utils/capitalize";
import getTypeStyles from "../utils/typeStyles";
import { Link } from "react-router-dom";

export default function Header() {
  const types = pokemonTypes;

  return (
    <header
      className={`w-full h-32 sticky top-0 px-8 py-4 flex flex-row justify-start items-center ${styles.wholeHeader}`}
    >
      <div className={`h-9/10 ${styles.imgWrapper}`}>
        <Link>
          <img
            src={pokedexImg}
            alt="pokedex from the TV series"
            className={`h-full ${styles.headerImg}`}
          />
        </Link>
      </div>
      <Link to="/Pokedex_React">
        <h1 className={`p-4 pl-8 ${styles.pageTitle}`}>PokeDex</h1>
      </Link>
      <div className="m-20 flex gap-1 items-center">
        <p className={`${styles.keyP}`}>Types Key</p>
        <ul className={`grid grid-cols-9 gap-3 ${styles.typesKeyList}`}>
          {types.map((t) => (
            <li
              key={t}
              className={`px-1.5 py-1 border rounded-md cursor-default ${styles.typeKeys}`}
              style={getTypeStyles([t])}
            >
              {capitalize(t)}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
// bg - [--card - bg];
