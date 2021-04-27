import { Favorite, MoreHoriz } from "@material-ui/icons";
import React from "react";
import { useDataLayerValue } from "../../StateProvider";
import Header from "../header";
import SongRow from "../songRow";
import { BodyContainer, BodyInfo, BodyInfoText, BodySongs, BodyIcons, PlayIcon } from "./styles";

function Body({ spotify }) {

  const [{discover_weekly}, dispatch] = useDataLayerValue()

  console.log(discover_weekly)
  return (
    <BodyContainer>
      <Header spotify={spotify} />
      <BodyInfo>
        <img
          src={discover_weekly?.images[0].url}
          alt=""
        />
        <BodyInfoText>
          <strong>PLAYLISTS</strong>
          <h2>{discover_weekly?.name}</h2>
          <p>{discover_weekly?.description}</p>
        </BodyInfoText>
      </BodyInfo>

      <BodySongs>
        <BodyIcons>
          <PlayIcon />
          <Favorite fontSize="large"/>
          <MoreHoriz />
        </BodyIcons>
      </BodySongs>


      {/* {console.log(discover_weekly)} */}
      {discover_weekly?.tracks?.items?.map(item => {
        return <SongRow track={item.track} />
      })}
    </BodyContainer>
  );
}

export default Body;
