import axios from 'axios'
import { toast } from 'react-toastify'
import { authentication } from './API'
import { BASE_URL, TIME_OUT } from './Variables.api'

let request = true

const API = axios.create()
API.defaults.timeout = TIME_OUT
API.defaults.baseURL = BASE_URL

API.interceptors.request.use((request) => {
  console.log(request)

  return request
},
  (error) => {
    console.log(error)
    return Promise.reject(error)
  })

API.interceptors.response.use((response) => {
  console.log(response)
  return response
},
  error => {
    return Promise.reject(error)
  })

export default API