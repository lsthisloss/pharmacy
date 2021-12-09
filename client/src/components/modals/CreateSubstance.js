import React, { useState } from 'react'
import Modal from "react-bootstrap/Modal";
import {Form, Button} from "react-bootstrap";

const CreateSubstance = ({show, onHide}) =>{
    return (        
    <Modal
        show={show}
        onHide={onHide}
        centered
    >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Додати категорію
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Control
                    placeholder={"Назва"}
                />
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
            <Button variant="outline-success" onClick={onHide}>Добавить</Button>
        </Modal.Footer>
    </Modal>
    )
}

export default CreateSubstance;