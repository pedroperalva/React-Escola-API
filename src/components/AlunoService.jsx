import axios from 'axios';

const apiUrl = 'https://dry-peak-50185.herokuapp.com';

export const List = async () => {
  const endpoint = `${apiUrl}/alunos`;
  return axios.get(endpoint);
};

export const ListOne = async (postEmail) => {
  const endpoint = `${apiUrl}/alunos/${postEmail}`;
  return axios.get(endpoint);
};

export const Create = async (data) => {
  const endpoint = `${apiUrl}/alunos`;
  return axios.post(endpoint, data);
};

export const Edit = async (data, postEmail) => {
  const enpoint = `${apiUrl}/alunos/${postEmail}`;
  return axios.put(enpoint, data);
};

export const DeleteAluno = async (postEmail) => {
  const enpoint = `${apiUrl}/alunos/${postEmail}`;
  return axios.delete(enpoint);
};
