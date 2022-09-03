import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import './note-details.css'





class NoteDetails extends Component {
    componentDidUpdate = () => {
        localStorage.setItem('todos', JSON.stringify(this.props.location.state.notes))
        console.log(this.props.location.state)
    }

    // componentDidMount = () => {
    //     let { notes } = this.props.location.state

    //     this.setState({
    //         todos: notes
    //     })
    // }


    editTodoValueOnchange = (e) => {
        let { updatedInputValues } = this.props.location.state

        updatedInputValues.updatedTitle = e.target.value
        this.setState({
            updatedInputValues: {
                updatedTitle: updatedInputValues.updateTitle
            }
        })
        console.log("updated=>>", updatedInputValues.updatedTitle)

    }

    editTitle = () => {
        let { note, notes, index, updatedInputValues } = this.props.location.state
        notes[index].isEditTitle = true
        updatedInputValues.updatedTitle = notes[index].title
        this.setState({
            notes: notes,
        })
    }

    updateTitle = () => {
        let { note, notes, index, updatedInputValues } = this.props.location.state
        note.title = updatedInputValues.updatedTitle
        note.isEditTitle = false
        this.setState({
            notes: notes,
        })
        console.log("notes", notes)
    }



    editDescripValueOnchange = (e) => {
        let { updatedInputValues } = this.props.location.state

        updatedInputValues.updatedDescription = e.target.value
        this.setState({
            updatedInputValues: {
                updatedDescription: updatedInputValues.updatedDescription
            }
        })
        console.log("updated=>>", updatedInputValues.updatedDescription)

    }

    editDescription = () => {
        let { note, notes, index, updatedInputValues } = this.props.location.state
        notes[index].isEditDescription = true
        updatedInputValues.updatedDescription = notes[index].description
        this.setState({
            notes: notes,
        })
        console.log(notes)
    }

    updateDescription = () => {
        let { note, notes, index, updatedInputValues } = this.props.location.state
        note.description = updatedInputValues.updatedDescription
        note.isEditDescription = false
        this.setState({
            notes: notes,
        })
        console.log(this.props.location.state)
    }

    deleteNote = () => {
        let { notes, index } = this.props.location.state
        this.props.location.state.notes.splice(index, 1)
        this.setState({
            notes: this.props.location.state.notes
        })
        console.log("dhsjh", notes)
        localStorage.setItem('todos', JSON.stringify(this.props.location.state.notes))

        // this.props.history.push('/')
    }


    render() {
        let note = this.props.location.state.note
        console.log(this.props.location.state)

        return (
            <div className="mainDiv" >
                <h1>Note details</h1>
                <br />
                <br />
                <br />
                <div className="editDivs">
                    <button onClick={this.deleteNote}>Delete</button>
                    <br />
                    <br />
                    <li>{note.isEditTitle ? <input type="text" onChange={(e) => this.editTodoValueOnchange(e)} defaultValue={note.title} /> : <h4>{note.title}</h4>}</li>
                    <li>{note.isEditTitle ? <button onClick={this.updateTitle} className="editBtns">Update title</button> : <button onClick={this.editTitle} className="editBtns">edit title</button>}</li>
                </div>
                <br />
                <br />
                <div className="editDivs">
                    <li>{note.isEditDescription ? <input type="text" onChange={(e) => this.editDescripValueOnchange(e)} defaultValue={note.description} /> : <h4>{note.description}</h4>}</li>
                    <li>{note.isEditDescription ? <button onClick={this.updateDescription} className="editBtns">Update Description</button> : <button onClick={this.editDescription} className="editBtns">edit description</button>}</li>
                </div>

            </div>
        )
    }
}
export default withRouter(NoteDetails);