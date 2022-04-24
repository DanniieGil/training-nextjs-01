import React from "react";
import { useRouter } from "next/router";

const CharacterDetail = () => {
  const {
    query: { characterId },
  } = useRouter();

  return (
    <div>
      <h1>Product {characterId}</h1>
    </div>
  );
};

export default CharacterDetail;
