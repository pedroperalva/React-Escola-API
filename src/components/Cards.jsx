import React, { Component } from "react";
import styled from "styled-components";
import Certificado from '../img/certificate.png'

class Cards extends Component {
  render() {
    return (
      <>
        <Section>
          <Card>
            <Circle>
              <Icon
                src={Certificado}
                alt="certificate"
              />
            </Circle>

            <h2>{this.props.subtitle}</h2>
            <p style={{ maxWidth: "90%" }}>{this.props.p}</p>
          </Card>

          <Card>
            <Circle>
              <Icon
                src={Certificado}
                alt="certificate"
              />
            </Circle>

            <h2>{this.props.subtitle}</h2>
            <p style={{ maxWidth: "90%" }}>{this.props.p}</p>
          </Card>

          <Card>
            <Circle>
              <Icon
                src={Certificado}
                alt="certificate"
              />
            </Circle>

            <h2>{this.props.subtitle}</h2>
            <p style={{ maxWidth: "90%" }}>{this.props.p}</p>
          </Card>
        </Section>
      </>
    );
  }
}

const Section = styled.section `
    background-color: #001B44;

    display: flex;
    justify-content: space-around;
`

const Card = styled.div `
    height: 400px;
    width: 300px;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.5);
    margin: 30px;
  
    background-color: rgba(225, 245, 235, 0.5);
    border: 1px solid transparent;
    border-image: linear-gradient(0deg, yellow, red, blue);
    border-image-slice: 1;
`

const Circle = styled.div `
    height: 150px;
    width: 150px;
    border-radius: 50%;
    background: #00accb;
    margin: 30px 0;
  
    display: flex;
    justify-content: center;
    align-items: center;
`

const Icon = styled.img `
    height: 9rem; 
    width: 9rem;
    align-self: center;
`

export default Cards;