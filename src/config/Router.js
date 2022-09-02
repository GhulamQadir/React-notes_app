import React, { Component } from "react";
import { BrowserRouter as Router, Route, } from "react-router-dom";
import Home from "../Containers/Home/home";
import NoteDetails from "../Containers/Note-Details/note-details";



class AppRouter extends Component {
    render() {
        return (
            <Router>
                <Route exact path='/' component={Home} />
                <Route exact path={'/note-details'} component={NoteDetails} />
            </Router >
        )
    }
}

export default AppRouter;