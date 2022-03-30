import React, { useState } from "react"
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [userData, setUserData] = useState({
    user: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if( userData.user === 'usuario@usuario.com.br' && userData.password === '12345'){
      alert('Login efetuado com sucesso');
      navigate('/');
    } else{
      alert('Usuario e/ou senha inválidos');
    }
  }

  return(
    <>
     <div className="container">
       <div className="fs-1 text-center mb-1 text-dark">Seja bem vindo(a)!</div>
       <p className="text-center mb-4">Efetue login para acessar o sistema</p>
      <form>
        <div className="form-floating mb-4">
          <input className='form-control'
            type='email'
            id="email"
            required
            onChange={(event) => setUserData({...userData, user: event.target.value})}
            value={userData.user}
          />
          <label className="form-label" htmlFor="email" >Email</label>
          <div className="form-text">O email para login é: <b>usuario@usuario.com.br</b></div>
        </div>
        <div className="form-floating mb-4">
          <input 
            className='form-control'
            type='password' id="password"
            required 
            onChange={(event) => setUserData({...userData, password: event.target.value })}
            value={userData.password}
          />
          <label className="form-label" htmlFor="password" >Senha</label>
          <div className="form-text">A senha para login é: <b>12345</b></div>

        </div>

        <button className="btn btn-primary d-block mx-auto" onClick={handleSubmit}> Entrar 🔒 </button>    
      </form>
     </div>
    </>
  )
}