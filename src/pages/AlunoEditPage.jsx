import React, { Component } from 'react'
import AlunosService from '../service/AlunosService'

class AlunoEditPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      id: null,
      aluno:{
        nome: '', 
        mae: '', 
        pai: '', 
        endereco: '' , 
        telefone: '', 
        emailresp: ''
      }
    }
  }
  componentDidMount() {
    if(this.props?.match?.params?.emailresp){
      let email = this.props.match.params.emailresp
      console.log('ok')
      this.loadAluno(email)
    }
  }

  loadAluno = async  (email) => {
    try {
      let res = await AlunosService.listAluno(email)
      let aluno = res.data.resultado[0]
      this.setState({
        id: 1,
        aluno
      })
    }
    catch(error) {
      console.log(error)
      alert("Não foi possível carregar o aluno.")
    }

  }

   sendPost = async () =>{
    let data = {
      nome: this.state.aluno.nome, 
      mae: this.state.aluno.mae, 
      pai: this.state.aluno.pai, 
      endereco: this.state.aluno.endereco , 
      telefone: this.state.aluno.telefone, 
      emailresp: this.state.aluno.emailresp
    }
    if(!data.nome || data.nome === ''){
      console.log(data.nome)
            alert("Nome é obrigatório!")
            return;
    }
    if(!data.mae || data.mae === ''){
        alert("Mãe é obrigatório!")
        return;
    }
    
    if(!data.pai || data.pai === ''){
        alert("Pai é obrigatório!")
        return;
    }
    if(!data.endereco || data.endereco === ''){
        alert("Endereço é obrigatório!")
        return;
    }
    if(!data.telefone || data.telefone === ''){
        alert("Telefone é obrigatório!")
        return;
    }
    if(!data.emailresp || data.emailresp === ''){
        alert("Email do responsável é obrigatório!")
        return;
    }

    try {
      if(this.state.id){
          await AlunosService.editAluno(data.emailresp, data)
          alert("Aluno editado com sucesso!")
        }
        else{
          await AlunosService.addAluno(data)
          alert("Aluno cadastrado com sucesso!")
        }
        this.props.history.push('/sistema-list')
      } catch (error) {
          console.log(error)
          alert("Erro ao cadastrar aluno.")
      }
    }
    

  render() {
     let title = this.state.id ? 'Editar Aluno' : 'Novo Aluno'
     let desc = this.state.id ? 'Editar informações de um aluno' : 'Formulário de criação de alunos'
    return (
      <div>

        <div>
          <div>
              <h2>{title}</h2>
              <p>{desc}</p>
          </div>
          <div>
              <button onClick={() => this.props.history.replace('/sistema-list')}>
                  Cancelar
              </button>
              <button onClick={() => this.sendPost()}>
                  Salvar
              </button>
          </div>
        </div>
        <form onSubmit={e => e.preventDefault()}>
          <div className="form-group">
              <label htmlFor="title">Nome</label>
              <input
                  type="text"
                  value={this.state.aluno.nome}
                  onChange={e => this.setState({ aluno:{nome: e.target.value} })} />
          </div>
          <div>
              <label>Mae</label>
              <input
                  type="text"
                  value={this.state.aluno.mae}
                  onChange={e => this.setState({ aluno:{mae: e.target.value} })} />
          </div>
          <div>
              <label>Pai</label>
              <input
                  type="text"
                  value={this.state.aluno.pai}
                  onChange={e => this.setState({ aluno:{pai: e.target.value} })} />
          </div>
          <div>
              <label>Endereço</label>
              <input
                  type="text"
                  value={this.state.aluno.endereco}
                  onChange={e => this.setState({aluno: {endereco: e.target.value} })} />
          </div>
          <div>
              <label>Telefone</label>
              <input
                  type="text"
                  value={this.state.aluno.telefone}
                  onChange={e => this.setState({aluno: {telefone: e.target.value} })} />
          </div>
          <div>
              <label>Email do responsável</label>
              <input
                  type="text"
                  value={this.state.aluno.emailresp}
                  onChange={e => this.setState({ aluno:{emailresp: e.target.value} })} />
          </div>
        </form>
      </div>
    )
  }
}


export default AlunoEditPage
