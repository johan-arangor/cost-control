import { Fragment, useState } from 'react';
import imageIngreso from '../../assets/images/ingresos.png';
import imageGasto from '../../assets/images/gastos.png';
import '../../../src/assets/css/principal.css';
import { Container, Card, Row, Col, Image } from 'react-bootstrap';
import Revenues from './Revenues';

export default function Principal() {
    const [getModalRevenues, setModalRevenues] = useState(false);

    const stateModalRevenue = () => {
        setModalRevenues(!getModalRevenues);
    }

    return(
        <Fragment>
            <Container>
                <Card border='0' className='m-5 shadow-lg'>
                    <Card.Header className='text-center'>
                        <h1>BIENVENIDO</h1>
                    </Card.Header>
                    <Card.Title className='text-center'>
                        <h3>Tú balance <span style={{color: 'green'}}>20.000</span></h3>
                    </Card.Title>
                    <Row className='text-center'>
                        <Col md={6} sm={12}>
                            <Container 
                                className='buttonPpal ingreso'
                                onClick={() => setModalRevenues(true)}
                            >
                                <Row>
                                    <h2>Registros</h2>
                                </Row>
                                {/* <Row>
                                    <Image src={ imageIngreso } fluid width={300} height={300} border='0' title='Registros' />
                                </Row> */}
                            </Container>
                        </Col>
                        <Col md={6} sm={12}>
                            <Container className='buttonPpal egreso'>
                                <Image src={ imageGasto } fluid width={300} height={300} border='0' />
                            </Container>
                        </Col>
                    </Row>
                </Card>
            </Container>
            {getModalRevenues && (
                <Revenues
                    stateModalRevenue={stateModalRevenue}
                    getStateModal={getModalRevenues}
                />
            )}
        </Fragment>
    );
}