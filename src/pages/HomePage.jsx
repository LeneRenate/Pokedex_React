import { testPokemon } from "../api/testData";
import PokemonCard from "../components/PokemonCard";
import styles from "../styles/HomePage.module.css";

export function HomePage() {
  console.log(testPokemon);

  const p = testPokemon;
  console.log(p.name);
  console.log(p.image);

  const typeString = p.types.join(", ");
  console.log(typeString);

  return (
    <>
      <section className={` ${styles.pokeDisplay}`}>
        <h2 className={` ${styles.homeTitle}`}>Some pokemons</h2>
        <PokemonCard
          id={p.id}
          image={p.image}
          title={p.name}
          types={typeString}
        />
        {/* <ul className={`flex flex-row g-8`}>
          {testArray.forEach((p) => (
            <li key={p.id} className={` ${styles.cardWrapper}`}>
              <PokemonCard
                id={p.id}
                image={p.image}
                title={p.name}
                types={typeString}
              />
            </li>
          ))}
        </ul> */}
      </section>
    </>
  );
}
