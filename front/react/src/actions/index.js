import api from '../api'
// Defniremos uma variável user que será gerenciada pelas ações,
// e armazenadas no armazenamento local do seu navegador
export const getUserState = () => {
  return JSON.parse(window.localStorage.getItem('user'))
}
const setUserState = (newUser) => {
  window.localStorage.setItem('user', JSON.stringify(newUser))
}
// ação de login. Vai se comunicar com a API, mudar o estado global, e retornar o usuário
export const loginAction = async (loginObject) => {
  try {
    let response = await api.login(loginObject)
    setUserState(response.data)
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
    let response = await api.createUser(userObject)
    setUserState(response.data)
    return response.data
  } catch (error) {
    return error.response.data
  }
}