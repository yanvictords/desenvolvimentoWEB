import axios from 'axios'

let api = axios.create({
    baseURL: 'http://localhost:8000/',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  export default {
    async getMethod(url) {
        try {
            return await api.get(url)
        } catch (error) {
            error.response.data
        }
    },
    async postMethod (url, objeto) {
        try {
            return await api.post(url, objeto)
        } catch (error) {
            error.response.data
        }
    },
    async updateMethod (url, objeto) {
        try{
            return await api.patch(url, objeto)
        } catch (error) {
            error.response.data
        }
    },
    async deleteMethod (url) {
        try{
            return await api.delete(url)
        } catch (error) {
            error.response.data
        }
    }
  }