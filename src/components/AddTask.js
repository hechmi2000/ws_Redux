import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { add_task } from '../JS/Actions';


const AddTask = () => {
    const dispatch = useDispatch()
    const [title,setTitle] = useState("")
    const [description,setDescription] = useState("")

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const handleAdd = () =>{
    let newTask = {id: Math.random(),title,description, isDone: false}
    dispatch(add_task(newTask))
    handleClose()
  }
  return (
    <div style={{display:"flex",justifyContent:"center"}}>
        <Button variant="outline_success" onClick={handleShow}>
        Add New Task
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Label>
            Title
            </Form.Label> 
            <Form.Control onChange={(e)=> setTitle(e.target.value)} placeholder='Enter the title here ...' />

          <Form.Label>
            Description
            </Form.Label> 
            <Form.Control onChange={(e)=> setTitle(e.target.value)} placeholder='Enter the description here ...'/>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={()=> handleAdd()}>Add</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddTask