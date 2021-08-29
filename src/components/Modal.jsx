import React from "react";
import styled from "styled-components";


class Modal extends React.Component {
    onClose = e => {
        this.props.onClose && this.props.onClose(e);
    };
    render() {
        if (!this.props.show) {
            return null;
        }
        return (
            <DivPrincipal>
                <Content src={this.props.src}></Content>
                <Close onClick={this.onClose}>x</Close> 
            </DivPrincipal>
        );
    }
}
const DivPrincipal = styled.div`
  position: fixed;
  z-index: auto;
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%;
  overflow: auto; 
  background-color: rgb(0,0,0); 
  background-color: #001b4467; 
  display: flex;
  justify-content: center;
  align-items: center;
`
const Content = styled.img`
    width: 60%; 
    border-radius: 15px;
`
const Close = styled.button`
    color: #aaa;
    font-size: 28px;
    font-weight: bold;
`
export default Modal;