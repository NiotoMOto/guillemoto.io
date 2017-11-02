
export const state = () => ({
  register: {
    password: '',
    email: ''
  },
  login: {
    email: '',
    password: ''
  }
})

export const mutations = {
  updateField (state, { form, field, value }) {
    state[form][field] = value
  }
}
