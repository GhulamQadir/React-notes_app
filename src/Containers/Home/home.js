

import { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import CreateNoteModal from "../../Components/Create-Note-Modal/create-note-modal";
import RenderNotes from "../../Components/render_notes/render-notes";
import './home.css'


function Home() {
    const [isModalShow, setIsModalShow] = useState(false)
    let [notes, setNotes] = useState([])


    // const [updatedInputValues, setUpdatedInputValues] = useState({
    //     updatedTitle: "",
    //     updatedDescription: ""
    // })



    const openModal = () => {
        setIsModalShow(true)
    }

    const closeModal = () => {
        setIsModalShow(false)
    }

    const deleteNote = (index) => {
        let notesArrayUpdated = [...notes]
        notesArrayUpdated.splice(index, 1)
        setNotes(notesArrayUpdated)
        localStorage.setItem('notes', JSON.stringify(notesArrayUpdated))
    }

    // const openTitleInput = (index) => {
    //     let notesArray = [...notes]
    //     notesArray[index].isEditTitle = true
    //     setNotes(notesArray)
    // }



    useEffect(() => {
        setNotes(JSON.parse(localStorage.getItem('notes')))

    }, [])
    return (
        <div>


            <div className="notes_app_heading">
                <p>Sticky Notes App</p>
            </div>
            {/* AddNote Button  */}
            <button className="add_note_btn" onClick={openModal}><div className="add_note_btn_text">+</div></button>


            <CreateNoteModal notes={notes} hideModal={closeModal} showModal={isModalShow} />


            <RenderNotes deleteNoteee={deleteNote} notes={notes} />



        </div>
    );
}

export default withRouter(Home);
