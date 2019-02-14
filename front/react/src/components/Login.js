import React, { Component } from 'react';
import './Login.css'
import { loginAction } from '../actions'

// Função de envio de formulário
class Login extends Component {
  // construtor do componente
  constructor(props) {
    super(props);
    // definição do nosso estado do componente
    this.state = {
      email: '',
      password: ''
    }
  }
  async sendUser(event) {
    event.preventDefault();
    const userObject = {
      email: event.target.email.value,
      password: event.target.password.value
    }
    const loginUser = await loginAction(userObject)
    if (loginUser) {
      window.location.replace('/perfil')
    }
  }
  // componentDidMount - faz parte do ciclo de vida do componente.
  // É chamado toda vez depois que o componente for montado
  componentDidMount() {
  }
  // é chamado toda vez que o componente é atualizado  
  componentDidUpdate(prevProp) {
  }

  // Renderização do componente
  render() {
    const {
      msg
    } = this.props;
    return (
      <div className="hello">
        <p>
          {/* mensagem passada pelas props */}
          {msg}
        </p>
        <div className="row">
          <div className="col-xs-12 col-sm-3"></div>
          <div className="col-xs-12 col-sm-6 login">
            <form 
            onSubmit={this.sendUser}
            className="form-group">
              <label>E-mail: *</label>
              <input
                name="email"
                type="email"
                className="form-control"/>
              <label>Senha: *</label>
              <input
              name="password"
              type="password"
              className="form-control"/>
              <button type="submit" className="btn btn-primary">Login</button>
            </form>
            <p>
              Não tem uma conta? Cadastre-se
              <a href="/cadastro"> Aqui</a>
            </p>
          </div>
          <div className="col-xs-12 col-sm-3"></div>
        </div>
      </div>
    );
  }
}

export default Login;