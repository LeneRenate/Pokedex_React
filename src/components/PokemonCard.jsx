import { Link } from "react-router-dom";
import styles from "../styles/PokemonCard.module.css";
import capitalize from "../utils/capitalize";
import formatID from "../utils/formatID";
import { getSprite } from "../utils/getSprite";
import getTypeStyles from "../utils/typeStyles";

export default function PokemonCard(props) {
  const { id, title, types } = props;

  // Format for display
  const fullId = formatID(id);
  const sprite = getSprite(id);
  const name = capitalize(title);

  // Apply type-color(s) to card background
  const typesArray = [];
  types.map((t) => {
    typesArray.push(t.type.name);
  });
  const typeStyle = getTypeStyles(typesArray);

  return (
    <Link to={`pokemon/${id}`}>
      <article
        title={name}
        className={`flex flex-col justify-between items-center border rounded-3xl p-4 ${styles.pokeCard}`}
        style={typeStyle}
      >
        <div className={styles.imgWrapper}>
          <img className={styles.pokeImg} src={sprite} alt={name} />
        </div>
        <div
          className={`min-w-3/4 flex flex-col justify-evenly items-center p-2 rounded-xl ${styles.txtWrapper}`}
        >
          <p className={styles.pokeID}>{fullId}</p>
          <h3 className={styles.pokeName}>{name}</h3>
        </div>
      </article>
    </Link>
  );
}
