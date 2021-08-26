import React, {useState} from 'react'
import Input from './Input'
import { MatriculateAluno } from '../pages/Sistema';


const FormMatriculate = () => {
  const [show, setShow] = useState(false);
  const [ dataForm, setDataForm] = useState(
    {
      nome: '',
      mae: '',
      pai: '',
      endereco: '',
      telefone: '',
      emailresp: ''
    }
  )
  const [ error, setError] = useState({
    errorNome: '',
    errorMae: '',
    errorPai: '',
    errorEndereco: '',
    errorTelefone: '',
    errorEmail: '',
  });
  const validationFields = () => {
    let valueForm = dataForm;
    let valid = false;

    if(valueForm.nome.charAt(0) !== valueForm.nome.charAt(0).toUpperCase && valueForm.nome.length > 0) {
      setError(error.errorNome = "A primeira letra do nome da criança deve ser maiúscula")
    }
    else if(valueForm.mae.charAt(0) !== valueForm.mae.charAt(0).toUpperCase && valueForm.mae.length > 0) {
      setError(error.errorMae = "A primeira letra do nome da mae deve ser maiúscula")
    }
    else if(valueForm.pai.charAt(0) !== valueForm.pai.charAt(0).toUpperCase && valueForm.pai.length > 0) {
      setError(error.errorPai = "A primeira letra do nome da pai deve ser maiúscula")
    }
    else if(valueForm.endereco.charAt(0) !== valueForm.endereco.charAt(0).toUpperCase && valueForm.endereco.length > 0) {
      setError(error.errorEndereco = "Insira um endereço válido")
    }
    else if((valueForm.telefone.length > 11 || valueForm.telefone.length < 10 || isNaN(valueForm.telefone)) && valueForm.telefone.length > 0){
      setError(error.errorTelefone = "Insira um telefone válido")
    }
    else if(!valueForm.email.includes("@") && valueForm.email.length > 0){
      setError(error.errorEmail = "Insira um Email válido")
    }
    setError({
      errorNome: '',
      errorMae: '',
      errorPai: '',
      errorEndereco: '',
      errorTelefone: '',
      errorEmail: '',
    });
    valid = true
    return valid;
  }
        
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValidate = validationFields();
    if(isValidate && show === false){
      setShow(true)
      MatriculateAluno(dataForm)
    } 
  }

  const handleChangeInput = (e) => {
    let valueForm = dataForm;
    console.log(valueForm);
    valueForm[e.target.name] = e.target.value;
    setDataForm(valueForm);

  }
  return (
    <form onSubmit={handleSubmit}>
      <Input value={dataForm.nome} type={'text'} name={'nome'} onChangeValue={handleChangeInput}>
        Nome
      </Input>
      <Input value={dataForm.mae} type={'text'} name={'mae'} onChangeValue={handleChangeInput}>
        Mae
      </Input>
      <Input value={dataForm.pai} type={'text'} name={'pai'} onChangeValue={handleChangeInput}>
        Pai
      </Input>
      <Input value={dataForm.endereco} type={'text'} name={'endereco'} onChangeValue={handleChangeInput}>
        Endereco
      </Input>
      <Input value={dataForm.telefone} type={'text'} name={'telefone'} onChangeValue={handleChangeInput}>
        Telefone
      </Input>
      <Input value={dataForm.emailresp} type={'text'} name={'emailresp'} onChangeValue={handleChangeInput}>
        Emailresp
      </Input>
      
    </form>
  )
}

export default FormMatriculate