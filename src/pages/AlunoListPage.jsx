import React, {Component} from 'react'
import AlunosService from '../service/AlunosService'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

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
      <div className="container">

        <section>
            <div>
                <h2>Alumos</h2>
                <p>Listagem de Alunos</p>
            </div>
            <div>
                <button onClick={() => this.props.history.push('/sistema-add')}>
                    Adicionar
                </button>
            </div>
        </section>

        {/* Percorrendo o array de alunos do state e renderizando cada um
        dentro de um link que leva para a página de detalhes do aluno específico */}
        {this.state.alunos.map(aluno => (
            <Link to={"/sistema-detail/" + aluno.emailresp} key={aluno.matricula}>
                <CardsDiv>
                    {/* <div>
                        <img src={aluno.imageUrl}/>
                    </div> */}
                    <Card>
                        <h4>{aluno.nome}</h4>
                        <p>{aluno.mae}</p>
                        <p>{aluno.pai}</p>
                        <p>{aluno.endereco}</p>
                        <p>{aluno.telefone}</p>
                        <p>{aluno.emailresp}</p>
                    </Card>
                </CardsDiv>
            </Link>
        ))}

      </div>
    )
  }  
}

const CardsDiv = styled.div`
  display: flex;
  border: 1px solid #000000;
  justify-content: center;
  flex-flow: row wrap;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 16px;
`
const Card = styled.div`
  display: flex;
  width: 20%;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
`

export default AlunoListPage
