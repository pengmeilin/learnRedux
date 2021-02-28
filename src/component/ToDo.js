import React, { Component} from 'react';
import Todos from './todo/todoList';
import AddTodo from './todo/addTodo';

class ToDo extends Component {
  state = {
    todos: [
      {id:1, content: '照顾我'},
      {id:2, content: '工作'},
    ]
  }
  deleteTodos = (id) => {
   this.setState({todos: this.state.todos.filter(i => i.id !== id)})
  }
  addTodo = (value) => {
    value.id = Math.random() *10;
    let todos =[...this.state.todos, value]
    this.setState({todos: todos})
  }
  render() {
    return (
    <div className="todo-app container" >
     <h1 className="center blue-text">冯幸任务列表</h1>
     <Todos todos={this.state.todos} deleteTodos={this.deleteTodos}></Todos>
     <AddTodo addTodo={this.addTodo}></AddTodo>
    </div>
  );
  }
}
  
export default ToDo;
