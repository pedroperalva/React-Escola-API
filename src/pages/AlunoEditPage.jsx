import React, { Component } from 'react'
import AlunosService from '../service/AlunosService'

class AlunoEditPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      matricula: null,
      nome: '',
      mae: '',
      pai: '',
      endereco: '',
      telefone: '',
      emailresp: '',
    }
  }
  componentDidMount() {
    if(this.props?.match?.params?.emailresp){
      let email = this.props.match.params.emailresp
      this.loadAluno(email)
    }
  }

  async loadAluno(email) {
    try {
      let res = await AlunosService.listAluno(email)
      let post = res.data.resultado[0]
      this.setState(post)
    }
    catch(error) {
      console.log(error)
      alert("Não foi possível carregar o aluno.")
    }

  }

  async sendPost(){
    let data = {
        nome : this.state.nome,
        mae : this.state.mae,
        pai : this.state.pai,
        endereco : this.state.endereco,
        telefone : this.state.telefone,
        emailresp : this.state.emailresp,
    }
    if(!data.nome || data.nome === ''){
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
      if(this.state.emailresp){
          await AlunosService.editAluno(data, this.state.emailresp)
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
     let nome = this.state.emailresp ? 'Editar Aluno' : 'Novo Aluno'
     let desc = this.state.emailresp ? 'Editar informações de um aluno' : 'Formulário de criação de alunos'
    return (
      <div>
      
      </div>
    )
  }
}


export default AlunoEditPage
