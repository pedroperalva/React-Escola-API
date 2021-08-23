import React, { Component } from 'react';
import styled, {keyframes} from 'styled-components'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Input from '../components/Input';
import BgPhoto from '../img/img5.png';

class Login extends Component {

    render() {
        return (
            <DivPrincipal>
                <DivHeader>
                    <Header />
                </DivHeader>
                <DivMain>
                    <Form>
                        <Titulo>Portal</Titulo>
                        <Input>Email:</Input>
                        <Input>Senha:</Input>
                        <Button style={{width:'100%'}}>Login</Button>
                    </Form>
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
`
const DivHeader = styled.header`
    grid-area:header;
`
const DivMain = styled.main`
    grid-area:content;
    display:grid;
    grid-auto-columns: minmax(350px, auto);
    grid-template-areas:
        "titulo"
        "main"
        "main2";
    grid-gap:20px;
    justify-content: center;
    align-items: center;
    animation: ${animationFrame} 1s;
`
const DivFooter = styled.footer`
    grid-area:footer;
`
const Titulo = styled.h1`
    grid-area:titulo;
    text-align: center;
    color: #001B44;
    font-size: 50px;
    margin-bottom: 15px;
`
const Form = styled.form`
    grid-area:main;
    border: 1px solid rgba(255, 255, 255, 0.082);
    box-shadow: 10px 10px 10px 10px rgb(0 0 0 / 60%);
    border-radius: 10px;
    padding: 30px;
    color: #001B44;
    background-color: rgba(255, 255, 255, 0.9);
`
export default Login;