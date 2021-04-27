import styled from "styled-components";

export const SidebarOptionContainer = styled.div`
  display: flex;
  align-items: center;
  color: gray;
  height: 40px;
  cursor: pointer;
  transition: 200ms color ease-in;
  &:hover {
    color: white;
  }

  .sidebarOption__icon {
    padding-right: 10px;
    padding-left: 10px;
  }

  > p {
    margin-top: 10px;
    margin-left: 10px;
    font-size: 14px;
  }
`;
