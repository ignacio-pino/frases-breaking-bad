import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Frase from "./components/Frase";

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #007d35 0%,
    #007d35 40%,
    #0f574e 100%
  );
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;

  :hover {
    cursor: pointer;
    box-shadow: 0px 0px 12px 4px #000;
    background-size: 400px;
    transition: all 0.2s ease;
  }
`;

function App() {
  const [frase, setFrase] = useState({});

  const consultarAPI = async () => {
    const api = await fetch("https://www.breakingbadapi.com/api/quote/random");
    const frase = await api.json();
    setFrase(frase[0]);
  };

  // cargar frase primera vez

  useEffect(() => {
    consultarAPI();
  }, []);

  return (
    <Contenedor>
      <Frase frase={frase} />
      <Boton onClick={consultarAPI}> Obtener frase</Boton>
    </Contenedor>
  );
}

export default App;
