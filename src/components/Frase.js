import React from "react";
import styled from "@emotion/styled";

const ContenedorFrase = styled.div`
  padding: 3rem;
  border-radius: 0.5rem;
  background-color: #fff;
  max-width: 800px;
  margin-top: 1rem;
  box-shadow: 0px 0px 8px 3px #000;

  h1 {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    position: relative;
    padding-left: 4rem;

    &::before {
      content: open-quote;
      font-size: 8rem;
      color: black;
      position: absolute;
      left: -1rem;
      top: -2rem;
    }
  }

  p {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.4rem;
    font-weight: bold;
    text-align: right;
    color: #666;
    margin-top: 2rem;
  }
`;

const MostrarFrase = styled.h1`
  margin-bottom: 1rem;
`;

const Frase = ({ frase }) => {
  return (
    <ContenedorFrase>
      <MostrarFrase>{frase.quote}</MostrarFrase>
      <p> - {frase.author}</p>
    </ContenedorFrase>
  );
};

export default Frase;
