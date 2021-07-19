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
  // const token = localStorage.getItem('token')
  // if (token) {
  //   request.headers.token = `${token}`
  // }
  return request
},
  (error) => {
    console.log(error)
    // toast.error(<p dir='ltr'> &emsp;<strong> ✔ </strong> &ensp;{error.message} </p>, {
    //   position: "bottom-left",
    //   autoClose: 5000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   limit: 1

    // });
    return Promise.reject(error)
  })

API.interceptors.response.use((response) => {
  console.log(response)
  return response
},
// , async (error) => {
//   console.log(error.response)
//   if (error.response.data == 'Token Expired!') {
//     const refreshToken = localStorage.getItem('refreshToken')
//     const originalRequest = error.config
//     console.log('original request ===> ', originalRequest, error.config.url, error.config.url !== '/auth/login')
//     if (refreshToken && request) {
//       request = false
//       try {
//         await authentication()
//         return new Promise(async (resolve, reject) => {
//           await axios.request(originalRequest)
//             .then(res => {

//               resolve(res)

//             })
//             .catch(err => {
//               if (error.response.data == 'Token Expired!'){
//                 console.log(localStorage.getItem('token') )
//                 window.location.href='http://localhost:3000/panel/login'
//               }
//               reject(err)
              
//             })
//             .finally(() => {
//               request = true
//             })
//         })
//       }
    //   catch (error) {
    //     console.log(error.message)
    //   }

    // }

  // }


  // toast.error(<p dir='ltr'> &emsp;<strong> ✔ </strong> &ensp;{error.message} </p>, {
  //   position: "bottom-left",
  //   autoClose: 5000,
  //   hideProgressBar: false,
  //   closeOnClick: true,
  //   pauseOnHover: true,
  //   draggable: true,
  //   progress: undefined,
  //   limit: 1
  // });
  error=>{
    return Promise.reject(error)

  })
// })

export default API