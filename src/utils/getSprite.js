import { IMG_URL } from "../api/axiosPokeAPI";

export function getSprite(id) {
  const sprite = `${IMG_URL}/${id}.png`;
  return sprite;
}
