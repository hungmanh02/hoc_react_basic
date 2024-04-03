import React, { Component } from "react";
import AddTodo from "./AddTodo";
import { ToastContainer, toast } from "react-toastify";

class ListTodo extends Component {
  state = {
    listTodos: [
      {
        id: "todo1",
        title: "Doing homework",
      },
      {
        id: "todo2",
        title: "Making videos",
      },
      {
        id: "todo3",
        title: "Fixing bugs",
      },
    ],
  };
  addNewTodo = (todo) => {
    let currentListTodo = this.state.listTodos;
    currentListTodo.push(todo);
    this.setState({
      // listTodos: [...this.state.listTodos, todo],
      listTodos: currentListTodo,
    });
    toast.success("Wow so easy!");
  };
  render() {
    let { listTodos } = this.state;
    return (
      <>
        <div className="list-todo-container">
          <AddTodo addNewTodo={this.addNewTodo} />
          <div className="list-todo">
            {listTodos &&
              listTodos.length > 0 &&
              listTodos.map((item, index) => {
                return (
                  <div className="todo-child" key={item.id}>
                    <span>
                      {index + 1} - {item.title}
                    </span>
                    <button className="edit">Edit</button>
                    <button>Delete</button>
                  </div>
                );
              })}
          </div>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <ToastContainer />
      </>
    );
  }
}

export default ListTodo;
