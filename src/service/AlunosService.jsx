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
    return axios({
      method: 'post',
      baseURL:url,
      data: data
    })
  },
  
  async editAluno (alunoEmail, data) {
    const endpoin = `/${alunoEmail}`
    return axios({
      method: 'put',
      url:endpoin,
      baseUrls: url,
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
