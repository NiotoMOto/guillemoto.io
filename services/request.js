import axios from 'axios'
import config from '../config'
import Cookies from 'js-cookie'

const apiUrl = config.apiUrl

const getRequestConfig = () => {
  const token = Cookies.get('user-token')
  return {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
}

export default {
  get: (url, params) => {
    return axios.get(`${apiUrl}${url}`, getRequestConfig())
  },
  post: (url, params) => {
    return axios.post(`${apiUrl}${url}`, params, getRequestConfig())
  }
}
