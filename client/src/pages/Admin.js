import React, { useState } from 'react'
import { Container, Button, Row, Col, Tab, Nav } from 'react-bootstrap';
import CreateType from '../components/modals/CreateType';
import CreateSubstance from '../components/modals/CreateSubstance';
import CreateDrug from '../components/modals/CreateDrug';
import Tabs from 'react-bootstrap/Tabs'
const Admin = () => {
    const [typeVisible, setTypeVisible] = useState(false)
    const [substanceVisible, setSubstanceVisible] = useState(false)
    const [drugVisible, setDrugVisible] = useState(false)

    return (
        <Container className="d-flex flex-column">
      <h1>Адмін-панель</h1>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row>
    <Col sm={3}>
      <Nav variant="pills" className="flex-column" style={{cursor:'pointer'}} >
        <Nav.Item>
          <Nav.Link eventKey="first"  onClick={() => setTypeVisible(true)}>Додати категорію</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second" onClick={() => setSubstanceVisible(true)}>Додати субстанцію</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="third" onClick={() => setDrugVisible(true)}>Додати препарат</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
          <CreateType />
        </Tab.Pane>
        <Tab.Pane eventKey="second" >
          <CreateSubstance />
        </Tab.Pane>
        <Tab.Pane eventKey="third">
          <CreateDrug />
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
            <CreateSubstance show={substanceVisible} onHide={() => setSubstanceVisible(false)}/>
            <CreateDrug show={drugVisible} onHide={() => setDrugVisible(false)}/>

        </Container>
    )
}

export default Admin;