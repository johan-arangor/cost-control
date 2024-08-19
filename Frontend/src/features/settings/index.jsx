import { Fragment } from 'react';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';

export default function Settings() {
    return(
        <Fragment>
            <Container>
                <Card border='0' className='m-5 shadow-lg'>
                    <Row className='justify-content-center'>
                        <Col md={4} sm={12} className='justify-content-center'>
                            <Button href='/categories' variant="primary" size="lg">Gestionar Categorias</Button>
                        </Col>
                        <Col md={4} sm={12} className='justify-content-center'>
                            <Button href='/entitys' variant="primary" size="lg">Gestionar Entidades</Button>
                        </Col>
                        <Col md={4} sm={12} className='justify-content-center'>
                            <Button href='#' variant="primary" size="lg">Gestionar Etiquetas</Button>
                        </Col>
                    </Row>
                    <Row className='justify-content-center'>
                        <Col md={4} sm={12} className='justify-content-center'>
                            <Button href='#' variant="primary" size="lg">Gestionar Gastos Fijos</Button>
                        </Col>
                        <Col md={4} sm={12} className='justify-content-center'>
                            <Button href='#' variant="primary" size="lg">Gestionar Ingresos</Button>
                        </Col>
                        <Col md={4} sm={12} className='justify-content-center'>
                            <Button href='#' variant="primary" size="lg">Gestionar Gastos</Button>
                        </Col>
                    </Row>
                </Card>
            </Container>
        </Fragment>
    );
}