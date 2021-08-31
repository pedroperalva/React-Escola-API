import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


const SubMenu = () => {

    return(
        <Nav>
            <div>
                <Logo>Resilinha</Logo>
            </div>   
            <div>
                <Ul>
                    <StyledNavLink to="/">Sair</StyledNavLink>
                </Ul>
            </div>
        </Nav>
    )
}

const Nav = styled.nav`
    margin-left: 5%;
    margin-right: 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
const Logo = styled.h1`
    font-weight: 700;
    font-size: 2.4rem;
    letter-spacing: .4rem;
    text-transform: uppercase;
    text-rendering: optimizeLegibility;
    color: #BADCF5;
`
export default SubMenu;