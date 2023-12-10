import { Fragment } from 'react';
import imageIngreso from '../../assets/images/ingresos.png';
import imageGasto from '../../assets/images/gastos.png';
import '../../../src/assets/css/principal.css';

import { Container, Card, Row, Col, Image } from 'react-bootstrap';

export default function Principal() {
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
                            <Container className='buttonPpal ingreso'>
                                <Image src={ imageIngreso } fluid width={300} height={300} border='0' />
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
        </Fragment>
    );
}