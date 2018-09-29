import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './views/Home';
import Register from './views/Register'
import Profile from './views/Profile'
import Error404 from './views/Error404'
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom'

ReactDOM.render(
  <div>
    <BrowserRouter>
      <div>
        <div id="nav">
          <NavLink exact={true} to="/">Home</NavLink> |
          <NavLink exact={true} to="/cadastro"> Cadastro</NavLink> |
          <NavLink exact={true} to="/perfil"> Perfil</NavLink>
        </div>
        <div className="container">
          <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/cadastro" exact={true} component={Register} />
            <Route path="/perfil" exact={true} component={Profile} />
            <Route path="/" component={Error404} />
          </Switch>
        </div>
      </div>
    </ BrowserRouter>
  </div>
  , document.getElementById('root'));
registerServiceWorker();
