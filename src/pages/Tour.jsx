import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CardInst from '../components/CardInst';
import Inst1 from '../img/inst1.jpg';
import Inst2 from '../img/inst2.jpg';
import Inst3 from '../img/inst3.jpg';
import Inst4 from '../img/inst4.jpg';
import Inst5 from '../img/inst5.jpg';
import BgPhoto from '../img/bg-img2.jpg';
import Menu from '../components/Menu';

class Tour extends Component {

    render() {
        return (
            <DivPrincipal>
                <DivHeader>
                    <Header>
                        <Menu/>
                    </Header>
                </DivHeader>
                <DivMain>
                    <Titulo>Nossas Instalações</Titulo>
                    <CardInst style={{gridArea:'main1'}} src={Inst1}></CardInst>
                    <CardInst style={{gridArea:'main2'}} src={Inst2}></CardInst>
                    <CardInst style={{gridArea:'main3'}} src={Inst3}></CardInst>
                    <CardInst style={{gridArea:'main4'}} src={Inst4}></CardInst>
                    <CardInst style={{gridArea:'main5'}} src={Inst5}></CardInst>
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
    background-image: url(${BgPhoto});
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    justify-content: center;
`
const DivHeader = styled.header`
    grid-area:header;
`
const DivMain = styled.main`
    grid-area:content;
    display:grid;
    grid-template-areas:
        "titulo titulo"
        "main1 main2"
        "main3 main4"
        "main5 main6";
    grid-gap:20px;
    animation: ${animationFrame} 1.5s;
    justify-content: center;
`
const DivFooter = styled.footer`
    grid-area:footer;
    margin-top: 50px;
`
const Titulo = styled.h1`
    grid-area:titulo;
    text-align: center;
    color: #001B44;
    font-size: 50px;
    margin-bottom: 50px;
    margin-top: 70px;
`
export default Tour;