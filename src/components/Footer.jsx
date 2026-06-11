import styles from "../styles/Footer.module.css";
import pokeballImg from "../assets/Pokeball.png";

export default function Footer() {
  return (
    <footer className={`flex flex-row fixed bottom-0 ${styles.wholeFooter}`}>
      <div className={`w-1/4 ${styles.leftDiv}`}>
        <img src={pokeballImg} alt="Pokeball" className="h-full pl-6" />
      </div>
      <div
        className={`w-1/2 flex justify-center items-end p-0.75 border-x-blue-400 ${styles.centerDiv}`}
      >
        <p>Coded by Lene Renate Rossebø</p>
      </div>
      <div className={`w-1/4 p-4 flex items-center ${styles.rightDiv}`}>
        <a
          href="https://pokeapi.co/"
          target="_blank"
          className="underline text-blue-950"
        >
          Link to the API
        </a>
      </div>
    </footer>
  );
}
