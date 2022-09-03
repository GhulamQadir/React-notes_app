import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import './note-details.css'





class NoteDetails extends Component {
    componentDidUpdate = () => {
        localStorage.setItem('todos', JSON.stringify(this.props.location.state.notes))
    }


    editTodoValueOnchange = (e) => {
        console.log(e.target.value)
        // this.props.location.state.updatedValues.updatedTitle = e.target.value
        // this.setState({
        //     updatedValues: {
        //         updatedTitle: this.props.location.state.updatedValues.updateTitle
        //     }
        // })
    }

    editTitle = () => {
        let { notes, index } = this.props.location.state
        notes[index].isEditTitle = true
        this.setState({
            todos: notes,
        })
    }

    // updateTitle = () => {
    //     let { notes, index, updatedInputValues } = this.props.location.state
    //     notes[index].title = updatedInputValues.updatedTitle
    //     notes[index].isEditTitle = false
    //     this.setState({
    //         todos: notes,
    //     })
    // }
    // editDescription = () => { }

    render() {
        let note = this.props.location.state.note
        console.log(this.props.location.state)

        return (
            <div style={{ textAlign: "center" }}>
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
                    <button className="editBtns" onClick={<input type="text" />}>edit description</button>
                </div>
                {/* <button onClick={() => {
                    let { notes } = this.props.location.state
                    notes[this.props.location.state.index].title = "updatedVal"
                    notes[this.props.location.state.index].isEdit = false
                    this.setState({
                        todos: notes,
                    })
                    console.log("fdsfsd", notes)
                }}>Edit Note</button> */}
            </div>
        )
    }
}
export default withRouter(NoteDetails);