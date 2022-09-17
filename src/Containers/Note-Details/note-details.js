import { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import './note-details.css'





// class NoteDetails extends Component {
//     componentDidUpdate = () => {
//         let { notes } = this.props.location.state
//         localStorage.setItem('notes', JSON.stringify(notes))
//     }

//     componentDidMount = () => {
//         let { note, notes } = this.props.location.state

//         note.isEditTitle = false
//         note.isEditDescription = false

//         this.setState({
//             notes: notes,
//         })


//     }


//     editTodoValueOnchange = (e) => {
//         let { updatedInputValues } = this.props.location.state

//         updatedInputValues.updatedTitle = e.target.value
//         this.setState({
//             updatedInputValues: {
//                 updatedTitle: updatedInputValues.updateTitle
//             }
//         })
//     }

//     editTitle = () => {
//         let { notes, index, updatedInputValues } = this.props.location.state
//         notes[index].isEditTitle = true
//         updatedInputValues.updatedTitle = notes[index].title
//         this.setState({
//             notes: notes,
//         })
//     }

//     updateTitle = () => {
//         let { note, notes, index, updatedInputValues } = this.props.location.state
//         note.title = updatedInputValues.updatedTitle
//         note.isEditTitle = false
//         this.setState({
//             notes: notes,
//         })
//     }



//     editDescripValueOnchange = (e) => {
//         let { updatedInputValues } = this.props.location.state

//         updatedInputValues.updatedDescription = e.target.value
//         this.setState({
//             updatedInputValues: {
//                 updatedDescription: updatedInputValues.updatedDescription
//             }
//         })
//     }

//     editDescription = () => {
//         let { notes, index, updatedInputValues } = this.props.location.state
//         notes[index].isEditDescription = true
//         updatedInputValues.updatedDescription = notes[index].description
//         this.setState({
//             notes: notes,
//         })
//     }

//     updateDescription = () => {
//         let { note, notes, updatedInputValues } = this.props.location.state
//         note.description = updatedInputValues.updatedDescription
//         note.isEditDescription = false
//         this.setState({
//             notes: notes,
//         })
//     }

//     deleteNote = () => {
//         let { notes, index } = this.props.location.state
//         notes.splice(index, 1)
//         this.props.history.replace('/')
//         localStorage.setItem('todos', JSON.stringify(this.props.location.state.notes))

//     }


//     render() {
//         let note = this.props.location.state.note
//         return (
//             <div className="mainDiv" >
//                 <h1>Note details</h1>
//                 <br />
//                 <br />
//                 <br />
//                 <div className="editDivs">
//                     <button onClick={this.deleteNote}>Delete</button>
//                     <br />
//                     <br />
//                     <li>{note.isEditTitle ? <input type="text" onChange={(e) => this.editTodoValueOnchange(e)} defaultValue={note.title} /> : <h4>{note.title}</h4>}</li>
//                     <li>{note.isEditTitle ? <button onClick={this.updateTitle} className="editBtns">Update title</button> : <button onClick={this.editTitle} className="editBtns">edit title</button>}</li>
//                 </div>
//                 <br />
//                 <br />
//                 <div className="editDivs">
//                     <li>{note.isEditDescription ? <input type="text" onChange={(e) => this.editDescripValueOnchange(e)} defaultValue={note.description} /> : <h4>{note.description}</h4>}</li>
//                     <li>{note.isEditDescription ? <button onClick={this.updateDescription} className="editBtns">Update Description</button> : <button onClick={this.editDescription} className="editBtns">edit description</button>}</li>
//                 </div>

//             </div>
//         )
//     }
// }
// export default withRouter(NoteDetails);





function NoteDetails(props) {

    let { notes, index, note } = props.location.state

    let [updatedNoteValues, setUpdatedInputValues] = useState({
        updatedTitle: note.title,
        updatedDescription: ""
    })

    console.log(note)


    const openTitleInput = () => {
        let notesArray = notes
        notesArray[index].isEditTitle = true
        notes = notesArray

        console.log(notes)
        // localStorage.setItem('notes', JSON.stringify(notes))
    }



    const editTitleValueOnchange = (e) => {
        let updatedValues = updatedNoteValues
        updatedValues.updatedTitle = e.target.value

        setUpdatedInputValues(updatedValues)


        console.log(updatedNoteValues)
    }

    const updateTitle = () => {

        let myNotes = [...notes]

        myNotes[index].title = updatedNoteValues.updatedTitle
        myNotes[index].isEditTitle = false
        console.log(myNotes)
        notes = myNotes
        localStorage.setItem('notes', JSON.stringify(notes))
    }




    // useEffect(() => 
    //     localStorage.setItem('notes', JSON.stringify(props.location.state.notes))

    // }, [props.location.state.notes])
    return (

        <div className="mainDiv" >
            <h1>Note details</h1>
            <br />
            <br />
            <br />
            <div className="editDivs">
                {/* <button onClick={deleteNote}>Delete</button> */}
                <br />
                <br />
                <li>{notes[index].isEditTitle ? <input type="text" onChange={(e) => editTitleValueOnchange(e)} defaultValue={note.title} /> : <h4>{note.title}</h4>}</li>
                <li>{notes[index].isEditTitle ? <button onClick={updateTitle} className="editBtns">Update title</button> : <button onClick={openTitleInput} className="editBtns">edit title</button>}</li>
            </div>
            <br />
            <br />
            <div className="editDivs">
                {/* <li>{note.isEditDescription ? <input type="text" onChange={(e) => editDescripValueOnchange(e)} defaultValue={note.description} /> : <h4>{note.description}</h4>}</li> */}
                {/* <li>{note.isEditDescription ? <button onClick={this.updateDescription} className="editBtns">Update Description</button> : <button onClick={this.editDescription} className="editBtns">edit description</button>}</li> */}
            </div>

        </div>
    )
}
export default withRouter(NoteDetails)