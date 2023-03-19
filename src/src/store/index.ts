import { createStore } from 'vuex'
import examples from './examples'
import users from './users'

export default createStore({
  modules: {
    examples,
    users,
  },
})
