import React, { Component } from 'react';
import styled, {keyframes} from 'styled-components'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Input from '../components/Input';
import BgPhoto from '../img/img5.png';
import ValidationError from '../components/ValidationError';
import Logo from '../img/logo1.png';

class Login extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            formValues:{
            email:"",
            senha:""
            },
            errors:{}
        }
    }
    validationFields = ()=>{
        let formValues = this.state.formValues
        let isValid = true;
        const errors = {}
        if(formValues.email !== "taiscunha@gmail.com" && formValues.email.length > 0){
            errors.errorMensagem = "O Email é invalido"
            isValid = false;
        }
        if(formValues.senha !== "123456789" && formValues.senha.length > 0 && formValues.email === "taiscunha@gmail.com"){
            errors.errorTelefone = "A senha não corresponde ao email cadastrado"
            isValid = false;
        }
        if(!formValues.senha || !formValues.email){
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
            this.props.history.push('/sistema')
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
                    <Header />
                </DivHeader>
                <DivMain>
                    <Form onSubmit={this.handleSubmit}>
                        <Imagem src={Logo}></Imagem>
                        <Input value={this.state.formValues.email} type={'text'} name={'email'} onChangeValue={this.handleChangeInput}>Email:</Input>
                        <Input value={this.state.formValues.senha} type={'password'} name={'senha'} onChangeValue={this.handleChangeInput}>Senha:</Input>
                        <ValidationError error={this.state.errors}/>
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
const Imagem = styled.img`
    width:8rem;
    height:7rem;
    margin-bottom: 15px;
    border-radius: 15px;
`
const Form = styled.form`
    grid-area:main;
    border: 1px solid rgba(255, 255, 255, 0.082);
    box-shadow: 10px 10px 10px 10px rgb(0 0 0 / 60%);
    border-radius: 10px;
    padding: 30px;
    color: #001B44;
    background-color: rgba(255, 255, 255, 0.9);
    text-align: center;
`
export default Login;