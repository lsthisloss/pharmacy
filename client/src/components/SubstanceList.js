import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import { Row } from 'react-bootstrap';
import SubstanceItem from './SubstanceItem';

const SubstanceList = observer(() => {
    const {substance} = useContext(Context)
    return (
                <Row className="d-flex">
                    {substance.substances.map(substance =>
                        <SubstanceItem key={substance.id} substance={substance}/>
                        )}
                </Row>
    );
});

export default SubstanceList;
