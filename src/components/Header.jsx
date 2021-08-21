import React, { Component } from 'react'
import Menu from './Menu'
import styled from 'styled-components'

class Header extends Component {
    render(){
        return(
            <Cabecalho>
                <Menu />     
            </Cabecalho>
        )
    }

}
const Cabecalho = styled.header`
    height: 8rem;
    background-color: #001B44;
`
export default Header;
