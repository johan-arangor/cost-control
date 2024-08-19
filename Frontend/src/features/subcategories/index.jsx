import { Fragment, useEffect, useState } from "react";
import { DataTableCategories } from "./dataTable";
import { Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import axios from 'axios';
import { url } from "../../globals";
import { useParams } from 'react-router-dom';
import { randomGenerate } from "../../components/random/randomIndex";

export default function SubCategoryPrincipal(){
    const [getData, setData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        getAllSubCategory();
    }, []);

    const getAllSubCategory = async () => {
        await axios.get(url + `/subCategories/getAllSubCategories/${id}`)
            .then((result) => {
                setData(result.data.data);
            })
            .catch((error) => {
                Swal.fire(error.response.data.message);
            });
    }

    const newSubCategory = async () => {
        const { value: newSubCategory } = await Swal.fire({
            title: "Nueva Categoría",
            input: "text",
            inputLabel: "Se creará una nueva categoría",
            inputPlaceholder: "Ingrese el nombre de la categoría",
            confirmButtonText: "Crear"
          });
          if (newSubCategory) {
            await axios.post(url + "/subCategories/newSubCategory",  {name: newSubCategory, id_category: id})
                .then((result) => {
                    Swal.fire(result.data.message)
                    .then(() => { getAllSubCategory() });
                })
                .catch((error) => {
                    Swal.fire(error.response.data.message);
                });
          }
    }
    
    const editSubCategory = async (data) => {
        const { value: newSubCategory } = await Swal.fire({
            title: "Editar Categoría",
            input: "text",
            inputLabel: `Se editará la categoría (${data.name})`,
            inputPlaceholder: "Ingrese el nombre de la categoría",
            confirmButtonText: "Editar"
          });
          if (newSubCategory) {
            await axios.put(url + "/subCategories/editSubCategory",  {id: data.id,name: newSubCategory})
                .then((result) => {
                    Swal.fire(result.data.message)
                    .then(() => { getAllSubCategory() });
                })
                .catch((error) => {
                    Swal.fire(error.response.data.message);
                });
          }
    }
    
    const removeSubCategory = async (data) => {
        let randomCreate = randomGenerate();

        const { value: randomSend } = await Swal.fire({
            title: "Eliminar Categoría",
            input: "text",
            html: `Ingrese el siguiente código <strong>${randomCreate}</strong> para eliminar la categoría (${data.name})`,
            inputPlaceholder: `Ingrese el código`,
            confirmButtonText: "Eliminar",
            confirmButtonColor: "red"
          });

          if (randomSend) {
            if (randomSend === randomCreate) {
            await axios.delete(url + "/subCategories/deleteSubCategory", {data: {id: data.id, name: data.name}})
                .then((result) => {
                    Swal.fire(result.data.message)
                    .then(() => { getAllSubCategory() });
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
            Gestión de Sub Categorias
            <Button variant="primary" onClick={newSubCategory}>Agregar Sub Categoria</Button>
            <DataTableCategories
                data={getData}
                edit={editSubCategory}
                remove={removeSubCategory}
            />
        </Fragment>
    )
}