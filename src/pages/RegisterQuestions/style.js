import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  label{
    margin-top: 10px;
  }

  p{
    color: darkorange;
    font-size: 14px;
    margin: 5px 0px;
    font-weight: bold;
    text-align: center;
  }
`;
export const InputArea = styled.div`
  display: flex;
  align-items: center;
  margin: 2px 0px;

  span{
    margin-right: 5px;
    width: 15px;  
  }

`;

export const Input = styled.input`
  outline:0;
  border: 0;
  padding: 10px;
  border-radius: 5px;
  background-color: rgba(13, 0, 158, .1);
  margin-bottom: 5px;
  flex: 1;
`;

export const Button = styled.button`
  margin: 20px 0px;
  border: 0;
  padding: 10px 0px;
  background-color: green;
  border-radius: 10px;
  color: white;
  cursor: pointer;

  
  &:hover{
    background-color: darkgreen;
  }
`;