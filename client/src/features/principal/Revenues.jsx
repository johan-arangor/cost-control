import { Fragment, useEffect, useState } from "react";
import { Modal, Button, Form } from 'react-bootstrap';
import { url } from "../../globals";
import axios from 'axios';
import moment from 'moment';
import Swal from "sweetalert2";
import Select from 'react-select';

const initialForm = {
    value: '',
    date: moment().format("YYYY-MM-DD"),
    subCategoryId: '',
    invoiceNumber: ''
}

export default function Revenues({stateModalRevenue, getStateModal}) {
	const [getForm, setForm] = useState(initialForm);
    const [getDataCategory, setDataCategory] = useState();
    const [getDataSubCategory, setDataSubCategory] = useState();
    const [getSelectedCategory, setSelectedCategory] = useState();
    const [getSelectedSubCategory, setSelectedSubCategory] = useState();

    useEffect(() => {
        getAllCategory();
    }, []);

    const getAllCategory = async () => {
        await axios.get(`${url}/categories/getAllCategories`)
        .then((result) => {
            let dataSelect = result.data.data;
            
            setDataCategory(dataSelect);  
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

    const handleChangeSelectCategory = async (e) => {
        setSelectedCategory(e);

        await axios.get(`${url}/subCategories/getAllSubCategories/${e.value}`)
        .then((result) => {
            let dataSelect = result.data.data;
            setDataSubCategory(dataSelect);
            console.log('getDataSubCategory',getDataSubCategory);
        })
        .catch((error) => {
            Swal.fire(error.response.data.message);
        });
    }

    const handleChangeSelectSubCategory = (e) => {
        setSelectedSubCategory(e);

        setForm({
            ...getForm,
            subCategoryId: e.value,
        });
    }

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
                                size="md" 
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
                                size="md" 
                                type="date" 
                                value={getForm.date}
                                onChange={(e) => handleChangeForm(e.target)}
                                required
                            >
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Categoría</Form.Label>
                            <Select
                                placeholder={"Seleccione una categoría"}
                                value={getSelectedCategory}
                                onChange={(e) => handleChangeSelectCategory(e)}
                                options={getDataCategory}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Sub-Categoría</Form.Label>
                            <Select
                                placeholder={"Seleccione una Sub-Categoría"}
                                value={getSelectedSubCategory}
                                onChange={(e) => handleChangeSelectSubCategory(e)}
                                options={getDataSubCategory}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Ingrese Número de Factura</Form.Label>
                            <Form.Control
                                name="invoiceNumber"
                                size="md" 
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
                <Button variant="success" onClick={stateModalRevenue}>
                    Guardar
                </Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    );
}