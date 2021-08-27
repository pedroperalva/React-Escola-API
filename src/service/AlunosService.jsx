import axios from 'axios'

const url = 'https://dry-peak-50185.herokuapp.com/alunos'

const AlunosService = {
  async listAlunos() {
    const endpoint = `${url}`
    return axios.get(endpoint)
  },

  async listAluno(alunoEmail) {
    const endpoin = `${url}/${alunoEmail}`
    return axios.get(endpoin)
  },
  
  async addAluno (data) {
    const endpoin = `${url}`
    return axios.post(endpoin, data)
  },
  
  async editAluno (data, alunoEmail) {
    const endpoin = `${url}/${alunoEmail}`
    return axios.put(endpoin, data)
  },
  
  async deleteAluno (alunoEmail) {
    const endpoin = `${url}/${alunoEmail}`
    return axios.delete(endpoin)
  },
}

export default AlunosService
