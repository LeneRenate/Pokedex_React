import styles from "../styles/Filter.module.css";

export default function GenToggle({ activeGens, onGenChange }) {
  const gens = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  function handleClick(gen) {
    if (activeGens.includes(gen)) {
      onGenChange(activeGens.filter((g) => g !== gen));
    } else {
      onGenChange([...activeGens, gen]);
    }
  }

  return (
    <section className="p-6">
      <h3 className={`${styles.gridHeading}`}>Toggle generations</h3>
      <ul className="grid grid-cols-3 gap-3">
        {gens.map((gen) => (
          <li
            key={gen}
            onClick={() => handleClick(gen)}
            className={`min-w-15 py-1 px-2 border rounded-md ${activeGens.includes(gen) ? "bg-green-600" : ""}`}
          >
            Gen {gen}
          </li>
        ))}
      </ul>
    </section>
  );
}
