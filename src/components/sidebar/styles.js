import styled from 'styled-components'

export const SidebarContainer = styled.div`
  /* border: 1px solid black; */
  /* height: 100vh; */
  min-height: 100vh;
  height: 100%;
  flex: 0.2;
  background-color: #040404;
  color: white;
  min-width: 230px;
  padding-left: 10px;
  padding-right: 10px;
  overflow-y: overlay;

  /* overflow-y: overlay;
  margin-bottom: 40px; */
  >hr {
    border: 1px solid #282828;
    width: 90%;
    margin: 10px auto;
  }
`


export const SidebarLogo = styled.img `
  height: 70px;
  padding: 10px;
  margin-right: auto;
  /* width: 100px; */
  /* object-fit: contain; */

`
export const SidebarTitle = styled.strong`
  margin-left: 10px;
  padding: 5px;
  font-size: 12px;
`
