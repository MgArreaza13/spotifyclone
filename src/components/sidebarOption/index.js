import React from "react";
import { SidebarOptionContainer } from "./styles";

function SidebarOption({ title, Icon }) {
  return (
    <SidebarOptionContainer>
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </SidebarOptionContainer>
  );
}

export default SidebarOption;
