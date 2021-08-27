import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components'
import Header from '../components/Header';
import Footer from '../components/Footer';
import img1 from '../img/img4.png';
import img2 from '../img/img7.png';

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
                    No ano de 2021, 4 amigos, Pedro Peralva, Sâmela Barbosa, Italo Nascimento e Cristiano Kituxi 
                    sentiram que os pais não contavam, no Rio de Janeiro, com um lugar confortável, 
                    seguro e com pessoas preparadas para educar e cuidar dos primeiros anos de vida de seus filhos.<br></br><br></br>
                    Decidiu-se então investirem na ideia e, em fevereiro de 2021, abriram a escola Resilinha.<br></br><br></br>
                    Com uma proposta diferenciada, que visa o desenvolvimento da criança por meio de seu autoconhecimento,
                    não demorou muito para que o nome Resilinha começasse a aparecer com destaque entre as instituições
                    de educação infantil.
                    </DivMensagem>
                    <Imagem src={img1}/>
                    <DivMissao>
                        <TituloQuem>Missão</TituloQuem>
                        <Linha/>
                        <MensagemQuem>
                            A Resilinha é uma Casa de Educação que tem como meta cuidar e educar crianças com prazer e seriedade. Para isso,
                            damos uma direção intencional ao desenvolvimento de crianças de 0 a 9 anos, favorecendo o despertar de seu potencial
                            a partir de ações educativas que possibilitem a formação de cidadãos críticos e responsáveis, cientes de seus deveres e direitos.
                        </MensagemQuem>
                    </DivMissao>
                    <DivVisao>
                        <TituloQuem>Visão</TituloQuem>
                        <Linha/>
                        <MensagemQuem>
                            Oferecer a seus alunos e colaboradores a possibilidade de se desenvolverem, tornando-se cidadãos éticos,
                            capazes de contribuir para a evolução da comunidade a que pertencem.
                            Isso porque se preocupa com uma sociedade mais justa e competente em seus afazeres.
                        </MensagemQuem>
                    </DivVisao>

                    <DivValores>
                        <TituloQuem>Valores</TituloQuem>
                        <Linha/>
                        <MensagemQuem>
                            Baseia sua prática educacional na crença de que cada ser humano
                            é capaz de construir seu próprio
                            conhecimento segundo princípios básicos,
                            como: respeito, solidariedade, comprometimento e busca pela felicidade. Como educadores,
                            procuramos seguir os pensadores que nos ajudam a refletir sobre o dia a dia na escola
                        </MensagemQuem>
                    </DivValores>
                    <ImagemFooter src={img2}/>
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
`
const DivMain = styled.main`
    grid-area:content;
    display:grid;
    grid-template-areas:
    "titulo titulo titulo"
     "main1 main1 main1"
     "main2 main2 main2"
     "main3 main4 main5"
     "main6 main6 main6";
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
    height: 300px;
    font-size: 25px;
    border-radius: 10px;
    justify-self: center;
    padding: 40px;
    background-color: #001B44;
    color: #BADCF5;
    box-shadow: 0px 0px 24px -2px rgb(0 0 0 / 100%);
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
`
const Linha = styled.div`
    width: 260px;
    border: 1px solid #BADCF5;;
    text-align: center;
    margin-bottom: 30px;
`
const Imagem = styled.img`
    grid-area:main2;
    justify-self: center;
    margin-bottom: 100px;
    margin-top: 100px;
`
const ImagemFooter = styled.img`
    grid-area:main6;
    justify-self: center;
    margin-top: 100px;
`
export default QuemSomos;