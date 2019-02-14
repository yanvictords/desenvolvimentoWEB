import axios from 'axios'

// api - vai ser agora uma instância do Axios. Poderemos adicionar configurações especiais para ela
// tais como uma url de base, que será a que faremos nossa comunicação com o backend
let api = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    'Content-Type': 'application/json'
  }
})
export default {
  createUser (user) {
    return api.post('/user', user)
  },
  updateUser (user) {
    return api.patch('/user', user)
  },
  login (loginObject) {
    return api.post('/login', loginObject)
  },
  getUser (userId) {
    return api.get(`/user/${userId}`)
  },
  getUsers () {
    return api.get('/user')
  }
}
