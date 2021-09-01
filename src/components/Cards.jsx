import React, { Component } from "react";
import styled from "styled-components";


class Cards extends Component {
  render() {
    return (
      <>
        <Section>
          <Card>
            <Circle>
              <Icon
                src={this.props.imagem}
                alt="certificado"
              />
            </Circle>

            <Subtitulo>{this.props.subtitle}</Subtitulo>
            <Texto style={{ maxWidth: "90%" }}>{this.props.p}</Texto>
          </Card>

        </Section>
      </>
    );
  }
}

const Section = styled.section`
    background-color: #001B44;
    height: 70rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const Card = styled.div`
    height: 40rem;
    width: 30rem;
    border-radius: .3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    box-shadow: .1rem .2rem .5rem rgba(0, 0, 0, 0.5);
    margin: 3rem;
  
    background-color: #dfdfdf;
    box-shadow: .1rem .1rem .5rem black;
`

const Circle = styled.div`
    height: 15rem;
    width: 15rem;
    border-radius: 50%;
    background: #00accb;
    margin: 30px 0;
  
    display: flex;
    justify-content: center;
    align-items: center;

`

const Icon = styled.img`
    height: 8rem; 
    width: 8rem;

`

const Subtitulo = styled.h2`
    font-size: 2.4rem;
    margin-bottom: 3rem;
    text-align: center;
`

const Texto = styled.p`
    font-size: 1.4rem;
    text-align: center;
`

export default Cards;