import React, { useEffect, useState } from 'react';
import * as C from './style';
import {questions} from '../../questions';
import { Link } from 'react-router-dom';

export const EndTest = () => {
  const [result, setResult] = useState(0);

  useEffect( ()=> {
    let answers = []; 
    for(let i = 0; i < questions.length; i++) {
      answers.push(JSON.parse(localStorage.getItem(`option${i}`)));
    }
    setResult(calcResult(answers, questions));
  }, []);

  const calcResult = (userAnswers, questions) => {
    let count = 0;
    for (let index = 0; index < userAnswers.length; index++) {
      if(userAnswers[index] === questions[index].correctOption[0]) {
        count += 1;
      }
    }
    localStorage.clear();
    return count;
  }
  
  return(
    <C.Container>
      <C.Title>Teste Finalizado</C.Title>
      <C.Result>Voce acertou <span>{result}</span> questões</C.Result>
      <Link to='/'>Ir para página inicial</Link>
    </C.Container>
  )
}