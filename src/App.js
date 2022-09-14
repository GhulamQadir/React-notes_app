import React, { useState, useEffect } from "react";
import CreateNoteModal from "./Components/Create-Note-Modal/create-note-modal";
import RenderNotes from "./Components/render_todos/render-notes";
import './App.css';
import AppRouter from './config/Router';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  let [notes, setNotes] = useState([])


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

  const deleteNote = (index) => {
    notes.splice(index, 1)
    setNotes(notes)
    localStorage.setItem('notes', JSON.stringify(notes ?? []))
  }



  useEffect(() => {
    setNotes(JSON.parse(localStorage.getItem('notes')))

  }, [])

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  })
  return (
    <div>
      {/* <AppRouter /> */}

      <div className="notes_app_heading">
        <p>Sticky Notes App</p>
      </div>
      {/* AddNote Button  */}
      <button className="add_note_btn" onClick={openModal}><div className="add_note_btn_text">+</div></button>



      <CreateNoteModal notes={notes} hideModal={closeModal} showModal={isModalShow} updatedValues={updatedInputValues} />


      <RenderNotes deleteNoteee={deleteNote} notes={notes} updatedInputValues={updatedInputValues} />


    </div>
  );
}

export default App;
