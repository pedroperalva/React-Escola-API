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
    color: #BADCF5;
    background-color: #001B44;
    height: 40px;
    padding: 8px 10px;
    border-radius: 5px;
    border: none;
    margin-top:20px;
    transition: all .3s;
    &:hover {
        color: #0097E0;
    }
`
const DivButton = styled.div`
    display: flex;
`

export default Button;