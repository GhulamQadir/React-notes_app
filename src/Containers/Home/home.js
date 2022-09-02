import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import AddNote from "../../Components/Add-Note/add-note";






class Home extends Component {
    render() {
        return (
            <div>
                <AddNote />
            </div>
        )
    }
}
export default withRouter(Home);