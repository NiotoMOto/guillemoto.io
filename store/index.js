import axios from 'axios'
import _ from 'lodash'

import config from '../config'

export const state = () => ({
  user: null,
  locales: ['en', 'fr'],
  local: 'en',
  annonces: [],
  annonce: null
})

export const mutations = {
  SET_USER: function (state, user) {
    state.user = user
  },
  SET_LANG (state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  },
  SET_ANNONCES (state, annonces) {
    state.annonces = annonces
  },
  SET_ANNONCE (state, annonce) {
    state.annonce = annonce
  }
}

export const actions = {
  // nuxtServerInit is called by Nuxt.js before server-rendering every page
  async nuxtServerInit ({ commit }, { req }) {

  },
  async login ({ state, commit }) {
    try {
      const { data } = await axios.post('/api/login', state.forms.login)
      commit('SET_USER', data)
      commit('ui/toggleModal', { modal: 'login' })
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
  },

  async search ({ commit }) {
    const query = _.pickBy(this.state.forms.search, (i) => (i && i.length > 0))
    const { data } = await axios.get(
      `${config.apiUrl}/annonces?query=${JSON.stringify(query)}&populate=[{"path":"creator"}, {"path":"sport"}]`)
    commit('SET_ANNONCES', data)
  },

  async createAnnonce ({ commit, router }) {
    const { data } = await axios.post(
      `${config.apiUrl}/annonces`,
      {
        ...this.state.forms.annonce,
        creator: this.state.user._id
      }
    )
    commit('SET_ANNONCE', data)
    commit('forms/reset', { form: 'annonce' })
    return data
  }

}
