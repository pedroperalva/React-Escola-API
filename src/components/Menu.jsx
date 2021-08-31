import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
// import Logo from '../img/logo1.png';
import PortalLogin from '../img/user.png'

class Menu extends Component {
    render(){
        return(
            <Nav>
                <div>
                    <Logo>Resilinha</Logo>
                </div>
                <div>
                    <Ul>
                        <StyledNavLink to="/">Inicio</StyledNavLink>
                        <StyledNavLink to="/QuemSomos">Quem Somos?</StyledNavLink>
                        <StyledNavLink to="/Tour">Nossas Instalações</StyledNavLink>
                        <StyledNavLink to="/Contato">Contato</StyledNavLink>
                        <StyledNavLink to="/Login"><img src={PortalLogin} alt="Login Portal" style={{height: '3rem', width: '3rem'}} /></StyledNavLink>
                    </Ul>
                </div>
            </Nav>
        )
    }
}
const Nav = styled.nav`
    width: 90%;

    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Ul = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;

    list-style: none;
`
const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    margin: 0 1rem;
    cursor: pointer;
    font-size: 1.6rem;
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

const Logo = styled.h1`
    font-weight: 700;
    font-size: 2.4rem;
    letter-spacing: .4rem;
    text-transform: uppercase;
    text-rendering: optimizeLegibility;
    color: #BADCF5;
`
export default Menu;