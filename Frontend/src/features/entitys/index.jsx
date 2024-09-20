import { Fragment, useEffect, useState } from "react";
import { DataTableEntityes } from "./dataTable";
import { Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import axios from 'axios';
import { url } from "../../globals";
import { randomGenerate } from "../../components/random/randomIndex";

export default function EntityPrincipal(){
    const [getData, setData] = useState([]);

    useEffect(() => {
        getAllEntity();
    }, []);

    const getAllEntity = async () => {
        await axios.get(url + "/entitys/getAllEntity")
            .then((result) => {
                setData(result.data.data);
            })
            .catch((error) => {
                Swal.fire(error.response.data.message);
            });
    }

    const newEntity = async () => {
        const { value: newEntity } = await Swal.fire({
            title: "Nueva Entidad",
            input: "text",
            inputLabel: "Se creará una nueva entidad",
            inputPlaceholder: "Ingrese el nombre de la entidad",
            confirmButtonText: "Crear"
          });
          if (newEntity) {
            await axios.post(url + "/entitys/newEntity",  {name: newEntity})
                .then((result) => {
                    Swal.fire(result.data.message)
                    .then(() => { getAllEntity() });
                })
                .catch((error) => {
                    Swal.fire(error.response.data.message);
                });
          }
    }
    
    const editEntity = async (data) => {
        const { value: newEntity } = await Swal.fire({
            title: "Editar Entidad",
            input: "text",
            inputLabel: `Se editará la entidad (${data.name})`,
            inputPlaceholder: "Ingrese el nombre de la entidad",
            confirmButtonText: "Editar"
          });
          if (newEntity) {
            await axios.put(url + "/entitys/editEntity",  {id: data.id,name: newEntity})
                .then((result) => {
                    Swal.fire(result.data.message)
                    .then(() => { getAllEntity() });
                })
                .catch((error) => {
                    Swal.fire(error.response.data.message);
                });
          }
    }
    
    const removeEntity = async (data) => {
        let randomCreate = randomGenerate();

        const { value: randomSend } = await Swal.fire({
            title: "Eliminar Entidad",
            input: "text",
            html: `Ingrese el siguiente código <strong>${randomCreate}</strong> para eliminar la entidad (${data.name})`,
            inputPlaceholder: `Ingrese el código`,
            confirmButtonText: "Eliminar",
            confirmButtonColor: "red"
          });

          if (randomSend) {
            if (randomSend === randomCreate) {
            await axios.delete(url + "/entitys/deleteEntity", {data: {id: data.id, name: data.name}})
                .then((result) => {
                    Swal.fire(result.data.message)
                    .then(() => { getAllEntity() });
                })
                .catch((error) => {
                    Swal.fire(error.response.data.message);
                });
            } else {
                Swal.fire({
                    title: "Error de validación",
                    text: "Los códigos no coinciden",
                    icon: "error"
                });
            }
          } else if (randomSend === "") {
            Swal.fire({
                title: "Error de validación",
                text: "Debe digitar el código para continuar",
                icon: "error"
            });
          }
    }

    return(
        <Fragment>
            Gestión de Entidades
            <Button variant="primary" onClick={newEntity}>Agregar Entidad</Button>
            <DataTableEntityes
                data={getData}
                edit={editEntity}
                remove={removeEntity}
            />
        </Fragment>
    )
}