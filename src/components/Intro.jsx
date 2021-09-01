import React, { Component } from "react";
import styled from "styled-components";
import ImagemIntro from '../img/intro.png'

class Intro extends Component {
  render() {
    return (
      <Section>
        <ImgIntro src={ImagemIntro} alt="Crianças intro" className="image" />
        <Content>
          <Title>Resilinha</Title>
          <P>
            Algo sobre o ensino na Resilinha, <br /> bota um texto qualquer pq
            to sem criatividade <br /> boa sorte!...
          </P>
          <Button>Matricule-se</Button>
        </Content>
        <Wave
          className="wave"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#dfdfdf"
            fill-opacity="1"
            d="M0,224L60,229.3C120,235,240,245,360,229.3C480,213,600,171,720,170.7C840,171,960,213,1080,208C1200,203,1320,149,1380,122.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </Wave>
      </Section>
    );
  }
}
const Section = styled.section `
    position: relative;
    margin-bottom: 5rem;
`

const Content = styled.div `
    position: absolute;
    top: 8rem;
    left: 6.9rem;
`

const ImgIntro = styled.img`
  height: 60rem; 
  width: 100%;
  filter: brightness(20%);
`;

const Title = styled.h1 `
    font-size: 6.4rem;
    color: #dfdfdf;
    margin-bottom: 1.5rem;
    font-weight: 700;
    text-shadow: .1rem 0 .2rem black;
`

const P = styled.p `
    font-size: 2.8rem;
    color: #dfdfdf;
    margin-bottom: 5rem;
    font-style: italic;
    line-height: 3.2rem;

    text-shadow: .1rem 0 .2rem black;
`

const Button = styled.button `
    border: .2rem solid #6ec3f5;
    background: transparent;
    padding: 2rem 6rem;
    color: #6ec3f5;
    font-family: 'DM Sans' sans-serif;
    font-size: 1.4rem;
    font-weight: 700;
    text-transform: uppercase;
    transition: .2s ease-in-out;
    letter-spacing: 2px;
    cursor: pointer;

    &:hover {
        color: #0097E0;
        border-color: #0097E0;
        cursor: pointer;
    }
`

const Wave = styled.svg `
    position: absolute;
    bottom: 0;
    left: 0;
`

export default Intro;
