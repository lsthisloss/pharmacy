import React, { useContext, useState } from 'react'
import Modal from "react-bootstrap/Modal";
import {Form, Button, Dropdown} from "react-bootstrap";
    import { Context } from '../..';
const CreateDrug = ({show, onHide}) =>{
    const {substance} = useContext(Context)


    return (        
    <Modal
        show={show}
        onHide={onHide}
        centered
    >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Додати препарат(и)
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                    <Dropdown className="mt-3" >
                        <Dropdown.Toggle>Виберіть категорію</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {substance.types.map(type =>
                                <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>)}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mt-3">
                        <Dropdown.Toggle>Виберіть субстанцію</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {substance.substances.map(substanceq =>
                                <Dropdown.Item key={substanceq.id}>{substanceq.name}</Dropdown.Item>)}
                        </Dropdown.Menu>
                    </Dropdown>
                            <Button variant={"outline-primary"}>Додати препарат</Button>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
            <Button variant="outline-success" onClick={onHide}>Добавить</Button>
        </Modal.Footer>
    </Modal>
    )
}

export default CreateDrug;