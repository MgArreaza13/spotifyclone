import React from 'react'
import Body from '../body'
import Footer from '../footer'
import Sidebar from '../sidebar'
import { PlayerContainer, PlayerBody } from './styles'


function Player({ spotify }) {
  return (
    <PlayerContainer>
      <PlayerBody>
        {/* Sidebar */}
        <Sidebar />
        {/* body */}
        <Body spotify={spotify}/>
      </PlayerBody>
      {/* footer */}
      <Footer />
    </PlayerContainer>
  )
}

export default Player
