import React, { Component } from 'react'
import styled from 'styled-components'

class Header extends Component {
    render(props){
        return(
            <Cabecalho>
                {this.props.children}     
            </Cabecalho>
        )
    }

}
const Cabecalho = styled.header`
    height: 8rem;
    background-color: #001B44;
`
export default Header;
