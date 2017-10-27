
export const state = () => ({
  user: {
    firstName: '',
    lastName: '',
    userName: '',
    password: ''
  }
})

export const mutations = {
  updateUserField (state, { field, value }) {
    state.user[field] = value
  }
}
