import React, { Component } from 'react';
import styled, {keyframes} from 'styled-components';
import Photo from '../img/img1.png';
import BgPhoto from '../img/bg-img.jpg';
import Input from '../components/Input';
import Button from '../components/Button';
import TextArea from '../components/TextArea';
import Header from '../components/Header';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import ValidationError from '../components/ValidationError';

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
            },
            errors:{}
        }
    }
    validationFields = ()=>{
        let formValues = this.state.formValues
        let isValid = true;
        const errors = {}
        if(formValues.nome.charAt(0) !== formValues.nome.charAt(0).toUpperCase() && formValues.nome.length > 0){               
            errors.errorNome = "A primeira letra do nome deve ser maiúscula"
            isValid = false;
        }
        if(!formValues.email.includes("@") && formValues.email.length > 0){
            errors.errorMensagem = "Insira um Email válido"
            isValid = false;
        }
        if((formValues.telefone.length > 11 || formValues.telefone.length < 10 || isNaN(formValues.telefone)) && formValues.telefone.length > 0){
            errors.errorTelefone = "Insira um telefone válido"
            isValid = false;
        }
        if(!formValues.nome || !formValues.email || !formValues.telefone || !formValues.mensagem){
            errors.errorFields = "Todos os campos devem ser preenchidos"
            isValid = false;
        }
            this.setState({errors})
            return isValid
        }
    handleSubmit = (e)=>{
        e.preventDefault()
        const isValid = this.validationFields()
        if (isValid){
            this.setState({show:!this.state.show})
        }
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
                        <Header>
                            <Menu/>
                        </Header>
                    </DivHeader>
                    <DivMain>
                        {this.state.show? (<>
                            <Titulo>Contato</Titulo>
                            <Imagem src={Photo} alt="imgcontato"/>
                            <Form onSubmit={this.handleSubmit}>  
                                <Input value={this.state.formValues.nome} type={'text'} name={'nome'} onChangeValue={this.handleChangeInput}>Nome:</Input>
                                <Input value={this.state.formValues.email} type={'text'} name={'email'} onChangeValue={this.handleChangeInput}>Email:</Input>
                                <Input value={this.state.formValues.telefone} type={'text'} name={'telefone'} onChangeValue={this.handleChangeInput}>Telefone:</Input>
                                <TextArea value={this.state.formValues.mensagem} type={'text'} name={'mensagem'} onChangeValue={this.handleChangeInput}>Mensagem:</TextArea>
                                <ValidationError error={this.state.errors}/>
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
    margin-top: 50px;
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
    margin-bottom: 50px;
    margin-top: 70px;
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