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

  if (!pokemon || !species) return <p>Catching the pokemon...</p>;

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

  const weight = pokemon.weight / 10;
  const height = pokemon.height / 10;

  const category = species.genera[7].genus.toLowerCase();

  let habitat = "";

  if (species.habitat) {
    habitat = species.habitat.name;
  } else {
    habitat = "unknown";
  }

  return (
    <section className={`flex flex-col p-8`}>
      <div className="flex flex-row space-x-40 items-center">
        {/* img + name + idnumber */}
        <article className={`flex flex-row items-start`}>
          <div>
            <img src={sprite} alt={name} />
          </div>

          <div className="pt-16">
            <p className={`text-4xl`}>{idNo}</p>
            <h2 className={`font-extrabold text-8xl underline`}>{name}</h2>
          </div>
        </article>

        {/* Primary info */}
        <article className={`flex flex-col text-lg leading-8`}>
          <h3 className="text-xl font-semibold">Primary Info</h3>
          <p>Type(s): {types.join(", ")}</p>
          <p>Category: {category}</p>
          <p>Height: {height.toFixed(1)} m</p>
          <p>Weight: {weight.toFixed(1)} kg</p>
          <p>Abilities: {abilities.join(", ")}</p>
          <p>Habitat: {habitat}</p>
        </article>
      </div>

      <div className="flex flex-row">
        {/* Attack + info */}
        <article></article>

        {/* Evolving */}
        <article></article>
      </div>
    </section>
  );
}
