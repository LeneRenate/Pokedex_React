// import { fetchPokemon, IMG_URL } from "../api/axiosPokeAPI";
import { testPokemons } from "../api/testData";
import PokemonCard from "../components/PokemonCard";

export default async function HomePage() {
  const pokemons = testPokemons(9);

  return (
    <section>
      <h2>Some pokemons</h2>
      <ul className={`flex flex-row g-8`}>
        {pokemons.forEach((p) => {
          <li>{p.name}</li>;
        })}
      </ul>
    </section>
  );
}
