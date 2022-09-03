import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import './note-details.css'





class NoteDetails extends Component {
    componentDidUpdate = () => {
        localStorage.setItem('todos', JSON.stringify(this.props.location.state.notes))
        console.log(this.props.location.state)
    }

    componentDidMount = () => {
        let { notes } = this.props.location.state

        this.setState({
            notes: JSON.parse(localStorage.getItem('todos')),
        })
    }


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
            todos: notes,
        })
    }

    updateTitle = () => {
        let { note, notes, index, updatedInputValues } = this.props.location.state
        note.title = updatedInputValues.updatedTitle
        note.isEditTitle = false
        this.setState({
            notes: notes,
        })
        console.log(this.props.location.state)
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
                    <li>{note.isEditTitle ? <input type="text" onChange={(e) => this.editTodoValueOnchange(e)} defaultValue={note.title} /> : <h4>{note.title}</h4>}</li>
                    <li>{note.isEditTitle ? <button onClick={this.updateTitle} className="editBtns">Update title</button> : <button onClick={this.editTitle} className="editBtns">edit title</button>}</li>
                </div>
                <br />
                <br />
                <div className="editDivs">
                    <p>{note.description}</p>
                    <button className="editBtns">edit description</button>
                </div>

            </div>
        )
    }
}
export default withRouter(NoteDetails);