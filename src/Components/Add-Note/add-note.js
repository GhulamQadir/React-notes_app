import React, { Component } from "react";
import RenderNotes from "../render_todos/render-notes";
import Modal from 'react-bootstrap/Modal';
import './add-note.css'
import { Button } from "react-bootstrap";


class AddNote extends Component {

    constructor() {
        super()
        this.state = {
            notes: [],
            inputValues: {
                title: "",
                description: ""
            },
            updatedInputValues: {
                updatedTitle: "",
                updatedDescription: ""
            },
            modalShow: false,
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
        let { notes, inputValues } = this.state
        let addNewTodo = { title: inputValues.title, description: inputValues.description, isEditTitle: false, }

        if (inputValues.title === "" || inputValues.description === "") {
            alert("Please enter value")
            return;
        }
        else {
            this.setState({
                notes: [...notes, addNewTodo],
            })
        }
        this.closeModal()
    }

    componentDidMount = () => {
        this.setState({
            notes: JSON.parse(localStorage.getItem('notes')),
        })
    }
    componentDidUpdate = () => {
        localStorage.setItem('notes', JSON.stringify(this.state.notes ?? []))
    }


    openModal = () => {
        this.setState({
            modalShow: true
        })
    }

    closeModal = () => {
        this.setState({
            modalShow: false
        })
    }

    render() {
        return (
            <div>
                <h1 style={{ textAlign: "center" }}>Notes App</h1>


                {/* Modal */}
                <div>
                    <Modal show={this.state.modalShow} >
                        <Modal.Header>
                            <Modal.Title>Add Note</Modal.Title>
                            <button onClick={this.closeModal}>X</button>
                        </Modal.Header>
                        <Modal.Body>
                            <br />
                            <input name="title" value={this.state.inputValues.title} onChange={(e) => this.inputValuesOnChange(e)} placeholder="Enter note title" type="text" />
                            <br />
                            <br />
                            <input name="description" value={this.state.inputValues.description} onChange={(e) => this.inputValuesOnChange(e)} placeholder="Enter note description" type="text" />
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
