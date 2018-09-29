import axios from 'axios'

// api - vai ser agora uma instância do Axios. Poderemos adicionar configurações especiais para ela
// tais como uma url de base, que será a que faremos nossa comunicação com o backend
let api = axios.create({
  baseURL: 'http://localhost:8000/',
  headers: {
    'Content-Type': 'application/json'
  }
})
export default {
  createUser (user) {
    return api.post('/user', user)
  },
  updateUser (userId, user) {
    return api.patch(`/user/${userId}`, user)
  },
  login (loginObject) {
    return api.post('/login', loginObject)
  },
  getUser (userId) {
    return api.get(`/user/${userId}`)
  },
  getUsers () {
    return api.get('/user')
  },
  deleteUser (userId) {
    return api.delete(`/user/${userId}`)
  },
  createProduto (produto) {
    return api.post('/produto', produto)
  },
  updateProduto (userId, produto) {
    return api.patch(`/produto/${userId}`, produto)
  },
  getProduto (produtoId) {
    return api.get(`/produto/${produtoId}`)
  },
  getProdutos () {
    return api.get('/produto')
  },
  deleteProduto (produtoId) {
    return api.delete(`/produto/${produtoId}`)
  }
}
