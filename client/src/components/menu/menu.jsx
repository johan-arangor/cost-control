import { Fragment } from "react";
import {Container, Navbar, Nav, NavDropdown} from 'react-bootstrap';
import global from '../../globals';

export default function Menu(){
    console.log('global.token',global.token);
    return(
        <Fragment>
            <Navbar expand="lg" className="bg-body-tertiary fixed-top">
                <Container>
                    <Navbar.Brand href={global.token ? "/principal" : "/login"}>Control de Gastos</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/principal">Inicio</Nav.Link>
                            <Nav.Link href="#link">Indicadores</Nav.Link>
                            <NavDropdown title="Ajustes" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Categorías</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Fragment>
    );
}