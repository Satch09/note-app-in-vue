<template>
  <div id="app">
    <Header v-bind:phrase="phrase" v-bind:name="name" />
    <AddTodo v-on:add-todo="addTodo" />
    <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo" />
  </div>
</template>

<script>
import Header from "./components/layout/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

export default {
  name: "App",
  components: {
    Header,
    Todos,
    AddTodo
  },
  data() {
    return {
      todos: [
        {
          id: 1,
          title: "Todo One",
          isImportant: false,
          isComplete: false
        },
        {
          id: 2,
          title: "Todo Two",
          isImportant: false,
          isComplete: false
        },
        {
          id: 3,
          title: "Todo Three",
          isImportant: false,
          isComplete: false
        }
      ],
      phrase: "Welcome Todo Menu!",
      name: "Christopher Maisch"
    };
  },
  methods: {
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => {
        return todo.id !== id;
      });
    },
    addTodo(newTodo) {
      this.todos = [...this.todos, newTodo];
    }
  },
  created: () => {
    console.log("App Running");
  }
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}
.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}
.btn:hover {
  background: #666;
}
</style>
