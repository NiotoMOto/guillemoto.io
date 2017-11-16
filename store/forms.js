import _ from 'lodash'

export const state = () => ({
  register: {
    password: '',
    email: ''
  },
  login: {
    password: '',
    email: ''
  },
  search: {
    sport: '',
    city: '',
    date: ''
  },
  annonce: {
    city: '',
    date: '',
    sport: ''
  }
})

export const mutations = {
  updateField (state, { form, field, value }) {
    state[form][field] = value
  },
  reset (state, { form }) {
    state[form] = _.mapValues(state[form], '')
  }
}

export const actions = {

}
