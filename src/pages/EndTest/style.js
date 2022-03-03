import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a{
    margin-top: 20px;
    color: gray
  }
`;

export const Title = styled.h2`
  font-size: 38px;
`;

export const Result = styled.p`
  font-size: 18px;

  span{
    color: green;
    font-weight: bold;
    font-size: 28px;
  }
`;