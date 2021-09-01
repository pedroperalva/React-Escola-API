import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components'
import Header from '../components/Header';
import Footer from '../components/Footer';
import img1 from '../img/img4.png';

class QuemSomos extends Component {

    render() {
        return (
            <DivPrincipal>
                <DivHeader>
                    <Header />
                </DivHeader>
                <DivMain>
                    <Titulo>Quem Somos</Titulo>
                    <DivMensagem>
                        <Mensagem>
                            No ano de 2021, 4 amigos, Pedro Peralva, Sâmela Barbosa, Italo Nascimento e Cristiano Kituxi
                            sentiram que os pais não contavam, no Rio de Janeiro, com um lugar confortável,
                            seguro e com pessoas preparadas para educar e cuidar dos primeiros anos de vida de seus filhos.<br></br><br></br>
                            Decidiu-se então investirem na ideia e, em fevereiro de 2021, abriram a escola Resilinha.<br></br><br></br>
                            Com uma proposta diferenciada, que visa o desenvolvimento da criança por meio de seu autoconhecimento,
                            não demorou muito para que o nome Resilinha começasse a aparecer com destaque entre as instituições
                            de educação infantil.
                        </Mensagem>

                        <Imagem src={img1} />
                    </DivMensagem>

                    <DivMissao>
                        <TituloQuem>Missão</TituloQuem>
                        <Linha />
                        <MensagemQuem>
                            A Resilinha é uma Casa de Educação que tem como meta cuidar e educar crianças com prazer e seriedade. Para isso,
                            damos uma direção intencional ao desenvolvimento de crianças de 0 a 9 anos, favorecendo o despertar de seu potencial
                            a partir de ações educativas que possibilitem a formação de cidadãos críticos e responsáveis, cientes de seus deveres e direitos.
                        </MensagemQuem>
                    </DivMissao>
                    <DivVisao>
                        <TituloQuem>Visão</TituloQuem>
                        <Linha />
                        <MensagemQuem>
                            Oferecer a seus alunos e colaboradores a possibilidade de se desenvolverem, tornando-se cidadãos éticos,
                            capazes de contribuir para a evolução da comunidade a que pertencem.
                            Isso porque se preocupa com uma sociedade mais justa e competente em seus afazeres.
                        </MensagemQuem>
                    </DivVisao>

                    <DivValores>
                        <TituloQuem>Valores</TituloQuem>
                        <Linha />
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
    background-color: #dfdfdf ;
    @media (max-width: 700px) {
    background-color: #dfdfdf ;
  }
`
const DivMain = styled.main`
    grid-area:content;
    display:grid;
    grid-template-areas:
    "titulo titulo titulo"
     "main1 main1 main1"
     "main3 main4 main5"
     ;
    grid-gap:20px;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    align-items: center;
    animation: ${animationFrame} 1.5s;
    padding-bottom: 200px;
    background-color: #dfdfdf ;
    @media (max-width: 1110px) {
    display:flex;
    flex-direction:column;
    background-color: #dfdfdf ;
  }
  @media (max-width: 850px) {
    display:flex;
    flex-direction:column;
    background-color: #dfdfdf ;
  }
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
    margin-bottom: 80px;
    margin-top: 70px;
`
const DivMensagem = styled.div`
    grid-area:main1;
    width: 100%;
    height: 450px;
    padding: 40px;
    background-color: #001B44;
    box-shadow: 0px 0px 24px -2px rgb(0 0 0 / 100%);
    display:grid;
    grid-template-areas: 
        'texto'
        'imagem';
    margin-bottom: 200px;
`
const Mensagem = styled.p`
    font-size: 20px;
    justify-self: center;
    color: #BADCF5;
    grid-area:texto;
    width: 80%;
`
const DivVisao = styled.div`
    grid-area:main4;
    text-align:center;
    border-radius:10px;
    padding: 20px;
    width:260px;
    height:300px;
    justify-self:center;
    background-color: #001B44;
    box-shadow: 0px 0px 24px -2px rgb(0 0 0 / 100%);
`
const DivMissao = styled.div`
    grid-area:main3;
    text-align:center;
    border-radius: 10px;
    padding: 20px;
    width:260px;
    height:300px;
    justify-self:center;
    background-color: #001B44;
    box-shadow: 0px 0px 24px -2px rgb(0 0 0 / 100%);
`
const DivValores = styled.div`
    grid-area:main5;
    text-align:center;
    border-radius: 10px;
    padding: 20px;
    width:260px;
    height:300px;
    justify-self:center;
    background-color: #001B44;
    box-shadow: 0px 0px 24px -2px rgb(0 0 0 / 100%);
`
const TituloQuem = styled.h1`
    font-size: 40px;
    margin-bottom: 20px;
    color: #BADCF5;
`
const MensagemQuem = styled.p`
    color: #BADCF5;
    font-size: 1.4rem;
    line-height: 1.8rem;

`
const Linha = styled.div`
    width: 26rem;
    border: .1rem solid #BADCF5;;
    text-align: center;
    margin-bottom: 3rem;
`
const Imagem = styled.img`
    grid-area:imagem;
    justify-self: center;
    margin-bottom: 10rem;
    margin-top: 10rem;
    @media (max-width: 1035px) {
        width: 60%;
  }
`
export default QuemSomos;