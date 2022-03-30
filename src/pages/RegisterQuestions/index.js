import React, { useState } from "react";
import * as C from './style';
import {questions} from '../../questions';

import {Theme} from '../Theme'

export const RegisterQuestions = () => {
  const [newQuestions, setNewQuestions] = useState(questions);
  const [currentQuestion, setCurrentQuestion] = useState({
    question: '',
    options: [],
    correctOption: '',
  });
  
  const qtdAnswers = [0,1,2,3,4];

  const getAnswer = (event, index) => { //Pega a questao cadastrada e salva em data
    const currentData = {...currentQuestion};
    currentData.options[index] = event.target.value;
    setCurrentQuestion(currentData);
  }

  const handleSave = () => { //Adiciona a questao cadastrada no array com as outras questoes
    const newArr = [...newQuestions];
    newArr.push(currentQuestion);
    setNewQuestions(newArr);
    localStorage.setItem('question', JSON.stringify(newArr));
    alert('Questão cadastrada com sucesso!');
  };

  return (
    <Theme>
      <form>
        <C.Container>
          <label htmlFor='input-questions'> Digite a questão no campo abaixo </label>
          <C.Input id='input-questions' onChange={ (e) => setCurrentQuestion({...currentQuestion, question: e.target.value})} value={currentQuestion.question} required />

          <label>Escolha 5 respostas para a questão acima</label>

          { qtdAnswers.map ( (item, index) => (
            <C.InputArea key={index}>
            <span><input type='radio' name='select_answer' value={index} onChange={(e) => setCurrentQuestion({...currentQuestion, correctOption: Number(e.target.value)})}/></span>
            <C.Input className="answer_input" key={index} id={index} onChange={(e) => getAnswer(e, index)} required />
            </C.InputArea>
          ))}

          <p>Antes de salvar, selecione a resposta correta para essa questao.</p>

          <C.Button onClick={handleSave}>Salvar</C.Button>
        </C.Container>
      </form>
    </Theme>
  )
}
