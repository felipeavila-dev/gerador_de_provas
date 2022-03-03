import React, { useEffect, useState } from 'react';
import {Theme} from '../Theme';
import * as C from './style';
import {questions} from '../../questions';
import { useNavigate } from 'react-router-dom';

export const Question = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentOption, setCurrentOptions] = useState('valor padrao');
  // const [allOptions, setAllOptions] = useState(['initial']);
  const navigate = useNavigate();


  useEffect( () => {
    let containsSelected = document.querySelector('.selected');  
    if(containsSelected) {
      containsSelected.classList.remove('selected');
    }
  }, [currentQuestion]);

  const handleSelectOption = (event) => {
    // let selectedOption = event.target;
    let containsSelected = document.querySelector('.selected');

    if(containsSelected) {
      containsSelected.classList.remove('selected');
      event.target.classList.add('selected');
      setCurrentOptions(Number(event.target.getAttribute('value')));
    } else {
      event.target.classList.add('selected');
      setCurrentOptions(Number(event.target.getAttribute('value')));
    }
  }
  
  const handleGoNext = () => {
    let containsSelected = document.querySelector('.selected');
    if(containsSelected) {
      localStorage.setItem(`option${currentQuestion}`, JSON.stringify(currentOption)); //FUNCIONANDO PERFEITAMENTE
    
      if(currentQuestion === questions.length - 1) {
        navigate('/end');
      } else {
        setCurrentQuestion(currentQuestion + 1);
      }
    } else {
      alert('Voce precisa selecionar uma resposta!')
    }
  }

  const handleGoBack = () => {
   
  }

  return (
    <Theme>
      <C.Container>
        <C.Question>
          <p>{questions[currentQuestion].question}</p>
          <span>{currentQuestion + 1} / {questions.length}</span>
        </C.Question>
        <hr />
        <C.AnswerArea>
          {questions[currentQuestion].options.map( (item, index) => ( 
            <C.Answer key={index} value={index} onClick={handleSelectOption} >{item}</C.Answer>          
          ))}
        </C.AnswerArea>

        {/* VALIDAÇÕES RELACIONADAS AOS BOTOES */}
        {currentQuestion < questions.length - 1 && 
          <>
            <C.Button onClick={handleGoBack} bgColor={'darkred'}>Voltar</C.Button>
            <C.Button onClick={handleGoNext}>Avançar</C.Button>
          </>
        }

        {currentQuestion === questions.length - 1 &&
          <>
            <C.Button onClick={handleGoBack} bgColor={'darkred'}>Voltar</C.Button>
            <C.Button onClick={handleGoNext}>Finalizar</C.Button>
          </>
        }
      </C.Container>
    </Theme>
  )
}