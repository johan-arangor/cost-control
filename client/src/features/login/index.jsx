import { Fragment } from 'react';
import imageLogo from '../../assets/images/loginPrincipal.png';
import { Row, Col, Form, Button, Container, Image, Card } from 'react-bootstrap';

export default function Login() {
    return(
        <Fragment>
            <Container>
            <Card border='0' className='m-5 shadow-lg'>
                <Row className='justify-content-md-center'>
                    <Col lg='6' md='6' sm='12'>
                        <Container fluid style={{height: '100%'}}>
                            <Form fluid style={{height: '100%'}} className='justify-content-md-center p-5'>
                                <Form.Group className="mb-3" controlId="email">
                                    <Form.Label>Dirección email</Form.Label>
                                    <Form.Control type="user" placeholder="Ingrese email" />
                                        <Form.Text className="text-muted">
                                            Nunca compartiremos su correo electrónico con nadie más.
                                        </Form.Text>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Contraseña" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Ingresar
                                </Button>
                            </Form>
                        </Container>
                    </Col>
                    <Col lg='6' md='6' sm='12'>
                        <Container>
                            <Image src={ imageLogo } fluid />
                        </Container>
                    </Col>
                </Row>
            </Card>
            </Container>
        </Fragment>
    );
}