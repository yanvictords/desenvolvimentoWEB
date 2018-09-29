import React from 'react'
import { Link } from 'react-router-dom'

class Error404 extends React.Component {
  render() {
    return (
      <div id="errorPage">
        <h1>ERRO 404</h1>
        <h3>A página que você procurou não existe</h3>
        <Link to='/' className="btn btn-primary">Voltar</Link>
      </div>
    )
  }
}
export default Error404