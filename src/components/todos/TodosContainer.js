import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";

class ToDoContainer extends React.Component {
  renderTodos = () => {
    return this.props.todos.map((todo, id) => {
      return <Todo key={id} text={todo} />;
    });
  };

  render() {
    return <div>{this.renderTodos()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps)(ToDoContainer);
