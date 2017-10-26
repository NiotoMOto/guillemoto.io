import Cookies from 'js-cookie'

export default {
  login: (token) => {
    Cookies.set('user-token', token)
  }
}
