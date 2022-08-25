import React, { Component } from "react";




class RenderTodos extends Component {
    render() {
        console.log(this.props.state.todos)
        let myProps = this.props.state
        return (
            <div>
                <h1>Render todos component</h1>

                <div>{myProps.todos.map((todo, index) => {
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

export default RenderTodos;