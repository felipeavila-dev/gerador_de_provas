import styled from "styled-components";

export const Container = styled.div`
  width: 80vw;
  min-height: 70vh;
  max-height: 100vh;
  background-color: #F1F1F1;
  display: flex;
  box-shadow: 5px 5px 10px darkgray;
  border-radius: 15px;
`;

export const LeftSide = styled.div`
  width: 350px;
  background-color: #0D009E;
  padding: 40px;
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 15px 0px 0px 15px;

  a{
    text-decoration: none;
    color: lightgray;
  }
`;

export const Title = styled.h2`
  margin-bottom: 40px;  
  font-size: 26px;  
  color: white;
  
`;

export const Menu = styled.p`
  font-size: 14px;
  color: lightgray;
  margin-top: 20px;
`;

export const RightSide = styled.div`
  flex: 1;
  border-radius: 0px 15px 15px 0px;
  padding: 40px;
  display: flex;
  flex-direction: column;
`;
