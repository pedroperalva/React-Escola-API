import React from 'react'
import SubMenu from './SubMenu'
import styled from 'styled-components'

const HeaderSistema = () => {

    return (
        <Cabecalho>
            <SubMenu />
        </Cabecalho>
    )
}

const Cabecalho = styled.header`
    height: 8rem;
    background-color: #001B44;
`
export default HeaderSistema;
