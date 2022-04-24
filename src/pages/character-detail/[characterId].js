import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const CharacterDetail = () => {
  const [characterDetail, setcharacterDetail] = useState();
  const {
    query: { characterId },
  } = useRouter();

  const requestCharacterDetail = async (characterId) =>
    axios
      .get(`https://rickandmortyapi.com/api/character/${characterId}`)
      .then((res) => {
        setcharacterDetail(res.data);
      });

  useEffect(() => {
    characterId && requestCharacterDetail(characterId);
  }, [characterId]);

  return (
    <>
      <h1>{characterDetail?.name}</h1>
      <div>
        <img src={characterDetail?.image} alt={characterDetail?.name} />
      </div>
      <div>Genere: {characterDetail?.gender}</div>
      <div>Specie: {characterDetail?.species}</div>
      <div>Created: {characterDetail?.created}</div>
      <div>Origin: {characterDetail?.origin.name}</div>
    </>
  );
};

export default CharacterDetail;
