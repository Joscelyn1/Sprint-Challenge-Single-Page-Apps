import React, { useEffect, useState } from "react";
import axios from "axios";
import EpisodeCard from "./EpisodeCard.js";
export default function EpisodesList() {
  // TODO: Add useState to track data from useEffect

  const [episodes, setEpisodes] = useState("");

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/episode`)
      .then(res => {
        // 20 episodes
        setEpisodes(res.data.results);
      })
      .catch(err => console.log(err));
  }, []);
  const arrayEpisodes = Array.from(episodes);
  return (
    <section className="episodes-list grid-view">
      {arrayEpisodes.map(episode => (
        <EpisodeCard
          key={episode.id}
          name={episode.name}
          episode={episode.episode}
          airDate={episode.air_date}
        />
      ))}
    </section>
  );
}
