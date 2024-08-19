import { Fragment, useEffect, useState } from "react";
import { DataTableCategories } from "./dataTable";
import { Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import axios from 'axios';
import { url } from "../../globals";
import { useNavigate  } from 'react-router-dom';
import { randomGenerate } from "../../components/random/randomIndex";

export default function CategoryPrincipal(){
    const [getData, setData] = useState([]);
    const navigate  = useNavigate ();

    useEffect(() => {
        getAllCategory();
    }, []);

    const getAllCategory = async () => {
        await axios.get(url + "/categories/getAllCategories")
            .then((result) => {
                setData(result.data.data);
            })
            .catch((error) => {
                Swal.fire(error.response.data.message);
            });
    }

    const newCategory = async () => {
        const { value: newCategory } = await Swal.fire({
            title: "Nueva Categoría",
            input: "text",
            inputLabel: "Se creará una nueva categoría",
            inputPlaceholder: "Ingrese el nombre de la categoría",
            confirmButtonText: "Crear"
          });
          if (newCategory) {
            await axios.post(url + "/categories/newCategory",  {name: newCategory})
                .then((result) => {
                    Swal.fire(result.data.message)
                    .then(() => { getAllCategory() });
                })
                .catch((error) => {
                    Swal.fire(error.response.data.message);
                });
          }
    }
    
    const editCategory = async (data) => {
        const { value: newCategory } = await Swal.fire({
            title: "Editar Categoría",
            input: "text",
            inputLabel: `Se editará la categoría (${data.name})`,
            inputPlaceholder: "Ingrese el nombre de la categoría",
            confirmButtonText: "Editar"
          });
          if (newCategory) {
            await axios.put(url + "/categories/editCategory",  {id: data.id,name: newCategory})
                .then((result) => {
                    Swal.fire(result.data.message)
                    .then(() => { getAllCategory() });
                })
                .catch((error) => {
                    Swal.fire(error.response.data.message);
                });
          }
    }
    
    const removeCategory = async (data) => {
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
            await axios.delete(url + "/categories/deleteCategory", {data: {id: data.id, name: data.name}})
                .then((result) => {
                    Swal.fire(result.data.message)
                    .then(() => { getAllCategory() });
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

    const getSubCatogories = async (data) => {
        navigate(`/subCategories/${data.id}`);
    }

    return(
        <Fragment>
            Gestión de Categorias
            <Button variant="primary" onClick={newCategory}>Agregar Categoria</Button>
            <DataTableCategories
                data={getData}
                getSubCatogories={getSubCatogories}
                edit={editCategory}
                remove={removeCategory}
            />
        </Fragment>
    )
}