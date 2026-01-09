import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { searchIndex } from "../data/searchIndex";
import '../index.css';

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const handleSearch = (value) => {
    setQuery(value);

    if (!value.trim()) {
      setResults([]);
      return;
    }

    const q = value.toLowerCase();

   const filtered = searchIndex.filter(item => {
  const name = item.name.toLowerCase();
  const slug = item.slug.toLowerCase();
  
  // Only match if name or slug starts with query
  return name.startsWith(q) || slug.startsWith(q);
});


    setResults(filtered.slice(0, 8)); // limit results
  };

  const goTo = (slug) => {
    setQuery("");
    setResults([]);
    navigate(`/${slug}`);

  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && results.length > 0) {
      goTo(results[0].slug);
    }
  };

  return (
    <div className="position-relative mx-auto" style={{ maxWidth: "600px" }}>
      <input
        type="text"
        className="form-control form-control-lg"
        placeholder="Search calculators..."
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      {results.length > 0 && (
       <ul
  className="search-results list-group position-absolute w-100"
  style={{ zIndex: 10, top: "100%" }}
>
  {results.map(item => (
    <li
      key={item.slug}
      className="search-item list-group-item"
      role="button"
      onClick={() => goTo(item.slug)}
    >
      {item.name}
    </li>
  ))}
</ul>

      )}
    </div>
  );
};

export default SearchBar;
