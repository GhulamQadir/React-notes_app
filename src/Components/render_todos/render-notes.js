import { withRouter } from "react-router-dom";
import './render-notes.css'




// class RenderNotes extends Component {




//     deleteTodo(index) {
//         let { notes } = this.props.state
//         notes.splice(index, 1)
//         this.setState({
//             notes: notes
//         })
//     }



//     viewNote = (index) => {
//         let { updatedInputValues, notes } = this.props.state
//         let note = this.props.state.notes[index]
//         this.props.history.push({ pathname: '/note-details', state: { note: note, index: index, notes: notes, updatedInputValues: updatedInputValues } })
//     }


//     componentDidUpdate = () => {
//         localStorage.setItem('notes', JSON.stringify(this.props.state.notes))
//     }


//     render() {
//         return (
//             <div>
//                 <h1>Render Notes component</h1>

//                 <div className="notes_main_div">
//                     {this.props.state.notes && this.props.state.notes.map((note, index) => {
//                         return <div className="note_div" key={index}>
//                             {note.isImportantNote ? <p>Important !</p> : ""}
//                             <br />
//                             <br />
//                             <li style={{ fontWeight: "bold" }}>{index + 1}: </li>
//                             <li>{note.isEdit ? <input onChange={(e) => this.editTodoValueOnchange(e)} defaultValue={note.title} type="text" /> : note.title}</li>
//                             <li>{note.isEdit ? <button onClick={() => this.cancel(index)}>Cancel</button> : <button onClick={() => this.deleteTodo(index)}>Delete</button>}</li>

//                             <br />
//                             <br />
//                             <button onClick={() => this.viewNote(index)}>View Note</button>
//                         </div>
//                     })}
//                 </div>
//             </div >
//         )
//     }
// }

// export default withRouter(RenderNotes);


function RenderNotes(props) {
    let { notes, deleteNoteee } = props

    // const deleteNote = (index) => {
    //     notes.splice(index, 1)
    //     console.log(notes)
    //     notes = notes
    //     localStorage.setItem('notes', JSON.stringify(notes ?? []))
    // }


    return (
        <div>
            <h1>Render Notes component</h1>

            <div className="notes_main_div">
                {props.notes && props.notes.map((note, index) => {
                    return <div className="note_div" key={index}>
                        {note.isImportantNote ? <p>Important !</p> : ""}
                        <br />
                        <br />
                        <h2>{note.title}</h2>

                        <button onClick={() => deleteNoteee(index)}>Delete</button>

                        {/* <li style={{ fontWeight: "bold" }}>{index + 1}: </li>
                        <li>{note.isEdit ? <input onChange={(e) => this.editTodoValueOnchange(e)} defaultValue={note.title} type="text" /> : note.title}</li>
                        <li>{note.isEdit ? <button onClick={() => this.cancel(index)}>Cancel</button> : <button onClick={() => this.deleteTodo(index)}>Delete</button>}</li> */}

                        <br />
                        <br />
                        {/* <button onClick={() => this.viewNote(index)}>View Note</button> */}
                    </div>
                })}
            </div>
        </div >
    )
}

export default RenderNotes