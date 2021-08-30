import React, {Component} from 'react'
import AlunosService from '../service/AlunosService'
import styled from 'styled-components'
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
          <TableAlunos>
            <thead>
              <tr>
                <th>Aluno</th>
                <th>Mãe</th>
                <th>Pai</th>
                <th>Endereço</th>
                <th>Telefone</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>

              {this.state.alunos.map(aluno => (
                  <tr onClick={() => this.props.history.push("/sistema-detail/" + aluno.emailresp)}>
                      <td>{aluno.nome}</td>
                      <td>{aluno.mae}</td>
                      <td>{aluno.pai}</td>
                      <td>{aluno.endereco}</td>
                      <td>{aluno.telefone}</td>
                      <td>{aluno.emailresp}</td>
                  </tr>
              ))}
            </tbody>
          </TableAlunos>
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
  display: flex;
  grid-area:content;
  flex-direction: column;
  `
const DivFooter = styled.footer`
  grid-area:footer;
  `

const DivTitulo = styled.div`
  display: grid;
  width: 100%;
  color: #001B44;
  grid-template-areas:
  "titulo"
  "button"
  ;

  .titulo {
    grid-area: "titulo";
    justify-self: center;

    h1 {
      text-align: center;
      font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
      font-size: 3em;
      line-height: 1.5em;
    }
  }

  > .button {
    grid-area: "button";
    justify-self: center;
    padding-bottom: 1.5em;
  }
`
const TableAlunos = styled.table`
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  width: 80%;
  height: auto;
  align-self: center;
  border-collapse: collapse;
  background-color: rgba(255, 255, 255, 0.9);
  th {
    font-size: 1.5rem;
  }

  th, td {
    text-align: center;
    border: 1px solid black;
    color: #001B44;
    padding: 0.5em;
  }
  td {
    padding: 1em 0.5em;
    height: 2%;
    
  }
  tr {
    cursor: pointer;
  }

`

export default AlunoListPage
