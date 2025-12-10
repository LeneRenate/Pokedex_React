import { fetchPokemon } from "./axiosPokeAPI";

export async function testPokemons(n) {
  const ids = [...Array(n)].map((_, i) => i + 1);

  console.log(ids);

  const pokemonArray = await Promise.all(ids.map((id) => fetchPokemon(id)));
  console.log("pokemonArray:");
  console.log(pokemonArray);

  return pokemonArray;
}

testPokemons(9);
