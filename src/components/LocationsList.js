import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from "./LocationCard";

export default function LocationsList() {
  const [locations, setLocations] = useState("");
  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/location")
      .then(res => {
        // 20 locations
        setLocations(res.data.results);
      })
      .catch(err => console.log(err));
  }, []);

  const arrayLocations = Array.from(locations);

  return (
    <section className="locations-list grid-view">
      {arrayLocations.map(location => (
        <LocationCard
          key={location.name}
          name={location.name}
          type={location.type}
          dimension={location.dimension}
          numberOfResidents={location.residents.length}
        />
      ))}
    </section>
  );
}
