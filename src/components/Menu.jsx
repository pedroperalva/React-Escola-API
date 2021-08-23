import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Logo from '../img/logo1.png';

class Menu extends Component {
    render(){
        return(
            <Nav>
                <div>
                    <Ul>
                        <Imagem src={Logo}></Imagem>
                        <StyledNavLink to="/">Inicio</StyledNavLink>
                        <StyledNavLink to="/QuemSomos">Quem Somos?</StyledNavLink>
                        <StyledNavLink to="/Tour">Nossas Instalações</StyledNavLink>
                        <StyledNavLink to="/Contato">Contato</StyledNavLink>
                    </Ul>
                </div>
                <div>
                    <Ul>
                        <StyledNavLink to="/Login">Portal</StyledNavLink>
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
    justify-self:center;
    transition: all .3s;
    color: #BADCF5;
    &:hover {
        color: #0097E0
    }
`
const Imagem = styled.img`
    justify-self: center;
    width:8rem;
    height:7rem;
`
export default Menu;