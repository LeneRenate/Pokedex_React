import bulbasaurImg from "../assets/250px-0001Bulbasaur.png";
import ivysaurImg from "../assets/250px-0002Ivysaur.png";
import venusaurImg from "../assets/250px-0003Venusaur.png";
import charmanderImg from "../assets/250px-0004Charmander.png";
import charmeleonImg from "../assets/250px-0005Charmeleon.png";
import charizardImg from "../assets/250px-0006Charizard.png";

const testPokemon = {
  id: 1,
  name: "Bulbasaur",
  image: { bulbasaurImg },
  types: ["grass", "poison"],
};

const testArray = [
  {
    id: 1,
    name: "Bulbasaur",
    image: { bulbasaurImg },
    types: ["grass", "poison"],
  },
  {
    id: 2,
    name: "Ivysaur",
    image: { ivysaurImg },
    types: ["grass", "poison"],
  },
  {
    id: 3,
    name: "Venusaur",
    image: { venusaurImg },
    types: ["grass", "poison"],
  },
  {
    id: 4,
    name: "Charmander",
    image: charmanderImg,
    types: ["fire"],
  },
  {
    id: 5,
    name: "Charmeleon",
    image: { charmeleonImg },
    types: ["fire"],
  },
  {
    id: 6,
    name: "Charizard",
    image: { charizardImg },
    types: ["fire", "flying"],
  },
];

export { testPokemon, testArray };
