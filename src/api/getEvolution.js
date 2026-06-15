import axios from "axios";
import { BASE_URL } from "./axiosPokeAPI";

export default async function fetchEvolutionChain(chain) {
  const res = await axios.get(`${BASE_URL}evolution-chain/${chain}`);
  const data = res.data.chain;
  console.log(data);

  // if (data.evolves_to.length)
}
