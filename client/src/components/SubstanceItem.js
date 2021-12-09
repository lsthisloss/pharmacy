import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import { Card, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { SUBSTANCE_ROUTE } from '../utils/consts';

const SubstanceItem = ({substance}) => {
    const history = useHistory()
console.log(history)
    return (
                <Col md={3} className={"mt-2"} onClick={() => history.push(SUBSTANCE_ROUTE + '/' + substance.id)}>
                    <Card border="primary" style={{maxHeight: '420px', cursor:'pointer', textOverflow: 'ellipsis'}}>
                    <Card.Header style={{ textOverflow: 'ellipsis'}}>{substance.pharmagroup.slice(0,100) }</Card.Header>
                    <Card.Body style={{textOverflow: 'ellipsis'}}>
                    <Card.Title >{substance.name.slice(0,25)}</Card.Title>
                     <Card.Text style={{ textOverflow: 'ellipsis'}}>
                       
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
    );
};

export default SubstanceItem;
