import React, { Component } from 'react';
import styled from 'styled-components';
import Modal from './Modal';

class CardInst extends Component {

    constructor(props) {
        super(props)

        this.state = {
            show: false
        }
    }

    showModal = () => {
        this.setState({ show: !this.state.show })
    }
    render() {
        return (
            <DivCard style={this.props.style}>
                <Imagem src={this.props.src} onClick={this.showModal}></Imagem>
                <Modal onClose={this.showModal} show={this.state.show} src={this.props.src}></Modal>
            </DivCard>

        )
    }
}
const DivCard = styled.div`
    display: flex;
    border-radius: 10px;
    padding: 20px;
    width: 100%; 
    justify-content: center;
`
const Imagem = styled.img`
    width:70%;
    height:100%;
    border-radius: 10px;
    box-shadow: 0px 0px 24px -2px rgb(0 0 0 / 100%);
    @media (max-width: 860px) {
        width:50%;
    }
`
export default CardInst;