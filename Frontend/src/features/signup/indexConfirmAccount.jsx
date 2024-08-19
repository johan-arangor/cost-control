import { Fragment } from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import { url } from "../../globals";
import Swal from "sweetalert2";
import axios from 'axios';

export default function ConfirmAccount() {
    const urlPathName = window.location.pathname;

    createUser(urlPathName);

    async function createUser(urlPathName){
        axios.get(`${url}/users${urlPathName}`)
            .then((response) => {
                Swal.fire(response.data.message);
            })
            .catch((error) => {
                Swal.fire(error.response.data.message);
            })
    }

    return (
        <Fragment>
            <Container>
                <Row>
                    <h1>Confirmación de cuenta</h1>
                </Row>
                <Row>
                    <h3>
                        Se ha confirmado tu cuenta, por favor ingresa    
                    </h3>
                    <Button
                        href='/login'
                    >
                        Ir a login
                    </Button>
                </Row>
            </Container>
        </Fragment>
    );
}