import React from 'react'
import {Nav, Ul, Li} from './styles'

export default class Menu extends React.Component {
    render(){
        return(
            <Nav>
                <div>
                    <Ul>
                        <Li>Inicio</Li>
                        <Li>Quem Somos?</Li>
                        <Li>Nossas Instalações</Li>
                        <Li>Contato</Li>
                    </Ul>
                </div>
                <div>
                    <Ul>
                        <Li>Login</Li>
                        <Li>Registro</Li>
                    </Ul>
                </div>
            </Nav>
        )
    }
}