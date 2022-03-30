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
  margin-right: 15px;
  }
`;