import axios from 'axios'
import config from '../config'

const apiUrl = config.apiUrl

export default ({ store }) => {
  const getRequestConfig = ({ store }) => {
    const token = store.state.token
    return {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  }
  return {
    get: (url, params) => {
      return axios.get(`${apiUrl}${url}`, getRequestConfig())
    },
    post: (url, params) => {
      return axios.post(`${apiUrl}${url}`, params, getRequestConfig())
    }
  }
}
