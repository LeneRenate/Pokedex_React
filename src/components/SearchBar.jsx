import styles from "../styles/SearchBar.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    if (query.trim()) {
      navigate(`/search?query=` + encodeURIComponent(query.trim()));
    }
  };

  return (
    <>
      <form onSubmit={handleSearch} className="flex flex-col gap-2">
        <input
          type="text"
          aria-label="Search pokemon by name"
          title="Search pokemon by name"
          placeholder="Search by name"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          className={` p-1 border rounded ${styles.searchInput}`}
        />
        <button
          type="submit"
          className={`w-1/3 p-1 border rounded ${styles.searchBtn}`}
        >
          Search
        </button>
      </form>
    </>
  );
}
