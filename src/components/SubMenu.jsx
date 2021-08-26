import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Logo from '../img/logo1.png';

class SubMenu extends Component {
  render() {
    return (
      <Nav>
        <div>
          <Ul>
            <Imagem src={Logo} />
            <StyledNavLink to="/Sistema">Adiciona</StyledNavLink>
            <StyledNavLink to="/Sistema">Atualiza</StyledNavLink>
            <StyledNavLink to="/Sistema">Consulta</StyledNavLink>
            <StyledNavLink to="/Sistema">Deleta</StyledNavLink>
          </Ul>
        </div>
        <div>
          <Ul>
            <StyledNavLink to="/">Sair</StyledNavLink>
          </Ul>
        </div>
      </Nav>
    );
  }
}
const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    font-size: 1.6rem;
`;
const Ul = styled.ul`
    display: flex;
    list-style: none;
    line-height: 8rem;
`;
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
`;
const Imagem = styled.img`
    justify-self: center;
    width:8rem;
    height:7rem;
`;
export default SubMenu;
