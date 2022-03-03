import React, { useState } from "react";
import * as C from './style';

import {Theme} from '../Theme'

export const RegisterQuestions = () => {
  const [question, setQuestions] = useState('');
  const [arrQuestion, setArrQuestion] = useState([]);
  // const [answer, setAnswer] = useState([]);
  const qtdAnswers = [0,1,2,3,4];
  
  const handleAnswer = (event) => {
    let identifier = event.target.id;
    localStorage.setItem(`question${identifier}`, JSON.stringify(event.target.value));
  }

  const useLocalStorage = () => {
    let newArr = [...arrQuestion];
    newArr.push(question);
    setArrQuestion(newArr);

    localStorage.setItem('question', JSON.stringify(newArr));
  }
  
  return (
    <Theme>
      <form>
        <C.Container>
          <label htmlFor='input-questions'> Digite a questão no campo abaixo </label>
          <C.Input id='input-questions' onChange={ (e) => setQuestions(e.target.value) } value={question} required />

          <label>Escolha 5 respostas para a questão acima</label>

          { qtdAnswers.map ( (item, index) => (
            <C.InputArea key={index}>
            <span>{item + 1}</span>
            <C.Input key={index} id={index} onChange={handleAnswer} required />
            </C.InputArea>
          ))}

          <p>Antes de salvar, selecione a resposta correta para essa questao clicando 1x em cima</p>

          <C.Button onClick={useLocalStorage}>Salvar</C.Button>      
        </C.Container>
      </form>
    </Theme>
  )
}