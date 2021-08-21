import React, { Component } from 'react';
import styled from 'styled-components'
import Header from '../components/Header';
import Footer from '../components/Footer';

class Sistema extends Component {

    render() {
        return (
            <DivPrincipal>
                <DivHeader>
                    <Header />
                </DivHeader>
                <DivFooter>
                    <Footer />
                </DivFooter>
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
const DivHeader = styled.header`
    grid-area:header;
`
const DivFooter = styled.footer`
    grid-area:footer;
`
export default Sistema;