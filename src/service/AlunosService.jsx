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
    return axios({
      method: 'post',
      baseURL:endpoin,
      headers: { 'Content-Type': 'multipart/form-data' },
      data: data
    })
  },
  
  async editAluno (alunoEmail, data) {
    const endpoin = `/${alunoEmail}`
    return axios({
      method: 'putt',
      url:endpoin,
      baseUrls: url,
      headers: { 'Content-Type': 'multipart/form-data' },
      data: data
    })
  },
  
  async deleteAluno (alunoEmail) {
    const endpoin = `/${alunoEmail}`
    return axios({
      method: 'delete',
      url:endpoin,
      baseURL: url,
    })
  },
}

export default AlunosService
