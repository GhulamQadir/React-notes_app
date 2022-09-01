import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import RenderNotes from "../render_todos/render-notes";
import './add-note.css'


class AddNote extends Component {

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
                <div className="add_todo_div">
                    <form onSubmit={(e) => this.addTodo(e)}>
                        <input className="add_todo_field" value={this.state.newTodo} onChange={(e) => this.todoValueOnChange(e)} placeholder="Enter task" type="text" />
                        <button className="add_task_btn" onClick={this.addTodo}>Add Note</button>
                    </form>
                </div>
                <br />
                <br />

                <RenderNotes state={this.state} />
            </div >
        )
    }
}

export default withRouter(AddNote);