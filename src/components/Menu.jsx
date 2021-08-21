import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'

class Menu extends Component {
    render(){
        return(
            <Nav>
                <div>
                    <Ul>
                        <StyledNavLink to="/">Inicio</StyledNavLink>
                        <StyledNavLink to="/QuemSomos">Quem Somos?</StyledNavLink>
                        <StyledNavLink to="/Tour">Nossas Instalações</StyledNavLink>
                        <StyledNavLink to="/Contato">Contato</StyledNavLink>
                    </Ul>
                </div>
                <div>
                    <Ul>
                        <StyledNavLink to="/Login">Login</StyledNavLink>
                        <StyledNavLink to="/Cadastro">Registro</StyledNavLink>
                    </Ul>
                </div>
            </Nav>
        )
    }
}
const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    font-size: 1.6rem;
`
const Ul = styled.ul`
    display: flex;
    list-style: none;
    line-height: 8rem;

`
const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    margin: 0 20px;
    cursor: pointer;
    justify-self: center;
    transition: all .3s;
    color: #BADCF5;
    &:hover {
        color: #0097E0
    }
`
export default Menu;