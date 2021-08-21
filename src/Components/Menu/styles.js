import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;

    font-size: 1.6rem;
`

export const Ul = styled.ul`
    display: flex;
    list-style: none;
    line-height: 8rem;

`

export const Li = styled.li`
    margin: 0 20px;
    cursor: pointer;
    justify-self: center;
    transition: all .3s;

    &:hover {
        color: #0097E0
    }
`