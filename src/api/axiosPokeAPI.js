import axios from "axios";

const BASE_URL = "https://pokeapi.co/api/v2/";

const IMG_URL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

async function fetchPokemon(nameOrId) {
  const res = await axios.get(
    `${BASE_URL}pokemon/${String(nameOrId).toLocaleLowerCase()}`
  );
  console.log(`data from fetchPokemon: ${res.data}`);
  return res.data;
}

// fetchPokemon(7);
// fetchPokemon("weedle");

export { BASE_URL, IMG_URL, fetchPokemon };
