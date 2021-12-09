import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Table from 'react-bootstrap/Table'
import Accordion from 'react-bootstrap/Accordion'
import { useParams } from 'react-router-dom';
import { fetchOneSubstance } from '../http/substanceAPI';
const Substance = () => {
    const [substance, setSubstance] = useState({tbldrugs:[]})
    const {id} = useParams()
    useEffect(() =>{
        fetchOneSubstance(id).then(data=>setSubstance(data))
    },[])
    return (
        <Container className="mt-4">
            <Row>
            <div class="justify-content-center"><h2>{substance.name}</h2>
            <h5>Фармакотерапевтична група:  {substance.pharmagroup} </h5>
            <h5>Визначена добова доза (DDD):  {substance.dailydose} </h5>

            </div>
            </Row>
         <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
            <Accordion.Header>Основна фармакотерапевтична дія:</Accordion.Header> <Accordion.Body>{substance.pharmaaction}</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
            <Accordion.Header>Показання для застосування ЛЗ:</Accordion.Header> <Accordion.Body>{substance.foruse}</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
            <Accordion.Header>Спосіб застосування та дози ЛЗ:</Accordion.Header> <Accordion.Body>{substance.methodofapply}</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
            <Accordion.Header>Побічна дія та ускладнення при застосуванні ЛЗ:</Accordion.Header> <Accordion.Body>{substance.sideeffect}</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
            <Accordion.Header>Протипоказання до застосування ЛЗ:</Accordion.Header> <Accordion.Body>{substance.contraindications}</Accordion.Body>
        </Accordion.Item>
        </Accordion>
            <h3 className="mt-4">Препарати</h3>
           <Table striped bordered hover>
           <thead>
                <tr>
                <th>#</th>
                <th>Назва препарату</th>
                <th>Країна</th>
                <th>Форма</th>
                <th>Дозування</th>
                <th>Кількість</th>
                <th>Ціна</th>
                </tr>
            </thead>
                <tbody>
                  {substance.tbldrugs.map((tbldrugs)=>
                   <tr>
                   <td>{tbldrugs.id}</td>
                   <td>{tbldrugs.name}</td>
                   <td>{tbldrugs.country}</td>
                   <td>{tbldrugs.form}</td>
                   <td>{tbldrugs.dose}</td>
                   <td>{tbldrugs.count}</td>
                   <td>{tbldrugs.price}</td>

                 </tr>
                    )
                  }</tbody>
           </Table>
        </Container>
    )
}

export default Substance;