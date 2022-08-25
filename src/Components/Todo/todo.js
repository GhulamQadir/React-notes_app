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
        console.log(todos)
    }

    editTodo(index) {
        let { todos } = this.state
        // console.log(index)
        // let updateVal = prompt("Enter updated value", todos[index].title)

        // todos[index].title = updateVal
        // this.setState({
        //     todos: todos
        // })

        todos[index].isEdit = true
        this.setState({
            todo: todos
        })
        console.log(todos)
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
                        <li>{todo.isEdit === true ? <input type="text" /> : todo.title}</li>
                        <li><button onClick={() => this.editTodo(index)}>{todo.isEdit === true ? "Update" : "Edit"}</button></li>
                        <li><button onClick={() => this.deleteTodo(index)}>{todo.isEdit === true ? "Cancel" : "Delete"}</button></li>
                        <br />
                        <br />
                    </div>
                })}</div>
            </div>
        )
    }
}

export default AddTodo;