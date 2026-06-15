import { useEffect, useState } from "react";
import styles from "../styles/HomePage.module.css";
import { fetchPokemon } from "../api/axiosPokeAPI";
import { fetchGeneration, normalizeGeneration } from "../api/genList";
import PokemonCard from "../components/PokemonCard";
import TypeFilter from "../components/TypeFilter";
import GenToggle from "../components/GenToggle";

export function HomePage() {
  const [allPokemon, setAllPokemon] = useState([]);
  const [activeType, setActiveType] = useState("all");
  const [activeGens, setActiveGens] = useState([1]);
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

  const displayed = allPokemon.filter((p) => {
    const genMatch = activeGens.length === 0 || activeGens.includes(p.gen);
    const typeMatch =
      activeType === "all" || p.types.some((t) => t.type.name === activeType);
    return genMatch && typeMatch;
  });

  if (loading) {
    return (
      <div className="h-20">
        <h2 className="m-4 p-8">Looking for pokemons...</h2>
      </div>
    );
  }

  return (
    <>
      {/* Filters&Toggles */}
      <section className="flex flex-row space-x-10">
        <TypeFilter activeType={activeType} onTypeChange={setActiveType} />

        <GenToggle activeGens={activeGens} onGenChange={setActiveGens} />
      </section>

      {/* Pokemons */}
      <section
        className={`flex flex-row flex-wrap gap-12 py-8 ${styles.pokeDisplay}`}
      >
        {displayed.length === 0 && (
          <h2 className="m-4 p-8">No pokemon matches this type/gen combo</h2>
        )}
        {displayed.map((p) => (
          <PokemonCard key={p.id} id={p.id} title={p.name} types={p.types} />
        ))}
      </section>
    </>
  );
}
