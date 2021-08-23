import React, { Component } from 'react';
import styled, {keyframes} from 'styled-components';
import Photo from '../img/img1.png';
import BgPhoto from '../img/bg-img.jpg';
import Input from '../components/Input';
import Button from '../components/Button';
import TextArea from '../components/TextArea';
import Header from '../components/Header';
import Footer from '../components/Footer';

class Contato extends Component {

    constructor(props){
        super(props)

        this.state={
            show:true,
            formValues:{
                nome:"",
                email:"",
                telefone:"",
                mensagem:""
            }
        }
    }
    handleChange = (e)=>{
        e.preventDefault()    
        this.setState({show:!this.state.show})
    }
    handleChangeInput = (e)=>{
        let formValues = this.state.formValues
        formValues[e.target.name] = e.target.value
        this.setState({formValues})
    }
    render() {

            return (
                <DivPrincipal>
                    <DivHeader>
                        <Header/>
                    </DivHeader>
                    <DivMain>
                        {this.state.show? (<>
                            <Titulo>Contato</Titulo>
                            <Imagem src={Photo} alt="imgcontato"/>
                            <Form onSubmit={this.handleChange}>
                                <h1>{this.state.formValues.nome}</h1>
                                <h1>{this.state.formValues.email}</h1>
                                <Input value={this.state.formValues.nome} name={'nome'} onChangeValue={this.handleChangeInput}>Nome:</Input>
                                <Input value={this.state.formValues.email} name={'email'} onChangeValue={this.handleChangeInput}>Email:</Input>
                                <Input value={this.state.formValues.telefone} name={'telefone'} onChangeValue={this.handleChangeInput}>Telefone:</Input>
                                <TextArea value={this.state.formValues.mensagem} name={'mensagem'} onChangeValue={this.handleChangeInput}>Mensagem:</TextArea>
                                <Button style={{ width: '400px' }}>Enviar</Button>
                            </Form>
                            </>
                        ) : (
                        <>
                            <Titulo>Obrigado por entrar em contato conosco!<br/>
                            Entraremos em contato até um prazo máximo de 48 horas!
                            </Titulo>
                        </>
                        )}
                        
                    </DivMain>
                    <DivFooter>
                        <Footer/>
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
const DivHeader= styled.header`
    grid-area:header;
`
const DivFooter= styled.footer`
    grid-area:footer;
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
    animation: ${animationFrame} 1.5s;
`
const Titulo = styled.h1`
    grid-area:titulo;
    text-align: center;
    color: #001B44;
    font-size: 50px;
`
const Imagem = styled.img`
    grid-area:main1;
    max-width: 80%;
    max-height: 80%;
`
const Form = styled.form`
    grid-area:main2;
    border: 1px solid rgba(255, 255, 255, 0.082);
    box-shadow: 10px 10px 10px 10px rgb(0 0 0 / 40%);
    border-radius: 10px;
    padding: 30px;
    color: #001B44;
`

export default Contato;