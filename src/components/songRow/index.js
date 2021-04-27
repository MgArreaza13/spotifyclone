import React from "react";
import { SongRowContainer, SongRowInfo, SongRowImage } from "./styles";
function SongRow({ track }) {
  return (
    <SongRowContainer>
      <SongRowImage src={track.album.images[0].url} alt="" />
      <SongRowInfo>
        <h1>{track.name}</h1>
        <p>
          {track.artists.map((artist) => artist.name).join(", ")}
          {track.album.name}
        </p>
      </SongRowInfo>
    </SongRowContainer>
  );
}

export default SongRow;
