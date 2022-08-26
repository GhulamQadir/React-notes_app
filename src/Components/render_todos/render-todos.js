import React, { Component } from "react";




class RenderTodos extends Component {

    editTodoValueOnchange = (e) => {
        this.props.state.updatedVal = e.target.value
        this.setState({
            updatedVal: this.props.state.updatedVal
        })
    }


    deleteTodo(index) {
        let { todos } = this.props.state
        todos.splice(index, 1)
        this.setState({
            todos: todos
        })
    }

    editTodoInput(index) {
        let { todos, updatedVal } = this.props.state

        todos[index].isEdit = true
        this.props.state.updatedVal = todos[index].title
        this.setState({
            todos: todos,
            updatedVal: updatedVal
        })
    }


    cancel = (index) => {
        let { todos } = this.props.state

        todos[index].isEdit = false

        this.setState({
            todos: todos
        })
    }

    updateTodo = (index) => {
        let { todos, updatedVal } = this.props.state

        if (updatedVal.length < 1) {
            alert("please enter some value")
            return;
        }
        else {
            todos[index].title = updatedVal
            todos[index].isEdit = false
            this.setState({
                todos: todos,
            })
        }
    }


    render() {

        return (
            <div>
                <h1>Render todos component</h1>

                <div>
                    {this.props.state.todos.map((todo, index) => {
                        return <div key={index}>
                            <li style={{ fontWeight: "bold" }}>{index + 1}: </li>
                            <li>{todo.isEdit ? <input onChange={(e) => this.editTodoValueOnchange(e)} defaultValue={todo.title} type="text" /> : todo.title}</li>

                            <li>{todo.isEdit ? <button onClick={() => this.updateTodo(index)}>Update</button> : <button onClick={() => this.editTodoInput(index)}>Edit</button>}</li>

                            <li>{todo.isEdit ? <button onClick={() => this.cancel(index)}>Cancel</button> : <button onClick={() => this.deleteTodo(index)}>Delete</button>}</li>

                            <br />
                            <br />
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

export default RenderTodos;