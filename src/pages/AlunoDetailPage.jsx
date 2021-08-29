import React, { Component } from 'react'
import AlunosService from '../service/AlunosService'

class AlunoDetailPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      alunos: {}
    }
  }

  componentDidMount(){
    let email = this.props.match.params.emailresp
    this.loadAluno(email)
  }

  async loadAluno(email) {
    try {
      let res = await AlunosService.listAluno(email)
      this.setState({alunos: res.data.resultado[0]})
    }
    catch(error) {
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
      <div>

        <section>
          <div>
            <h2>Aluno</h2>
            <p>Detalhes do aluno</p>
          </div>
          <div>
            <button onClick={() => this.props.history.goBack()}>
              Voltar
            </button>
          </div>
        </section>
        <section>
          {/* <div>
            <img src={this.state?.alunos?.imageUrl} alt="imagem" />
          </div> */}
          <div>
            <h4>Nome</h4>
            <p>{this.state.alunos?.nome}</p>
          </div>
          <div>
            <h4>Mãe</h4>
            <p>{this.state.alunos?.mae}</p>
          </div>
          <div>
            <h4>Pai</h4>
            <p>{this.state.alunos?.pai}</p>
          </div>
          <div>
            <h4>Endereço</h4>
            <p>{this.state.alunos?.endereco}</p>
          </div>
          <div>
            <h4>Telefone</h4>
            <p>{this.state.alunos?.telefone}</p>
          </div>
          <div>
            <h4>Email do responsável</h4>
            <p>{this.state.alunos?.emailresp}</p>
          </div>
          <div>
            <button
                type="button"
                onClick={() => this.deleteAluno(this.state.alunos.emailresp)}>
                Excluir
            </button>
            <button
                type="button"
                onClick={() => this.props.history.push('/sistema-edit/' + this.state.alunos.emailresp)}>
                Editar
            </button>
          </div>
        </section>
      </div>
        
    )
  }
}

export default AlunoDetailPage
