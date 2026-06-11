import { useEffect, useState } from "react";
import styles from "../styles/HomePage.module.css";
import { getSprite } from "../utils/getSprite";
import { fetchPokemon } from "../api/axiosPokeAPI";
import capitalize from "../utils/capitalize";
import formatID from "../utils/formatID";
import { fetchGeneration, normalizeGeneration } from "../api/genList";

export function HomePage() {
  const [allPokemon, setAllPokemon] = useState([]);
  const [activeGens, setActiveGens] = useState([1]);
  const [loading, setLoading] = useState(true);

  // console.log("activeGens: ", activeGens);

  useEffect(() => {
    async function loadAllPokemon() {
      setLoading(true);
      const ids = [...Array(1025)].map((_, i) => i + 1);

      const pokemonList = await Promise.all(
        ids.map(async (id) => {
          const [pokemon, generation] = await Promise.all([
            fetchPokemon(id),
            fetchGeneration(id),
          ]);
          return {
            ...pokemon,
            gen: normalizeGeneration(generation),
          };
        }),
      );

      setAllPokemon(pokemonList);
      setLoading(false);
    }

    loadAllPokemon();
  }, []);

  console.log("allPokemon: ", allPokemon);

  const displayed = allPokemon.filter((p) => activeGens.includes(p.gen));

  console.log("displayed: ", displayed);

  return (
    <>
      {/* <TypeFilter /> */}

      {/* GenToggle */}

      {/* Pokemons */}
      <section className={` ${styles.pokeDisplay}`}></section>
    </>
  );
}
