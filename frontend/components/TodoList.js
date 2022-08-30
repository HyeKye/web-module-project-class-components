import React from 'react';
import Todo from './Todo';

export default class TodoList extends React.Component {
  render(){
    return (
    <ul>
      { // why cant I put this.state instead of todos?
        this.props.todos.map(todo=> {
          return (<Todo handleToggle={this.props.handleToggle} todo={todo}/>)
        })
      }
    </ul>
    )
  }
}
