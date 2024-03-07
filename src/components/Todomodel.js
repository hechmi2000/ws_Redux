import React, { useState } from 'react'
import {Button, Card, Container, Modal } from 'react-bootstrap'
import {MdDone } from "react-icons/md"
import {CiEdit } from "react-icons/ci"
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { delete_task, done_task } from '../JS/Actions';
const Todomodel = ({task}) => {
  const dispatch =useDispatch()

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div style={{margin: "7px 0px" , width:"600px"}}>
        <Container>
         <Card style={{backgroundColor: task.isDone? "lightGreen" :"#FFCCCB"}}>
      <Card.Header>{task.title}</Card.Header>      
      
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
            {task.description}
        </Card.Text>
        <div style={{display:"flex", justifyContent:"space-around", fontSize:"25px", cursor:'pointer'}}>
        <MdDone onClick={()=> dispatch(done_task(task.id))} />
        <CiEdit />
        <MdDelete onClick={handleShow} />
        </div>
      </Card.Body>
    </Card>
    </Container>

    



   {/*Model delete*/}
   <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete {task.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          are you sure you want to delete this task
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={()=> dispatch(delete_task(task.id))} variant="danger">Delete</Button>
        </Modal.Footer>
      </Modal> 
    </div>
  )
}

export default Todomodel