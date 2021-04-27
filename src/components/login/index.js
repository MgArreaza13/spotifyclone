import React from 'react'
import { loginUrl } from '../../spotify'
import {LoginContainer} from "./styles"

function Login() {
  return (
    <LoginContainer>
      <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt=""/>

      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </LoginContainer>
  )
}

export default Login
