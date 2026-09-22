import { useEffect, useState } from "react";
import { fetchPokemon } from "../api/axiosPokeAPI";
import { fetchGeneration, normalizeGeneration } from "../api/genList";
import { PokemonContext } from "./PokemonContext";

export function PokemonProvider({ children }) {
  const [allPokemon, setAllPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchInBatches(ids, batchSize = 50) {
    const results = [];
    for (let i = 0; i < ids.length; i += batchSize) {
      const batch = ids.slice(i, i + batchSize);
      const batchResults = await Promise.all(
        batch.map(async (id) => {
          const [pokemon, generation] = await Promise.all([
            fetchPokemon(id),
            fetchGeneration(id),
          ]);
          return { ...pokemon, gen: normalizeGeneration(generation) };
        }),
      );
      results.push(...batchResults);
      setAllPokemon([...results]);
    }
    return results;
  }

  useEffect(() => {
    async function loadAllPokemon() {
      setLoading(true);
      const ids = [...Array(1025)].map((_, i) => i + 1);

      const pokemonList = await fetchInBatches(ids, 50);

      setAllPokemon(pokemonList);
      setLoading(false);
    }

    loadAllPokemon();
  }, []);

  return (
    <PokemonContext.Provider value={{ allPokemon, loading }}>
      {children}
    </PokemonContext.Provider>
  );
}
