import React, { Component } from "react";
import Modal from 'react-bootstrap/Modal';
import { Button } from "react-bootstrap";
import './create-note-modal.css'
import { withRouter } from "react-router-dom";




class CreateNoteModal extends Component {

    inputValuesOnChange(e) {
        // console.log(e.target.value)
        // let { inputValues } = this.props.state
        console.log(this.props.state.inputValues)

        this.setState({
            inputValues: {
                ...this.props.state.inputValues,
                [e.target.name]: e.target.value
            }
        })
    }



    addNote = (e) => {
        e.preventDefault();
        let { notes, inputValues } = this.props.state
        let addNewTodo = { title: inputValues.title, description: inputValues.description, isImportantNote: inputValues.isImportantNote, isEditDescription: false, isEditTitle: false, }

        console.log(inputValues.title, inputValues.description,)

        if (inputValues.title === "" || inputValues.description === "") {
            alert("Please enter value")
            return;
        }
        else {
            this.setState({
                notes: [...notes, addNewTodo],
                inputValues: {
                    title: "",
                    description: "",
                    isImportantNote: false
                },
            })
            console.log(notes)
        }
        this.closeModal()
    }


    isImportantNoteBox = (e) => {
        let isChecked = e.target.checked;
        console.log(isChecked)


        this.setState({
            inputValues: { ...this.props.state.inputValues, isImportantNote: isChecked }
        })
    }


    closeModal = () => {
        let { isModalShow } = this.props.state
        this.props.state.isModalShow = false
        this.setState({
            isModalShow: isModalShow
        })
    }

    render() {
        console.log(this.props.state)
        return (
            <div>
                <Modal show={this.props.state.isModalShow} >
                    <Modal.Header>
                        <Modal.Title>Create Note</Modal.Title>
                        <button className="modal_close_btn" onClick={this.closeModal}>x</button>
                    </Modal.Header>
                    <Modal.Body>
                        <br />
                        <input className="note_title_field" maxLength={50} name="title" defaultValue={this.props.state.inputValues.title} onChange={(e) => this.inputValuesOnChange(e)} placeholder="Note title" type="text" />
                        <input className="note_descrip_field" name="description" defaultValue={this.props.state.inputValues.description} onChange={(e) => this.inputValuesOnChange(e)} placeholder="Note description" type="text" />
                        <input className="is_import_checkbox" type="checkbox" onChange={(e) => this.isImportantNoteBox(e)} /><span className="is_Important">Is Important note</span>
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
        )
    }
}
export default withRouter(CreateNoteModal);