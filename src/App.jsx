import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { PokemonProvider } from "./context/PokemonProvider";

function App() {
  return (
    <>
      <PokemonProvider>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </PokemonProvider>
    </>
  );
}

export default App;
