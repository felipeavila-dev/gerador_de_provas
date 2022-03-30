import React, { useEffect, useState } from 'react';
import * as C from './style';
// import {questions} from '../../questions';
import { Link } from 'react-router-dom';

export const EndTest = () => {
  const [result, setResult] = useState(0);
  const localQuestions = JSON.parse(localStorage.getItem('question'));

  useEffect( ()=> {
    let answers = []; 
    for(let i = 0; i < localQuestions.length; i++) {
      answers.push(JSON.parse(localStorage.getItem(`option${i}`)));
    }
    setResult(calcResult(answers, localQuestions));
  }, []);

  const calcResult = (userAnswers, questions) => {
    let count = 0;
    for (let index = 0; index < userAnswers.length; index++) {
      if(userAnswers[index] === questions[index].correctOption) {
        count += 1;
      }
    }
    return (count / localQuestions.length) * 100;
  }
  
  return(
    <C.Container>
      <C.Title>Teste Finalizado</C.Title>
      <C.Result>Voce acertou <span>{result}% </span> questões</C.Result>
      <Link to='/'>Ir para página inicial</Link>
    </C.Container>
  )
}