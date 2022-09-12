import React, { Component, useState } from "react";
import RenderNotes from "../render_todos/render-notes";
import Modal from 'react-bootstrap/Modal';
import './add-note.css'
import { Button } from "react-bootstrap";
import CreateNoteModal from "../Create-Note-Modal/create-note-modal";



function AddNote() {
    const [notes, setNotes] = useState([])
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


    const updateValues = () => {
        setInputValues({ ...inputValues, title: "hello friends" })
        console.log(inputValues)
    }


    const openModal = () => {
        setIsModalShow(true)
    }

    const closeModal = () => {
        setIsModalShow(false)
    }


    const inputValuesOnChange = (e) => {
        setInputValues({ ...inputValues, [e.target.name]: e.target.value })

    }

    return (
        <div>
            <h2 className="main_heading">Sticky Notes App</h2>
            <h1>{inputValues.title}</h1>

            <button onClick={updateValues}>Update Input Values</button>
            <br />
            <button onClick={openModal}>Create Note</button>

            <CreateNoteModal notes={notes} hideModal={closeModal} showModal={isModalShow} inputValues={inputValues} setInput={setInputValues} />
            {/* <div className="create_note_div">
                <br />
                <button onClick={this.openModal}>Create Note</button>
                <br />
                <br />
            </div>
            <RenderNotes state={this.state} /> */}
        </div>
    )
}

export default AddNote;

// class AddNote extends Component {

//     constructor() {
//         super()
//         this.state = {
//             notes: [],
//             inputValues: {
//                 title: "",
//                 description: "",
//                 isImportantNote: false
//             },
//             updatedInputValues: {
//                 updatedTitle: "",
//                 updatedDescription: ""
//             },
//             isModalShow: false,
//         }
//     }


//     // inputValuesOnChange(e) {
//     //     this.setState({
//     //         inputValues: {
//     //             ...this.state.inputValues,
//     //             [e.target.name]: e.target.value
//     //         }
//     //     })

//     // }



//     // addNote = (e) => {
//     //     e.preventDefault();
//     //     let { notes, inputValues } = this.state
//     //     let addNewTodo = { title: inputValues.title, description: inputValues.description, isImportantNote: inputValues.isImportantNote, isEditDescription: false, isEditTitle: false, }

//     //     if (inputValues.title === "" || inputValues.description === "") {
//     //         alert("Please enter value")
//     //         return;
//     //     }
//     //     else {
//     //         this.setState({
//     //             notes: [...notes, addNewTodo],
//     //             inputValues: {
//     //                 title: "",
//     //                 description: "",
//     //                 isImportantNote: false
//     //             },
//     //         })
//     //         console.log(notes)
//     //     }
//     //     this.closeModal()
//     // }


//     // isImportantNoteBox = (e) => {
//     //     let isChecked = e.target.checked;
//     //     console.log(isChecked)

//     //     let { inputValues } = this.state

//     //     this.setState({
//     //         inputValues: { ...inputValues, isImportantNote: isChecked }
//     //     })
//     // }
//     componentDidMount = () => {
//         this.setState({
//             notes: JSON.parse(localStorage.getItem('notes')),
//         })
//     }
//     componentDidUpdate = () => {
//         localStorage.setItem('notes', JSON.stringify(this.state.notes ?? []))
//     }


//     openModal = () => {
//         this.setState({
//             isModalShow: true
//         })
//     }

//     // closeModal = () => {
//     //     this.setState({
//     //         isModalShow: false
//     //     })
//     // }

//     render() {
//         return (
//             <div>
//                 <h2 className="main_heading">Sticky Notes App</h2>


//                 {/* Modal */}
//                 {/* <div>
//                     <Modal show={this.state.isModalShow} >
//                         <Modal.Header>
//                             <Modal.Title>Create Note</Modal.Title>
//                             <button className="modal_close_btn" onClick={this.closeModal}>x</button>
//                         </Modal.Header>
//                         <Modal.Body>
//                             <br />
//                             <input className="note_title_field" maxLength={50} name="title" value={this.state.inputValues.title} onChange={(e) => this.inputValuesOnChange(e)} placeholder="Note title" type="text" />
//                             <input className="note_descrip_field" name="description" value={this.state.inputValues.description} onChange={(e) => this.inputValuesOnChange(e)} placeholder="Note description" type="text" />
//                             <input className="is_import_checkbox" type="checkbox" onChange={(e) => this.isImportantNoteBox(e)} /><span className="is_Important">Is Important note</span>
//                         </Modal.Body>
//                         <Modal.Footer>
//                             <Button variant="secondary" onClick={this.closeModal}>
//                                 Close
//                             </Button>
//                             <Button variant="primary" onClick={this.addNote}>
//                                 Save Note
//                             </Button>
//                         </Modal.Footer>
//                     </Modal>
//                 </div> */}


//                 <CreateNoteModal state={this.state} />
//                 <div className="create_note_div">
//                     <br />
//                     <button onClick={this.openModal}>Create Note</button>
//                     <br />
//                     <br />
//                 </div>
//                 <RenderNotes state={this.state} />
//             </div >
//         )
//     }
// }

// export default AddNote;
