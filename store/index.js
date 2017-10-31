import axios from 'axios'

export const state = () => ({
  user: null,
  token: null
})

export const mutations = {
  SET_USER: function (state, user) {
    state.user = user
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  }
}

export const actions = {
  // nuxtServerInit is called by Nuxt.js before server-rendering every page
  nuxtServerInit ({ commit }, { req }) {
    if (req.session && req.session.passport && req.session.passport.user) {
      commit('SET_USER', req.session.passport.user)
    }
  },
  async login ({ state, commit }) {
    try {
      const { data } = await axios.post('/api/login', state.forms.login)
      commit('SET_USER', data)
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }
  },

  async logout ({ commit }) {
    await axios.post('/api/logout')
    commit('SET_USER', null)
  },

  async register ({ state, commit }) {
    const { data } = await axios.post('/api/register', state.forms.register)
    commit('SET_USER', data)
  }

}
