import { useState, useEffect } from "react";
import styles from "../styles/HomePage.module.css";
import { getSprite } from "../utils/getSprite";
import { fetchPokemon } from "../api/axiosPokeAPI";
import capitalize from "../utils/capitalize";
import formatID from "../utils/formatID";

export function HomePage() {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    async function loadPokemon() {
      const data = await fetchPokemon(7);
      setPokemon(data);
      console.log("data: ", data);
    }
    loadPokemon();
  }, []);

  if (!pokemon) return <div>Loading...</div>;

  const pName = capitalize(pokemon.name);
  const pId = formatID(pokemon.id);
  const sprite = getSprite(pokemon.id);

  return (
    <>
      {/* <TypeFilter /> */}
      <section className={` ${styles.pokeDisplay}`}>
        <h2 className={` ${styles.homeTitle}`}>Some pokemons</h2>
        <h3>Name: {pName}</h3>
        <h3>Id: {pId}</h3>
        <img src={sprite} />
      </section>
    </>
  );
}
