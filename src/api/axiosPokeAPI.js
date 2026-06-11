import axios from "axios";

const BASE_URL = "https://pokeapi.co/api/v2/";

const IMG_URL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork";

async function fetchPokemon(nameOrId) {
  const res = await axios.get(
    `${BASE_URL}pokemon/${String(nameOrId).toLowerCase()}`,
  );
  // console.log(res.data);
  return res.data;
}

async function fetchSpecies(id) {
  const res = await fetch(`${BASE_URL}/pokemon-species/${id}`);
  return await res.json();
}

// fetchPokemon(7);
// fetchPokemon("weedle");

export { BASE_URL, IMG_URL, fetchPokemon, fetchSpecies };
