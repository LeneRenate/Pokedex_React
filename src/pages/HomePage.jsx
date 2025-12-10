import { useEffect, useState } from "react";
import { fetchPokemon, IMG_URL } from "../api/axiosPokeAPI";
import PokemonCard from "../components/PokemonCard";
import styles from "../styles/HomePage.module.css";

export function HomePage() {
  const [apiResponse, setApiResponse] = useState(null);

  useEffect(() => {
    fetchPokemon(3).then(setApiResponse);
  }, [apiResponse]);

  return (
    <>
      <section className={` ${styles.pokeDisplay}`}>
        <h2 className={` ${styles.homeTitle}`}>Some pokemons</h2>
        <ul className={`flex flex-row g-8`}>
          {apiResponse.results.map((p) => (
            <li key={p.id} className={` ${styles.cardWrapper}`}>
              <PokemonCard
                id={p.id}
                image={`${IMG_URL}${p.id}.png`}
                title={p.name}
                types={p.types.map((t) => t.type.name)}
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
