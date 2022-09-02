import React, { Component } from "react";
import { withRouter } from "react-router-dom";






class NoteDetails extends Component {
    render() {
        return (
            <div style={{ textAlign: "center" }}>
                <h1>Note details</h1>
                <br />
                <br />
                <br />
                <h4>{this.props.location.state.note.title}</h4>
                <p>{this.props.location.state.note.description}</p>
            </div>
        )
    }
}
export default withRouter(NoteDetails);