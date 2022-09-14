// import React, { useState, useEffect } from "react";
// import { withRouter } from "react-router-dom";
// import CreateNoteModal from "../../Components/Create-Note-Modal/create-note-modal";
// import RenderNotes from "../../Components/render_todos/render-notes";
// import './home.css'





// function Home() {
//     let [notes, setNotes] = useState([])


//     const [inputValues, setInputValues] = useState({
//         title: "",
//         description: "",
//         isImportantNote: false
//     })

//     const [updatedInputValues, setUpdatedInputValues] = useState({
//         updatedTitle: "",
//         updatedDescription: ""
//     })

//     const [isModalShow, setIsModalShow] = useState(false)


//     const openModal = () => {
//         setIsModalShow(true)
//     }

//     const closeModal = () => {
//         setIsModalShow(false)
//     }


//     useEffect(() => {
//         setNotes(JSON.parse(localStorage.getItem('notes')))

//     }, [])

//     useEffect(() => {
//         localStorage.setItem('notes', JSON.stringify(notes))
//     })
//     return (
//         <div>
//             <div className="notes_app_heading">
//                 <p>Sticky Notes App</p>
//             </div>
//             {/* AddNote Button  */}
//             <button className="add_note_btn" onClick={openModal}><div className="add_note_btn_text">+</div></button>




//             <CreateNoteModal notes={notes} hideModal={closeModal} showModal={isModalShow} inputValues={inputValues} updatedValues={updatedInputValues} />


//             <RenderNotes notes={notes} updatedInputValues={updatedInputValues} />


//         </div >
//     )
// }

// export default withRouter(Home);