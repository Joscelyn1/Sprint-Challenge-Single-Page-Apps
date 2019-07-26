import React, { useState, useEffect } from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import AppRouter from "./components/AppRouter.js";
import axios from "axios";
import LocationsList from "./components/LocationsList.js";

export default function App() {
  const [characters, setCharacters] = useState("");

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character`)
      .then(res => {
        // 20 characters
        //console.log(res);
        setCharacters(res.data.results);
      })
      .catch(err => console.log(err));
  }, []);
  console.log(characters, "characters");

  return (
    <main>
      <Header />
      <TabNav />
      <AppRouter />
      <LocationsList />
    </main>
  );
}
