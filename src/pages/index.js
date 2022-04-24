import React, { useState, useEffect } from "react";
import axios from "axios";
import { CharacterList } from "@components/CharacterList/CharacterList";
import Head from "next/head";

const Home = () => {
  const [characterList, setCharacterList] = useState([]);

  const requestCharacters = async () =>
    axios.get("https://rickandmortyapi.com/api/character/").then((res) => {
      setCharacterList(res.data.results);
    });

  useEffect(() => {
    requestCharacters();
  }, []);

  return (
    <div>
      <Head>
        <title>API - Ricky and Morty with NEXT JS"</title>
      </Head>
      <CharacterList characterList={characterList} />
    </div>
  );
};

export default Home;
