import axios from 'axios'

const url = true ? 'https://backend-damat.herokuapp.com/' : 'http://10.2.133.47:3333'

const api = axios.create({
  baseURL: url,
  withCredentials: true
})

export default api