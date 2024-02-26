import { Fragment, useState } from "react";
import { Modal, Button, Form } from 'react-bootstrap';
import { url } from "../../globals";
import axios from 'axios';
import moment from 'moment';
import Swal from "sweetalert2";

const initialForm = {
    value: '',
    date: moment().format("YYYY-MM-DD"),
    subCategoryId: '',
    invoiceNumber: ''
}

export default function Revenues({stateModalRevenue, getStateModal}) {
	const [getForm, setForm] = useState(initialForm);

    const getAllCategory = async () => {
        await axios.get(url + "/categories/getAllCategories")
            .then((result) => {
                setData(result.data.data);
            })
            .catch((error) => {
                Swal.fire(error.response.data.message);
            });
    }

    const handleChangeForm = (e) => {
        if (e.name === "date" && moment(e.value, "YYYY-MM-DD") > moment()) {
            Swal.fire({
                title: "Fecha errada",
                text: "La fecha ingresada es mayor a la fecha actual",
                icon: "error"
            });

            return;
        }

		setForm({
		  ...getForm,
		  [e.name]: e.value,
		});
	};

console.log('formData', getForm);
    return(
        <Fragment>
            <Modal 
                show={getStateModal}
                onHide={stateModalRevenue}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Registrar nuevo ingreso</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Valor</Form.Label>
                            <Form.Control
                                name="value"
                                size="lg" 
                                type="number" 
                                placeholder="Valor"
                                value={getForm.value}
                                onChange={(e) => handleChangeForm(e.target)}
                                required
                            >
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Fecha</Form.Label>
                            <Form.Control
                                name="date"
                                size="lg" 
                                type="date" 
                                value={getForm.date}
                                onChange={(e) => handleChangeForm(e.target)}
                                required
                            >
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Categoría</Form.Label>
                            <Form.Control
                                name="value"
                                size="lg" 
                                type="number" 
                                placeholder="Categoría"
                                value={getForm.value}
                                onChange={(e) => handleChangeForm(e.target)}
                                required
                            >
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Sub-Categoría</Form.Label>
                            <Form.Control
                                name="subCategoryId"
                                size="lg" 
                                type="number" 
                                placeholder="Sub-Categoría"
                                value={getForm.subCategoryId}
                                onChange={(e) => handleChangeForm(e.target)}
                                required
                            >
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Ingrese Número de Factura</Form.Label>
                            <Form.Control
                                name="invoiceNumber"
                                size="lg" 
                                type="text" 
                                placeholder="(OPCIONAL)"
                                value={getForm.invoiceNumber}
                                onChange={(e) => handleChangeForm(e.target)}
                                required
                            >
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={stateModalRevenue}>
                    Close
                </Button>
                <Button variant="primary" onClick={stateModalRevenue}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    );
}