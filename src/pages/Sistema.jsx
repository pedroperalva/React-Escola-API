import React, { Component } from 'react';
import styled from 'styled-components'
import HeaderSistema from '../components/HeaderSistema';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Input from '../components/Input';
import Select from '../components/Select';
import BGIMG from '../img/bg-img3.jpg';

class Sistema extends Component {

    constructor(props) {
        super(props)

        this.state = {
            show: true,
            change: 'first',
            value:''
        }
    }
    showInput = () => {
        if (this.state.change === 'second') {
            this.props.history.push('/sistema-list')
        }
        if (this.state.change === 'third') {
            this.setState({ show: !this.state.show })
        }
        if (this.state.change === 'fourth') {
            this.props.history.push('/sistema-add')
        }
    }
    handleChangeValue = async (e) => {
        await this.setState({ change: e.target.value })
        this.showInput()
    }
    handleChangeInput = (e) => {
        this.setState({ value: e.target.value })
    }
    getAluno = (e) =>{
        e.preventDefault()

    }

    render() {
        return (
            <DivPrincipal>
                <DivHeader>
                    <HeaderSistema />
                </DivHeader>
                <DivMain>
                    <Titulo>Portal do Educador</Titulo>
                    <DivCard>
                        <BemVindo>Seja bem-vindo(a), taiscunha@gmail.com!</BemVindo>
                        <Select changeValue={this.state.change} value={'Escolha uma opção'} value1={'Buscar Todos os Alunos'} value2={'Buscar Aluno(a)'}
                            value3={'Adicionar Aluno(a)'} onChange={this.handleChangeValue} />
                        {this.state.show ? (
                            <div></div>
                        ) : (
                            <DivInvisivel>
                                <Form onSubmit={this.getAluno}>
                                    <Input onChange={this.handleChangeInput} placeholder={'Insira o e-mail'} style={{ width: '300px' }, { borderRadius: '0px' }}></Input>
                                    <Button>Buscar</Button>
                                </Form>
                            </DivInvisivel>
                        )}
                    </DivCard>
                </DivMain>
                <DivFooter>
                    <Footer />
                </DivFooter>
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
    grid-template-rows: 8rem auto 70px;
    grid-auto-rows: 150px;
    background-image: url(${BGIMG});
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
    grid-template-areas: 
        "titulo titulo"
        "card card"
        "card card"
    ;
    grid-template-columns:1fr 1fr;
    justify-content: center;
    align-items: center;
`
const DivFooter = styled.footer`
    grid-area:footer;
`
const DivCard = styled.div`
    grid-area:card;
    justify-self: center;
    width: 40%;
    height: 90%;
    border-radius: 10px;
    display: grid;
    grid-template-areas: 
    "bemvindo"
    "select"
    "form";
    grid-template-columns: 1fr;
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow: 0px 0px 24px -2px rgb(0 0 0 / 100%);
`
const Titulo = styled.h1`
    grid-area: titulo;
    justify-self: center;
    color: #001B44;
    font-size: 50px;
    margin-bottom: 30px;
    margin-top: 30px;
`
const BemVindo = styled.h1`
    grid-area: bemvindo;
    margin:10px;
    justify-self: flex-start;
    color:#001B44;
    font-size:20px;
`
const DivInvisivel = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Form = styled.form`
    grid-area:form;
    justify-self: center;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export default Sistema;