import { Fragment } from "react";
import { Button } from "react-bootstrap";
import DataTableComponent from '../../components/dataTable/index';

export function DataTableCategories({ data, getSubCatogories, edit, remove }){
    const columns = [
        {
            name: 'Categorias',
            selector: row => row.name,
            sortable: true
        },
        {
            button: true,
            cell: (row) => {
                return (
                    <Button 
                        type="button"
                        className="btn btn-primary"
                        onClick={() => getSubCatogories(row)}>
                        Sub-Categorias
                    </Button>
                )
            }
        },
        {
            button: true,
            cell: (row) => {
                return (
                    <Button 
                        type="button"
                        className="btn btn-warning"
                        onClick={() => edit(row)}>
                        Editar
                    </Button>
                )
            }
        },
        {
            button: true,
            cell: (row) =>
                <Button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => remove(row)}>
                    Eliminar
                </Button>
        }
    ];

    return(
        <Fragment>
            <DataTableComponent
                columns={columns}
                data={data}
            />
        </Fragment>
    );
}