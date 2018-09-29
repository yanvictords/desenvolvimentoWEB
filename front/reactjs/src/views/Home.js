import React, { Component } from 'react';
import './Home.css';
import Logo from '../assets/logo.svg'
import Login from '../components/Login'

class Home extends Component {
  render() {
    return (
      <div className="home" id="default">
        <h1>Aula de Desenvolvimento WEB</h1>
        <h2>Loja virtual</h2>
        <img alt="React logo" src={Logo} width="200" height="200"/>
        <Login msg="Bem-vindo(a) à nossa Loja Virtual"/>
      </div>
    );
  }
}

export default Home;
