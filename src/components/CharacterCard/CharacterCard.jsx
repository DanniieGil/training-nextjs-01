import Link from "next/link";
import React from "react";
import {
  nameCharacter,
  imgCharacter,
  container,
} from "./CharacterCard.module.css";

export const CharacterCard = ({ id, name, image, status, species }) => {
  return (
    <Link key={id} href={`/personaje/${id}`}>
      <div className={container} onClick>
        <h2 className={nameCharacter}>{name}</h2>
        <img className={imgCharacter} src={image} alt={name} />
      </div>
    </Link>
  );
};
