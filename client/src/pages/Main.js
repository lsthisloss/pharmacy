import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Context } from '..';
import SubstanceList from '../components/SubstanceList';
import TypeBar from '../components/TypeBar';
import Pages from '../components/Pages';

import { fetchDirections, fetchSubstances } from '../http/substanceAPI';

const Main = observer(() => {
    const {substance} = useContext(Context)
    useEffect(() => {
        fetchDirections().then(data => substance.setTypes(data))
        fetchSubstances(null, 1,10).then(data => {substance.setSubstances(data.rows)
         substance.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchSubstances(substance.selectedType.id, substance.page, 10).then(data => {
            substance.setSubstances(data.rows)
            substance.setTotalCount(data.count)
        })
    }, [substance.page, substance.selectedType])

    return (
        <Container>
            <Row className="mt-3">
                <Col md={3}>
                <TypeBar/>
                </Col>
                <Col md ={9}>
                <SubstanceList/>
                <Pages/>
                </Col>
            </Row>
            </Container>
    )
})

export default Main;