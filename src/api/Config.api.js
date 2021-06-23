import axios from 'axios'
import { BASE_URL, TIME_OUT } from './Variables.api'

const API=axios.create()
API.defaults.timeout=TIME_OUT 
API .defaults.baseURL=BASE_URL

export default API