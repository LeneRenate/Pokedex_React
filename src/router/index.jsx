import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { HomePage } from "../pages/HomePage";
import PokemonDetailPage from "../pages/PokemonDetailPage";
import SearchResultsPage from "../pages/SearchResultsPage";
import ErrorPage from "../pages/404";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <h1>An error occured</h1>,
      children: [
        { index: true, element: <HomePage /> },
        { path: "pokemon/:name", element: <PokemonDetailPage /> },
        { path: "search", element: <SearchResultsPage /> },
        { path: "*", element: <ErrorPage /> },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL },
);
