import React, { Component } from "react";
import RenderNotes from "../render_todos/render-notes";
import Modal from 'react-bootstrap/Modal';
import './add-note.css'
import { Button } from "react-bootstrap";


class AddNote extends Component {

    constructor() {
        super()
        this.state = {
            todos: [],
            inputValues: {
                title: "",
                description: ""
            },
            updatedVal: "",
            modalShow: false
        }
    }


    inputValuesOnChange(e) {
        this.setState({
            inputValues: {
                ...this.state.inputValues,
                [e.target.name]: e.target.value
            }
        })

    }



    addNote = (e) => {
        e.preventDefault();
        let { todos, newTodo, inputValues } = this.state
        let addNewTodo = { title: inputValues.title, description: inputValues.description, isEdit: false }


        if (inputValues.title === "" || inputValues.description === "") {
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
        this.closeModal()
    }


    hello = () => {
        let { todos } = this.state
        todos = JSON.parse(localStorage.getItem('todos'))
        if (!todos) {
            todos = []
        }
    }

    componentDidMount = () => {
        this.setState({
            todos: JSON.parse(localStorage.getItem('todos')),
        })
    }
    componentDidUpdate = () => {
        localStorage.setItem('todos', JSON.stringify(this.state.todos))
    }


    openModal = () => {
        this.setState({
            modalShow: true
        })
        console.log(this.state)
    }

    closeModal = () => {
        this.setState({
            modalShow: false
        })
        console.log(this.state)
    }

    render() {
        return (
            <div>
                {/* <div className="add_todo_div">
                    <form onSubmit={(e) => this.addTodo(e)}>
                        <input className="add_todo_field" value={this.state.newTodo} onChange={(e) => this.todoValueOnChange(e)} placeholder="Enter task" type="text" />
                        <button className="add_task_btn" onClick={this.addTodo}>Add Note</button>
                    </form>
                </div> */}


                {/* Modal */}
                <div>
                    <Modal show={this.state.modalShow} >
                        <Modal.Header>
                            <Modal.Title>Add Note</Modal.Title>
                            <button onClick={this.closeModal}>X</button>
                        </Modal.Header>
                        <Modal.Body>
                            <br />
                            <input name="title" value={this.state.newTodo} onChange={(e) => this.inputValuesOnChange(e)} placeholder="Enter note title" type="text" />
                            <br />
                            <br />
                            <input name="description" value={this.state.newTodo} onChange={(e) => this.inputValuesOnChange(e)} placeholder="Enter note description" type="text" />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.closeModal}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={this.addNote}>
                                Save Note
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>


                <br />
                <button onClick={this.openModal}>Create Note</button>
                <br />
                <br />

                <RenderNotes state={this.state} />
            </div >
        )
    }
}

export default AddNote;