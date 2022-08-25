import React, { Component } from "react";
import RenderTodos from "../render_todos/render-todos";
import './todo.css'


class AddTodo extends Component {

    constructor() {
        super()
        this.state = {
            todos: [],
            newTodo: "",
            updatedVal: ""
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
        let addNewTodo = { title: newTodo, isEdit: false }


        if (newTodo === "") {
            alert("Please enter value")
            return;
        }
        else {
            this.setState({
                todos: [...todos, addNewTodo],
                newTodo: ""
            })
            console.log(todos)
        }
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
                <RenderTodos state={this.state} />
            </div>
        )
    }
}

export default AddTodo;