import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import './render-notes.css'




class RenderNotes extends Component {

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

    viewNote = (index) => {
        let note = this.props.state.todos[index]
        // console.log(this.props.history)
        this.props.history.push({ pathname: '/note-details', state: { title: note.title } })
    }


    render() {

        return (
            <div>
                <h1>Render Notes component</h1>

                <div>
                    {this.props.state.todos.map((note, index) => {
                        return <div className="note" key={index}>
                            <li style={{ fontWeight: "bold" }}>{index + 1}: </li>
                            <li>{note.isEdit ? <input onChange={(e) => this.editTodoValueOnchange(e)} defaultValue={note.title} type="text" /> : note.title}</li>

                            <li>{note.isEdit ? <button onClick={() => this.updateTodo(index)}>Update</button> : <button onClick={() => this.editTodoInput(index)}>Edit</button>}</li>

                            <li>{note.isEdit ? <button onClick={() => this.cancel(index)}>Cancel</button> : <button onClick={() => this.deleteTodo(index)}>Delete</button>}</li>

                            <br />
                            <br />
                            <button onClick={() => this.viewNote(index)}>View Note</button>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

export default withRouter(RenderNotes);