import { Fragment } from 'react';
import { Container, Row, Button } from 'react-bootstrap';

export default function Principal() {
    return(
        <Fragment>
            <Container>
                <Row>
                    <a href='/categories'>
                        <Button variant="primary">Gestionar Categorias</Button>
                    </a>
                </Row>
                <Row>
                    <a href='/entitys'>
                        <Button variant="primary">Gestionar Entidades</Button>
                    </a>
                </Row>
                <Row>
                <a href='/'>
                        <Button variant="primary">Gestionar Etiquetas</Button>
                    </a>
                </Row>
                <Row>
                <a href='/'>
                        <Button variant="primary">Gestionar Gastos Fijos</Button>
                    </a>
                </Row>
                <Row>
                <a href='/'>
                        <Button variant="primary">Gestionar Ingresos</Button>
                    </a>
                </Row>
                <Row>
                <a href='/'>
                        <Button variant="primary">Gestionar Gastos</Button>
                    </a>
                </Row>
            </Container>
        </Fragment>
    );
}