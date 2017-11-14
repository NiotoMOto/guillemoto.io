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
  }
})

export const mutations = {
  updateField (state, { form, field, value }) {
    state[form][field] = value
  }
}

export const actions = {

}
