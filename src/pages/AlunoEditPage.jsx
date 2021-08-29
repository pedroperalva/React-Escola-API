import React, { Component } from 'react'
import Input from '../components/Input'
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
        emailresp: '',
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
        aluno,
      })
    }
    catch(error) {
      console.log(error)
      alert("Não foi possível carregar o aluno.")
    }

  }
  sendPost = async () =>{
    let data = this.state.aluno

    if(data.nome === ''){
      alert("Nome é obrigatório!")
      return
    }
    if(data.mae === ''){
      alert("Mãe é obrigatório!")
      return
    }
    
    if(data.pai === ''){
      alert("Pai é obrigatório!")
      return
    }
    if(data.endereco === ''){
      alert("Endereço é obrigatório!")
      return
    }
    if(data.telefone === ''){
      alert("Telefone é obrigatório!")
      return
    }
    if(data.emailresp === ''){
      alert("Email do responsável é obrigatório!")
      return
    }
    try {
      if(this.props?.match?.params?.emailresp){
        await AlunosService.editAluno(this.props.match.params.emailresp, data)
        alert("Aluno editado com sucesso!")
      }
      else{
        await AlunosService.addAluno(data)
        alert("Aluno cadastrado com sucesso!")
      }
      this.props.history.push('/sistema-list')
    } catch (error) {
        console.log(data)
        console.log(error)
        alert("error")
    }
  }
  handleSubmit = (e) => {
    e.preventDefault()
  }

  handleRedirect = () => {
    this.props.history.replace('/sistema-list')
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
    return(
      <div>

        <div>
          <div>
              <h2>{title}</h2>
              <p>{desc}</p>
          </div>
          <div>
              <button onClick={this.handleRedirect}>
                  Cancelar
              </button>
              <button onClick={this.sendPost}>
                  Salvar
              </button>
          </div>
        </div>
        <form onSubmit={this.handleSubmit}>
          <Input value={this.state.aluno.nome} type={'text'} name={'nome'} onChangeValue={this.handleChangeInput}>Nome:</Input>

          <Input value={this.state.aluno.mae} type={'text'} name={'mae'} onChangeValue={this.handleChangeInput}>Mãe:</Input>

          <Input value={this.state.aluno.pai} type={'text'} name={'pai'} onChangeValue={this.handleChangeInput}>Pai:</Input>

          <Input value={this.state.aluno.endereco} type={'text'} name={'endereco'} onChangeValue={this.handleChangeInput}>Endereço:</Input>
          
          <Input value={this.state.aluno.telefone} type={'number'} name={'telefone'} onChangeValue={this.handleChangeInput}>Telefone:</Input>
          
          <Input value={this.state.aluno.emailresp} type={'text'} name={'emailresp'} onChangeValue={this.handleChangeInput}>E-mail do responsável :</Input>
        </form>
      </div>
    )
  }
}


export default AlunoEditPage
