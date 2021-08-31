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
    font-family: 'DM Sans', sans-serif;
    margin: auto;

  height: 8rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #001B44;

`
export default Header;
