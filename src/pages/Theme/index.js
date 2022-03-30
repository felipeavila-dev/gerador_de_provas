/* eslint-disable react/prop-types */
import React from 'react';
import * as C from './style.js';
import { Link } from 'react-router-dom';

export const Theme = (props) => {
  const handleLogout = () => {
    localStorage.clear();
    alert('Obrigado por visitar nosso sistema. Até mais');
  }
  return(
    <C.Container className='container'>
      <C.LeftSide>
        <C.Title>
          <Link to='/'>
            Painel administrativo
          </Link>
        </C.Title>
        <C.Menu><Link to='/'>Ir para as questões</Link></C.Menu>
        <C.Menu><Link to='/register'>Cadastrar novas questões</Link></C.Menu>
        <C.Menu><Link to='/logout' onClick={handleLogout}><b>Sair do sistema</b></Link></C.Menu>
      </C.LeftSide>
      <C.RightSide>
        {props.children}
      </C.RightSide>
    </C.Container>
  )
}