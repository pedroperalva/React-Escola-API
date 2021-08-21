import React, { Component } from 'react';
import styled from 'styled-components'

class Cadastro extends Component {

    render() { 
        return(
            <DivPrincipal>
                <h1>"Hi!"</h1>
            </DivPrincipal>
        )
    }
}
const DivPrincipal = styled.div`
    display: grid;
    grid-gap: 20px;
    gap: 20px;
    width: 100%;
    min-height: 100vh;
    grid-template-areas:
        "header"
        "content"
        "footer ";
    grid-template-columns: 1fr;
    grid-template-rows: 60px auto 40px;
    grid-auto-rows: 150px;
`
export default Cadastro;