import axios from 'axios'
import { toast } from 'react-toastify'
import { BASE_URL, TIME_OUT } from './Variables.api'

const API = axios.create()
API.defaults.timeout = TIME_OUT
API.defaults.baseURL = BASE_URL

API.interceptors.request.use((request) => {
  console.log(request)
  return request
},
  (error) => {
    console.log(error)
    toast.error(<p dir='ltr'> &emsp;<strong> ✔ </strong> &ensp;{error.message} </p>, {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      limit: 1

    });
    return Promise.reject(error)
  })

API.interceptors.response.use((response) => {
  console.log(response)
  return response
}, (error) => {
  console.log(error)
  toast.error(<p dir='ltr'> &emsp;<strong> ✔ </strong> &ensp;{error.message} </p>, {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    limit: 1
  });
  return Promise.reject(error)
})

export default API