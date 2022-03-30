import React from "react";
import * as C from './style';
import { Link } from "react-router-dom";

export const Logout = () => {
  return(
    <C.Container className="container">
      <p id='emoji'>👋🏿</p>
      <h3>Obrigado por visitar nosso sistema!</h3>
      <p>Até mais!</p>
      <Link to='/login'>Fazer login novamente</Link>
    </C.Container>
  )
}