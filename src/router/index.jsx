import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { HomePage } from "../pages/HomePage";
import PokemonDetailPage from "../pages/PokemonDetailPage";
import SearchResultsPage from "../pages/SearchResultsPage";

export const router = createBrowserRouter([
  {
    path: "Pokedex_React",
    element: <App />,
    errorElement: <h1>An error occured</h1>,
    children: [
      { index: true, element: <HomePage /> },
      { path: "pokemon/:name", element: <PokemonDetailPage /> },
      { path: "search", element: <SearchResultsPage /> },
      { path: "*", element: <h1>404 not found</h1> },
    ],
  },
]);
