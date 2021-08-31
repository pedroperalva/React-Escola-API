import React, { Component } from 'react';
import styled from 'styled-components';

class ValidationError extends Component{

    render(){
        return(      
            <Content>
                {Object.keys(this.props.error).map((key)=>{
                           return <ErrorMessage key={key}>{this.props.error[key]}</ErrorMessage>
                        })}
            </Content>
        )
    }
}
const Content = styled.div`
    color:red;
    margin-bottom: 10px;
    text-align: start;
`
const ErrorMessage = styled.li`
    margin:10px;
    font-size: 1.4rem;
`
export default ValidationError;