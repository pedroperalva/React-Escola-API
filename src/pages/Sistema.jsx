import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import Header from '../components/Header';
import Footer from '../components/Footer';
import SubMenu from '../components/SubMenu';
import {
  List, ListOne, Create, Edit, DeleteAluno,
} from '../components/AlunoService';

const Sistema = (props) => {
    const [alunos, setAlunos] = useState([]);
    const [slow, setSlow] = useState(false);

    useEffect(() => {
        loadAluno("teste@gmail.com")
    }, [])

    const loadAlunos = async () => {
    try {
      const res = await List();
      const data = await res.data.resultado;
      setSlow(true);
      setAlunos(data);
      /*!!alunos && slow ? alunos.map((info, i) => (
        <div>
          <p>{info.nome}</p>
        </div>
      )) : <p>Error ao carregar a API</p>;*/
    } catch (error) {
      console.log(error);
    }
  };

  const loadAluno = async (email) => {
    try {
      const res = await ListOne(email);
      const data = await res.data.resultado;
      for (const item of data) {
        if (item.emailresp === email) {
          setSlow(true);
          setAlunos(item);
          return alunos;
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

    return (
        <DivPrincipal>
            <DivHeader>
                <Header>
                    <SubMenu/>
                </Header>
            </DivHeader>

            <DivCards>

              {/* Mostra todos os Alunos cadastrados
              !!alunos && slow? alunos.map((info, i)=> (
              <p>{info.nome}</p>
              
              )): <p>Error ao carregar a API</p>*/}
            
              {/* Mostra a Aluno referente ao email/
              !!alunos && slow ? <p>{alunos.nome}</p> : <p>Error ao carregar a API</p>*/}
            </DivCards>



            <DivFooter>
                <Footer />
            </DivFooter>
        </DivPrincipal>
    )
}

const DivPrincipal = styled.div`
    display: grid;
    grid-gap: 20px;
    gap: 20px;
    width: 100%;
    min-height: 100vh;
    grid-template-areas:
        "header"
        "content"
        "footer ";
    grid-template-columns: 1fr;
    grid-template-rows: 8rem auto 70px;
    grid-auto-rows: 150px;
`
const DivHeader = styled.header`
    grid-area:header;
`
const DivFooter = styled.footer`
    grid-area:footer;
    `
const DivCards = styled.main`
    grid-area: "content";
`
export default Sistema;