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

    const filtered = searchIndex.filter(item =>
      item.name.toLowerCase().includes(q) ||
      item.slug.toLowerCase().includes(q) ||
      item.title?.toLowerCase().includes(q) ||
      item.description?.toLowerCase().includes(q)
    );

    setResults(filtered.slice(0, 8)); // limit results
  };

  const goTo = (slug) => {
    setQuery("");
    setResults([]);
    navigate(`/calculators/other/${slug}`);

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
          className="list-group position-absolute w-100 shadow-sm"
          style={{ zIndex: 10, top: "100%" }}
        >
          {results.map(item => (
            <li
              key={item.slug}
              className="list-group-item list-group-item-action"
              role="button"
              onClick={() => goTo(item.slug)}
            >
              <strong>{item.name}</strong>
              <br />
              <small className="text-muted">{item.description}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
