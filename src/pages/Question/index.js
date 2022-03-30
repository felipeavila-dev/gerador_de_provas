import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Theme } from '../Theme';
import * as C from './style';
import {questions} from '../../questions';

import { useSelector } from 'react-redux';


export const Question = () => {
  const checkLogin = useSelector((state) => state.login);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentOption, setCurrentOption] = useState('valor padrao');
  const [updatedQuestions, setUpdatedQuestions] = useState(questions);
  
  const navigate = useNavigate();
  
    useEffect(() => {
        if(!checkLogin.isLogged) navigate('/login'); //Confere se o usuario esta logado. Caso nao esteja, redireciona para o login
      const checkLocal = localStorage.getItem('question');
      if(!checkLocal){
        localStorage.setItem('question', JSON.stringify(questions));
      } else {
        setUpdatedQuestions(JSON.parse(localStorage.getItem('question')));
      }
    }, []);
  
  useEffect( () => {
    
    let containsSelected = document.querySelector('.selected');
    if(containsSelected) {
      containsSelected.classList.remove('selected');
    }
  }, [currentQuestion]);

  const handleSelectOption = (event) => {
    // let selectedOption = event.target;
    console.log(updatedQuestions);
    let containsSelected = document.querySelector('.selected');

    if(containsSelected) {
      containsSelected.classList.remove('selected');
      event.target.classList.add('selected');
      setCurrentOption(Number(event.target.getAttribute('value')));
    } else {
      event.target.classList.add('selected');
      setCurrentOption(Number(event.target.getAttribute('value')));
    }
  }

  const handleGoNext = () => {
    let containsSelected = document.querySelector('.selected');
    if(containsSelected) { 
      localStorage.setItem(`option${currentQuestion}`, JSON.stringify(currentOption)); //FUNCIONANDO PERFEITAMENTE

      if(currentQuestion === updatedQuestions.length - 1) {
        navigate('/end');
      } else {
        setCurrentQuestion(currentQuestion + 1);
      }
    } else {
      alert('Voce precisa selecionar uma resposta!')
    }
  }

  const handleGoBack = () => {
    if(currentQuestion > 0 ) setCurrentQuestion(currentQuestion - 1);
  }

  return (
    <Theme>
      <C.Container>
        <C.Question>
          <p>{updatedQuestions[currentQuestion].question}</p>
          <span>{currentQuestion + 1} / {updatedQuestions.length}</span>
        </C.Question>
        <hr />
        <C.AnswerArea>
          {updatedQuestions[currentQuestion].options.map( (item, index) => (
            <C.Answer key={index} value={index} onClick={handleSelectOption} >{item}</C.Answer>
          ))}
        </C.AnswerArea>

        {/* VALIDAÇÕES RELACIONADAS AOS BOTOES */}
        {currentQuestion < updatedQuestions.length - 1 &&
          <>
            <C.Button className='btn btn-secondary' onClick={handleGoBack} bgColor={'darkred'}>Voltar</C.Button>
            <C.Button className='btn btn-success' onClick={handleGoNext}>Avançar</C.Button>
          </>
        }

        {currentQuestion === updatedQuestions.length - 1 &&
          <>
            <C.Button className='btn btn-secondary' onClick={handleGoBack} bgColor={'darkred'}>Voltar</C.Button>
            <C.Button className='btn btn-success' onClick={handleGoNext}>Finalizar</C.Button>
          </>
        }
      </C.Container>
    </Theme>
  )
}
