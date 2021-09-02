import React, { Component } from "react";
import styled from "styled-components";
import ImgDiv from '../img/img2.png'

class Sobre extends Component {
    render() {
        return (
            <Section>
                <DivImagem>
                    <Imagem src={ImgDiv} alt="Imagem Alegre" />
                </DivImagem>
                <DivSobre>
                    <SobreNosTitulo>
                        Metodologia Inovadora!
                    </SobreNosTitulo>
                    <SobreNos>
                        A nossa metodologia acredita que a Educação é um processo que vai além
                        dos muros da escola e acontece de forma muito mais abrangente do que uma simples transmissão de conhecimento acadêmico. 
                        Afinal, todo ser humano conta com múltiplas dimensões (intelectual, física, emocional, social e cultural),
                         e todas elas são desenvolvidas pela nossa metodologia.
                    </SobreNos>
                </DivSobre>
            </Section>
        );
    }
}

const Section = styled.section`
    display: flex;
    margin-bottom: 10rem;
    @media (max-width: 1200px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
`

const DivImagem = styled.div`
    width: 50%;
    @media (max-width: 1200px) {
      margin-bottom: 100px;
    }
    
`

const Imagem = styled.img`
    width: 100%;
    height: 100%;
`

const DivSobre = styled.div`
    width: 50%;
`

const SobreNosTitulo = styled.h1`
    font-size: 4.6rem;
    text-align: center;
    margin-bottom: 7rem;
    color: #001B44;
    @media (max-width: 1200px) {
      font-size: 4.0rem;
    }
`

const SobreNos = styled.p`
    font-size: 2.8rem;
    width: 80%;
    margin: auto;
    line-height: 3.4rem;
    @media (max-width: 1200px) {
      font-size: 1.7rem;
    }
`

export default Sobre;
