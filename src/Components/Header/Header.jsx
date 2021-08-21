import React from 'react'
import Menu from '../Menu/Menu'
import {Cabecalho} from './styles'

export default class Header extends React.Component {
    render(){
        return(
            <Cabecalho>
                <Menu />     
            </Cabecalho>
        )
    }

}
