import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { useSearchParams } from "react-router-dom";
import PokemonCard from "../components/PokemonCard";

export default function SearchResultsPage() {
  const [searchParams] = useSearchParams();
  const queryInput = searchParams.get("query");

  const { allPokemon, loading } = useContext(PokemonContext);

  if (queryInput === null) {
    return (
      <div className="m-20">
        <h2 className="text-2xl">No search-term given..</h2>
        <p className="text-lg">Try again, or go back to homepage</p>
      </div>
    );
  }

  const query = queryInput.toLowerCase();

  const searchResults = allPokemon.filter((p) =>
    p.name.toLowerCase().includes(query),
  );

  if (loading) {
    return (
      <div className="m-20">
        <h2 className="text-2xl">Looking for pokemons...</h2>
      </div>
    );
  }

  if (query.length < 3) {
    return (
      <h2 className="m-20 text-xl">
        Search-term too short. Please use at least 3 letters.
      </h2>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl">Search Results:</h1>
      <section className={`flex flex-row flex-wrap gap-8 2xl:gap-12 py-8`}>
        {searchResults.length === 0 && (
          <div>
            <h2 className="text-xl"> No pokemons match your search.</h2>
            <p className="text-lg">
              Check spelling or try another search-term.
            </p>
          </div>
        )}
        {searchResults.map((p) => (
          <PokemonCard key={p.id} id={p.id} title={p.name} types={p.types} />
        ))}
      </section>
    </div>
  );
}
