import styles from "../styles/PokemonCard.module.css";
import capitalize from "../utils/capitalize";
import formatID from "../utils/formatID";
import { applyTypeBackground, applyTypeBorder } from "../utils/typeStyles";

export default function PokemonCard(props) {
  const { id, image, title, types } = props;

  const name = capitalize(title);
  const number = formatID(id);

  // style={{ border: "solid black", margin: "10px" }}

  return (
    <article
      title={name}
      className={`flex flex-col justify-evenly ${styles.pokeCard}`}
      style={{
        background: applyTypeBackground(types),
        border: applyTypeBorder(types),
      }}
    >
      <div className={styles.imgWrapper}>
        <img className={styles.pokeImg} src={image} alt={name} />
      </div>
      <div
        className={`flex flex-col justify-evenly items-start ${styles.txtWrapper}`}
      >
        <p className={styles.pokeID}>{number}</p>
        <h3 className={styles.pokeName}>{name}</h3>
      </div>
    </article>
  );
}
