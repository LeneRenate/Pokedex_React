import { useContext, useState } from "react";
import styles from "../styles/HomePage.module.css";
import PokemonCard from "../components/PokemonCard";
import TypeFilter from "../components/TypeFilter";
import GenToggle from "../components/GenToggle";
import { PokemonContext } from "../context/PokemonContext";

export function HomePage() {
  const { allPokemon, loading } = useContext(PokemonContext);

  const [activeType, setActiveType] = useState("all");
  const [activeGens, setActiveGens] = useState([1]);

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
        className={`flex flex-row flex-wrap gap-8 2xl:gap-12 py-8 ${styles.pokeDisplay}`}
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
