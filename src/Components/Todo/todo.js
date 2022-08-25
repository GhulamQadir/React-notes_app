import React, { Component } from "react";
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

    editTodoValue = (e) => {
        this.setState({
            updatedVal: e.target.value
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


    deleteTodo(index) {
        let { todos } = this.state
        todos.splice(index, 1)
        this.setState({
            todos: todos
        })
    }

    editTodoInput(index) {
        let { todos, updatedVal } = this.state

        todos.map((value, index) => {
            return (todos[index].isEdit = false)

        })


        // todos[].isEdit = false
        todos[index].isEdit = true
        updatedVal = todos[index].title
        this.setState({
            todos: todos,
            updatedVal: updatedVal
        })
    }
    cancel = (index) => {
        let { todos } = this.state

        todos[index].isEdit = false

        this.setState({
            todos: todos
        })
    }



    updateTodo = (index) => {
        let { todos, updatedVal } = this.state
        todos[index].title = updatedVal
        todos[index].isEdit = false
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
                <div>{this.state.todos.map((todo, index) => {
                    return <div key={index}>
                        <li style={{ fontWeight: "bold" }}>{index + 1}: </li>
                        <li>{todo.isEdit ? <input onChange={(e) => this.editTodoValue(e)} defaultValue={todo.title} type="text" /> : todo.title}</li>
                        <li>{todo.isEdit ? <button onClick={() => this.updateTodo(index)}>Update</button> : <button onClick={() => this.editTodoInput(index)}>Edit</button>}</li>
                        <li>{todo.isEdit ? <button onClick={() => this.cancel(index)}>Cancel</button> : <button onClick={() => this.deleteTodo(index)}>Delete</button>}</li>
                        <br />
                        <br />
                    </div>
                })}</div>
            </div>
        )
    }
}

export default AddTodo;