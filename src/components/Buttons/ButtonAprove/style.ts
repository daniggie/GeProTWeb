import styled from "styled-components";

export const Container = styled.div`
  width: 205px;
  background: #00579D;
  border-radius: 5px;
  border:0px;
  display:flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  
  &:hover{
    background: #0078bd;
    transition: 0.4s;
  }
  p{
    font-size:20px;
    color:#fff;
    display:flex;
    justify-content: center;
  }
`;
