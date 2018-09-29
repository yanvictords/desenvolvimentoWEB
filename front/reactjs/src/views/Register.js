import React from 'react';
import { createUserAction } from '../actions'

class Register extends React.Component {
  async sendUser(event) {
    event.preventDefault();
    // Aqui, todos os nossos atributos virão por meio de um evento disparado pelo formulário
    // todos os valores dos campos estão da seguinte forma:
    // event - o evento disparado
    // event.target - todos os dados do formuário
    // event.target.<campo>.value - o valor de um determinado campo

    const password = event.target.password.value
    const confirmPassword = event.target.confirmPassword.value
    // Validador que verifica se a senha e a senha confirmada são iguais
    if (password === confirmPassword) {
      const userObject = {
        email: event.target.email.value,
        password: password,
        name: event.target.name.value,
        pictureUrl: event.target.pictureUrl.value,
        age: event.target.age.value,
        gender: event.target.gender.value
      }
      const createdUser = await createUserAction(userObject)
      if (createdUser) {
        alert('Usuário registrado com sucesso')
        window.location.replace('/')
      }
    } else {
      alert('Você precisa confirmar corretamente a sua senha')
    }
  }
  render() {
    return (
      <div>
        <h1>
          Registro de Usuários
        </h1>
        {/*
        -> DICA RÁPIDA:
          Divisão de colunas no bootstrap.
          - Aqui, em telas tamanho 'lg' (large), e 'md' (medium),
          a div irá ocupar 6 das 12 colunas da tela, ou seja, metade da tela.
          - Já as telas em tamanho 'sm' (small), e 'xs' (extra small),
          a div irá ocupar 12 das 12 colunas da tela, ou seja, a tela inteira.
        */}
       <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <form onSubmit={this.sendUser} className="form-group">
            <label>Nome:</label>
            <input name="name" type="text" className="form-control"/>
            <label>E-mail: *</label>
            <input name="email" type="email" className="form-control"/>
            <label>Senha: *</label>
            <input name="password" type="password" className="form-control"/>
            <label>Confirmar Senha: *</label>
            <input name="confirmPassword" type="password" className="form-control"/>
            <label>Idade:</label>
            <input name="age" type="number" className="form-control"/>
            <label>Gênero: *</label>
            <select name="gender" className="custom-select custom-select mb-3">
              <option value="Male">Masculino</option>
              <option value="Female">Feminino</option>
              <option value="Other">Outro</option>
            </select>
            <label>Url de Imagem de Perfil:</label>
            <input name="pictureUrl" type="text" className="form-control"/>
            <br/>
            <button type="submit" className="btn btn-primary">Cadastro</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;