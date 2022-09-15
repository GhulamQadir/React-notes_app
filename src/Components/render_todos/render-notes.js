import { useEffect } from 'react'
import { useHistory, withRouter } from 'react-router-dom';
import './render-notes.css'
import ImportantImg from '../../Images/imp_logo.png'




function RenderNotes(props) {
    const history = useHistory();



    const viewNote = (index) => {
        let { updatedInputValues, notes } = props
        let note = notes[index]
        history.push({ pathname: '/note-details', state: { note: note, index: index, notes: notes, updatedInputValues: updatedInputValues } })

    }



    return (
        <div>
            <div className="notes_main_div">
                {props.notes && props.notes.map((note, index) => {
                    return <div className="note" key={index}>
                        {note.isImportantNote ? <img src={ImportantImg} className="is_important_logo" /> : ""}
                        <button className="remove_note_btn" onClick={() => props.deleteNoteee(index)}>&times;</button>


                        <p className="note_title">{note.title}</p>


                        <button className="view_note_btn" onClick={() => viewNote(index)}><a>View Note</a></button>
                    </div>
                })}
            </div>
        </div >
    )
}

export default RenderNotes