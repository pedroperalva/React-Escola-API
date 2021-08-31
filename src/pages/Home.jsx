import React, { Component } from 'react';
import styled from 'styled-components'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Intro from '../components/Intro'
import Sobre from '../components/Sobre';
import Cards from '../components/Cards'

class Home extends Component {

    render() {
        return (
            <DivPrincipal>
                <DivHeader>
                    <Header />
                </DivHeader>
                <DivContent>
                    <Intro />
                    <Sobre />
                    <Cards />
                </DivContent>
                <DivFooter>
                    <Footer />
                </DivFooter>
            </DivPrincipal>

        )
    }
}
const DivPrincipal = styled.div`
    display: grid;
    width: 100%;
    min-height: 100vh;
    grid-template-areas:
        "header"
        "content"
        "footer ";
    grid-template-columns: 1fr;
    grid-template-rows: 8rem auto 70px;
    grid-auto-rows: 150px;
`
const DivHeader = styled.header`
    grid-area:header;
`
const DivContent = styled.main`
    grid-area:content;
`
const DivFooter = styled.footer`
    grid-area:footer;
`
export default Home;