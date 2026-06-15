// Make into a page!

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchPokemon, fetchSpecies } from "../api/axiosPokeAPI";
import { getSprite } from "../utils/getSprite";
import capitalize from "../utils/capitalize";
import formatID from "../utils/formatID";

export default function PokemonDetailPage() {
  const params = useParams();
  const id = params.name;

  const [pokemon, setPokemon] = useState(null);
  const [species, setSpecies] = useState();

  useEffect(() => {
    Promise.all([
      fetchPokemon(id).then(setPokemon),
      fetchSpecies(id).then(setSpecies),
    ]);
  }, [id]);

  if (!pokemon || !species) return <p>Loading..</p>;

  // console.log("pokemon: ", pokemon);
  // console.log("species: ", species);

  const idNo = formatID(id);
  const name = capitalize(pokemon.name);

  const sprite = getSprite(id);

  const typeArray = pokemon.types;
  const types = [];
  for (let i = 0; i < typeArray.length; i++) {
    types.push(typeArray[i].type.name);
  }

  const abilityArray = pokemon.abilities;
  const abilities = [];
  for (let i = 0; i < abilityArray.length; i++) {
    abilities.push(abilityArray[i].ability.name);
  }

  let habitat = "";

  if (species.habitat) {
    habitat = species.habitat.name;
  } else {
    habitat = "unknown";
  }

  return (
    <section className={`p-8`}>
      {/* img + name + idnumber */}
      <article className={`flex flex-row items-center`}>
        <div>
          <img src={sprite} alt={name} />
        </div>

        <div>
          <p className={`text-4xl`}>{idNo}</p>
          <h2 className={`font-extrabold text-8xl`}>{name}</h2>
        </div>
      </article>

      {/* Primary info */}
      <article className={`flex flex-col`}>
        <p>Type(s): {types.join(", ")}</p>
        <p>Category</p>
        <p>Height</p>
        <p>Weight</p>
        <p>Abilities: {abilities.join(", ")}</p>
        <p>Habitat: {habitat}</p>
      </article>

      {/* Attack + info */}
      <article></article>

      {/* Evolving */}
    </section>
  );
}
