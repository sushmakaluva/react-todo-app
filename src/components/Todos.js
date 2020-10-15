import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
    render() {
        return (
            this.props.todos.map((todo, index) => (
                <TodoItem key={index} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo} />
            )
            )
        );
    }

}

Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;