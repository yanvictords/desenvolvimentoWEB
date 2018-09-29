import api from '../api'
// Defniremos uma variável user que será gerenciada pelas ações,
// e armazenadas no armazenamento local do seu navegador
export const getObjState = () => {
  return JSON.parse(window.localStorage.getItem('user'))
}
const setObjState = (newObj) => {
  window.localStorage.setItem('user', JSON.stringify(newObj))
}
// ação de login. Vai se comunicar com a API, mudar o estado global, e retornar o usuário
export const loginAction = async (loginObject) => {
  try {
    let response = await api.login(loginObject)
    setObjState(response.data)
    return response.data
  } catch (error) {
    return error.response.data
  }
}
// Ação de mostrar os usuários. Note que ele vai fazer uma requisição na API e vai apenas retornar o valor
export const showUsersAction = async () => {
  try {
    let response = await api.getUsers()
    console.log('users', response.data)
    return response.data
  } catch (error) {
    return error.response.data
  }
}

export const createUserAction = async (userObject) => {
  try {
    console.log(userObject)
    let response = await api.createUser(userObject)
    setObjState(response.data)
    return response.data
  } catch (error) {
    return error.response.data
  }
}

  // Ação de mostrar os produtos. Note que ele vai fazer uma requisição na API e vai apenas retornar o valor
export const showProdutosAction = async () => {
  try {
    let response = await api.getProdutos()
    return response.data
  } catch (error) {
    return error.response.data
  }
}

export const createProdutoAction = async (produtoObject) => {
  try {
    let response = await api.createProduto(produtoObject)
    setObjState(response.data)
    return response.data
  } catch (error) {
    return error.response.data
  }
}

export const deleteProdutoAction = async (id) => {
  try {
    let response = await api.deleteProduto(id)
    setObjState(response.data)
    return response.data
  } catch (error) {
    return error.response.data
  }
}