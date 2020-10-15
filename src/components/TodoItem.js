import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            backgroundColor: "lightgrey",
            textDecoration: this.props.todo.completed ? "line-through" : "none"
        }

    }

    render() {
        const { title, id } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p> <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />
                    {title}
                    <button onClick={this.props.delTodo.bind(this,id)} style={btnStyle}>  X</button></p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    background: "red",
    color: "#fff",
    cursor: "pointer",
    float: "right"
}

export default TodoItem
