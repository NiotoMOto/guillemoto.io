
export const state = () => ({
  register: {
    username: '',
    password: ''
  },
  login: {
    username: '',
    password: ''
  }
})

export const mutations = {
  updateField (state, { form, field, value }) {
    state[form][field] = value
  }
}
