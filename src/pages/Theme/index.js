/* eslint-disable react/prop-types */
import React from 'react';
import * as C from './style.js';
import { Link } from 'react-router-dom';

export const Theme = (props) => {
  return(
    <C.Container>
      <C.LeftSide>
        <C.Title>
          <Link to='/'>
            Painel administrativo
          </Link>
        </C.Title>
          <C.Menu><Link to='/register'>Cadastrar questões</Link></C.Menu>
          <C.Menu><Link to='#'>Sair do sistema</Link></C.Menu>
      </C.LeftSide>
      <C.RightSide>
        {props.children}
      </C.RightSide>
    </C.Container>
  )
}