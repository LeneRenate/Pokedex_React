import { BASE_URL } from "./axiosPokeAPI";
import axios from "axios";

export async function fetchAllTypes() {
  const res = await axios.get(`${BASE_URL}type`);
  const rawData = res.data;
  console.log("rawData:");
  console.log(rawData);

  return rawData;
}
