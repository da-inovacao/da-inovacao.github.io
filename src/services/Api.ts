import axios from 'axios'

const api = axios.create({
  baseURL: 'http://10.2.134.114:3333',
  withCredentials: true
})

export default api