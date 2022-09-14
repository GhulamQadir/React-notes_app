import { useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import './render-notes.css'




function RenderNotes(props) {
    const history = useHistory();

    // const removeNote = (index) => {
    //     notes.splice(index, 1)
    //     console.log(notes)
    //     notes = notes
    //     localStorage.setItem('notes', JSON.stringify(notes ?? []))
    // }


    const viewNote = (index) => {
        // console.log(historyyy)
        let { updatedInputValues, notes } = props
        let note = notes[index]
        history.push({ pathname: '/note-details', state: { note: note, index: index, notes: notes, updatedInputValues: updatedInputValues } })

    }



    return (
        <div>
            <div className="notes_main_div">
                {props.notes && props.notes.map((note, index) => {
                    return <div className="note" key={index}>
                        {/* {note.isImportantNote ? <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJltZ_46zMjqNlTMb9MlfLgOEH_DO5XbzZmvMe5m5gdzlAFlHIgZtXPT-jv58kv95o4Ew&usqp=CAU' height="30" /> : ""} */}
                        <button className="remove_note_btn" onClick={() => props.deleteNoteee(index)}>&times;</button>


                        <p className="note_title">{note.title}</p>


                        <button onClick={() => viewNote(index)}><a>View Note</a></button>
                    </div>
                })}
            </div>
        </div >
    )
}

export default RenderNotes