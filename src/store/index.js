import Vue from 'vue'
import Vuex from 'vuex'
import { INCREMENT } from './mutations.js'
Vue.use(Vuex)
const state = {
  todos: [
    {id: 1, text: '...', done: true},
    {id: 2, text: '...', done: false}
  ],
  count: 0,
  str: 'sssss',
  arr: [1, 2, 3, 4],
  obj: {
    name: 'zs',
    age: 12
  }
//   mutations: {
//     increment (state) {
//       state.count++
//     }
//   }
}
export default new Vuex.Store({
  state,
  getters: {
    soneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    getId: (state) => (id) => {
      return state.todos.find(todo => todo.id === id)
    }
  },
  mutations: {
    [INCREMENT] (state, n) {
      state.count += n.age
      // Vue.set(obj, 'newProp', 8888)
      state.obj = {...state.obj, lalal: 'lalal'}
    }
  }
})
