import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Intro from "../components/Intro";
import Sobre from "../components/Sobre";
import Cards from "../components/Cards";
import Certificado from "../img/certificate.png";
import Livro from "../img/book.png";
import Foguete from "../img/rocket.png";

class Home extends Component {
  render() {
    return (
      <DivPrincipal>
        <DivHeader>
          <Header />
        </DivHeader>
        <DivContent>
          <Intro />
          <Sobre />
          <DivCards>
            <Cards
              imagem={Certificado}
              subtitle="Ensino de qualidade"
              p="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Integer vitae justo eget magna fermentum iaculis eu non diam."
            />
            <Cards
              imagem={Foguete}
              subtitle="Evolução constante"
              p="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <Cards
              imagem={Livro}
              subtitle="Biblioteca aberta"
              p="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Massa massa ultricies mi quis hendrerit dolor magna eget."
            />
          </DivCards>
        </DivContent>
        <DivFooter>
          <Footer />
        </DivFooter>
      </DivPrincipal>
    );
  }
}
const animationFrame = keyframes`
    0% {
      opacity: 0;
      transform: translateY(-30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
`
const DivPrincipal = styled.div`
  display: grid;
  width: 100%;
  min-height: 100vh;
  grid-template-areas:
    "header"
    "content"
    "footer ";
  grid-template-columns: 1fr;
  grid-template-rows: 8rem auto 7rem;
  grid-auto-rows: 15rem;
`;

const DivCards = styled.div `
    background-color: #001B44;
    display: flex;
    justify-content: space-around;
    align-items: center;
    animation: ${animationFrame} 1.5s;
    @media (max-width: 1100px) {
      flex-direction: column;
    }
`

const DivHeader = styled.header`
  grid-area: header;
`;
const DivContent = styled.main`
  grid-area: content;
  animation: ${animationFrame} 1.5s;
`;
const DivFooter = styled.footer`
  grid-area: footer;
`;
export default Home;
