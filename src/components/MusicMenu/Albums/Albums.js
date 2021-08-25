import React from "react";
import Show1 from "../../../assets/show1.jpg";
import Show2 from "../../../assets/show2.jpg";
import Show3 from "../../../assets/show3.jpg";
import {
  AlbumLarge,
  AlbumsContainer,
  AlbumsFirst,
  AlbumSmall,
  AlbumsSecondary,
} from "./styles";

export const Albums = () => (
  <AlbumsContainer>
    <AlbumsFirst>
      <AlbumLarge src={Show3} />
    </AlbumsFirst>
    <AlbumsSecondary>
      <AlbumSmall src={Show2} />
      <AlbumSmall src={Show1} />
    </AlbumsSecondary>
  </AlbumsContainer>
);
