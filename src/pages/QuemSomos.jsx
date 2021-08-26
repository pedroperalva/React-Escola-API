import React, { Component } from 'react';
import styled, {keyframes}from 'styled-components'
import Header from '../components/Header';
import Footer from '../components/Footer';

class QuemSomos extends Component {

    render() {
        return (
            <DivPrincipal>
                <DivHeader>
                    <Header />
                </DivHeader>
                <DivMain>
            <Titulo>Quem Somos

            </Titulo>
            <DivMensagem>

            </DivMensagem>
            <DivMissao>
            <TituloQuem>missao</TituloQuem>
            <MensagemQuem>
            A Resilinha é uma Casa de Educação que tem como meta cuidar e educar crianças com prazer e seriedade. Para isso, 
            damos uma direção intencional ao desenvolvimento de crianças de 0 a 9 anos, favorecendo o despertar de seu potencial
             a partir de ações educativas que possibilitem a formação de cidadãos críticos e responsáveis, cientes de seus deveres e direitos.
            </MensagemQuem>
            </DivMissao>
            <DivVisao>
            <TituloQuem>visao</TituloQuem>
            <MensagemQuem>
            Oferecer a seus alunos e colaboradores a possibilidade de se desenvolverem, tornando-se cidadãos éticos,
             capazes de contribuir para a evolução da comunidade a que pertencem. 
            Isso porque se preocupa com uma sociedade mais justa e competente em seus afazeres.

            </MensagemQuem>
            </DivVisao>
            
            <DivValores>
            <TituloQuem>valores</TituloQuem>
            <MensagemQuem>
            Baseia sua prática educacional na crença de que cada ser humano
             é capaz de construir seu próprio 
            conhecimento segundo princípios básicos, 
            como: respeito, solidariedade, comprometimento e busca pela felicidade. Como educadores, 
            procuramos seguir os pensadores que nos ajudam a refletir sobre o dia a dia na escola
            </MensagemQuem>
            </DivValores>

                </DivMain>
                <DivFooter>
                    <Footer />
                </DivFooter>
            </DivPrincipal>
        )
    }
}
const animationFrame = keyframes`
    0% {
      opacity: 0;
      transform: translateX(-30px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
`
const DivPrincipal = styled.div`
    display: grid;
    grid-gap: 20px;
    gap: 20px;
    width: 100%;
    min-height: 100vh;
    grid-template-areas:
        "header"
        "content"
        "footer ";
    grid-template-columns: 1fr;
    grid-template-rows: 8rem auto 70px;
    grid-auto-rows: 150px;
`
const DivMain = styled.main`
    grid-area:content;
    display:grid;
    grid-template-areas:
    "titulo titulo titulo"
     "main1 main1 main1"
     "main2 main3 main4";
    grid-gap:20px;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    align-items: center;
    animation: ${animationFrame} 1.5s;
`
const DivHeader = styled.header`
    grid-area:header;
`
const DivFooter = styled.footer`
    grid-area:footer;
`
const Titulo = styled.h1`
grid-area:titulo;
text-align: center;
color: #001B44;
font-size: 50px;
margin-bottom: 50px;
margin-top: 70px;
`
const DivMensagem = styled.div`
grid-area:main1;
width: 80%;
border: 1px solid black;
text-align: center;
justify-self: center;
pading: 20px;
`
const DivVisao = styled.div`
grid-area:main3;
text-align:center;
border: 1px solid black;
border-radius:10px;
padding: 20px;
width:260px;
height:300px;
justify-self:center;
`
const DivMissao = styled.div`
grid-area:main2;
text-align:center;
border: 1px solid black;
border-radius: 10px;
padding: 20px;
width:260px;
height:300px;
justify-self:center;

` 
const DivValores = styled.div`
grid-area:main4;
text-align:center;
border: 1px solid black;
border-radius: 10px;
padding: 20px;
width:260px;
height:300px;
justify-self:center;
`
const TituloQuem = styled.h1`
`
const MensagemQuem = styled.p`
`
export default QuemSomos;