import React from 'react'
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
export default class App extends React.Component{
  render(){
    return(
      <>
      <Header />
      <Footer />
      </>
    )
  }
}