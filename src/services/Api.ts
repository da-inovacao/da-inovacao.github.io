import axios from 'axios'

const url = 'https://siteda-c1a68.rj.r.appspot.com/'

const api = axios.create({
  baseURL: url,
  withCredentials: true
})

export default api