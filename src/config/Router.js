import React, { Component } from "react";
import { BrowserRouter as Router, Route, } from "react-router-dom";
import AddNote from "../Components/Add-Note/add-note";



class AppRouter extends Component {
    render() {
        return (
            <Router>
                <Route exact path='/' component={AddNote} />
            </Router >
        )
    }
}

export default AppRouter;