import React, { useState, useEffect } from "react";
import axios from "axios";
export default function SearchForm({ onSearch }) {
  const [query, setQuery] = useState({
    name: ""
  });
  const handleInputChange = event => {
    event.preventDefault();
    setQuery({ ...query, name: event.target.value });
  };

  return (
    <section className="search-form">
      <form onSubmit={() => onSearch(query)}>
        <input
          onChange={handleInputChange}
          placeholder="name"
          value={query.name}
          name="name"
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
}

/*
    useEffect(() => {
      axios
        .get(`https://rickandmortyapi.com/api/character/?name=${query.name}`)
        .then(res => {
          // 20 characters
          //console.log(res);
          console.log("hello");
        })
        .catch(err => console.log(err));
    }, []);
*/
