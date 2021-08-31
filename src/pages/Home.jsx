import React, { Component } from "react";
import styled from "styled-components";
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
              p="Ensino de qualidade em uma das melhores escolas primarias do país.
              Escola premiada 6 vezes seguidas como top ensino infantil."
            />
            <Cards
              imagem={Foguete}
              subtitle="Evolução constante"
              p="Ensino de qualidade em uma das melhores escolas primarias do país.
              Escola premiada 6 vezes seguidas como top ensino infantil."
            />
            <Cards
              imagem={Livro}
              subtitle="Biblioteca aberta"
              p="Ensino de qualidade em uma das melhores escolas primarias do país.
            Escola premiada 6 vezes seguidas como top ensino infantil."
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
`

const DivHeader = styled.header`
  grid-area: header;
`;
const DivContent = styled.main`
  grid-area: content;
`;
const DivFooter = styled.footer`
  grid-area: footer;
`;
export default Home;
