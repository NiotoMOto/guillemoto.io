import axios from 'axios'

export const state = () => ({
  sports: []
})

export const mutations = {
  SET_SPORTS (state, sports) {
    state.sports = sports
  }
}

export const actions = {
  async setSports ({ commit }) {
    const { sports } = await axios.get('sports')
    commit('static/SET_SPORTS', sports)
  }
}
