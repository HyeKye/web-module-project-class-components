import React from 'react';

export default class Todo extends React.Component {

  handleClick = () => {
    this.props.handleToggle(this.props.todo.id);
  }

  render(){ //why this.props instead of props only? why the need for this?
    return (<li onClick={this.handleClick}>{this.props.todo.name} {this.props.todo.completed ? <span>- completed</span> : <span></span>}</li>);
  };
}
