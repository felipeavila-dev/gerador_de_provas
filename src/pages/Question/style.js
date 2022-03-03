import styled from "styled-components";

export const Container = styled.div`
  hr {
    margin: 20px 0px;
    border: none;
    height: 1px;
    background-color: lightgray;
  }
`;

export const Question = styled.h3`
  display: flex;
  justify-content: space-between;
  font-size: 14px;

  span{
    color: darkred;
  }
`;

export const AnswerArea = styled.div``;

export const Answer = styled.p`
  font-size: 14px;
  padding: 7px 5px;
  margin-bottom: 7px;
  border-radius: 5px;
  background-color: rgba(13, 0, 158, .1);
  user-select:none;

  &.selected{
    background-color: lightgreen;
  }
`;

export const Button = styled.button`
  background-color: ${props => props.bgColor ? 'transparent' : 'green'};
  border: 0;
  padding: 10px 20px;
  border-radius: 10px;
  color: ${props => props.bgColor ? 'darkred' : 'white'};
  font-weight: ${props => props.bgColor ? '' : 'bold'};
  margin-top: 10px;
  margin-right: 10px;
  cursor: pointer;

  &:hover{
    background-color: ${props => props.bgColor ? '': 'darkgreen'};
    text-decoration: ${props => props.bgColor ? 'underline': ''};
  }
`;