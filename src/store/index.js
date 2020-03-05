import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todosTest: { id: 1, title: "this is the title of the getter property" },
    items: { name: "item name" },
    author: { firstName: "Christopher", lastName: "Maisch" },
    isStateActive: true,

    company: {
      uuid: "ljk;dfjkls",
      name: "M and M Electronics",
      creationDate: new Date(),
      last: {
        modification: {
          date: new Date(),
          uuid: undefined
        }
      }
    },

    clients: [
      {
        uuid: "asdfasdfgfhkjkjjj",
        name: "De Beers",
        contact: {
          name: "Fred Kasper",
          tell: "021 8722218",
          email: "fred.kasper@debeersgroup.com"
        },
        projects: ["placeholders..."],
        files: ["1adfadfadfasd"]
      },
      {
        uuid: "1sdfasdfgfhkjkjjj",
        name: "John Thompson",
        contact: {
          name: "Grant Losch",
          tell: "021 8722218",
          email: "grant.losch@jt.com"
        },
        projects: ["placeholders..."],
        files: ["1adfadfadfasd"]
      }
    ],

    projects: [
      {
        uuid: "hgjhj",
        client: "1sdfasdfgfhkjkjjj",
        name: "First Pump Project",
        projectContact: {
          name: "Default Client Name",
          tell: "021 1112223",
          email: "someone@project.com"
        },
        details: "Theses are the details of the project which you can edit",
        tags: ["pumps", "motors", "logix5000", "sql"],
        files: ["1adfadfadfasd", "sadfadfadfasd"],
        completed: true
      },
      {
        uuid: "hgjhk",
        client: "asdfasdfgfhkjkjjj",
        name: "Second Pump Project",
        projectContact: {
          name: "Default Client Name",
          tell: "021 1112223",
          email: "someone@project.com"
        },
        details: "Theses are the details of the project which you can edit",
        tags: ["pumps", "motors", "logix5000", "sql"],
        files: ["1adfadfadfasd", "sadfadfadfasd"],
        completed: false
      },
      {
        uuid: "hgjhh",
        client: "1sdfasdfgfhkjkjjj",
        name: "New Pump Project",
        projectContact: {
          name: "Default Client Name",
          tell: "021 1112223",
          email: "someone@project.com"
        },
        details: "Theses are the details of the project which you can edit",
        tags: ["pumps", "motors", "logix5000", "sql"],
        files: ["1adfadfadfasd", "sadfadfadfasd"],
        completed: true
      }
    ],

    files: [
      {
        uuid: "1adfadfadfasd",
        type: "pdf",
        last: {
          modification: {
            date: new Date(),
            uuid: undefined
          }
        },
        name: "New Pump Station SOW",
        checksum: "#123199wdkflasdfjkal"
      },
      {
        uuid: "sadfadfadfasd",
        type: "pdf",
        last: {
          modification: {
            date: new Date(),
            uuid: undefined
          }
        },
        name: "New Pump Station SOW",
        checksum: "#123199wdkflasdfjkal"
      },
      {
        uuid: "sadfadfadfasd",
        type: "pdf",
        last: {
          modification: {
            date: new Date(),
            uuid: "asdfasdfsad"
          }
        },
        name: "New Pump Station SOW",
        checksum: "#123199wdkflasdfjkal"
      },
      {
        uuid: "sadfadfadfasd",
        type: "pdf",
        last: {
          modification: {
            date: new Date(),
            uuid: undefined
          }
        },
        name: "New Pump Station SOW",
        checksum: "#123199wdkflasdfjkal"
      }
    ],

    users: [
      {
        // note that array is o(n) lookup, refactor into hashmap
        uuid: "asdfasdfsad",
        firstName: "John",
        middleName: "Jake",
        lastName: "Doe",
        last: {
          login: new Date(),
          modification: {
            date: new Date(),
            uuid: undefined
          }
        }
      },
      {
        uuid: "asdfasdfaad",
        firstName: "Bill",
        middleName: "Jake",
        lastName: "Doe",
        last: {
          login: new Date(),
          modification: {
            date: new Date(),
            uuid: "DSFADSFSDFAD"
          }
        }
      },
      {
        uuid: "1sdfasdfsad",
        firstName: "Mike",
        middleName: "Jake",
        lastName: "Smith",
        last: {
          login: new Date(),
          modification: {
            date: new Date(),
            uuid: undefined
          }
        }
      },
      {
        uuid: "2sdfasdfsad",
        firstName: "Allen",
        middleName: "Jake",
        lastName: "Mack",
        last: {
          login: new Date(),
          modification: {
            date: new Date(),
            uuid: "DSFADSFSDFAD"
          }
        }
      },
      {
        uuid: "3sdfasdfsad",
        firstName: "Billy",
        middleName: "Jake",
        lastName: "Bob",
        last: {
          login: new Date(),
          modification: {
            date: new Date(),
            uuid: "DSFADSFSDFAD"
          }
        }
      }
    ]
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
    allItems: state => state.items,
    allClients: state => state.clients,
    allProjects: state => state.projects,
    allUsers: state => state.users,
    allFiles: state => state.files,
    company: state => state.company
  }
});
