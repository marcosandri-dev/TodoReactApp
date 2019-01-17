//This file is used to make http calls with axios.
import axios from "axios";

const http = {
  apiURL: "http://localhost:8000",

  test() {
    return "test";
  },

  getTodos(listname) {
    return axios
      .get(`${this.apiURL}/api/todos/${listname}`)
      .then(res => res.data)
      .catch(err => {
        console.log(err);
      });
  },

  addTodo(value, listname) {
    return axios
      .post(`${this.apiURL}/api/todos`, {
        name: value,
        user: listname
      })
      .then(res => res.data)
      .catch(function(err) {
        console.log(err);
      });
  },

  deleteTodo(_ids) {
    return axios
      .delete(`${this.apiURL}/api/todos`, { data: { ids: _ids } })
      .then(res => res.data)
      .catch(function(err) {
        console.log(err);
      });
  },

  editTodo(_id, params) {
    //Nice solution! Reusing the same function to edit 2 different params
    return axios
      .put(`${this.apiURL}/api/todos/${_id}`, params)
      .then(res => res.data)
      .catch(function(err) {
        console.log(err);
      });
  }
};

export default http;
