import React, { Component } from 'react'
import styled from 'styled-components'

class Footer extends Component {
    render() { 
        return (
            <Rodape>
                <Copy>&copy; 2021 - Resilientes T5</Copy>
            </Rodape>
        );
    }
}
const Rodape = styled.footer`
    height: 70px;
    background-color: #001B44;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Copy = styled.p`
    color: #BADCF5;
    font-size: 1.4rem;
    font-weight: bold;
`
export default Footer;