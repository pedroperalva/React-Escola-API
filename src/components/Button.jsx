import React, { Component } from 'react';
import styled from 'styled-components';

class Button extends Component{

    render(){
        return(
            <DivButton>
            <Botao style={this.props.style} type="submit">
                {this.props.children}
            </Botao>
            </DivButton>
        )
    }
}

const Botao = styled.button`
    font-size: 18px;
    font-family: 'Allison', cursive;
    font-family: 'Azeret Mono', monospace;
    font-weight: 700;
    color: rgb(255, 255, 255);
    background-color: rgb(83, 159, 255);
    height: 40px;
    padding: 8px 10px;
    border-radius: 5px;
    border: none;
    margin-top:20px;
    &:hover{
        color: rgb(0, 0, 0);
        background-color: rgb(121, 114, 114);
    }
`
const DivButton = styled.div`
    display: flex;
`

export default Button;