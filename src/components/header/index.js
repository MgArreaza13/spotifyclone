import { Avatar } from '@material-ui/core'
import { Search } from '@material-ui/icons'
import React from 'react'
import { useDataLayerValue } from '../../StateProvider'
import {HeaderContainer, HeaderLeft,  HeaderRight} from "./styles"
function Header({ spotify}) {

  const [{user}, dispatch] = useDataLayerValue()

  return (
    <HeaderContainer>
      <HeaderLeft>
        <Search />
        <input type="text" placeholder="Search"/>
      </HeaderLeft>

      <HeaderRight>
        <Avatar src={user?.images[0]?.url}/>
        <h4>{user?.display_name}</h4>
      </HeaderRight>
    </HeaderContainer>
  )
}

export default Header
