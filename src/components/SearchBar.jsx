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
      <form onSubmit={handleSearch}>
        <input
          type="text"
          aria-label="Search pokemon by name"
          title="Search pokemon by name"
          placeholder="Search pokemon by name"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
}
