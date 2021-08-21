import React, { Component } from 'react';
import styled from 'styled-components';
import Photo from '../img/img1.png';
import BgPhoto from '../img/bg-img.jpg';
import Input from '../components/Input';
import Button from '../components/Button';
import TextArea from '../components/TextArea';

class Contato extends Component {

    render() {
        return (
            <DivPrincipal>
                <DivMain>
                    <Titulo>Contato</Titulo>
                    <Imagem src={Photo} alt="imgcontato" />
                    <Form>
                        <Input>Nome:</Input>
                        <Input>Email:</Input>
                        <Input>Telefone:</Input>
                        <TextArea>Mensagem:</TextArea>
                        <Button style={{ width: '500px' }}>Enviar</Button>
                    </Form>
                </DivMain>
            </DivPrincipal>
        )
    }
}
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
    grid-template-rows: 60px auto 40px;
    grid-auto-rows: 150px;
    background-image: url(${BgPhoto});
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
`
const DivMain = styled.main`
    grid-area:content;
    display:grid;
    grid-template-areas:
        "titulo titulo"
        "main1 main2 ";
    grid-gap:20px;
    justify-content: center;
    align-items: center;
`
const Titulo = styled.h1`
    grid-area:titulo;
    text-align: center;
`
const Imagem = styled.img`
    grid-area:main1;
    max-width: 80%;
    max-height: 80%;
`
const Form = styled.form`
    grid-area:main2;
`

export default Contato;