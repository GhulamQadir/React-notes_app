import { useState, useEffect, useRef } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from "react-bootstrap";
import './create-note-modal.css'





function CreateNoteModal(props) {
    let { notes, showModal, hideModal } = props;

    let [inputValues, setInputValues] = useState({
        title: "",
        description: "",
        isImportantNote: false
    })

    const inputValuesOnChange = (e) => {
        inputValues = { ...inputValues, [e.target.name]: e.target.value }

        setInputValues(inputValues)
        console.log(inputValues)
    }


    const saveNote = () => {
        let addNewNote = { title: inputValues.title, description: inputValues.description, isImportantNote: inputValues.isImportantNote, isEditDescription: false, isEditTitle: false, }


        console.log(addNewNote)
        notes.push(addNewNote)

        hideModal()
    }

    const isImportantNoteCheckBox = (e) => {
        let isChecked = e.target.checked;
        inputValues.isImportantNote = isChecked
    }


    let modalRef = useRef();

    useEffect(() => {
        let handler = (event) => {
            if (!modalRef.current.contains(event.target)) {
                hideModal()
            }
        };
        document.addEventListener("mousedown", handler)


        return () => {
            document.removeEventListener("mousedown", handler)
        }
    })




    return (
        <div ref={modalRef}>
            <Modal show={showModal}>
                <Modal.Header>
                    <Modal.Title>Create Note</Modal.Title>
                    <button className="modal_close_btn" onClick={hideModal}>&times;</button>
                </Modal.Header>
                <Modal.Body>
                    <br />
                    <input onChange={(e) => inputValuesOnChange(e)} className="note_title_field" maxLength={50} name="title" placeholder="Note title" type="text" />
                    <input onChange={(e) => inputValuesOnChange(e)} className="note_descrip_field" name="description" placeholder="Note description" type="text" />
                    <input className="is_import_checkbox" onChange={(e) => isImportantNoteCheckBox(e)} type="checkbox" /><span className="is_Important">Is Important note</span>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={hideModal} >
                        Close
                    </Button>
                    <Button variant="primary" onClick={saveNote}>
                        Save Note
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )

}
export default CreateNoteModal