import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todosTest: { id: 1, title: "this is the title of the getter property" },
    items: { name: "item name" },
    author: { firstName: "Christopher", lastName: "Maisch" }
  },
  mutations: {},
  actions: {
    async fetchTodos() {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      console.log(response.data);
    }
  },
  modules: {},
  getters: {
    allTodos: state => state.todosTest,
    allItems: state => state.items
  }
});
