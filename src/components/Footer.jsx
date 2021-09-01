import React, { Component } from 'react'
import styled from 'styled-components'
import { TiSocialLinkedin, TiSocialTwitter, TiSocialYoutube, TiSocialInstagram } from 'react-icons/ti'

class Footer extends Component {
    render() {
        return (
            <Rodape>
                <Icones>
                    <TiSocialInstagram size="30" color="#f1f1f1" />
                    <TiSocialYoutube size="30" color="#f1f1f1" />
                    <TiSocialTwitter size="30" color="#f1f1f1" />
                    <TiSocialLinkedin size="30" color="#f1f1f1" />
                </Icones>
                <Copy>&copy; 2021 - Resilientes T5</Copy>
            </Rodape>
        );
    }
}
const Rodape = styled.footer`
    height: 10rem;
    background-color: #111;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    margin-bottom: .5rem;
    width: 100%;
`

const Icones = styled.div`
    width: 20rem;
    display: flex;
    justify-content: space-between;
`

const Copy = styled.p`
    color: #f1f1f1;
    font-size: 1.2rem;
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
`
export default Footer;