import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
// import AddNote from "../../Components/Add-Note/add-note";
import CreateNoteModal from "../../Components/Create-Note-Modal/create-note-modal";
import RenderNotes from "../../Components/render_todos/render-notes";






function Home() {
    let [notes, setNotes] = useState([])


    const [inputValues, setInputValues] = useState({
        title: "",
        description: "",
        isImportantNote: false
    })

    const [updatedInputValues, setUpdatedInputValues] = useState({
        updatedTitle: "",
        updatedDescription: ""
    })

    const [isModalShow, setIsModalShow] = useState(false)


    const openModal = () => {
        setIsModalShow(true)
    }

    const closeModal = () => {
        setIsModalShow(false)
    }


    useEffect(() => {
        setNotes(JSON.parse(localStorage.getItem('notes')))

    }, [])

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes ?? []))
    })
    return (
        <div>
            {/* AddNote Button  */}
            <button onClick={openModal}>Create Note</button>


            <CreateNoteModal notes={notes} hideModal={closeModal} showModal={isModalShow} inputValues={inputValues} updatedValues={updatedInputValues} />


            <RenderNotes notes={notes} updatedInputValues={updatedInputValues} />


        </div>
    )
}

export default withRouter(Home);