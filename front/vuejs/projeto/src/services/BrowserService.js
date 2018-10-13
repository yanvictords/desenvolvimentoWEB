export default {
    getToken () {
        return JSON.parse(window.localStorage.getItem('usuario'))
    },
    setToken (usuario) {
        window.localStorage.setItem('usuario', JSON.stringify(usuario))
        this.reloadPage()
    },
    clearStorage () {
        window.localStorage.removeItem('usuario')
        this.reloadPage()
    },
    reloadPage () {
        location.reload()
    }
}