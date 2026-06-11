import { fetchSpecies } from "./axiosPokeAPI";

// Generation
export async function fetchGeneration(id) {
  const species = await fetchSpecies(id);
  const findGeneration = species.generation;
  const generation = findGeneration.name;
  // console.log("generation: ", generation);
  // console.log(typeof generation);
  return generation;
}

// fetchGeneration(7);

export function normalizeGeneration(genString) {
  const map = {
    "generation-i": 1,
    "generation-ii": 2,
    "generation-iii": 3,
    "generation-iv": 4,
    "generation-v": 5,
    "generation-vi": 6,
    "generation-vii": 7,
    "generation-viii": 8,
    "generation-ix": 9,
  };

  return map[genString];
}
