import React, {Component} from 'react'
import AlunosService from '../service/AlunosService'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import HeaderSistema from '../components/HeaderSistema';
import Footer from '../components/Footer';
import BGIMG from '../img/bg-img3.jpg';
class AlunoListPage extends Component{
  constructor(props) {
    super(props)
    this.state = {
      alunos: []
    }
  }
  componentDidMount() {
    this.loadAlunos()
  }

  async loadAlunos() {
    try {
      let res = await AlunosService.listAlunos()
      
      this.setState({alunos: res.data.resultado})
    }
    catch(error) {
      console.log(error)
      alert("Não foi possível carregar os alunos cadastrados.")
    }
  }

  render() {
    return (
      <DivPrincipal>
        <DivHeader>
          <HeaderSistema />
        </DivHeader>
        <DivMain>
          <DivTitulo>
              <div className="titulo">
                  <h1>Listagem de Alunos</h1>
              </div>
              <div className="button">
                  <button onClick={() => this.props.history.push('/sistema')}>
                      Voltar
                  </button>
              </div>
          </DivTitulo>

          {/* Percorrendo o array de alunos do state e renderizando cada um
          dentro de um link que leva para a página de detalhes do aluno específico */}
          {this.state.alunos.map(aluno => (
          <DivCards>
            <Link to={"/sistema-detail/" + aluno.emailresp} key={aluno.matricula}>
              <Card>
                  <h4>Nome: {aluno.nome}</h4>
                  <p>Mãe: {aluno.mae}</p>
                  <p>Pai: {aluno.pai}</p>
                  <p>Endereço: {aluno.endereco}</p>
                  <p>Telefone: {aluno.telefone}</p>
                  <p>Email responsável: {aluno.emailresp}</p>
              </Card>
            </Link>
          </DivCards>
          ))}
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
  flex-direction: column;
`
const DivFooter = styled.footer`
  grid-area:footer;
  `

const DivTitulo = styled.div`
  display: grid;
  width: 100%;
  grid-template-areas:
  "titulo"
  "button"
  ;

  > .titulo {
    grid-area: "titulo";
    justify-self: center;

    > h1 {
      text-align: center;
      font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
      font-size: 2em;
      line-height: 1.5em;
    }
  }

  > .button {
    grid-area: "button";
    justify-self: center;
    padding-bottom: 1.5em;
  }
`
const DivCards = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding-left: 5%;
  padding-right: 5%;
`
const Card = styled.div`
  max-width: 30%;
  min-height: 20%;
  flex-flow: column wrap;
`

export default AlunoListPage
