import React from 'react'
import axios from 'axios'

const url = 'https://dry-peak-50185.herokuapp.com/alunos'

const AlunosService = () => {
  const listAlunos = () => {
    const endpoint = `${url}`
    return axios.get(endpoint)
  }

  const listAluno = (alunoEmail) => {
    const endpoin = `${url}/${alunoEmail}`
    return axios.get(endpoin)
  }
  
  const addAluno = (data) => {
    const endpoin = `${url}`
    return axios.post(endpoin, data)
  }
  
  const editAluno = (data, alunoEmail) => {
    const endpoin = `${url}/${alunoEmail}`
    return axios.put(endpoin, data)
  }
  
  const deleteAluno = (alunoEmail) => {
    const endpoin = `${url}/${alunoEmail}`
    return axios.delete(endpoin)
  }
}

export default AlunosService
