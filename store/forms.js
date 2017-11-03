
export const state = () => ({
  register: {
    password: '',
    email: ''
  },
  login: {
    password: '',
    email: ''
  }
})

export const mutations = {
  updateField (state, { form, field, value }) {
    state[form][field] = value
  }
}
