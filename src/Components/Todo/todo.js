import React, { Component } from "react";
import './todo.css'


class AddTodo extends Component {

    constructor() {
        super()
        this.state = {
            todos: [],
            newTodo: ""
        }
    }

    todoValueOnChange(e) {
        this.setState({
            newTodo: e.target.value
        })
    }


    addTodo = (e) => {
        e.preventDefault();
        let { todos, newTodo } = this.state


        if (newTodo === "") {
            alert("Please enter value")
            return;
        }
        else {
            this.setState({
                todos: [...todos, newTodo],
                newTodo: ""
            })
        }
    }


    deleteTodo(e) {
        let { todos } = this.state
        todos.splice(e.index, 1)
        this.setState({
            todos: todos
        })
    }


    render() {
        return (
            <div>
                <form onSubmit={(e) => this.addTodo(e)}>
                    <input value={this.state.newTodo} onChange={(e) => this.todoValueOnChange(e)} placeholder="Add todo" type="text" />
                    <button onClick={this.addTodo}>Add Todo</button>
                </form>
                <br />
                <br />
                <div>{this.state.todos.map((value, index) => {
                    return <div key={index}>
                        <li style={{ fontWeight: "bold" }}>{index + 1}: </li>
                        <li>{value}</li>
                        <li><button>Edit</button></li>
                        <li><button onClick={(e) => this.deleteTodo({ index })}>Delete</button></li>
                        <br />
                        <br />
                    </div>
                })}</div>
            </div>
        )
    }
}

export default AddTodo;