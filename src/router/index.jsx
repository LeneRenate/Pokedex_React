import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { HomePage } from "../pages/HomePage";

export const router = createBrowserRouter([
  {
    path: "Pokedex_React",
    element: <App />,
    errorElement: <h1>An error occured</h1>,
    children: [{ index: true, element: <HomePage /> }],
  },
]);
