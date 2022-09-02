import React, { Component } from "react";
import { withRouter } from "react-router-dom";






class NoteDetails extends Component {
    render() {
        return (
            <div style={{ textAlign: "center" }}>
                <h1>Note details</h1>
                <h3>{this.props.location.state.title}</h3>
            </div>
        )
    }
}
export default withRouter(NoteDetails);