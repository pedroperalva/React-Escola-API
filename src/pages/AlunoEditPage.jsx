import React, { Component } from 'react';
import styled from 'styled-components';
import HeaderSistema from '../components/HeaderSistema';
import Footer from '../components/Footer';
import Input from '../components/Input';
import AlunosService from '../service/AlunosService';
import Button from '../components/Button';
import BGIMG from '../img/bg-img3.jpg';

class AlunoEditPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: null,
      aluno: {
        nome: '',
        mae: '',
        pai: '',
        endereco: '',
        telefone: '',
        emailresp: '',
      }
    }
  }
  componentDidMount() {
    if (this.props?.match?.params?.emailresp) {
      let email = this.props.match.params.emailresp
      console.log('ok')
      this.loadAluno(email)
    }
  }

  loadAluno = async (email) => {
    try {
      let res = await AlunosService.listAluno(email)
      let aluno = res.data.resultado[0]
      this.setState({
        id: 1,
        aluno,
      })
    }
    catch (error) {
      console.log(error)
      alert("Não foi possível carregar o aluno.")
    }

  }
  sendPost = async () => {
    let data = this.state.aluno

    if (data.nome === '') {
      alert("Nome é obrigatório!")
      return
    }
    if (data.mae === '') {
      alert("Mãe é obrigatório!")
      return
    }

    if (data.pai === '') {
      alert("Pai é obrigatório!")
      return
    }
    if (data.endereco === '') {
      alert("Endereço é obrigatório!")
      return
    }
    if (data.telefone === '') {
      alert("Telefone é obrigatório!")
      return
    }
    if (data.emailresp === '') {
      alert("Email do responsável é obrigatório!")
      return
    }
    try {
      if (this.props.match.params.emailresp) {
        await AlunosService.editAluno(this.props.match.params.emailresp, data)
        alert("Aluno editado com sucesso!")
      }
      else {
        await AlunosService.addAluno(data)
        alert("Aluno cadastrado com sucesso!")
      }
      this.props.history.push('/sistema-list')
    }
    catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log('Data: ' + error.response.data);
        console.log('Status: ' + error.response.status);
        console.log('Headers: ' + error.response.headers);
      } else if ('Request: ' + error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log('Request: ' + error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log('Config: ', error.config);
    };
  }
  handleSubmit = (e) => {
    e.preventDefault()
  }

  handleRedirect = () => {
    this.props.history.replace('/sistema')
  }

  handleChangeInput = (e) => {
    let input = this.state.aluno
    input[e.target.name] = e.target.value
    console.log(input[e.target.name])
    this.setState({ input })
  }
  render() {
    let title = this.state.id ? 'Editar Aluno' : 'Novo Aluno'
    let desc = this.state.id ? 'Editar informações de um aluno' : 'Formulário de criação de alunos'
    return (
      <DivPrincipal>
        <DivHeader>
          <HeaderSistema />
        </DivHeader>
        <DivMain>
          <DivCard>
            <Titulo>{title}</Titulo>
            <Descr>{desc}</Descr>
            <DivButOne>
              <Button onClick={this.handleRedirect}>Voltar</Button>
            </DivButOne>
            <DivButTwo>
              <Button onClick={this.sendPost}>Salvar</Button>
            </DivButTwo>
            <Form onSubmit={this.handleSubmit}>
              <Input value={this.state.aluno.nome} type={'text'} name={'nome'} onChangeValue={this.handleChangeInput}>Nome:</Input>
              <Input value={this.state.aluno.mae} type={'text'} name={'mae'} onChangeValue={this.handleChangeInput}>Mãe:</Input>
              <Input value={this.state.aluno.pai} type={'text'} name={'pai'} onChangeValue={this.handleChangeInput}>Pai:</Input>
              <Input value={this.state.aluno.endereco} type={'text'} name={'endereco'} onChangeValue={this.handleChangeInput}>Endereço:</Input>
              <Input value={this.state.aluno.telefone} type={'number'} name={'telefone'} onChangeValue={this.handleChangeInput}>Telefone:</Input>
              <Input value={this.state.aluno.emailresp} type={'text'} name={'emailresp'} onChangeValue={this.handleChangeInput}>E-mail do responsável :</Input>
            </Form>
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
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  margin-top: 50px;
  `
const DivFooter = styled.footer`
  grid-area:footer;
  `
const DivCard = styled.div`
  display:grid;
  grid-template-areas:
  "titulo titulo"
  "desc desc"
  "button1 button2"
  "form form";
  grid-gap:10px;
  justify-self: center;
  width: 25%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0px 0px 24px -2px rgb(0 0 0 / 100%);
  padding: 20px;
  border-radius: 10px;
  `
const Titulo = styled.h1`
  grid-area:titulo;
  justify-self: center;
  font-size: 35px;
  color:#001B44;
  `
const Descr = styled.p`
  grid-area:desc;
  justify-self: center;
  font-size:25px;
  color:#001B44;
  `
const DivButOne = styled.div`
  grid-area:button1;
  justify-self: center;
  `
const DivButTwo = styled.div`
  grid-area:button2;
  justify-self: center;
  `
const Form = styled.form`
  grid-area:form;
  justify-self: center;
  width: 70%;
  `

export default AlunoEditPage
