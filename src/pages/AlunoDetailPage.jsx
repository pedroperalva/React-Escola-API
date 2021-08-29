import React, { Component } from 'react';
import AlunosService from '../service/AlunosService';
import styled from 'styled-components';
import HeaderSistema from '../components/HeaderSistema';
import Footer from '../components/Footer';
import BGIMG from '../img/bg-img3.jpg';
import Button from '../components/Button';

class AlunoDetailPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      alunos: {}
    }
  }

  componentDidMount() {
    let email = this.props.match.params.emailresp
    this.loadAluno(email)
  }

  async loadAluno(email) {
    try {
      let res = await AlunosService.listAluno(email)
      this.setState({ alunos: res.data.resultado[0] })
    }
    catch (error) {
      console.log(error)
    }
  }

  async deleteAluno(email, data) {

    if (!window.confirm("Deseja realmente excluir este aluno?")) return;

    try {
      await AlunosService.deleteAluno(email, data)
      alert("Aluno excluído com sucesso")
      this.props.history.replace('/sistema-list')
    } catch (error) {
      console.log(error);
      alert("Não foi excluir o aluno.")
    }

  }

  render() {
    return (
      <DivPrincipal>
        <DivHeader>
          <HeaderSistema />
        </DivHeader>
        <DivMain>
          <DivCard>
              <Titulo>Aluno</Titulo>
              <Descr>Detalhes do aluno</Descr>
            <DivButtonBack>
              <Button onClick={() => this.props.history.goBack()}>
                Voltar
              </Button>
            </DivButtonBack>
            <DivInfos>
              <Infos>Nome: <Span>{this.state.alunos?.mae}</Span></Infos>
              <Infos>Mãe: <Span>{this.state.alunos?.mae}</Span></Infos>
              <Infos>Pai: <Span>{this.state.alunos?.pai}</Span></Infos>
              <Infos>Endereço: <Span>{this.state.alunos?.endereco}</Span></Infos>
              <Infos>Telefone: <Span>{this.state.alunos?.telefone}</Span></Infos>
              <Infos>Email do responsável: <Span>{this.state.alunos?.emailresp}</Span></Infos>
              <Linha></Linha>
            </DivInfos>
            <DivButtonDelete>
              <Button
                type="button"
                onClick={() => this.deleteAluno(this.state.alunos.emailresp)}>
                Excluir
              </Button>
            </DivButtonDelete>
            <DivButtonEdit>
              <Button
                type="button"
                onClick={() => this.props.history.push('/sistema-edit/' + this.state.alunos.emailresp)}>
                Editar
              </Button>
            </DivButtonEdit>
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
  "infos infos"
  "voltar voltar";
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
const DivInfos = styled.div`
  grid-area:infos;
  margin-top:20px;
`
const DivButtonBack = styled.div`
  grid-area:voltar;
  justify-self: center;
`
const DivButtonDelete = styled.div`
  grid-area:button2;
  justify-self: center;
`
const DivButtonEdit = styled.div`
  grid-area:button1;
  justify-self: center;
`
const Infos = styled.h2`
  font-size:18px;
  color:#001B44;
  border-top: 1px solid #001B44;
  border-left: 1px solid #001B44;
  border-right: 1px solid #001B44;
  padding: 10px;
`
const Span = styled.span`
  font-size:18px;
  color:#0955c7;
`
const Linha = styled.h2`
  border-top: 1px solid #001B44;
`
export default AlunoDetailPage;
