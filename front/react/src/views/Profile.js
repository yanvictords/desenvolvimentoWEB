import React from 'react'
import './Profile.css'
import { getUserState, showUsersAction } from '../actions'

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {},
      users: null
    }
  }
  componentDidMount() {
    // atribuindo o escopo para uso em funções internas
    this.setState({
      user: getUserState()
    })
    if (!this.state.user) {
      window.location.replace('/')
      return
    }
    let scope = this
    showUsersAction().then(users => {
      console.log(users)
      scope.setState({
        users: users
      })
    })
  }
  // displayUsers() {
  //   for (const user of this.state.users) {
  //     console.log(user);
  //     return (<p>{user.name}</p>)
  //   }
  // }
  render() {
    return (
      <div className="col-sm-12">
        <div className="card hovercard">
          <div className="card-background">
              <img className="card-bkimg" alt="Imagem de Usuário" src={this.state.user.pictureUrl}/>
          </div>
          <div className="useravatar">
              <img alt="" src={this.state.user.pictureUrl}/>
          </div>
          <div className="card-info"> 
            <span className="card-title">{this.state.user.name}</span>
          </div>
        </div>
        <p className="text-center">{this.state.user.email}</p>
        <div className="profile-list">
          <h4 className="text-center">Usuários Cadastrados:</h4>
          {/* precisamos colocar a condição inicial, para caso não haja usuários */}
          {this.state.users ? this.state.users.map((user, key) => {
            return (
              <div key={key}>
                <div className="row">
                  <div className="col-sm-2">
                    <img src={user.pictureUrl} alt="" width="100" height="100"/>
                  </div>
                  <div className="col-sm-10">
                    <p><b>{user.name}</b></p>
                    <p>{user.email}</p>
                  </div>
                </div>
                <div className="separator"/>
              </div>
            )
          }) : null }
        </div>
      </div>
    )
  }
}
export default Profile