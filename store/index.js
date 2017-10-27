import axios from 'axios'

export const state = () => ({
  authUser: null,
  token: null
})

export const mutations = {
  SET_USER: function (state, user) {
    state.authUser = user
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  }
}

export const actions = {
  // nuxtServerInit is called by Nuxt.js before server-rendering every page
  nuxtServerInit ({ commit }, { req }) {
    if (req.session && req.session.authUser) {
      commit('SET_USER', req.session.authUser)
      commit('SET_TOKEN', req.session.token)
    }
  },
  async login ({ commit }, { userName, password }) {
    try {
      const { data } = await axios.post('/api/login', { userName, password })
      commit('SET_USER', data.user)
      commit('SET_TOKEN', data.token)
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
    const { data } = await axios.post('/api/register', { user: state.forms.user })
    commit('SET_USER', data.user)
    commit('SET_TOKEN', data.token)
  }

}
