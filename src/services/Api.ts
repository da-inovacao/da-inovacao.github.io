import axios from 'axios'

const api = axios.create({
  baseURL: 'https://siteda-c1a68-default-rtdb.firebaseio.com'
})

export default api