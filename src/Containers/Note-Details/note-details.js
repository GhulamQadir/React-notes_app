import React, { Component } from "react";
import { withRouter } from "react-router-dom";






class NoteDetails extends Component {
    render() {
        console.log(this.props.location.state)
        let note = this.props.location.state.note
        return (
            <div style={{ textAlign: "center" }}>
                <h1>Note details</h1>
                <br />
                <br />
                <br />
                <h4>{note.title}</h4>
                <p>{note.description}</p>
                <button onClick={() => {
                    let { notes } = this.props.location.state
                    notes[this.props.location.state.index].title = "updatedVal"
                    notes[this.props.location.state.index].isEdit = false
                    this.setState({
                        todos: notes,
                    })
                }}>Edit Note</button>
            </div>
        )
    }
}
export default withRouter(NoteDetails);