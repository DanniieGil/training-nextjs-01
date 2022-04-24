import React from "react";
import { CharacterCard } from "@components/CharacterCard/CharacterCard";
import {
  container,
  title,
  subContainerCards,
} from "./CharacterList.module.css";

const ShowCharactersList = ({ characters }) => {
  return characters?.map((character) => (
    <CharacterCard
      key={character.id}
      id={character.id}
      name={character.name}
      image={character.image}
      status={character.status}
      species={character.species}
    />
  ));
};

export const CharacterList = ({ characterList }) => {
  return (
    <div className={container}>
      <h2 className={title}>Lista de Personajes - Rick And Morty</h2>
      <div className={subContainerCards}>
        {ShowCharactersList({ characters: characterList })}
      </div>
    </div>
  );
};
