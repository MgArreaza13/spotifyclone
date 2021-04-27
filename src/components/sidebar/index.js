import { Home, LibraryMusic, Search } from "@material-ui/icons";
import React from "react";
import { useDataLayerValue } from "../../StateProvider";
import SidebarOption from "../sidebarOption";
import { SidebarContainer, SidebarLogo, SidebarTitle } from "./styles";

function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();

  console.log(playlists);

  return (
    <SidebarContainer>
      <SidebarLogo
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="logo"
      />
      <SidebarOption Icon={Home} title="Home" />
      <SidebarOption Icon={Search} title="Search" />
      <SidebarOption Icon={LibraryMusic} title="Your Library" />
      <br />
      <SidebarTitle>PLAYLISTS</SidebarTitle>
      <hr />

      {playlists?.items?.map((list, i) => {
        return <SidebarOption key={i} title={list.name} />;
      })}

      {/* {playlists?.map((list, i) => {
        return <SidebarOption key={i} title={list.name} />;
      })} */}
    </SidebarContainer>
  );
}

export default Sidebar;
